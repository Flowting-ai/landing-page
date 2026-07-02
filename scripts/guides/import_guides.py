#!/usr/bin/env python3
"""
Import learning-guide HTML exports (DoubleDBLUE / Dubble) into the site.
Handles BOTH curated templates: <section class="step"> (num/kicker/h2/.body)
and <div class="step"> (h3/<p>). Decodes base64 OR copies path-referenced
images. Emits src/content/guides/<slug>.json + public/guides/<slug>/ images.

Usage: python3 import_guides.py <file.html | dir> [more...]
"""
import re, sys, os, json, base64, pathlib, shutil
from html.parser import HTMLParser

REPO = pathlib.Path(__file__).resolve().parents[2]
PUB  = REPO / "public" / "guides"
CONT = REPO / "src" / "content" / "guides"
INLINE = {"b", "strong", "em", "i", "a", "code"}
VOID = {"img", "br", "hr", "meta", "input", "link", "source", "area",
        "base", "col", "embed", "param", "track", "wbr"}

def slugify(name):
    s = re.sub(r'\.html$', '', os.path.basename(name)).lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')

def classes(attrs):
    d = dict(attrs)
    return set((d.get("class") or "").split())

class GuideParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.eyebrow = self.lede = ""
        self.h1_parts = []
        self.steps = []
        self.cur = None
        self.step_depth = None
        self._img_seen = False

    def _in(self, tag=None, cls=None):
        for f in self.stack:
            if tag and f["tag"] == tag: return True
            if cls and cls in f["cls"]: return True
        return False

    def _body_context(self):
        if self.cur is None: return False
        for f in self.stack:
            if f["tag"] in ("h2", "h3", "figcaption"): return False
            if "kicker" in f["cls"] or "num" in f["cls"]: return False
        return True

    def handle_starttag(self, tag, attrs):
        cls = classes(attrs)
        # Void elements have no end tag — handle them WITHOUT pushing a frame,
        # or stack depth drifts and steps never finalize.
        if tag in VOID:
            if tag == "img" and self.cur is not None and not self._img_seen:
                self.cur["_imgsrc"] = dict(attrs).get("src", "")
                self._img_seen = True
            return
        self.stack.append({"tag": tag, "cls": cls})
        if "step" in cls and self.cur is None:
            self.cur = {"num": "", "kicker": "", "title": "", "body": "",
                        "caption": "", "_imgsrc": None}
            self.step_depth = len(self.stack)
            self._img_seen = False
            return
        if self.cur is not None and tag in INLINE and self._body_context():
            a = dict(attrs)
            if tag == "a" and a.get("href"):
                self.cur["body"] += f'<a href="{a["href"]}">'
            else:
                self.cur["body"] += f"<{tag}>"

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID and self.stack:
            self.stack.pop()

    def handle_data(self, data):
        if not data.strip(): return
        if self.cur is None:
            if self._in(cls="eyebrow"): self.eyebrow += data
            elif self._in(cls="lede"):  self.lede += data
            elif self._in(tag="h1"):    self.h1_parts.append((data, self._in(tag="em")))
            return
        if self._in(tag="h2") or self._in(tag="h3"): self.cur["title"] += data
        elif self._in(cls="kicker"): self.cur["kicker"] += data
        elif self._in(cls="num"):    self.cur["num"] += data
        elif self._in(tag="figcaption"): self.cur["caption"] += data
        elif self._body_context():   self.cur["body"] += data

    def handle_endtag(self, tag):
        if self.cur is not None and tag in INLINE and self._body_context():
            self.cur["body"] += f"</{tag}>"
        if self.cur is not None and self.step_depth == len(self.stack):
            self._finalize()
        if self.stack: self.stack.pop()

    def _finalize(self):
        s = self.cur
        s["title"]   = " ".join(s["title"].split())
        s["kicker"]  = " ".join(s["kicker"].split())
        s["num"]     = " ".join(s["num"].split()) or str(len(self.steps) + 1)
        s["caption"] = " ".join(s["caption"].split())
        s["body"]    = re.sub(r"\s+", " ", s["body"]).strip()
        self.steps.append(s)
        self.cur = None
        self.step_depth = None

def write_image(srcref, srcdir, imgdir, slug, num):
    if not srcref: return None
    m = re.match(r'data:image/([a-z]+);base64,(.+)$', srcref, re.S)
    if m:
        ext = "jpg" if m.group(1) == "jpeg" else m.group(1)
        fn = f"step-{num}.{ext}"
        (imgdir / fn).write_bytes(base64.b64decode(m.group(2)))
        return f"/guides/{slug}/{fn}"
    p = (pathlib.Path(srcdir) / srcref)
    if p.exists():
        ext = p.suffix.lstrip(".") or "png"
        fn = f"step-{num}.{ext}"
        shutil.copy(p, imgdir / fn)
        return f"/guides/{slug}/{fn}"
    return None

def import_html(path):
    raw = open(path, encoding="utf-8", errors="ignore").read()
    slug = slugify(path)
    srcdir = os.path.dirname(path)
    p = GuideParser()
    p.feed(raw)
    # join H1 chunks with spaces (line-breaks split the title into parts), collapse
    title = " ".join(" ".join(t.strip() for t, _ in p.h1_parts if t.strip()).split())
    em = " ".join(" ".join(t.strip() for t, e in p.h1_parts if e and t.strip()).split())
    imgdir = PUB / slug
    if imgdir.exists(): shutil.rmtree(imgdir)
    imgdir.mkdir(parents=True, exist_ok=True)
    steps = []
    for s in p.steps:
        img = write_image(s.get("_imgsrc"), srcdir, imgdir, slug, s["num"])
        steps.append({"num": s["num"], "kicker": s["kicker"], "title": s["title"],
                      "body": s["body"], "image": img, "caption": s["caption"]})
    data = {"slug": slug, "title": title, "titleEm": em,
            "eyebrow": " ".join(p.eyebrow.split()), "lede": " ".join(p.lede.split()),
            "steps": steps}
    CONT.mkdir(parents=True, exist_ok=True)
    (CONT / f"{slug}.json").write_text(json.dumps(data, indent=2, ensure_ascii=False))
    print(f"  {slug}: {len(steps)} steps, {sum(1 for s in steps if s['image'])} images")

def main(args):
    files = []
    for a in args:
        pp = pathlib.Path(a)
        files += sorted(str(x) for x in pp.glob("*.html")) if pp.is_dir() else [a]
    print(f"Importing {len(files)} guide(s)...")
    for f in files: import_html(f)

if __name__ == "__main__":
    main(sys.argv[1:])

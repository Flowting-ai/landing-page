# Step-keyed content verification: each step's CURRENT image must be the SAME
# screenshot as its curated source (the byte-verified ground truth) — within a
# tiny perceptual-hash distance (allows hi-res, rejects a wrong screenshot).
import sys, os, json, base64, io, pathlib
sys.path.insert(0, "scripts/guides")
from import_guides import GuideParser, slugify
from PIL import Image

SRC = os.path.expanduser("~/Downloads/learning-guides/Leanining guide fom souvenir")
CONT = pathlib.Path("src/content/guides"); PUB = pathlib.Path("public")
THRESH = 6

def ahash(img):
    g = img.convert("L").resize((8,8))
    px = list(g.getdata()); avg = sum(px)/len(px)
    bits = 0
    for p in px: bits = (bits<<1) | (1 if p>avg else 0)
    return bits
def ham(a,b):
    x=a^b; c=0
    while x: c+=x&1; x>>=1
    return c

bySlug = {slugify(f): os.path.join(SRC,f) for f in os.listdir(SRC) if f.endswith(".html")}
ok=bad=0; flags=[]
for jf in sorted(CONT.glob("*.json")):
    g=json.loads(jf.read_text())
    p=GuideParser(); p.feed(open(bySlug[g["slug"]],encoding="utf-8",errors="ignore").read())
    orig={}
    for s in p.steps:
        src=s.get("_imgsrc") or ""
        if src.startswith("data:"):
            orig[str(s["num"])]=ahash(Image.open(io.BytesIO(base64.b64decode(src.split(",",1)[1]))))
    for s in g["steps"]:
        if not s["image"]: continue
        o=orig.get(str(s["num"]))
        if o is None: continue
        cur=ahash(Image.open(PUB/s["image"].lstrip("/")))
        d=ham(cur,o)
        if d<=THRESH: ok+=1
        else: bad+=1; flags.append(f"  ✗ {g['slug']} step {s['num']} '{s['title']}' — distance {d} (NOT the source screenshot)")
print("\n".join(flags) if flags else "  (no mismatches)")
print(f"\n{ok} images verified as correct screenshot · {bad} flagged")

#!/usr/bin/env python3
"""
Generate AI-discoverable + search artifacts from the Supademo-backed guide
content (reads src/content/guides/*.json — never touches images):
  - public/guides/<slug>.md          per-guide Markdown ("view as markdown" / AI tools)
  - public/llms.txt                  index of all guides (the llms.txt standard)
  - public/guides/search-index.json  client-side search index (⌘K)
Run after regenerating guides. New format: { slug, title, overview, supademoId,
steps:[{num, text, image}] }.
"""
import json, re, pathlib

REPO = pathlib.Path(__file__).resolve().parents[2]
CONT = REPO / "src" / "content" / "guides"
PUB  = REPO / "public" / "guides"
SITE = "https://www.getsouvenir.com"

# Leading filler clause we strip to make a short step label for search/TOC.
FILLER = re.compile(
    r"^(first(ly)?( up| off| of all)?|next( up)?|then|now|after(wards)?( that)?|"
    r"following (this|that)|to (begin|get started|wrap up|end)( off)?|start by|"
    r"as (the|a) (last|final|first) step)[,:]?\s+", re.I)

def short(text):
    t = FILLER.sub("", text or "").strip()
    t = t[:1].upper() + t[1:]
    words = t.split()
    return " ".join(words[:6]) + ("…" if len(words) > 6 else "")

def to_markdown(g):
    out = [f"# {g['title']}", ""]
    if g.get("overview"): out += [g["overview"], ""]
    out += [f"Interactive demo: https://app.supademo.com/demo/{g['supademoId']}", ""]
    for s in g["steps"]:
        out.append(f"## {s['num']}. {s['text']}")
        out.append("")
    return "\n".join(out).rstrip() + "\n"

def main():
    guides = [json.loads(f.read_text()) for f in sorted(CONT.glob("*.json"))]
    PUB.mkdir(parents=True, exist_ok=True)
    index = []
    for g in guides:
        (PUB / f"{g['slug']}.md").write_text(to_markdown(g))
        index.append({
            "slug": g["slug"],
            "title": g["title"],
            "lede": g.get("overview", ""),
            "steps": [{"num": s["num"], "title": short(s["text"]), "body": s["text"]} for s in g["steps"]],
        })
    (PUB / "search-index.json").write_text(json.dumps(index, ensure_ascii=False))

    # llms.txt — machine-readable table of contents for AI tools/agents.
    lines = [
        "# Souvenir — Learning Guide",
        "",
        "> Step-by-step guides for using Souvenir: the Chatspace and models, building AI agents, "
        "teams and admin. Each guide pairs a live interactive demo with a written walkthrough, and "
        "is available as Markdown at the .md URL below.",
        "",
        "## Guides",
    ]
    for g in guides:
        desc = (g.get("overview", "") or "").split(". ")[0]
        lines.append(f"- [{g['title']}]({SITE}/guides/{g['slug']}.md): {desc}")
    (REPO / "public" / "llms.txt").write_text("\n".join(lines) + "\n")

    print(f"wrote {len(guides)} .md files, search-index.json "
          f"({(PUB/'search-index.json').stat().st_size//1024}KB), llms.txt")

if __name__ == "__main__":
    main()

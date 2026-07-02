#!/usr/bin/env python3
"""
Turn a Supademo get_demo JSON dump (steps + hotspots) into a guide content file.
New Supademo-backed format: { slug, title, overview, supademoId, steps:[{num,text,image}] }.
Screenshots are HOTLINKED to Supademo's CDN (stay fresh). Empty intro/outro steps
(no hotspot text) are dropped; remaining steps renumbered 1..N.
Usage: supademo_extract.py <dump.json> <slug> [overview]
"""
import json, sys, pathlib
REPO = pathlib.Path(__file__).resolve().parents[2]
CONT = REPO / "src" / "content" / "guides"

dump, slug = sys.argv[1], sys.argv[2]
overview = sys.argv[3] if len(sys.argv) > 3 else ""
demo = json.load(open(dump))["demo"]

steps = []
for s in demo["steps"]:
    hs = s.get("hotspots") or []
    text = " ".join(h["text"].strip() for h in hs if h.get("text"))
    if not text:           # skip cover/outro steps with no instruction
        continue
    steps.append({"num": len(steps) + 1, "text": text, "image": s.get("image")})

data = {"slug": slug, "title": demo["title"], "overview": overview,
        "supademoId": demo["id"], "steps": steps}
CONT.mkdir(parents=True, exist_ok=True)
(CONT / f"{slug}.json").write_text(json.dumps(data, indent=2, ensure_ascii=False))
print(f"{slug}: {len(steps)} steps, supademoId={demo['id']}")

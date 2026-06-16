#!/usr/bin/env python3
"""Regenerate ../data.js from the CSVs in ../data/.

Run from the repo root (any directory works — paths resolve relative to this script).
Edit QUIZZES below to add or reorder the cards that appear on the landing page.
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
OUT = os.path.join(ROOT, "data.js")

QUIZZES = [
    {
        "id": "capitals",
        "title": "World capitals",
        "description": "Given a capital, type the country (or flip it). Filter by continent and more.",
        "csvName": "national_capitals_and_largest_cities.csv",
        "defaultPrompt": "Capital",
        "defaultAnswer": "Country/Dependency",
    },
    {
        "id": "mythology",
        "title": "Greek & Roman mythology",
        "description": "Match Greek gods to their Roman counterparts. Filter by category (Olympian, Titan, primordial, …).",
        "csvName": "greek_roman_mythology.csv",
        "defaultPrompt": "Greek",
        "defaultAnswer": "Roman",
    },
    {
        "id": "flags",
        "title": "Country flags",
        "description": "See a flag, name the country. Filter by continent.",
        "csvName": "country_flags.csv",
        "defaultPrompt": "Flag",
        "defaultAnswer": "Country",
    },
]


def template_literal_safe(text):
    """A JS template literal can hold most text unescaped, but backticks and ${ break it."""
    bad = []
    if "`" in text:
        bad.append("backtick")
    if "${" in text:
        bad.append("${ interpolation")
    if "\\" in text:
        bad.append("backslash")
    return bad


def main():
    lines = ["window.QUIZZES = {"]
    for q in QUIZZES:
        csv_path = os.path.join(DATA_DIR, q["csvName"])
        with open(csv_path, encoding="utf-8") as f:
            csv_text = f.read()
        issues = template_literal_safe(csv_text)
        if issues:
            raise SystemExit(
                f"CSV {q['id']} ({q['csvName']}) contains {issues} — escape or remove before embedding."
            )
        lines.append(f"  {q['id']}: {{")
        for key in ("id", "title", "description", "csvName", "defaultPrompt", "defaultAnswer"):
            lines.append(f"    {key}: {json.dumps(q[key])},")
        lines.append("    embeddedCSV: `" + csv_text.rstrip("\n") + "\n`,")
        lines.append("  },")
    lines.append("};\n")

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    rel = os.path.relpath(OUT, ROOT)
    print(f"Wrote {rel} ({len(QUIZZES)} quizzes embedded).")


if __name__ == "__main__":
    main()

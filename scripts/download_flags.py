#!/usr/bin/env python3
"""Download flag PNGs from Wikimedia Commons for every country in the capitals CSV
and emit ../data/country_flags.csv referencing the local files.

Usage:
    python3 scripts/download_flags.py

Reads:  ../data/national_capitals_and_largest_cities.csv
Writes: ../data/flags/<slug>.png  (one per country)
        ../data/country_flags.csv  (Country, Continent, Flag, Aliases)

Downloads go through Wikimedia's Special:FilePath redirector with a thumbnail size
of 320 px. Wikimedia requires a non-empty, non-default User-Agent — see
https://meta.wikimedia.org/wiki/User-Agent_policy. The UA below identifies the
script. Don't impersonate a browser; change the contact info if you fork this.
"""
import csv
import os
import re
import subprocess
import sys
import time
import unicodedata
import urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
SRC = os.path.join(DATA, "national_capitals_and_largest_cities.csv")
OUT_DIR = os.path.join(DATA, "flags")
OUT_CSV = os.path.join(DATA, "country_flags.csv")
WIDTH = 320
USER_AGENT = "QuickQuizFlags/1.0 (offline study quiz; https://github.com/<you>/quick-quiz)"

# Override the default "Flag of {Country}.svg" naming where Wikimedia uses a different title.
OVERRIDES = {
    "China": "Flag of the People's Republic of China.svg",
    "Russia": "Flag of Russia.svg",
    "DR Congo": "Flag of the Democratic Republic of the Congo.svg",
    "Congo": "Flag of the Republic of the Congo.svg",
    "United Kingdom": "Flag of the United Kingdom.svg",
    "United States": "Flag of the United States.svg",
    "United Arab Emirates": "Flag of the United Arab Emirates.svg",
    "Czech Republic": "Flag of the Czech Republic.svg",
    "Dominican Republic": "Flag of the Dominican Republic.svg",
    "Central African Republic": "Flag of the Central African Republic.svg",
    "Bahamas": "Flag of the Bahamas.svg",
    "Gambia": "Flag of The Gambia.svg",
    "Philippines": "Flag of the Philippines.svg",
    "Netherlands": "Flag of the Netherlands.svg",
    "Sahrawi Arab Democratic Republic": "Flag of the Sahrawi Arab Democratic Republic.svg",
    "Vatican City": "Flag of the Vatican City.svg",
    "Comoros": "Flag of the Comoros.svg",
    "Marshall Islands": "Flag of the Marshall Islands.svg",
    "Solomon Islands": "Flag of the Solomon Islands.svg",
    "Maldives": "Flag of the Maldives.svg",
    "Seychelles": "Flag of the Seychelles.svg",
    "Hong Kong (China)": "Flag of Hong Kong.svg",
    "Macau (China)": "Flag of Macau.svg",
    "Aruba (Netherlands)": "Flag of Aruba.svg",
    "Curaçao (Netherlands)": "Flag of Curaçao.svg",
    "French Polynesia (France)": "Flag of French Polynesia.svg",
    "Greenland (Denmark)": "Flag of Greenland.svg",
    "New Caledonia (France)": "Flag of New Caledonia.svg",
    "Northern Mariana Islands (USA)": "Flag of the Northern Mariana Islands.svg",
    "Puerto Rico (US)": "Flag of Puerto Rico.svg",
    "Timor-Leste": "Flag of East Timor.svg",
    "Taiwan": "Flag of the Republic of China.svg",
    "Ivory Coast": "Flag of Côte d'Ivoire.svg",
    "Transnistria": "Flag of Transnistria (state).svg",
    "Palestine": "Flag of Palestine.svg",
    "Kosovo": "Flag of Kosovo.svg",
    "South Sudan": "Flag of South Sudan.svg",
    "São Tomé and Príncipe": "Flag of São Tomé and Príncipe.svg",
}


def filename_for(country):
    return OVERRIDES.get(country, f"Flag of {country}.svg")


def slugify(country):
    s = re.sub(r"\s*\([^)]*\)\s*", "", country.lower())
    s = unicodedata.normalize("NFD", s).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def download_one(wiki_name, dest):
    url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{urllib.parse.quote(wiki_name)}?width={WIDTH}"
    r = subprocess.run(
        ["curl", "-fsSL", "-A", USER_AGENT, "-o", dest, url],
        capture_output=True,
    )
    if r.returncode != 0:
        return False, r.stderr.decode("utf-8", errors="replace")[:200]
    size = os.path.getsize(dest)
    if size < 200:
        return False, f"suspiciously small ({size}B)"
    return True, size


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(SRC, newline="", encoding="utf-8") as f:
        capitals = list(csv.DictReader(f))

    out_rows = [["Country", "Continent", "Flag", "Aliases"]]
    errors = []
    for i, row in enumerate(capitals, 1):
        country = row["Country/Dependency"]
        slug = slugify(country)
        dest = os.path.join(OUT_DIR, f"{slug}.png")
        rel = f"data/flags/{slug}.png"
        if os.path.exists(dest) and os.path.getsize(dest) > 200:
            status = f"cached ({os.path.getsize(dest)}B)"
        else:
            ok, info = download_one(filename_for(country), dest)
            status = f"ok ({info}B)" if ok else f"FAIL: {info}"
            if not ok:
                errors.append((country, info))
            time.sleep(0.15)  # be polite to Wikimedia
        print(f"[{i:3d}/{len(capitals)}] {country:40s} -> {slug}.png  {status}")
        out_rows.append([country, row.get("Continent", ""), rel, row.get("Aliases", "")])

    with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerows(out_rows)
    print(f"\nWrote {os.path.relpath(OUT_CSV, ROOT)} ({len(out_rows) - 1} rows).")
    if errors:
        print(f"\n{len(errors)} download failures:", file=sys.stderr)
        for c, e in errors:
            print(f"  {c}: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

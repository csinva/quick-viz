# Quick Quiz

A small, dependency-free typing-quiz site that runs off CSV files. Open `index.html`,
pick a topic, type the answers. Add a new topic by dropping a CSV in `data/` and
listing it in `data.js`.

No build, no server, no JavaScript framework. Just static HTML/CSS/JS that works by
double-clicking `index.html`.

## Built-in quizzes

| Topic | Pairs | Direction |
| --- | --- | --- |
| World capitals | 194 | Capital → Country |
| Greek & Roman mythology | 44 | Greek god → Roman counterpart |
| Country flags | 194 | Flag image → Country |

Each quiz can be flipped, filtered, and reshuffled from the in-page Settings panel.

## Features

- **Type-in answers** (not multiple choice), graded as you type.
- **In-order mode** (one prompt at a time, with progress) or **Free mode** (all visible).
- **Lenient matching** — case, accents, hyphens, and punctuation are ignored;
  Damerau–Levenshtein typo tolerance accepts answers within 1–2 edits of any
  accepted variant (threshold scales with word length so short words stay strict).
- **Per-row aliases** — a row with `Aliases` column value `USA|US|America` accepts
  any of those alternates for "United States". Aliases are pipe-separated.
- **Auto-detected filters** — any non-prompt/answer column with ≤30 distinct values
  becomes a filterable facet (e.g. Continent, Category).
- **Image-prompt support** — cells whose value looks like an image path
  (`.png`, `.jpg`, `.svg`, …) are rendered as `<img>` instead of text. Used for
  the flags quiz.
- **End-of-round review** of wrong / skipped / missed entries with a one-click
  **Retry just my mistakes** button that re-runs the quiz on the subset.
- **Dark mode** by default, with a theme toggle that persists across visits.
- **Custom CSV** — the "Custom CSV" card on the landing page accepts any CSV via a
  file picker without changing any code.

## Project layout

```
quick-quiz/
├── index.html              # landing page (lists topics from data.js)
├── quiz.html               # the quiz engine
├── data.js                 # registry: window.QUIZZES with embedded CSVs
├── data/
│   ├── national_capitals_and_largest_cities.csv
│   ├── greek_roman_mythology.csv
│   ├── country_flags.csv
│   └── flags/              # PNG flag images, one per country
├── scripts/
│   ├── build_datajs.py     # regenerate data.js from data/*.csv
│   └── download_flags.py   # fetch flag PNGs from Wikimedia Commons
├── .gitignore
└── README.md
```

## Adding a new quiz

1. Drop your CSV in `data/`. The first row is the header; columns can be anything.
2. Add an entry to `data.js`:

   ```js
   window.QUIZZES = {
     // ...existing entries...
     mytopic: {
       id: 'mytopic',
       title: 'My quiz',
       description: 'Short blurb for the landing page card.',
       csvName: 'my_quiz.csv',
       defaultPrompt: 'Column shown to you',
       defaultAnswer: 'Column you type',
       embeddedCSV: `<paste the CSV text here>`,
     },
   };
   ```

   `embeddedCSV` is a JS template literal containing the raw CSV. Embedding lets the
   page work offline from `file://` URLs (where `fetch()` is blocked). The CSV text
   must not contain backticks or `${`.

3. (Optional) Re-export `data.js` automatically by running the helper:

   ```bash
   python3 scripts/build_datajs.py
   ```

   This reads each registered CSV and rewrites `data.js`. Add a new entry to the
   `QUIZZES` list inside `scripts/build_datajs.py` and re-run after editing a CSV.

## CSV conventions

The engine is column-driven and infers behavior from headers:

- **Prompt / answer columns**: any two columns can serve as prompt and answer.
  Defaults come from the registry (`defaultPrompt`, `defaultAnswer`); users can
  flip them in Settings.
- **`Aliases`** (optional, case-insensitive header match): pipe-separated alternates
  for the answer, e.g. `Czechia|CZ|Bohemia`. Each variant is normalized the same way
  as the canonical answer.
- **Image columns**: cells whose value matches `\.(png|jpe?g|gif|svg|webp|avif)$` are
  treated as images and rendered inline. Paths are resolved relative to `quiz.html`.
- **Categorical filters**: any other column whose distinct-value count is between 2
  and 30 auto-appears in Settings → Filters with checkboxes per value.

Quoted CSV fields (with embedded commas) are parsed correctly — no need to flatten.

## Flag images

The flags quiz uses 320-px-wide PNG thumbnails downloaded from
[Wikimedia Commons](https://commons.wikimedia.org/) via `Special:FilePath`. To
regenerate or extend them:

```bash
python3 scripts/download_flags.py
```

The script reads `data/national_capitals_and_largest_cities.csv`, downloads one
flag per row to `data/flags/<slug>.png`, and writes `data/country_flags.csv`.
Existing files are kept (delete a flag to force a re-download). Flag artwork has
varied copyright statuses; consult each flag's Wikimedia page for licensing.

## Setting up as a GitHub repo

```bash
cd /path/to/quick-quiz
git init
git add .
git commit -m "Initial commit"

# Using the GitHub CLI:
gh repo create quick-quiz --public --source=. --remote=origin --push

# Or push to an existing remote:
git remote add origin git@github.com:<you>/quick-quiz.git
git branch -M main
git push -u origin main
```

The site is fully static, so any free static-hosting target works: GitHub Pages,
Netlify drop, Cloudflare Pages, S3 + CloudFront, or just `python3 -m http.server`.

## Credits

- Flag images: [Wikimedia Commons](https://commons.wikimedia.org/) (various flag
  licenses; check each file for specifics).
- Capitals dataset and mythology pairings: hand-curated.

## License

MIT for the code in this repo. The bundled CSVs and downloaded flag images carry
their own licenses (see Credits).

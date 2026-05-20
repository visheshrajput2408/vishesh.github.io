# My Personal Website

A single-file personal website. No build steps, no React, no `npm install`.
Just one HTML file — open it, edit what you want, push to GitHub.

## How to deploy (one time)

Your existing URL `https://visheshrajput2408.github.io/vishesh.github.io/` is a
GitHub Pages "project" page. To keep that exact URL:

1. Go to your repository: **github.com/visheshrajput2408/vishesh.github.io**
2. **Delete all the old React files** (or move them to a `backup/` folder so you
   keep them for reference). The simplest way: clone the repo, wipe its contents,
   then drop in this `index.html`.
3. Place `index.html` at the root of the repo.
4. Commit and push.
5. In the repo on GitHub → **Settings → Pages** → Source: `Deploy from a branch` →
   Branch: `main` (folder `/root`). Save.
6. Wait 30–60 seconds. Your site is live at the same URL as before.

> **Tip:** if you want to keep your old React site as a backup before switching,
> create a branch `react-backup` from the current `main` first. Then wipe `main`
> and put `index.html` there.

## How to update the site (every time after that)

Everything you'd want to change is marked with HTML comments like
`<!-- UPDATE THIS SECTION -->`. Open `index.html`, find the section,
edit it, commit, push. That's it.

### Adding a news entry (most common update)

Find the `News` section (search for `id="news"`). Copy this block at the
top of the `<ul>`:

```html
<li>
  <time>Month YYYY</time>
  <span><span class="new-tag">NEW</span>Your news text here, with <strong>bold</strong> or <em>italic</em> as needed.</span>
</li>
```

Edit the date and text. Remove the `<span class="new-tag">NEW</span>` from
older entries when you add a fresh one.

### Adding a publication

Find the `Selected Publications` section. Copy this template at the top
of the `<ol class="pub-list">`:

```html
<li>
  <div>
    <div class="pub-title">Title of your paper</div>
    <div class="pub-authors"><span class="me">V. Kumar</span>, Co-author</div>
    <div class="pub-meta">
      <span class="venue top">VENUE 2026</span>
      <span>Full venue name</span>
      <a href="https://link.to/paper" target="_blank" rel="noopener">[paper]</a>
    </div>
  </div>
</li>
```

- Use `class="venue top"` for top-tier venues (highlighted in oxblood)
- Use `class="venue"` for other venues (subtle grey)
- The `<a>` link is optional — remove it if there's no public link yet

### Adding a CV PDF

Drop your `cv.pdf` file in the repo root. The "CV" link in the header
already points to it.

### Changing colors / fonts

All design tokens are at the top of the `<style>` block in `index.html`:

```css
:root {
  --bg:     #F4EFE6;   /* page background */
  --ink:    #1A1410;   /* main text */
  --accent: #6E1F26;   /* oxblood — used for headings, links */
  ...
}
```

Change one value, the whole site updates.

## What's where in the file

```
<head>          — page title, meta tags, fonts, CSS
<header>        — name, tagline, affiliations, quick links
§ 01 About      — bio paragraphs
§ 02 News       — recent updates (edit this often)
§ 03 Interests  — research interest tags
§ 04 Publications
§ 05 Under Review / Preprints
§ 06 Awards
§ 07 Education
§ 08 Contact
<footer>        — copyright, "last updated"
```

## Why this stack?

- **One file, zero dependencies.** Everything is in `index.html`. No build
  pipeline to break, no `node_modules`, no compatibility issues with React
  versions, no Vite/Webpack configs to debug.
- **Future-proof.** Plain HTML/CSS works in every browser, forever.
  Frameworks come and go; HTML doesn't.
- **Fast.** The page is ~25 KB and loads instantly.
- **Prints as a clean CV.** Try Ctrl/Cmd+P — the site has a print stylesheet
  that strips the decoration and gives you a clean printable CV.
- **Editable from anywhere.** You can edit directly on github.com (click the
  pencil icon on `index.html`), commit, and it's live in 30 seconds — no
  local dev environment needed.

## Optional upgrades later

- Add an `images/` folder and reference photos in your bio.
- Add a `papers/` folder with PDFs and link to them.
- If you ever want a blog: add a `posts/` folder of HTML files and link
  them from a new "Writing" section.

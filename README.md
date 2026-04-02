# Michaella & Michael — Wedding Website
**May 29, 2027 · Enmax Conservatory, Calgary Zoo**

A clean, elegant static wedding website. No build tools, no dependencies — pure HTML, CSS, and vanilla JS. Just open `index.html` or deploy to any static host.

---

## Files

```
wedding-site/
├── index.html      — All page content
├── style.css       — All styles
├── script.js       — Countdown, animations, RSVP logic
├── README.md       — This file
└── images/         — Create this folder and add your photos (see below)
```

---

## Adding Your Photos

Create an `images/` folder and drop in your photos. Then in `index.html`, replace each placeholder `<div>` with an `<img>` tag:

| Placeholder comment | Replace with | Recommended size |
|---|---|---|
| `<!-- Replace with: <img src="images/hero.jpg" ...` | `<img src="images/hero.jpg" alt="Michaella and Michael" />` | 1920×1080px or taller |
| `<!-- Replace with: <img src="images/story.jpg" ...` | `<img src="images/story.jpg" alt="Our Story" />` | 800×1000px (portrait) |
| `<!-- Replace with: <img src="images/venue.jpg" ...` | `<img src="images/venue.jpg" alt="Calgary Zoo Conservatory" />` | 900×700px |
| Gallery items (×4) | `<img src="images/gallery-1.jpg" alt="..." />` | 600×400px each |

---

## Customising Content

Everything is plain HTML — edit `index.html` directly.

| What to change | Where |
|---|---|
| Ceremony time & location | `#details` section, first card |
| Day-of schedule times | `#schedule` section `.tl-item` elements |
| Hotel recommendations | `#travel` section `.hotel-list` |
| RSVP deadline | `#rsvp` section `.rsvp-sub` |
| Couple's story paragraph | `#story` section |

---

## Setting Up RSVPs

The form is ready but needs a backend to actually save submissions. Three easy options:

### Option A — Formspree (recommended, free)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → you'll get a URL like `https://formspree.io/f/abcdef`
3. In `script.js`, uncomment the Formspree fetch block and paste your URL
4. Done — submissions arrive in your email inbox

### Option B — Netlify Forms (if deploying on Netlify)
1. Add `data-netlify="true"` to the `<form>` tag in `index.html`
2. Deploy to Netlify — they handle everything automatically
3. View submissions in your Netlify dashboard

### Option C — Google Forms embed
1. Create a Google Form with the same fields
2. Get the embed code → paste into the `#rsvp` section replacing the form

---

## Deploying

### GitHub Pages (free)
1. Create a new repo on GitHub (e.g. `wahba-atienza-wedding`)
2. Push all files to the repo
3. Go to Settings → Pages → Source: Deploy from branch → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/wahba-atienza-wedding`

### Netlify (free, custom domain easy)
1. Drag the `wedding-site` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Instant deploy — get a `*.netlify.app` URL
3. Connect a custom domain in settings if desired

### Custom domain
Point your domain's DNS to your host and update any absolute URLs if needed.

---

## Colour Palette Reference
| Name | Hex |
|---|---|
| Navy | `#1a2744` |
| Deep Navy | `#0f1a30` |
| Blush | `#e8c4b8` |
| Deep Blush | `#d4a899` |
| Cream | `#faf6f1` |
| Gold accent | `#b8976a` |

# Hengtai Raytech website

Static site for [hengtairaytech.com](https://hengtairaytech.com). It uses the Hengtai brand blue (#0368c8) with navy and pale-blue tints in a framed design language: a framed centre column, hatched gutters, numbered cards, sticky stacked panels and word-by-word heading reveals.

- `index.html`, `about.html`, `service.html`, `contact.html`: pages
- `assets/css/style.css`: all styles (colour tokens at the top)
- `assets/js/main.js`: menu, scroll reveals, header tint, marquee and contact form (opens a prefilled email)

## SEO

- Each page's `<head>` has a unique title (≤60 characters) and description (≤160), a canonical URL on `https://hengtairaytech.com/`, Open Graph and Twitter tags, and JSON-LD structured data (Organization, WebSite, WebPage/AboutPage/ContactPage, BreadcrumbList; FAQPage on the home page, matching the visible FAQ).
- `robots.txt`, `sitemap.xml` (update `<lastmod>` when pages change), `site.webmanifest`, app icons and a `404.html` (noindex) live at the root.
- The social share image is `assets/img/og-image.jpg` (1200×630).
- Fonts are self-hosted in `assets/fonts/` (SIL Open Font License) to avoid a render-blocking third-party request.
- Configure the host to serve `404.html` for missing pages and to gzip/brotli HTML, CSS and JS.

No build step is needed. Serve the folder with any static host, or run `python3 -m http.server` locally.

## Image credits

- `assets/img/earth.png`: dithered, blue-tinted treatment of NASA's "Blue Marble" Eastern Hemisphere image (NASA Goddard Space Flight Center, Reto Stöckli; public domain).
- `assets/img/missions/`: blue duotone crops of NASA imagery, each credited on the page:
  - `aoi-abuja.jpg`: Abuja, Nigeria, ASTER (PIA25186). NASA/METI/AIST/Japan Space Systems, U.S./Japan ASTER Science Team
  - `planning-ground-station.jpg`: Deep Space Network antenna DSS-53 (PIA25137). NASA/JPL-Caltech
  - `orbit-cubesats.jpg`: CubeSats deployed from the ISS (ISS038-E-044916). NASA
  - `delivery-sar.jpg`: UAVSAR airborne radar image (PIA23782). NASA/JPL-Caltech
  - `minisar-uas.jpg`: TigerShark unmanned aircraft (AFRC2019-0290-05). NASA/Ken Ulbrich
  - `smartsat-smallsats.jpg`: small satellites released from the ISS (ISS033-E-009286). NASA
- `assets/img/robotics/`: photos from the Hengtai Raytech brochure. `quadruped-fleet.jpg` is the page 13 field scene as a blue duotone; `x30.webp` and `m20.webp` are the page 14–15 product cut-outs.
- `assets/img/about-satellite.jpg` and `about-satellite-960.jpg`: brochure cover satellite as a blue duotone (About hero, desktop and mobile crops).
- `assets/video/`: MiniSAR flight footage (Technology hero) as a blue-graded, muted loop: 1280px WebM and MP4, a 720px MP4 for phones, and a poster frame. The top of the frame is cropped to remove the drone's on-screen telemetry (model, date and GPS position).

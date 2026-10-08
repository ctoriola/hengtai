# Hengtai Raytech website

Static site for [hengtairaytech.com](https://hengtairaytech.com). It uses the Hengtai brand blue (#0368c8) with navy and pale-blue tints in a framed design language: a framed centre column, hatched gutters, numbered cards, sticky stacked panels and word-by-word heading reveals.

- `index.html`, `about.html`, `service.html`, `contact.html`: pages
- `assets/css/style.css`: all styles (colour tokens at the top)
- `assets/js/main.js`: menu, scroll reveals, header tint, marquee and contact form (opens a prefilled email)

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

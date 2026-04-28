# Wix Clone Project

A React portfolio clone inspired by the Wix art director template. The project is being polished for portfolio use with a stronger content model, cleaner routing, and a more complete booking/demo experience.

## Tech Stack

- React 19
- React Router 7
- Vite 6
- Tailwind CSS 4
- date-fns
- react-datepicker

## Features

- Responsive portfolio homepage
- Project detail pages with lightbox preview
- Show reel page with local video asset
- About/contact page with validation and success state
- Book-online flow with service selection, schedule selection, and booking form
- Shared project and service data files for easier maintenance

## Getting Started

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

The app is configured for GitHub Pages with the base path:

```txt
/wix-clone-project/
```

You can override it with:

```bash
VITE_BASE_PATH=/ npm run build
```

## Current Polish Plan

See `PROJECT_AUDIT_ROADMAP.md` for the full issue audit and improvement roadmap.

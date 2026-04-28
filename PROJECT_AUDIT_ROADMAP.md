# Wix Clone Project Audit & Roadmap

Audit date: 2026-04-28

## Current Status

This is a Vite + React + React Router + Tailwind CSS portfolio-style clone inspired by a Wix art director template. The production build succeeds, but lint currently fails. The app has a solid visual base and multiple routes, but it still reads like an unfinished template because of placeholder content, fragile data flow, duplicated data, weak metadata, and incomplete booking behavior.

## Issue Count

Total identified issues: 28

- Critical: 2
- High: 8
- Medium: 12
- Low: 6

## Critical Issues

1. Lint fails.
   - `src/components/BookOnline/BookingForm.jsx`: unused `formSubmitted` and `timezone`
   - `vite.config.js`: unused `command`, and `process` is not available in ESLint globals

2. Booking detail pages depend on navigation state only.
   - Direct visits or page refreshes on schedule/form routes send the user back or render nothing.
   - A portfolio evaluator may open deep links directly and think the route is broken.

## High Priority Issues

1. Placeholder Wix copy is still visible across project/detail/about/show-reel pages.
2. `README.md` describes an old static HTML/CSS/JS project instead of the current React app.
3. `index.html` still uses Vite defaults: title is `Vite + React`, favicon is `vite.svg`.
4. Portfolio data is duplicated in `Images.jsx` and `DetailsPage.jsx`.
5. Public assets are referenced with relative paths like `../../../public/...`, which is fragile under different base paths.
6. Booking success route exists but is not used and only renders `BookingSuccess`.
7. Contact form and booking form show demo/error messaging after valid submit instead of a polished demo confirmation.
8. Mobile menu/modal interactions need better accessibility: focus handling, Escape close, ARIA dialog semantics, and body scroll lock.

## Medium Priority Issues

1. Several text characters display as mojibake in terminal/source output, such as close icons and arrows.
2. Header active navigation state is missing.
3. Login popup duplicates code in `Header.jsx` and `BookingForm.jsx`.
4. `transition-transform-all` is not a standard Tailwind utility.
5. Some z-index utilities use `-z-1`, which is risky/unclear and can affect clickability.
6. Service heading has typo: `Servic Details`.
7. Date availability logic compares selected dates to the exact current timestamp, which can incorrectly disable today.
8. Timezone selector does not actually convert times.
9. Booking form does not validate email format beyond native browser behavior and does not validate phone/message.
10. Images lack width/height/loading hints, which can hurt performance and layout stability.
11. Project detail page has no back-to-gallery affordance and no keyboard lightbox controls.
12. Footer/social links go to Wix accounts rather than project/person-specific links.

## Low Priority Issues

1. Many files import `React` unnecessarily with the current JSX transform.
2. `Main.jsx` and `AllContext.jsx` are very thin and may be simplified unless the context grows.
3. `style-guide.md` appears copied from another challenge and does not match this app.
4. Copyright year is hard-coded.
5. Some alt text is generic or empty where the image is meaningful.
6. No custom 404 route exists.

## Improvement Opportunities

1. Content polish
   - Replace template paragraphs with real case-study copy.
   - Add project metadata: role, client/type, year, tools, challenge, outcome.
   - Convert the homepage from simple image list into a curated portfolio grid.

2. Architecture
   - Move portfolio/projects and services into shared data files.
   - Reuse shared components for modal, form field, section heading, project card, and service card.
   - Add stable route fallback logic using URL params instead of only `location.state`.

3. UX/UI
   - Add active nav styling.
   - Improve mobile menu animation and close behavior.
   - Add hover/focus states consistently.
   - Make booking flow feel complete with confirmation and summary.
   - Add a better lightbox with keyboard controls and previous/next actions.

4. Accessibility
   - Add dialog semantics for modals.
   - Add Escape-to-close.
   - Trap focus inside modal.
   - Ensure buttons and clickable cards are keyboard accessible.
   - Improve alt text and form labels.

5. Performance/SEO
   - Update title, meta description, favicon, Open Graph image.
   - Lazy-load gallery images below the fold.
   - Use imported assets or root-relative public paths.
   - Consider route-level code splitting if the app grows.

6. Testing and quality
   - Fix lint.
   - Add basic smoke tests for routes.
   - Add form validation tests.
   - Add a pre-deploy checklist: lint, build, responsive check.

## Feature Ideas

1. Case-study pages for each project.
   - Gallery, project brief, role, tools, outcome, next/previous project.

2. Filterable portfolio.
   - Filter by category: music video, fashion, commercial, art direction.

3. Rich lightbox.
   - Keyboard navigation, thumbnails, captions, share link.

4. Booking flow upgrade.
   - Service selection, date/time, customer details, confirmation page, localStorage booking history.

5. Contact experience.
   - Polished success state, email/social CTA, downloadable resume/media kit link.

6. Admin-like content structure.
   - A single project/services data source that can be edited easily.

7. Portfolio polish extras.
   - Loading skeletons, page transitions, scroll restoration, custom 404 page.

8. Deployment polish.
   - GitHub Pages-ready routing strategy, custom README, screenshots, live demo link.

## Best-Level Roadmap

### Phase 1: Make It Clean

- Fix lint.
- Update metadata and README.
- Replace broken/demo-looking characters and typos.
- Centralize project/service data.
- Fix public asset references.
- Add 404 page.

### Phase 2: Make It Real

- Replace all placeholder content.
- Rewrite About, Show Reel, and project details as a believable portfolio.
- Replace Wix social/contact links.
- Polish forms with proper validation and confirmation states.

### Phase 3: Make It Professional

- Upgrade responsive spacing and typography.
- Add active nav state.
- Improve modals and lightbox accessibility.
- Add keyboard support and focus states.
- Add image loading optimization.

### Phase 4: Make It Impressive

- Add filterable project gallery.
- Add case-study detail pages.
- Complete booking confirmation flow.
- Add page transitions and scroll restoration.
- Add tests and CI-friendly scripts.

## Recommended First Implementation Sprint

1. Fix lint and metadata.
2. Create shared `projects` and `services` data files.
3. Replace duplicated data usage in gallery/detail/booking routes.
4. Fix route refresh behavior in booking flow.
5. Replace placeholder content enough that the app no longer looks like a raw template.


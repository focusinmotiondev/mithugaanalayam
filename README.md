# Mithu Gaana Layam Fine Arts

Carnatic music school website for Smt. Tharmini Thishyan — Durham, Ontario.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
my-app/
  app/                  ← Next.js routes (thin wrappers only)
    layout.js
    page.js             → renders pages/HomePage.js
    about/page.js       → renders pages/AboutPage.js
    learn/page.js       → renders pages/LearnPage.js
    programs/page.js    → renders pages/ProgramsPage.js
    gallery/page.js     → renders pages/GalleryPage.js
    contact/page.js     → renders pages/ContactPage.js
    globals.css         ← all styles in one file
  pages/                ← all actual page content lives here
    HomePage.js
    AboutPage.js
    LearnPage.js
    ProgramsPage.js
    GalleryPage.js
    ContactPage.js
  components.js         ← all shared UI components (Navbar, Footer, etc.)
  constants.js          ← all site data and content
  public/
    images/
      logo.jpg
      teacher.jpg
      gallery/          ← drop performance photos here
```

## Adding Gallery Photos

1. Add images to `public/images/gallery/`
2. In `pages/GalleryPage.js`, replace the placeholder grid with real images:

```jsx
import Image from 'next/image'

// Inside the photo-grid div:
<Image src="/images/gallery/photo1.jpg" width={400} height={300} alt="Performance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

## Updating Content

All text content and site info lives in `constants.js` — update it there and it flows through every page automatically.

## Deploy

Push to GitHub and connect to Vercel. Zero config needed — Vercel auto-detects Next.js.

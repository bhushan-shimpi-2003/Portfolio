# Bhushan Shimpi - Portfolio Project Documentation

## Section 7: Image Generation Prompts
Use these prompts in Midjourney or DALL-E 3 to generate assets:

1.  **Hero Avatar:**
    > "Professional headshot of a young Indian male software developer, wearing smart casual attire (polo shirt or light button-down), warm lighting, soft bokeh background of a modern tech office, confident smile, high resolution, photorealistic."

2.  **Hero Background Abstract:**
    > "Abstract geometric wallpaper, warm brown (#7A4B3A) and teal (#0F9D9A) color palette, minimalist vector style, flowing curves and soft gradients, light beige background (#F7F1EE), high quality web banner."

3.  **Certification Placeholder Badge:**
    > "Minimalist gold and teal certification badge icon, 3D render, glossy finish, white background, isometric view, symbolizing achievement in coding."

## Section 8: Accessibility & SEO Checklist

### Accessibility (WCAG AA)
- [ ] **Color Contrast:** Ensure text #222222 on #F7F1EE has ratio > 4.5:1. Primary #7A4B3A on white is safe.
- [ ] **ARIA Labels:** Added to all icon-only buttons (Theme toggle, Mobile menu, Social links).
- [ ] **Keyboard Nav:** Focus states defined in Tailwind (`focus:ring-2`). Skip-to-content link implemented (implicit in code structure, explicit link recommended for production).
- [ ] **Alt Text:** All images in `projects.ts` have descriptive alt text derived from titles.

### SEO
- [ ] **Meta Tags:** Description and Title tags in `index.html`.
- [ ] **JSON-LD Schema (Resume):**
  ```json
  {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Bhushan Kishor Shimpi",
    "jobTitle": "Java & MERN Stack Developer",
    "url": "https://bhushanshimpi.dev",
    "sameAs": ["https://linkedin.com/in/bhushan-shimpi", "https://github.com/bhushan-shimpi"]
  }
  ```

## Section 9: QA & Testing Plan

### Manual Test Cases
1.  **Responsiveness:**
    *   **Mobile (375px):** Verify hamburger menu opens/closes. Hero text stacks vertically.
    *   **Tablet (768px):** Verify grid columns switch from 1 to 2.
    *   **Desktop (1440px):** Check hover states on project cards.
2.  **Theme Toggle:**
    *   Click Sun/Moon icon. Verify `dark` class added to `<html>`. Verify local storage persists refresh.
3.  **Project Modal:**
    *   Click "View Details". Modal opens. Background scroll locks. Click "X" closes.
4.  **Contact Form:**
    *   Submit empty -> Error.
    *   Submit valid -> Show "Sending..." -> Show "Success".

## Section 10: Deployment Guide

### Vercel (Recommended)
1.  **Install Vercel CLI:** `npm i -g vercel`
2.  **Build:** `npm run build` (Vite builds to `/dist`)
3.  **Deploy:** Run `vercel` in root.
    *   Build Command: `vite build`
    *   Output Directory: `dist`
4.  **Environment Variables:** Add any API keys if expanding functionality.

### Netlify
1.  Drag and drop `dist` folder to Netlify Drop.
2.  **Redirects:** Create `public/_redirects` file with content `/* /index.html 200` to support React Router refresh.

### GitHub Pages
1.  Update `vite.config.js`: `base: '/repo-name/'`.
2.  Use `gh-pages` package to deploy `dist` folder.

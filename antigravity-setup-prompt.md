# PROJECT SETUP PROMPT — Visual House Ortoptica Proposal Site

## CONTEXT
I have two HTML files in this project folder:
- `proposal.html` — the main proposal site (single page, multiple sections)
- `user-stories.html` — a companion document (user stories & acceptance criteria)

These are fully designed and working. I need you to convert them into a **Vite + React** application while preserving EVERYTHING — all styles, all animations, all canvas elements, all scroll behaviors, all responsive breakpoints. Do NOT change any visual design, content, colors, fonts, spacing, or animations.

## TECH STACK
- **Vite** (React template)
- **React** (functional components with hooks)
- **React Router DOM** (v6) — two routes: `/` for the proposal, `/user-stories` for the companion document
- **Normal CSS** — NO Tailwind. Port the CSS exactly as it is from the HTML files. Use CSS modules or scoped CSS files per component.
- **NO animation libraries** — NO Framer Motion, NO GSAP. All animations use the existing CSS transitions, @keyframes, and requestAnimationFrame canvas logic already in the HTML files.

## PROJECT STRUCTURE

```
src/
├── App.jsx                     # Router setup, LanguageProvider wrapper
├── main.jsx                    # Vite entry point
├── context/
│   └── LanguageContext.jsx      # React context for EN/ES language toggle
├── components/
│   ├── shared/
│   │   ├── Navbar.jsx           # Navigation bar (used on both pages)
│   │   ├── Navbar.css
│   │   ├── ProgressBar.jsx      # Scroll progress bar
│   │   ├── ProgressBar.css
│   │   ├── CustomCursor.jsx     # Custom cursor (hidden on touch)
│   │   ├── CustomCursor.css
│   │   ├── ScrollReveal.jsx     # Reusable scroll reveal wrapper using IntersectionObserver
│   │   └── LanguageToggle.jsx   # Button to switch EN/ES
│   │   └── LanguageToggle.css
│   ├── proposal/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── HeroCanvas.jsx       # The hero background canvas animation
│   │   ├── Understanding.jsx
│   │   ├── Understanding.css
│   │   ├── StoryArc.jsx
│   │   ├── StoryArc.css
│   │   ├── DemoTracking.jsx     # Smooth tracking canvas demo
│   │   ├── DemoTracking.css
│   │   ├── Observations.jsx
│   │   ├── Observations.css
│   │   ├── DemoSaccades.jsx     # Saccades canvas demo
│   │   ├── DemoSaccades.css
│   │   ├── Questions.jsx
│   │   ├── Questions.css
│   │   ├── Architecture.jsx
│   │   ├── Architecture.css
│   │   ├── AmbientBreak.jsx     # Ambient node network canvas
│   │   ├── AmbientBreak.css
│   │   ├── UserStoriesPreview.jsx
│   │   ├── UserStoriesPreview.css
│   │   ├── Team.jsx
│   │   ├── Team.css
│   │   ├── Timeline.jsx
│   │   ├── Timeline.css
│   │   ├── Closing.jsx
│   │   ├── Closing.css
│   │   └── ClosingCanvas.jsx    # Closing background canvas animation
│   └── user-stories/
│       ├── USHeader.jsx
│       ├── USHeader.css
│       ├── USTableOfContents.jsx
│       ├── USTableOfContents.css
│       ├── PatientStories.jsx
│       ├── PatientStories.css
│       ├── TherapistStories.jsx
│       ├── TherapistStories.css
│       ├── AdminStories.jsx
│       ├── AdminStories.css
│       ├── USFooter.jsx
│       └── USFooter.css
├── pages/
│   ├── ProposalPage.jsx         # Assembles all proposal components in order
│   └── UserStoriesPage.jsx      # Assembles all user-stories components in order
├── styles/
│   ├── variables.css            # CSS custom properties (the :root block from the HTML)
│   └── global.css               # Body, html, scrollbar, @keyframes fadeUp, .reveal classes
└── index.html                   # Vite HTML entry (just the shell with font imports)
```

## CRITICAL RULES

### 1. CONTENT SEEDING
Every component that displays text content MUST have its content defined as a data object at the TOP of the file, BEFORE the component function. This applies to both English and Spanish versions.

Example pattern:
```jsx
// Understanding.jsx

const content = {
  en: {
    tag: "01 — Our Understanding",
    title: "What You Are\nReally Solving",
    cards: [
      {
        label: "Surface Problem",
        heading: "What the brief says",
        items: [
          "Visual House needs to scale vision therapy beyond in-person sessions",
          "Current software is licensed to a third party and locked to clinic computers",
          // ... etc
        ]
      },
      // ... more cards
    ]
  },
  es: {
    tag: "01 — Nuestra Comprensión",
    title: "Lo Que Realmente\nEstán Resolviendo",
    cards: [
      {
        label: "Problema Superficial",
        heading: "Lo que dice el brief",
        items: [
          "Visual House necesita escalar la terapia visual más allá de las sesiones presenciales",
          "El software actual está licenciado a un tercero y bloqueado en los computadores de la clínica",
          // ... etc
        ]
      },
      // ... more cards
    ]
  }
};

import { useLanguage } from '../../context/LanguageContext';
import './Understanding.css';

export default function Understanding() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    // ... component JSX using t.tag, t.title, t.cards, etc.
  );
}
```

For the FIRST PASS — populate ALL English content exactly from the HTML files. For Spanish (`es`), use placeholder text that says `"[ES] "` followed by the English text. Example: `"[ES] Visual House needs to scale..."`. I will replace the Spanish translations manually later.

### 2. CSS PORTING
- Extract the `:root` CSS variables block into `src/styles/variables.css`
- Extract global styles (body, html, scrollbar, .reveal, @keyframes) into `src/styles/global.css`
- Import both in `main.jsx`
- For each component, create a matching `.css` file with ONLY the styles relevant to that component
- Port the styles EXACTLY — same class names, same values, same responsive breakpoints
- Each component's responsive styles go in its own CSS file, inside the same media query breakpoints:
  - `@media (max-width: 1024px)` — tablet
  - `@media (max-width: 680px)` — mobile
  - `@media (max-width: 400px)` — small mobile

### 3. CANVAS COMPONENTS
Each canvas animation (HeroCanvas, DemoTracking, DemoSaccades, AmbientBreak, ClosingCanvas) must:
- Use `useRef` for the canvas element
- Use `useEffect` for setup, animation loop, resize listener, and cleanup
- Return a cleanup function that cancels `requestAnimationFrame` on unmount
- Handle canvas resize on window resize
- Port the animation logic EXACTLY from the HTML `<script>` section — same math, same speeds, same colors, same behavior

Example pattern:
```jsx
import { useRef, useEffect } from 'react';

export default function DemoTracking() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      // ... exact animation logic from the HTML file
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="tracking-canvas" />;
}
```

### 4. SCROLL REVEAL
Create a reusable `ScrollReveal` wrapper component that uses `IntersectionObserver` (threshold: 0.15). It should add a `visible` class when the element enters the viewport. Use the same staggered delay pattern from the HTML (80ms * index % 4).

Usage:
```jsx
<ScrollReveal>
  <div className="obs-item">...</div>
</ScrollReveal>
```

Or as a wrapper that handles its own reveal class internally.

### 5. CUSTOM CURSOR
- Must detect touch devices and hide itself (same logic as HTML: check `'ontouchstart' in window`)
- Must set `body.style.cursor = 'auto'` on touch devices
- On desktop: follow mouse with the dot + lagging ring, exactly as in the HTML

### 6. NAVIGATION
- Proposal page navbar: links scroll to section IDs using smooth scroll (same as HTML)
- User stories page navbar: "Back to Proposal" link using React Router `<Link to="/">`
- Mobile hamburger toggle on screens below 680px (same behavior as HTML)
- When navigating between pages with React Router, scroll to top on route change

### 7. LANGUAGE CONTEXT
```jsx
// context/LanguageContext.jsx
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es'); // Default to Spanish
  const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
```

The `LanguageToggle` component should be a small, elegant button in the navbar — fits the design system. Mono font, teal accent. Shows "EN" or "ES" to indicate the CURRENT language, and clicking it switches.

### 8. REACT ROUTER SETUP
```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ProposalPage from './pages/ProposalPage';
import UserStoriesPage from './pages/UserStoriesPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProposalPage />} />
          <Route path="/user-stories" element={<UserStoriesPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
```

### 9. PAGE ASSEMBLY
```jsx
// pages/ProposalPage.jsx
import Navbar from '../components/shared/Navbar';
import ProgressBar from '../components/shared/ProgressBar';
import CustomCursor from '../components/shared/CustomCursor';
import Hero from '../components/proposal/Hero';
import Understanding from '../components/proposal/Understanding';
import StoryArc from '../components/proposal/StoryArc';
import DemoTracking from '../components/proposal/DemoTracking';
import Observations from '../components/proposal/Observations';
import DemoSaccades from '../components/proposal/DemoSaccades';
import Questions from '../components/proposal/Questions';
import Architecture from '../components/proposal/Architecture';
import AmbientBreak from '../components/proposal/AmbientBreak';
import UserStoriesPreview from '../components/proposal/UserStoriesPreview';
import Team from '../components/proposal/Team';
import Timeline from '../components/proposal/Timeline';
import Closing from '../components/proposal/Closing';

export default function ProposalPage() {
  return (
    <>
      <CustomCursor />
      <ProgressBar />
      <Navbar page="proposal" />
      <Hero />
      <Understanding />
      <StoryArc />
      <DemoTracking />
      <Observations />
      <DemoSaccades />
      <Questions />
      <Architecture />
      <AmbientBreak />
      <UserStoriesPreview />
      <Team />
      <Timeline />
      <Closing />
    </>
  );
}
```

Follow the same pattern for `UserStoriesPage.jsx` with the user-stories components.

### 10. LINKS BETWEEN PAGES
- In `UserStoriesPreview.jsx`, the "View Full User Stories & Acceptance Criteria" link should use React Router `<Link to="/user-stories">` instead of `<a href="user-stories.html">`
- In the user stories page navbar and footer, "Back to Proposal" uses `<Link to="/">`
- All internal navigation uses React Router. No `<a href>` for page-to-page navigation.

### 11. FONT IMPORTS
In `index.html` (Vite's HTML shell), include the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Sora:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## SUMMARY OF WHAT TO DO
1. Initialize a Vite React project
2. Install `react-router-dom`
3. Create the folder structure above
4. Extract CSS variables and global styles
5. Create each component with content seeded at top (English complete, Spanish as `[ES]` placeholders)
6. Port CSS exactly per component with responsive breakpoints
7. Port all canvas animations into their own components with proper React lifecycle handling
8. Set up LanguageContext
9. Set up React Router with two routes
10. Assemble both pages
11. Verify everything renders identically to the original HTML files
12. Make sure all links between pages work via React Router

DO NOT:
- Add Tailwind
- Add Framer Motion, GSAP, or any animation library
- Change any visual design, spacing, colors, fonts, or animations
- Change any content or wording
- Add features or sections not in the original HTML files
- Use inline styles where CSS classes exist

The goal is a 1:1 conversion from static HTML to React — same visual result, better architecture.

# Akash Vishwakarma — Portfolio Website Blueprint
### Complete Design, Content & Implementation Reference

> **Document Purpose:** This is the single source of truth for designing and building Akash's developer portfolio. It contains all written content, design decisions, component architecture, UX strategy, and recruiter psychology — ready to implement directly.

---

## Table of Contents

1. [Positioning & Brand Identity](#1-positioning--brand-identity)
2. [Website Structure & Flow](#2-website-structure--flow)
3. [Section-by-Section Content](#3-section-by-section-content)
   - [3.1 Hero](#31-hero)
   - [3.2 About](#32-about)
   - [3.3 Skills](#33-skills)
   - [3.4 Projects](#34-projects)
   - [3.5 Experience](#35-experience)
   - [3.6 Achievements](#36-achievements)
   - [3.7 Contact](#37-contact)
4. [UI/UX Design System](#4-uiux-design-system)
5. [Component Architecture](#5-component-architecture)
6. [Project Showcase Strategy](#6-project-showcase-strategy)
7. [Tech Stack & Implementation](#7-tech-stack--implementation)
8. [Recruiter Psychology Layer](#8-recruiter-psychology-layer)
9. [SEO & Performance](#9-seo--performance)
10. [Launch Checklist](#10-launch-checklist)

---

## 1. Positioning & Brand Identity

### Core Brand Statement
> "I build complete, production-grade software — from intelligent backends to polished user interfaces."

### Target Audience
- Startup engineering teams (Series A–C) looking for versatile SDE interns/juniors
- Mid-size product companies (Postman, Razorpay, Groww, Freshworks, BrowserStack)
- Recruiters scanning for: MERN, Node.js, React, AI/LLM integration, full-stack

### Differentiation Pillars
These are the 4 things that make Akash stand out — every section of the portfolio should reinforce at least one:

| Pillar | Proof Point |
|---|---|
| **Ships real products** | WealthWise — live at mywealthwise.in with 50+ users |
| **AI/LLM depth** | RAG pipelines, LangChain, LangGraph — rare at undergrad level |
| **Competitive execution** | SIH Grand Finalist (Top 5/500+), 2× Hackathon 1st place |
| **Engineering quality** | 40% DB optimization, 99.9% uptime, 9.0 CGPA |

### Tone of Voice
- Confident, not arrogant
- Specific, not vague
- Results-driven, not task-driven
- Human, not corporate

### Domain Suggestion
`akashvishwakarma.dev` or `akashv.dev` — `.dev` signals a developer instantly

---

## 2. Website Structure & Flow

A recruiter spends 8–15 seconds on first pass. This structure is designed for that reality.

```
┌─────────────────────────────────────────┐
│  NAVBAR          Logo + Nav + CTA       │  ← Always visible, minimal
├─────────────────────────────────────────┤
│  HERO            Hook in 3 seconds      │  ← Name, role, tagline, CTAs
├─────────────────────────────────────────┤
│  ABOUT           Who you are + why      │  ← 4–5 sentences, photo, links
├─────────────────────────────────────────┤
│  SKILLS          Visual skill grid      │  ← Grouped, scannable
├─────────────────────────────────────────┤
│  PROJECTS        Your best work         │  ← 4 cards, hero project first
├─────────────────────────────────────────┤
│  EXPERIENCE      Work history           │  ← Timeline format
├─────────────────────────────────────────┤
│  ACHIEVEMENTS    Social proof           │  ← Badge/card strip
├─────────────────────────────────────────┤
│  CONTACT         Conversion section     │  ← Form + links + availability
├─────────────────────────────────────────┤
│  FOOTER          Links + copyright      │  ← Minimal
└─────────────────────────────────────────┘
```

### Recruiter Scan Path (F-Pattern)
1. **Name + Role** (hero, top-left)
2. **One-liner tagline** (hero, below name)
3. **Project names + metrics** (projects section, card titles)
4. **Company names** (experience section)
5. **Contact CTA** (navbar + contact section)

---

## 3. Section-by-Section Content

### 3.1 Hero

**Purpose:** Make a recruiter stop scrolling within 3 seconds. The hero must communicate who you are, what you do, and give a next action — all above the fold.

---

**Greeting line (small, above name):**
```
Hi, I'm
```

**Name (large display text):**
```
Akash Vishwakarma
```

**Role / Tagline (medium, one line):**
```
Full-Stack Engineer & AI Integration Specialist
```

**Sub-tagline (body text, 1–2 lines):**
```
I build production-ready MERN applications with intelligent features —
from MongoDB schemas to LangChain pipelines.
```

**CTA Buttons:**
```
[View My Work]   [Download Resume]
```

**Social Links (icon row below CTAs):**
- GitHub → `github.com/akashvishwakarma` (verify handle)
- LinkedIn → `linkedin.com/in/akashvishwakarma2004`
- Email → `vishwakarmaakashav17@gmail.com`
- Live Project → `mywealthwise.in` (small "Live →" badge)

**Visual Element Options (choose one):**
- Option A: Animated terminal/code window showing a real snippet from WealthWise
- Option B: Floating card showing live WealthWise stats (users, uptime)
- Option C: Abstract geometric mesh animation in brand colors
- Recommended: **Option A** — it's immediately "developer coded this"

**Scroll indicator:**
```
↓ Scroll to explore
```

---

### 3.2 About

**Purpose:** Build trust and humanize. Recruiters want to know they're hiring a person, not a resume. Keep this tight — 4–5 sentences max.

---

**Section Heading:**
```
About Me
```

**Body Copy:**
```
I'm a Computer Engineering student at SIES Graduate School of Technology, 
Navi Mumbai (CGPA: 9.0), with hands-on production experience building 
full-stack applications that real users actually use.

I specialize in the MERN stack and AI-integrated development — 
I've shipped WealthWise, a live financial planning app serving 50+ active users, 
and built RAG-based AI systems using LangChain and LangGraph long before 
they became buzzwords in job descriptions.

Beyond the code, I've competed at the national level — reaching the Grand Finals 
of Smart India Hackathon 2025 (Top 5 from 500+ teams) and winning two 
first-place hackathon titles. I'm driven by building things that are both 
technically sound and genuinely useful.

Currently seeking internship and full-time SDE opportunities where I can 
contribute to a high-quality engineering team and keep shipping.
```

**Photo:** Professional headshot or high-quality casual photo. Place to the right of text on desktop, above on mobile.

**Quick-stat chips (optional — adds scannability):**
```
[🎓 B.E. CSE @ SIES GST]   [⚡ 9.0 CGPA]   [🚀 50+ Live Users]   [🏆 3× Hackathon Winner]
```

---

### 3.3 Skills

**Purpose:** Give recruiters a fast, scannable picture of your technical stack. Avoid percentage bars — they're meaningless. Use grouped categories instead.

---

**Section Heading:**
```
Technical Skills
```

**Layout:** 3-column grid on desktop, 2-column on tablet, 1-column on mobile

**Group 1 — Frontend**
```
React.js · Next.js · TypeScript · JavaScript (ES6+) 
HTML5 · CSS3 · Tailwind CSS · ShadCN-UI · Responsive Design
```

**Group 2 — Backend**
```
Node.js · Express.js · RESTful APIs
Flask · FastAPI · Python
```

**Group 3 — Databases**
```
MongoDB (schema design, indexing, query optimization)
MySQL · SQLite
```

**Group 4 — AI / LLM**
```
LangChain · LangGraph · RAG Architecture
OpenAI API · Gemini API · Pinecone · ChromaDB
HuggingFace Embeddings · Prompt Engineering
```

**Group 5 — Tools & DevOps**
```
Git · GitHub · Docker · Postman
Google OAuth · CI/CD Workflows
```

**Group 6 — Core CS**
```
Data Structures & Algorithms · OOP
System Design · Database Design
```

**Presentation Tip:** Each group as a card with a small icon and category label. Skills inside the card as pill/badge chips. Subtle hover effect on each chip.

---

### 3.4 Projects

**Purpose:** This is the most important section. Projects are proof of ability. Each project should tell a story: what problem, how solved, what impact.

---

**Section Heading:**
```
Projects
```

**Sub-heading:**
```
Things I've built and shipped
```

**Project 1 — Hero Project (full-width featured card)**

```
WealthWise — AI Financial Planning Platform

Status: [🟢 Live]  |  Users: 50+ Active  |  Uptime: 99.9%

A full-stack financial web app that helps users track expenses, set goals, 
and receive AI-powered budget recommendations — built and shipped to real users.

Key Contributions:
→ Architected full MERN stack from scratch (Next.js + Node.js + MongoDB)
→ Integrated Gemini AI API for personalised financial recommendations
→ Built secure Google OAuth + OTP authentication system
→ Added multilingual support for 10 Indian languages (+60% accessibility)
→ Designed scalable MongoDB schemas and reusable React component library

Stack: Next.js · React.js · Node.js · Express.js · MongoDB · Gemini API · Tailwind CSS

[🔗 Live Demo]   [📂 GitHub]
```

**Project 2 — AI/LLM Depth Showcase**

```
AI Agent — Chat-with-Data System

A production-grade RAG (Retrieval-Augmented Generation) system that answers 
natural language queries over custom datasets with semantic search and 
context-aware responses.

Key Contributions:
→ Built end-to-end RAG pipeline: ingestion → chunking → embedding → retrieval
→ Integrated LangGraph for multi-step reasoning and workflow orchestration
→ Used Pinecone + ChromaDB for vector database retrieval
→ Applied prompt engineering to reduce hallucinations
→ Exposed full system via REST APIs for real-world integration

Stack: LangChain · LangGraph · Node.js · Pinecone · ChromaDB · OpenAI API · Gemini API

[📂 GitHub]
```

**Project 3 — Hackathon Win**

```
PRAMAN.AI — Climate Displacement Intelligence System
🏆 1st Place · CodeByte 2.0 · TECH ZEPHYR 2026 Hackathon (24 hours)

A real-time climate displacement tracking and risk assessment system 
built under 24-hour hackathon conditions.

Stack: [Add stack from project]

[📂 GitHub]
```

**Project 4 — Production Team Experience**

```
Memewarzz — Social Media Platform
Built during internship at AIBI Street Pvt. Ltd.

A production MERN stack social media platform built and deployed as part 
of a 4-engineer agile team.

Key Contributions:
→ Contributed to Next.js + Node.js + MongoDB architecture
→ Optimised UI and component architecture → +35% user engagement
→ Engineered MongoDB indexing strategies → -40% query response time
→ Developed 10+ RESTful API endpoints with validation and rate limiting

Stack: Next.js · Node.js · MongoDB · React.js · Git/CI-CD

[📂 GitHub]
```

**Additional CTA below projects:**
```
[→ View All Projects on GitHub]
```

---

### 3.5 Experience

**Purpose:** Validate professional credibility. Even two internships matter for a student profile.

---

**Section Heading:**
```
Experience
```

**Layout:** Vertical timeline (left-border accent line with dots)

**Entry 1:**
```
Full-Stack Developer Intern
AIBI Street Pvt. Ltd. (Remote)
Jan 2024 – Aug 2024  |  8 months

• Built and deployed Memewarzz — production MERN platform boosting engagement by 35%
• Engineered MongoDB schemas with advanced indexing → 40% query time reduction
• Developed 10+ RESTful API endpoints (validation, error handling, rate limiting) → 99.9% uptime
• Collaborated in 4-engineer agile team with peer code reviews and Git/CI-CD workflows
```

**Entry 2:**
```
Software Development Intern
Sumago Infotech Pvt. Ltd.
July 2023 – Aug 2023  |  2 months

• Completed intensive programme on LMS architecture, SDLC, and full-stack workflows
• Improved code quality by 25% via systematic testing and debugging under senior mentorship
```

**Education (can be inline here or as a separate subsection):**

```
B.E. in Computer Engineering — CGPA: 9.0
SIES Graduate School of Technology, Navi Mumbai
2024 – Present (Expected: 2027)

Diploma in Computer Engineering — 90%
Government Polytechnic, Thane
2022 – 2024
```

---

### 3.6 Achievements

**Purpose:** This section is your social proof and national-level credibility. Most candidates skip this or bury it. You should highlight it prominently.

---

**Section Heading:**
```
Recognition & Achievements
```

**Sub-heading:**
```
Competing and winning at the national level
```

**Layout:** Horizontal scroll strip on mobile, 2–3 column card grid on desktop

**Achievement Cards (each card has: icon, title, event, context):**

```
🥇  1st Place — CodeByte 2.0
    TECH ZEPHYR 2026 Hackathon (24 hours)
    Built PRAMAN.AI — climate displacement intelligence system

🥇  1st Place — PitchCraft 2025
    E-Cell SIESGST Entrepreneurship Competition
    Pitched WealthWise among 50+ competing teams

🏆  Grand Finalist — Smart India Hackathon 2025
    Top 5 Nationwide from 500+ teams
    Built crowdsourced ocean hazard platform under Ministry of Earth Sciences

⭐  Technical Star Award — SIES GST (AY 2025–26)
    Recognised for exemplary academic and technical excellence

🚀  Eureka! 2025 Pre-Zonal — IIT Bombay
    Shortlisted to pitch WealthWise before startup mentors and industry judges

🔬  Anveshana Science & Engineering Fair 2025
    Selected Top 40 from 1,300+ national entries
```

---

### 3.7 Contact

**Purpose:** Convert interest into action. Make it effortless to reach you. This section's job is to remove all friction.

---

**Section Heading:**
```
Let's Build Something
```

**Sub-heading:**
```
I'm actively looking for internships and SDE roles.
If you're building something interesting — I'd love to hear about it.
```

**Availability Banner:**
```
🟢 Open to Opportunities — Available from [Month Year]
```

**Contact Form Fields:**
- Name (text input)
- Email (email input)
- Subject dropdown: `Job Opportunity / Internship / Collaboration / Other`
- Message (textarea, min 3 lines)
- [Send Message] button

**Alternative Contact Block (right column or below form):**
```
📧  vishwakarmaakashav17@gmail.com
💼  linkedin.com/in/akashvishwakarma2004
💻  github.com/[your-handle]
📍  Thane, Mumbai — Open to Remote & Relocation
```

**Formspree or EmailJS:** Use either for form handling without a backend.

---

## 4. UI/UX Design System

### Aesthetic Direction

**Theme:** Dark-first, premium developer aesthetic  
**Vibe:** Like the documentation of a well-funded devtool startup — refined, technical, confident  
**Reference feel:** Linear.app + Vercel.com + Resend.com

This is NOT a colorful creative portfolio. It is clean, dark, and precise — the kind of portfolio that says "I write good code" before you read a single word.

---

### Color Palette

```css
/* Core */
--bg-primary:     #0A0A0F;   /* Near-black background */
--bg-secondary:   #111118;   /* Card / surface background */
--bg-elevated:    #1A1A24;   /* Hover / elevated card */
--border:         #2A2A38;   /* Subtle borders */
--border-bright:  #3D3D55;   /* Active borders */

/* Text */
--text-primary:   #F0F0FF;   /* Headlines */
--text-secondary: #9090B0;   /* Body copy */
--text-muted:     #5A5A75;   /* Labels, captions */

/* Accent — Electric Indigo */
--accent:         #6C63FF;   /* Primary CTAs, highlights */
--accent-hover:   #857EFF;   /* Hover state */
--accent-glow:    rgba(108, 99, 255, 0.15); /* Glow effects */

/* Status */
--green:          #22C55E;   /* Live status, success */
--yellow:         #F59E0B;   /* Warnings, in-progress */

/* Gradient */
--gradient-hero:  linear-gradient(135deg, #6C63FF 0%, #A78BFA 50%, #C084FC 100%);
--gradient-text:  linear-gradient(90deg, #6C63FF, #C084FC);
```

---

### Typography

```css
/* Display Font — for name and major headings */
font-family: 'Syne', sans-serif;
/* Google Fonts: https://fonts.google.com/specimen/Syne */
/* Character: Geometric, confident, modern — not overused */

/* Body Font — for all body copy and UI text */
font-family: 'DM Sans', sans-serif;
/* Google Fonts: https://fonts.google.com/specimen/DM+Sans */
/* Character: Clean, humanist, readable at small sizes */

/* Monospace — for code snippets, tech tags, terminal */
font-family: 'JetBrains Mono', monospace;
/* Google Fonts: https://fonts.google.com/specimen/JetBrains+Mono */
```

**Type Scale (Tailwind custom or CSS vars):**

```css
--text-xs:    0.75rem;    /* 12px — labels, badges */
--text-sm:    0.875rem;   /* 14px — captions, secondary */
--text-base:  1rem;       /* 16px — body */
--text-lg:    1.125rem;   /* 18px — lead text */
--text-xl:    1.25rem;    /* 20px — card titles */
--text-2xl:   1.5rem;     /* 24px — section headings */
--text-3xl:   1.875rem;   /* 30px — subheadings */
--text-5xl:   3rem;       /* 48px — hero tagline */
--text-7xl:   4.5rem;     /* 72px — hero name */
```

---

### Spacing System

Use a base-8 spacing scale throughout:
```
4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px · 128px
```

Section padding (vertical): `96px` on desktop, `64px` on tablet, `48px` on mobile  
Content max-width: `1200px`  
Card padding: `32px`  
Card gap: `24px`

---

### Layout Principles

- **Dark background cards** slightly lighter than page bg (`--bg-secondary`) with `1px border`
- **No flat gradients as backgrounds** — use grain/noise texture overlay for depth
- **Hero section** should have a subtle radial gradient glow behind the name (`--accent-glow`)
- **Section dividers** — use whitespace, not `<hr>` lines
- **Asymmetry** — hero text left-aligned with visual element on right (not centered)
- **Sticky navbar** with backdrop blur on scroll: `backdrop-filter: blur(12px)`

---

### Micro-Interactions & Animations

| Element | Animation |
|---|---|
| Page load | Staggered fade-up: navbar → hero text → CTA (each 100ms delay) |
| Hero name | Gradient text shimmer on load |
| Nav links | Underline slide-in on hover |
| Project cards | Lift + border-glow on hover (`translateY(-4px)` + box-shadow) |
| Skill chips | Scale + accent background on hover |
| CTA buttons | Shimmer sweep effect on hover |
| Section reveal | `IntersectionObserver` fade-up (threshold: 0.15) |
| Achievement cards | Subtle tilt on hover (CSS `perspective` transform) |
| Terminal widget (hero) | Typewriter animation on load |

**Rule:** All transitions use `ease-out` at `200–300ms`. No bouncy springs in a developer portfolio — it reads as immature.

---

### Design Do's and Don'ts

**✅ DO**
- Use `monospace` font for tech stack chips/badges
- Show metrics on every project card (`50+ users`, `40% faster`)
- Keep the navbar minimal — logo + 5 links max + one CTA button
- Use icons (Lucide React) for section context, not decoration
- Add a `[🟢 Live]` or `[🔧 In Dev]` status badge to every project
- Use `letter-spacing: 0.1em; text-transform: uppercase` for section labels (small caps treatment)
- Make every CTA button look clickable (contrast, padding, hover state)

**❌ DON'T**
- Don't use skill progress bars / percentages — they're subjective and look amateurish
- Don't use purple-gradient-on-white — it's the #1 generic AI portfolio cliché
- Don't write "I am a passionate developer who loves to solve problems"
- Don't use clip-art / stock photo illustrations (Undraw, etc.)
- Don't center all text — left-aligned body copy is more readable and professional
- Don't use carousel/slider for projects — show all cards at once
- Don't add a "Loading Screen" — it only adds friction
- Don't put education before experience on the page

---

## 5. Component Architecture

### Next.js App Router Structure

```
/app
  layout.tsx          ← Root layout (fonts, metadata, analytics)
  page.tsx            ← Home page (renders all sections in order)
  /projects/[slug]    ← (Optional) Individual project detail pages

/components
  /layout
    Navbar.tsx
    Footer.tsx
    Section.tsx       ← Reusable section wrapper with padding + fade-in

  /sections
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Achievements.tsx
    Contact.tsx

  /ui
    Button.tsx        ← Primary, Secondary, Ghost variants
    Badge.tsx         ← Tech stack chips, status badges
    Card.tsx          ← Base card with hover animation
    ProjectCard.tsx   ← Extends Card with project-specific layout
    AchievementCard.tsx
    ExperienceItem.tsx
    SkillGroup.tsx
    Terminal.tsx      ← Animated terminal for hero section
    GradientText.tsx  ← Shimmer gradient text wrapper
    ScrollReveal.tsx  ← IntersectionObserver fade-up wrapper

/lib
  constants.ts        ← All content data (projects, skills, experience, etc.)
  utils.ts
  metadata.ts         ← SEO metadata config

/public
  /images
    akash-photo.jpg
    /projects
      wealthwise-preview.png
      ai-agent-preview.png
      praman-preview.png
  resume.pdf          ← Direct download link
  favicon.ico
  og-image.png        ← 1200×630 Open Graph image
```

### Data Architecture

Keep all content in `lib/constants.ts`. This separates content from presentation and makes updates easy:

```typescript
// lib/constants.ts

export const PROJECTS = [
  {
    id: "wealthwise",
    title: "WealthWise",
    tagline: "AI Financial Planning Platform",
    description: "...",
    metrics: ["50+ active users", "99.9% uptime", "10 Indian languages"],
    stack: ["Next.js", "Node.js", "MongoDB", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://www.mywealthwise.in",
    githubUrl: "https://github.com/...",
    status: "live",
    featured: true,
  },
  // ...
];

export const SKILLS = {
  Frontend: ["React.js", "Next.js", "TypeScript", ...],
  Backend: ["Node.js", "Express.js", "Python", ...],
  // ...
};

export const EXPERIENCE = [ ... ];

export const ACHIEVEMENTS = [ ... ];
```

---

## 6. Project Showcase Strategy

### Storytelling Framework (use for every project)

Each project card should answer these 4 questions implicitly:

```
1. WHAT:   What does it do? (1 sentence, user-facing)
2. WHY:    What problem does it solve?
3. HOW:    What was technically interesting or hard?
4. RESULT: What was the measurable impact?
```

### Project Card Layout (visual structure)

```
┌────────────────────────────────────────────────┐
│  [Status Badge: 🟢 Live]          [Tech chips] │
│                                                 │
│  Project Title (text-xl, Syne font)            │
│  One-liner tagline (text-sm, muted)            │
│                                                 │
│  Description (2–3 lines, body text)            │
│                                                 │
│  ─────────────────────────────────────         │
│  Key metric 1  ·  Key metric 2  ·  Metric 3   │
│  ─────────────────────────────────────         │
│                                                 │
│  [🔗 Live Demo]          [📂 GitHub]           │
└────────────────────────────────────────────────┘
```

### Visuals for Each Project

| Project | Recommended Visual |
|---|---|
| WealthWise | Browser mockup screenshot of dashboard — embed as `<Image>` in card header |
| AI Agent | Architecture diagram (LangChain pipeline flow) — create in Excalidraw, export as SVG |
| PRAMAN.AI | Hackathon submission screenshot or team photo if available |
| Memewarzz | Note: may need permission from employer before showing — use description only if unsure |

### Optional: Project Detail Pages (`/projects/[slug]`)

For WealthWise and AI Agent, consider a full case study page with:
- Problem statement
- Technical architecture diagram
- Key decisions and tradeoffs
- Challenges and how you solved them
- Screenshots or demo video embed
- Link back to live demo and GitHub

This shows senior-engineer thinking. Most interns don't have this. It's a significant differentiator.

---

## 7. Tech Stack & Implementation

### Recommended Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSG for performance, file-based routing, built-in optimization |
| Styling | **Tailwind CSS v3** | Fast iteration, consistent spacing, utility-first |
| UI Components | **Shadcn/ui** (selectively) | Accessible base components, fully customizable |
| Animations | **Framer Motion** | Scroll animations, staggered reveals, page transitions |
| Icons | **Lucide React** | Clean, consistent icon set |
| Fonts | Google Fonts (Syne + DM Sans + JetBrains Mono) | Load via `next/font` for performance |
| Form Handling | **Formspree** or **EmailJS** | No backend needed for contact form |
| Hosting | **Vercel** | Free tier, instant deploys, custom domain, analytics |
| Analytics | **Vercel Analytics** or **Umami** | Privacy-friendly, lightweight |

### Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

### Key Implementation Notes

```typescript
// next.config.ts — enable image optimization
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [...],
  },
};

// Use next/font for zero layout shift
import { Syne, DM_Sans } from 'next/font/google';

// Use next/image for all images — never raw <img>
import Image from 'next/image';

// Prefer CSS animations over JS for simple effects
// Use Framer Motion only for scroll-triggered and complex sequences
```

---

## 8. Recruiter Psychology Layer

### What Happens in the First 10 Seconds

A recruiter opens your portfolio with one question: **"Is this person worth 5 more minutes of my time?"**

They scan in this order:
1. **Name + current role/status** → "Is this a student or professional?"
2. **Tagline** → "What do they actually do?"
3. **One or two project names** → "Have they built anything real?"
4. **Company names** → "Any recognized employers?"
5. **Contact CTA** → "Is this person available?"

**Design for this scan.** The information hierarchy in your layout must match this order exactly.

### Conversion Triggers

These elements increase the probability of a recruiter taking action:

| Trigger | Implementation |
|---|---|
| **Social proof** | "Top 5 from 500+ teams" next to SIH — specificity signals credibility |
| **Live product** | `[🟢 mywealthwise.in]` — a live URL beats a GitHub link for non-technical recruiters |
| **Availability signal** | "🟢 Open to opportunities" banner in the contact section |
| **Quantified impact** | Every bullet point with a number (35%, 40%, 50+ users) |
| **Download friction removal** | Resume PDF opens in new tab on one click — no email wall |
| **Response time signal** | "I typically respond within 24 hours" in contact section |

### Words That Work vs. Words That Don't

| ❌ Avoid | ✅ Use Instead |
|---|---|
| "Passionate about technology" | "Built WealthWise — live at mywealthwise.in" |
| "Strong problem-solving skills" | "Reduced query latency by 40% via MongoDB indexing" |
| "Team player" | "Collaborated in a 4-engineer agile team at AIBI Street" |
| "Fast learner" | "Implemented LangChain RAG pipelines independently" |
| "Looking to grow" | "Seeking SDE internship to contribute to production systems" |

### ATS Keyword Coverage

Ensure these keywords appear naturally in your portfolio's readable text (for future job board scrapers and ATS systems if you add a downloadable version):

`React.js · Node.js · MongoDB · Express.js · Next.js · TypeScript · REST API · LangChain · RAG · Full Stack · MERN · JavaScript · Python · Docker · CI/CD · Git · Agile · System Design`

---

## 9. SEO & Performance

### Metadata (`lib/metadata.ts`)

```typescript
export const siteMetadata = {
  title: "Akash Vishwakarma — Full-Stack Engineer & AI Developer",
  description:
    "Portfolio of Akash Vishwakarma — MERN stack developer and AI integration specialist. Built WealthWise (50+ live users) and AI agent systems using LangChain and RAG.",
  url: "https://akashvishwakarma.dev",
  ogImage: "/og-image.png", // 1200×630px
  twitterHandle: "@akashv", // update if applicable
  keywords: [
    "Akash Vishwakarma",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer Mumbai",
    "LangChain Developer",
    "SDE Intern India",
    "WealthWise App",
    "AI Developer India",
  ],
};
```

### Open Graph Image

Create a `1200×630` static image with:
- Your name (large, Syne font)
- Role: "Full-Stack Engineer & AI Developer"
- Brand accent color background
- Profile photo (right side)
- Subtle gradient or mesh background

Tools: Figma, Canva, or auto-generate with `@vercel/og`

### Structured Data (JSON-LD)

Add Person schema to `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Akash Vishwakarma",
  "url": "https://akashvishwakarma.dev",
  "sameAs": [
    "https://linkedin.com/in/akashvishwakarma2004",
    "https://github.com/[your-handle]"
  ],
  "jobTitle": "Full-Stack Developer",
  "alumniOf": "SIES Graduate School of Technology"
}
```

---

## 10. Launch Checklist

### Content
- [ ] Hero section written and reviewed
- [ ] About section written (no generic phrases)
- [ ] All 4 projects added with metrics and links
- [ ] Experience entries verified for accuracy
- [ ] All 6 achievements added with specifics
- [ ] Contact form tested end-to-end
- [ ] Resume PDF uploaded to `/public/resume.pdf`
- [ ] Professional photo added
- [ ] All GitHub links verified (repos are public)
- [ ] WealthWise live demo link confirmed working

### Design & UX
- [ ] Dark theme implemented correctly
- [ ] All 3 fonts loading via `next/font`
- [ ] Color variables defined in CSS / Tailwind config
- [ ] Mobile layout tested (375px, 414px)
- [ ] Tablet layout tested (768px)
- [ ] Desktop layout tested (1280px, 1440px)
- [ ] Scroll animations working (not playing on reduced-motion)
- [ ] All hover states implemented
- [ ] Navbar sticky + blur working on scroll
- [ ] No layout shift on load (CLS < 0.1)

### Technical
- [ ] `next/image` used for all images
- [ ] `next/font` used for all fonts
- [ ] Open Graph image created and tested (use opengraph.xyz)
- [ ] JSON-LD structured data added
- [ ] Sitemap generated (`next-sitemap` package)
- [ ] `robots.txt` present
- [ ] Lighthouse score ≥ 90 on all metrics
- [ ] 404 page created
- [ ] Custom domain connected on Vercel
- [ ] HTTPS verified

### Pre-Launch
- [ ] Spell-check all content
- [ ] All external links open in `target="_blank" rel="noopener noreferrer"`
- [ ] Contact form sends to correct email
- [ ] Google Analytics / Vercel Analytics enabled
- [ ] Shared with 2–3 trusted peers for feedback before publishing
- [ ] LinkedIn updated with portfolio URL
- [ ] Resume updated with portfolio URL

---

## Appendix: Quick Reference Card

| Section | Key Message | Primary CTA |
|---|---|---|
| Hero | "I build production MERN + AI apps" | View Work / Download Resume |
| About | "Real experience, national-level wins" | — |
| Skills | Breadth + AI depth | — |
| Projects | WealthWise leads, AI Agent shows depth | Live Demo + GitHub |
| Experience | AIBI Street = production credibility | — |
| Achievements | SIH + 2× 1st place = execution proof | — |
| Contact | Open to opportunities | Send Message |

---

*Blueprint version 1.0 — Created for Akash Vishwakarma's 2025–26 job search*  
*Update this document as projects are added or roles change.*

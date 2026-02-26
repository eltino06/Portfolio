# Santino Bondioni — Portfolio

A modern, performant, and visually stunning developer portfolio built with **Next.js 14+**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

---

## 🚀 Features

- **Dark mode by default**, Light mode toggle (persists in localStorage)
- **Animated Hero** with typewriter effect, particle canvas, and gradient avatar
- **Scroll-aware Navbar** (hides on scroll down, reveals on scroll up) with active section highlighting
- **About** section with animated stat counters, quick facts, and education timeline
- **Skills** with category filter and animated progress bars
- **Projects** with filter (All / Frontend / Backend / FullStack), hover effects, and detail modal
- **Experience** vertical timeline
- **Contact** form with React Hook Form + Zod validation and Resend email integration
- **Fully responsive** (mobile-first, sm→xl)
- **Lighthouse 95+** target (next/image, next/font, minimal bundle)

---

## 📁 File Structure

```
/app
  layout.tsx          # SEO metadata + ThemeProvider + Sonner
  page.tsx            # Main SPA page
  globals.css         # CSS variables + utilities
  sitemap.ts          # Auto-generated sitemap
  /api/contact        # Resend email handler

/components
  /ui                 # Button, Badge, Card, Section, AnimatedCounter
  /sections           # Hero, About, Skills, Projects, Experience, Contact
  /layout             # Navbar, Footer, ThemeToggle

/lib
  data.ts             # ⭐ EDIT THIS FILE — all portfolio content
  utils.ts            # cn() helper
  validations.ts      # Zod contact schema

/hooks
  useScrollSpy.ts
  useTheme.ts
```

---

## ⚡ Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
RESEND_API_KEY=re_your_actual_key
RESEND_FROM_EMAIL=onboarding@resend.dev   # or verified domain
RESEND_TO_EMAIL=your@email.com            # where to receive messages
```

> **Note:** Without `RESEND_API_KEY`, the contact form still works — messages are logged to the console in development mode.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✏️ Personalizing Your Portfolio

**Only edit one file:** `lib/data.ts`

| Section | What to update |
|---------|---------------|
| Personal Info | `personalInfo` — name, bio, email, socials |
| Stats | `stats` — years exp, projects, etc. |
| Skills | `skillCategories` — add/remove skills per category |
| Projects | `projects[]` — title, description, stack, links |
| Experience | `experiences[]` — company, role, achievements |
| Education | `education[]` — institution, degree, progress |

---

## 🌐 Deploy to Vercel

1. Push your repo to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard
4. Deploy!

```bash
# Or via CLI
npx vercel --prod
```

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | App Router framework |
| TypeScript 5 | Type safety |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| next-themes | Dark/Light mode |
| Lucide React | Icons |
| React Icons | Tech stack icons |
| React Hook Form | Form state |
| Zod | Validation |
| Resend | Email sending |
| Sonner | Toast notifications |

---

## 📄 License

MIT © 2025 Santino Bondioni

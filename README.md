# ITACC — AI Creative Suite

Professional AI website built with **Next.js 16**, **Tailwind CSS v4**, and **shadcn/ui** components.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives + class-variance-authority)
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts
- **Deployment**: Vercel-ready

## Project Structure

```
itacc-ai/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page (assembles all sections)
├── components/
│   ├── ui/
│   │   └── button.tsx     # shadcn/ui Button component
│   ├── Navbar.tsx         # Sticky nav with scroll effect + mobile menu
│   ├── Hero.tsx           # Hero section with stats
│   ├── PreviewGrid.tsx    # Visual asset grid showcase
│   ├── Features.tsx       # 6-card features section
│   ├── Tools.tsx          # Interactive tabbed tools showcase
│   ├── Pricing.tsx        # 3-tier pricing cards
│   ├── CTA.tsx            # Final call-to-action
│   └── Footer.tsx         # Site footer
├── lib/
│   └── utils.ts           # cn() utility (clsx + tailwind-merge)
├── vercel.json            # Vercel deployment config
└── next.config.ts         # Next.js config (standalone output)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables required for the base site.

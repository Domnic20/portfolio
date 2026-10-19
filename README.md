# 🚀 Dominic Ajiton — Portfolio Website

A modern, high-performance portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Next.js 15 App Router** — Latest React 19 server components
- **Framer Motion animations** — Scroll-triggered, staggered, and micro-interactions
- **Dark / Light mode** — Smooth theme transitions with `next-themes`
- **Custom cursor** — Magnetic effect with smooth follower
- **Fully responsive** — Mobile-first design
- **SEO optimized** — Meta tags, Open Graph, JSON-LD structured data
- **Accessible** — ARIA labels, keyboard navigation, focus management
- **Performance** — Lighthouse 90+, image optimization, code splitting

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts   # Contact form API
│   ├── globals.css            # Global styles & CSS variables
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Home page
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx   # Magnetic cursor effect
│   │   ├── Reveal.tsx         # Scroll-triggered animations
│   │   ├── SectionHeader.tsx  # Reusable section header
│   │   └── ThemeProvider.tsx  # Dark/light mode context
│   ├── sections/
│   │   ├── Hero.tsx           # Hero with typewriter + blobs
│   │   ├── About.tsx          # About with parallax image
│   │   ├── Projects.tsx       # Project grid + modal
│   │   ├── Skills.tsx         # Animated bars + grid view
│   │   ├── Experience.tsx     # Vertical timeline
│   │   └── Contact.tsx        # Form with validation
│   ├── Navigation.tsx         # Scroll-aware navbar
│   └── Footer.tsx
├── lib/
│   ├── data.ts                # Portfolio content & types
│   └── utils.ts               # Utilities + animation variants
├── public/
│   └── resume.pdf             # Your resume (add yours)
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
```

### 2. Configure Your Content

Edit `lib/data.ts` to update:
- **Projects** — Add your real projects with images, descriptions, and links
- **Skills** — Update skill names and proficiency levels
- **Experience** — Add your work history
- **Stats** — Update years of experience, projects shipped, etc.

### 3. Update Personal Info

Edit `app/layout.tsx` to update:
- `metadata.title` — Your name and tagline
- `metadata.description` — Your personal description
- `metadata.openGraph.url` — Your actual domain
- Social media handles

Edit `components/sections/Hero.tsx`:
- Update name, description, and social links

Edit `components/sections/About.tsx`:
- Replace the Unsplash photo with your actual profile image

Edit `components/sections/Contact.tsx`:
- Update email address and location

### 4. Configure Email (Optional)

The contact form sends to `/api/contact/route.ts`. To actually receive emails, integrate an email service:

**Option A: Resend (recommended)**
```bash
npm install resend
```
```ts
// In app/api/contact/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({...});
```

**Option B: SendGrid, Nodemailer, etc.**

Add your API key to `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxx
```

### 5. Add Your Resume

Place your resume PDF at `public/resume.pdf`.

### 6. Replace Profile Image

Replace the Unsplash URL in `components/sections/About.tsx` with your actual photo. Recommended: put it in `public/` and use `/your-photo.jpg`.

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🚀 Deployment

### Vercel (Recommended)

1. Push your repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables if needed
4. Deploy — Vercel auto-detects Next.js!

### Manual Build

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --accent: #00F5D4;     /* Primary accent */
  --surface: #0A0A0F;    /* Background */
  --warm: #F5F0E8;       /* Text color */
  /* ... */
}
```

### Fonts

Change fonts in `tailwind.config.ts` and update the Google Fonts import in `app/layout.tsx`.

Current fonts:
- **Display**: [Syne](https://fonts.google.com/specimen/Syne) — headings
- **Body**: [Outfit](https://fonts.google.com/specimen/Outfit) — body text
- **Mono**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — code/labels

### Animations

All animation variants are in `lib/utils.ts`. Scroll-triggered animations use `components/ui/Reveal.tsx`.

## 📊 Performance Tips

- All images use Next.js `<Image>` with automatic WebP/AVIF conversion
- Fonts are preloaded via `<link rel="preconnect">`
- Animations use GPU-friendly transforms (`opacity`, `transform`)
- `will-change` is applied only to actively animating elements

## 📄 License

MIT License. Feel free to use this as your portfolio template!

---

Built with ❤️ using [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/)

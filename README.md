# Modern Developer Portfolio & Showcase Website

A clean, responsive, and modern personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Shadcn UI**, and **Zod**. This project is structured with modular design practices, featuring decoupled static/mock data, re-usable UI primitives, and full form validation.

🌐 **Live Demo:** [portfolio-project-joash.vercel.app](https://portfolio-project-joash.vercel.app/)

## 🚀 Features

- 📱 **Fully Responsive Layout**: Designed for seamless browsing across mobile, tablet, and desktop devices.

- ⚡ **Next.js App Router**: Optimized performance, page routing, and metadata handling.

- 🎨 **Tailwind CSS & Shadcn UI**: Customizable design system with accessible components (Accordion, Avatar, Buttons, Inputs, etc.).

- ✨ **Framer Motion Animations**: Smooth section transitions, interactive micro-interactions, and engaging user experience.

- 🛠️ **Modular Architecture**: Clear separation of concerns between UI primitives, page sections, data constants, and validation schemas.

- 📑 **Dynamic Sections**:
  - **Hero Section**: Catchy header with introduction and call-to-actions.

  - **About Me**: Brief bio, core philosophy, and highlights.

  - **Skillset**: Technical and professional skills showcase.

  - **Experience & Comparison**: Interactive timeline and skill comparison cards.

  - **Portfolio**: Featured projects display with pagination.

  - **Testimonials**: Client and colleague reviews.

  - **FAQ**: Interactive accordion for frequently asked questions.

  - **Contact Form**: Built with schema validation using Zod.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)

- **Language:** [TypeScript](https://www.typescriptlang.org/)

- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

- **Animations:** [Framer Motion](https://www.framer.com/motion/)

- **UI Components:** Custom UI & Radix-based primitives (Shadcn UI)

- **Validation:** [Zod](https://zod.dev/)

- **Icons & Assets:** Custom SVGs and Lucide icons

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router (Layouts, Global CSS, Main Page)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/           # React Components
│   ├── layout/           # Navbar, Footer, Navigation
│   ├── pages/            # Page-level section modules (Hero, About, Portfolio, etc.)
│   └── ui/               # Reusable atomic UI elements (Button, Input, Cards, Accordion, etc.)
├── data/                 # Content data files (Skillsets, Projects, Testimonials, FAQs, etc.)
├── lib/                  # Helper utilities and Zod schema validations
│   ├── utils.ts
│   └── validations/      # Form validation logic
└── types/                # TypeScript interface and type definitions
```

## ⚙️ Customization

Most content displayed on the website is driven by typed data files located in `src/data/`. You can quickly personalize the portfolio by editing these files:

- `src/data/hero.ts`: Update main title, subtitle, and primary links.

- `src/data/aboutme.ts`: Edit bio details and key callouts.

- `src/data/skillsets.ts`: Update technical skills and proficiency levels.

- `src/data/portfolio.ts`: Add or modify project entries, tags, and URLs.

- `src/data/experience.ts`: Update work history and career timeline.

- `src/data/testimonials.ts`: Add client reviews or recommendations.

- `src/data/faq.ts`: Adjust common questions and answers.

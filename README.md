# Data Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean, minimalist UI with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance** - Built with Next.js for optimal performance
- 🎯 **SEO Optimized** - Meta tags and structured data for better search visibility
- 📊 **Data-Driven** - Easy content updates via JSON files
- 🎭 **Smooth Animations** - Powered by Framer Motion

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

**Note**: The project now uses shadcn/ui components. All required dependencies are listed in `package.json`. If you encounter any issues, make sure all packages are installed correctly.

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Experience.tsx  # Experience timeline
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects grid
│   ├── Blog.tsx        # Blog section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   ├── ThemeProvider.tsx # Theme context
│   └── ui/             # shadcn/ui components
│       ├── card.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
└── data/               # JSON data files
    ├── personal.json   # Personal information
    ├── experience.json # Work experience
    ├── skills.json     # Skills data
    ├── projects.json   # Projects data
    └── certifications.json # Certifications
```

## Updating Content

All content is stored in JSON files in the `data/` directory. Simply edit these files to update your portfolio:

- **Personal Info**: Edit `data/personal.json`
- **Experience**: Edit `data/experience.json`
- **Skills**: Edit `data/skills.json`
- **Projects**: Edit `data/projects.json`
- **Certifications**: Edit `data/certifications.json`
- **Blog**: Edit `components/Blog.tsx` to add blog posts (or create `data/blog.json` and load from there)

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#3b82f6', // Your primary color
    dark: '#2563eb',
  },
}
```

### Resume PDF

**Place your resume PDF in the `public/` directory and name it `resume.pdf`.**

The resume button in the Hero section will automatically link to `/resume.pdf`. If you want to use a different filename, update the path in `components/Hero.tsx` (line 8).

## License

MIT License - feel free to use this template for your own portfolio!

# Metal Mood Packs — The Emotional Arc

A dark, cinematic web presence for "The Emotional Arc" — a collection of seven emotion-driven inspiration packs for heavy music creators.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **React Router v7** for navigation

## Getting Started

### Installation

Option 2: CMD statt PowerShell verwenden
Öffne die Eingabeaufforderung (CMD) statt PowerShell:

Windows-Taste drücken
cmd eingeben
Enter drücken
Dann:
cd C:\Users\Profe\Meine Ablage (michaelkohl71@gmail.com)\7300_Git\replit-emotional-arc\replit-emotional-arc
npm install
npm run dev


```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Home/           # Home page components
│   │   ├── Hero.tsx
│   │   ├── Intro.tsx
│   │   ├── PackCard.tsx
│   │   ├── PacksSection.tsx
│   │   ├── Bundle.tsx
│   │   └── Statement.tsx
│   └── Layout/         # Layout components
│       ├── GrainOverlay.tsx
│       ├── Navigation.tsx
│       └── Footer.tsx
├── data/
│   └── packs.ts        # Pack data and types
├── pages/
│   ├── Home.tsx
│   └── DespairDecay.tsx
├── App.tsx
├── main.tsx
└── index.css           # Tailwind CSS + custom styles
```

## Features

- **Dark, cinematic aesthetic** with film grain overlay
- **Seven expandable mood pack cards** with detailed information
- **Smooth scroll navigation** with active link highlighting
- **Scroll-triggered animations** using Intersection Observer
- **Responsive design** for all screen sizes
- **Pack detail page** for "Despair & Decay"

## The Seven States

1. **Despair & Decay** — Exhaustion, erosion, slow collapse
2. **Ritualistic Fury** — Controlled rage as ritual
3. **Melancholic Triumph** — Victory that carries weight
4. **Pagan Reverence** — Connection to land and cycles
5. **Nihilistic Calm** — Stillness without resistance
6. **Cosmic Dread** — Awe through insignificance
7. **Post-Apocalyptic Awe** — Wonder after destruction

## Legacy Files

The original vanilla HTML/CSS/JS files are preserved in the `legacy/` folder for reference.

## License

All content is royalty-free for creative use. Redistribution of the packs themselves is not permitted.

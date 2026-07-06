# AtomicTechLabs — 3D Website v3

React + Vite + Tailwind CSS + Three.js website for a Robotics & IoT Training Institute.

## Quick Start

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build
```

## What's inside

**Pages** — Home, About, Services, Gallery, Blog, BlogPost, Contact, 404

**3D Scenes (Three.js / R3F)**
| Scene | Used on |
|-------|---------|
| HeroScene | Home hero |
| ConveyorScene | Home "how it works", Services CTA |
| GlobeScene | Home reach, About hero |
| CircuitScene | Services hero |
| NeuralScene | Contact hero |
| FloatingTrophy | Gallery hero |
| BrokenRobot | 404 page |

**Special effects**
- `AntigravityCanvas` — particles repel from cursor, magnetic connection lines, ghost cursor trail (Home hero, Gallery hero & CTA)
- `AutoScroll` — infinite horizontal marquee, used for partner schools, colleges, certificates (About), project strips (Gallery)
- Custom cursor — dot + rotating dashed ring (dark mode only)
- Scanline overlay (dark mode only)

**Theme system**
- Dark / Light toggle in navbar, persisted in `localStorage`
- Dark: deep navy `#060d1f` backgrounds, `#56a22e` green accent
- Light: muted sage `#e8f0e0` backgrounds, darker `#3d7520` green accent
- Canvas sections (`canvas-section`) get `background:#0f1f14` in light mode so 3D is always clearly visible

## Tech Stack

| Layer | Library |
|-------|---------|
| Framework | React 18 + Vite 5 |
| CSS | **Tailwind CSS v3** + CSS custom properties |
| 3D | Three.js + React Three Fiber + Drei |
| Routing | React Router v6 |
| Fonts | Space Grotesk · Inter · JetBrains Mono |

## CSS Architecture

Single `globals.css` with:
- Tailwind `@tailwind base/components/utilities`
- CSS custom properties for both dark and light themes
- `canvas-section` / `canvas-fill` / `canvas-content` utility classes
- `scroll-strip-outer` / `scroll-strip-inner` for the auto-scroll marquees
- `reveal` class for scroll-triggered fade-up animations
- Shared component layers (`btn`, `atl-card`, `section-label`, `tech-chip`)

## Palette

| Token | Dark | Light |
|-------|------|-------|
| `--accent` | `#56a22e` | `#3d7520` |
| `--text-muted` | `#8A90A2` | `#4a5a3a` |
| `--surface-1` | `#060d1f` | `#e8f0e0` |
| `--card-bg` | `#0a1628` | `#f0f6ea` |
| `--canvas-bg` | transparent | `#0f1f14` |

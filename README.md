# AI Insight Labz

A React and TypeScript website presenting AI services, courses, projects, and company information.

## Why this project matters

A multi-page website demonstrates how reusable interface components, structured content, and navigation can make technical offerings easier to explore.

## Implementation

- React 18 and TypeScript
- Vite development and build scripts
- React Router with hash-based routes
- Shared navigation, footer, and page-header components
- JSON content for company information, courses, projects, and services
- Netlify configuration included in the repository

## Run locally

```bash
git clone https://github.com/Arjun1443/AI-Insight-Labz.git
cd AI-Insight-Labz
npm ci
npm run dev
```

Use the local URL printed by Vite.

## Build and preview

```bash
npm run build
npm run preview
```

Build output is generated in `dist/`. The package scripts do not contain a test command.

## Source guide

| Path | Purpose |
| --- | --- |
| `App.tsx` | Routing and application layout |
| `pages/` | Home, About, Services, Courses, Projects, Contact |
| `components/` | Shared interface elements |
| `data/` | Structured site content |
| `package.json` | Dependencies and scripts |

The inspected package manifest and router do not require a Gemini API key. This README describes the website implementation; it does not claim a live AI backend, a deployed site, or operational contact-form delivery.

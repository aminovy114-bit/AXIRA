# AXIRA — React + JSX + Tailwind CSS

AXIRA is a dark, modern academic learning and research workspace built with React, JavaScript JSX, React Router, Vite, and Tailwind CSS.

## Requirements
- Node.js 18+ recommended
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Tech stack
- React + JavaScript (JSX)
- React Router DOM
- Tailwind CSS v4 with the official Vite plugin
- Lucide React icons

## Routes
- `/` — Overview dashboard
- `/library` — Academic subjects, search, category filters, featured lessons
- `/learning` — Progress overview, lesson filters, flashcard, checklist
- `/lesson/:lessonId` — Lesson content and interactive quiz
- `/research` — Research question bank and notes
- `/writing` — Writing editor and templates
- `/team` — About AXIRA and founder's note

## Notes
- No TypeScript or TSX is used.
- `src/index.css` contains only the Tailwind import; UI styling is done with Tailwind utility classes.
- Research notes and writing drafts are session-only in this starter version. Persistent accounts, database storage, AI services, and real authentication are not connected.
- Demo learner statistics and profile data are placeholders that can be replaced with real user data.

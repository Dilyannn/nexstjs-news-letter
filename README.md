<!-- markdownlint-disable -->
# NextNews - Next.js Routing & Rendering Deep Dive

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,react,js,express,sqlite,css,git" />
  </a>
</p>

A news newsletter app built with **Next.js 16 (App Router)** to explore and practice its core routing and rendering concepts in depth.

---

## About

This project is a hands-on exploration of what Next.js offers beyond the basics. It's a simple news site where you can browse articles, view images in a modal, and filter the archive by year/month — all built to demonstrate real Next.js patterns.

The frontend is powered by **Next.js** with the App Router, and the backend is a small **Express + SQLite** API that serves the news data.

---

## What I Learned

### Routing
- **File-based Routing** — Pages defined by folder structure under `app/`
- **Dynamic Routes** — `[slug]` for individual news articles
- **Catch-All Routes** — `[[...filter]]` for flexible archive filtering (year, month)
- **Route Groups** — `(landing)` and `(main-content)` to organize layouts without affecting the URL
- **Parallel Routes** — `@archive`, `@latest`, and `@modal` slots rendered side by side
- **Intercepting Routes** — `(.)image` to show an image modal overlay on click while preserving the background page

### Rendering & Data Fetching
- **Server Components** — All pages are server components by default, fetching data with `async/await`
- **Client Components** — `"use client"` directive for interactive parts like the navigation with `usePathname()`
- **Suspense & Streaming** — Wrapping async components in `<Suspense>` with fallback loaders for a smooth UX
- **Loading UI** — `loading.js` convention for automatic page-level loading states

### Error Handling & UX
- **`error.js`** — Client-side error boundaries per route segment
- **`not-found.js`** — Custom 404 pages at the global and route level
- **`default.js`** — Default fallbacks for parallel route slots

### API Routes
- **Route Handlers** — `GET`, `POST`, `DELETE` handlers defined in `route.js` files
- **Dynamic API Routes** — `/api/news/[slug]` to fetch individual items

### Backend
- **Express API** — Lightweight REST API serving news data on port `8080`
- **SQLite (better-sqlite3)** — Persistent storage seeded with dummy data on first run
- **CORS** — Enabled for cross-origin requests from the Next.js frontend

---

## Project Structure

```
app/
├── (landing)/              # Route group for the home page
├── (main-content)/         # Route group for news & archive
│   ├── news/
│   │   ├── [slug]/         # Dynamic news detail page
│   │   │   ├── @modal/     # Parallel route for image modal
│   │   │   │   └── (.)image/  # Intercepting route
│   │   │   └── image/      # Full image page (direct navigation)
│   │   └── page.js         # News list
│   ├── archive/
│   │   ├── @archive/       # Parallel route for filtered content
│   │   │   └── [[...filter]]/  # Catch-all for year/month filtering
│   │   └── @latest/        # Parallel route for latest news
│   ├── loading.js          # Loading fallback
│   └── not-found.js        # 404 page
├── api/
│   ├── route.js            # Root API handler
│   └── news/[slug]/        # Dynamic API route
backend/
├── app.js                  # Express + SQLite server
└── data.db                 # SQLite database (gitignored)
lib/
└── news.js                 # Async data fetching helpers
components/
├── MainHeader.jsx
├── MainHeaderLinks.jsx     # Client component with active link highlighting
├── Modal.jsx               # Reusable modal with backdrop & router.back()
├── NewsListItem.jsx
└── YearNavArchive.jsx
```

---

## Getting Started

### Frontend
```bash
npm install
npm run dev
```
Runs on [http://localhost:3000](http://localhost:3000)

### Backend
```bash
cd backend
npm install
npm start
```
Runs on [http://localhost:8080](http://localhost:8080)

---

## Built With

| Tech | Purpose |
|------|---------|
| Next.js 16 | Frontend framework (App Router) |
| React 18 | UI library |
| Express | Backend API |
| SQLite | Database |
| CSS | Styling (no frameworks) |

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build the production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Vitest tests

## Architecture Overview

This is a Next.js 14 App Router portfolio/blog website with the following key structure:

### Core Technologies
- Next.js 14 with App Router
- TypeScript
- TailwindCSS with ShadCN/UI components
- MDX for blog content
- Vitest for testing

### Application Structure

**Content Management:**
- Blog posts are stored as MDX files in `/content/`
- Blog metadata parsing and retrieval handled by `lib/blogs.ts`
- Frontmatter format includes title, publishedAt, summary, and optional image

**Routing Structure:**
- `/` - Homepage with introduction
- `/blogs` - Blog listing page
- `/blogs/[slug]` - Individual blog posts (dynamic routing)
- `/software` - Software projects showcase
- `/photography` - Photography portfolio with dynamic routing
- `/biotech` - Biotech section

**Component Architecture:**
- Reusable UI components in `components/ui/` (ShadCN)
- Custom components in `components/`
- Page-specific components co-located in `app/` directories
- Global layout with Header/Footer in `app/layout.tsx`

**Key Features:**
- Responsive design with mobile-first approach
- Static image optimization with multiple WebP formats in `/public/images/`
- Custom font loading via `lib/fonts.ts`
- Utility functions in `lib/utils.ts`

### Testing Setup
- Vitest configured with React Testing Library
- Test setup in `setupTests.ts`
- Example test in `app/page.test.tsx`

### Image Handling
Multiple responsive image formats are pre-generated (200w, 420w, 640w, 960w, 1280w) in WebP format for photography content.
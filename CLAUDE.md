# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Select by SaiJaiAI Inc is a curated marketplace connecting hospitality & tourism buyers with premium content creators. This is a modern web application built with:
- **Vite** - Build tool and dev server
- **React** - Frontend framework with TypeScript
- **shadcn/ui + Tailwind CSS** - UI components and styling
- **Firebase** - Complete backend (Auth, Firestore, Storage, Functions, Hosting, Cloud Messaging)
- **Playwright** - End-to-end testing framework

## User Personas

### Buyers (Hotels/DMOs)
- Need trustworthy creators matching their brand, dates, and destination
- Want measurable visibility and clear deliverables
- Success: Fast shortlisting, safe payments, attribution tracking

### Creators (Travel/Lifestyle)
- Need qualified gigs aligned with audience and travel plans
- Want clear terms and fair compensation
- Success: Quick profile setup, credibility proof, simple proposals

### Admins (Select Operations)
- Need to uphold quality and mitigate fraud
- Want efficient vetting and policy enforcement
- Success: Streamlined review queues and analytics

## Common Development Commands

Since this is a template repository, the actual project structure and scripts will depend on how it's initialized. When the project is set up, typical commands will include:

```bash
# Development
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run unit tests
npm run test:e2e     # Run Playwright tests
npm run test:ui      # Run Playwright tests with UI

# Linting and Type Checking
npm run lint         # ESLint
npm run typecheck    # TypeScript type checking

# Firebase
npm run deploy       # Deploy to Firebase
```

## Architecture Notes

This marketplace application is designed with:

1. **Frontend**: React SPA with TypeScript, built with Vite
2. **UI/UX**: shadcn/ui components with Tailwind CSS for responsive design
3. **Backend**: Complete Firebase stack (Auth, Firestore, Storage, Functions, Hosting, Cloud Messaging)
4. **Testing**: Playwright for E2E tests, Vitest for unit tests
5. **Build**: Vite for fast development and optimized production builds

## Key Application Features

### Creator Onboarding
- Multi-step profile creation with progress tracking
- Social media OAuth integration (Instagram, TikTok, YouTube, X)
- Portfolio upload with Firebase Storage
- Availability calendar with destination management
- Application vetting workflow

### Buyer Discovery
- Advanced search with multiple filters (location, dates, audience, platform, pricing)
- Creator detail views with metrics and portfolio
- Shortlist management with team collaboration
- Performance analytics and attribution

### Core Functionality
- Role-based authentication and authorization
- File upload with drag-and-drop interface
- Calendar integration for availability/booking
- Real-time search and filtering
- Form validation with Zod + TanStack Form
- Responsive design for mobile and desktop

## Firebase Integration

This marketplace application uses the complete Firebase suite:
- **Authentication** - User sign-up/login for Buyers, Creators, and Admins
- **Firestore** - Document database for profiles, applications, bookings, etc.
- **Storage** - File storage for creator portfolios, verification documents
- **Functions** - Server-side logic for image processing, notifications, data validation
- **Hosting** - Static site hosting and deployment
- **Cloud Messaging** - Push notifications for booking updates, applications

Key Firebase files to expect:
- `firebase.json` - Firebase project configuration
- `.firebaserc` - Firebase project aliases
- `src/lib/firebase.ts` - Firebase SDK initialization
- `src/lib/auth.ts` - Authentication helpers
- `src/lib/firestore.ts` - Database utilities
- `src/lib/storage.ts` - File upload utilities

## Development Environment

- Use Node.js with npm for package management
- TypeScript for type safety
- ESLint and Prettier for code formatting
- Playwright for comprehensive E2E testing

## Testing Strategy

- Unit tests for components and utilities
- E2E tests with Playwright covering key user journeys:
  - Creator onboarding and profile completion
  - Buyer search and creator discovery
  - Application submission and review workflows
- Firebase emulators for testing backend integration locally

## Development Guidelines

When working on this marketplace:

1. **Forms**: Use TanStack Form with Zod validation for all user inputs
2. **File Uploads**: Implement drag-and-drop with Firebase Storage integration
3. **Search**: Design for fast response times (<300ms p95) with proper indexing
4. **Calendar**: Use date range pickers for availability and booking workflows
5. **Responsive**: Mobile-first design with shadcn/ui components
6. **State**: Use React Context for global state management
7. **Performance**: Implement loading states, error boundaries, and progressive enhancement
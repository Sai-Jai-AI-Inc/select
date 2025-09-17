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

## Current Implementation Status

### Completed Features

#### Landing Page (/)
- Clean, minimalist design with monotone color scheme
- Source Serif headings, Geist Sans body text
- Hero section with clear value proposition
- How It Works sections for Hotels and Creators
- Pricing cards ($99/year hotels, $29/year creators)
- Live listings preview with sample data
- FAQ section and footer

#### Hotel Dashboard (/hotel/dashboard)
- **Humanized Creator Notifications**: Email-style inbox showing creators planning trips
- **Real Profile Pictures**: Professional headshots from Unsplash for authentic feel
- **Enhanced Personality Data**: Each creator has unique traits (Adventure Seeker, Luxury Enthusiast, etc.)
- **Read/Unread States**: Distinct visual styling with appropriate mail icons (Mail vs MailOpen)
- **Rich Creator Context**: Recent activity, content style, trip purpose, follower counts
- **Stats Overview**: Unread notifications, monthly metrics, total reach
- **Quick Actions**: View profile, contact creator, mark as read

#### Creator Profiles (/creator/:id)
- **Comprehensive Creator Information**: Bio, personality, content style, recent activity
- **Social Metrics**: Followers, posts, engagement rate with visual presentation
- **Upcoming Trips**: Planned destinations with dates and trip duration
- **Recent Posts**: Instagram-style content grid with engagement metrics
- **Audience Demographics**: Top countries with percentage breakdowns
- **Contact Integration**: Email and social media handles

#### Hotel Profiles (/hotel/:id)
- **Property Details**: Hotel information, amenities, room types, ratings
- **Current Collaboration Offers**: Active partnerships with detailed requirements
- **Success Stories**: Past collaborations with reach and engagement metrics
- **Content Guidelines**: Specific requirements for creator partnerships
- **Contact Information**: Partnership details and property location

### Planned Features (Not Yet Implemented)

#### Creator Onboarding
- Multi-step profile creation with progress tracking
- Social media OAuth integration (Instagram, TikTok, YouTube, X)
- Portfolio upload with Firebase Storage
- Availability calendar with destination management
- Application vetting workflow

#### Advanced Buyer Discovery
- Real-time search with multiple filters (location, dates, audience, platform, pricing)
- Shortlist management with team collaboration
- Performance analytics and attribution

#### Core Backend Functionality
- Firebase Authentication integration
- Firestore database connections
- File upload with drag-and-drop interface
- Calendar integration for availability/booking
- Real-time search and filtering
- Form validation with Zod + TanStack Form

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

## Current Route Structure

The application uses TanStack Router with the following implemented routes:

```
/ - Landing page (App.tsx)
/hotel/dashboard - Hotel notification dashboard (HotelDashboard.tsx)
/creator/:id - Creator profile pages (CreatorProfile.tsx)
/hotel/:id - Hotel profile pages (HotelProfile.tsx)
```

Navigation is handled via the Header component with links to all major sections.

## Design System

### Typography
- **Headings**: Source Serif 4 (h1, h2, h3, h4, h5, h6)
- **Body Text**: Geist Sans for all content, buttons, UI elements
- **Code**: Geist Sans (no longer using monospace fonts)

### Color Scheme
- **Minimalist Monotone**: Pure blacks, whites, and grays
- **CSS Variables**: Uses semantic tokens (background, foreground, muted-foreground, etc.)
- **Light/Dark Support**: Color scheme supports both light and dark themes

### Components
- **shadcn/ui**: Button, Card, Badge components implemented
- **Consistent Spacing**: Uses Tailwind's spacing scale
- **Responsive Design**: Mobile-first approach with proper breakpoints

## Mock Data Structure

### Creator Data
- Real Unsplash profile images for authentic feel
- Personality traits: Adventure Seeker, Luxury Enthusiast, Cultural Explorer, Budget Explorer
- Rich travel information: upcoming trips, recent content, audience demographics
- Social metrics: followers, engagement rates, recent activity

### Hotel Data
- Property details with amenities and room types
- Active collaboration offers with specific requirements
- Success stories from past partnerships
- Content guidelines and contact information

## Development Guidelines

When working on this marketplace:

1. **Typography**: Use Source Serif for headings, Geist Sans for everything else
2. **Colors**: Stick to the monotone palette using CSS custom properties
3. **Components**: Leverage existing shadcn/ui components for consistency
4. **Images**: Use high-quality Unsplash images for creator profiles (150x150 crop=face)
5. **Data**: Follow established patterns for creator/hotel mock data structure
6. **Routing**: Use TanStack Router with proper parameter handling
7. **Responsive**: Mobile-first design with proper breakpoints
8. **Performance**: Implement loading states, error boundaries, and progressive enhancement

## Development Server

- **Port**: Runs on localhost:3002 (3000 and 3001 typically in use)
- **Hot Reload**: Vite HMR for instant updates during development
- **Build**: `npm run dev` for development, `npm run build` for production
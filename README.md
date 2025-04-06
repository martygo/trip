# Trip Project Documentation

## About Project

SmartTrip is a Next.js application that helps users plan trips to various destinations around the world. It provides a platform for users to search for destinations, create itineraries, and get recommendations for flights, hotels, restaurants, nightlife, and activities. The application uses AI to generate personalized travel itineraries.

Key features include:
- User authentication (login/registration)
- Destination search
- Trip planning with dates and number of travelers
- AI-generated travel itineraries with detailed recommendations
- Responsive design for desktop and mobile devices

## Getting Started

### Prerequisites
- Node.js (v20 or newer)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trip
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm run start
```

### Project Structure

```
trip/
├── public/               # Static assets
├── src/                  # Source code
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Authentication route group
│   │   │   ├── login/    # Login page
│   │   │   └── register/ # Registration page
│   │   ├── (trip)/       # Trip route group
│   │   │   └── itinerary/# Itinerary pages
│   │   ├── _components/  # Shared components for app routes
│   │   ├── actions/      # Server actions
│   │   │   ├── auth.ts   # Authentication actions
│   │   │   └── itinerary.ts # Itinerary actions
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── shared/       # Shared components
│   │   └── ui/           # UI components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities and helpers
├── .env                  # Environment variables
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

### Technologies Used

#### Core

- Next.js - React framework with App Router
- React - UI library
- TypeScript - Type-safe JavaScript

#### Styling

- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - UI component library

#### Authentication

- Custom authentication using server actions and cookies

#### Data Validation

- Zod - TypeScript-first schema validation

#### UI Components

- Embla Carousel - Carousel component
- Lucide React - Icon library
- React Day Picker - Date picker component

#### Other Libraries

- date-fns - JavaScript date utility library
- Google Gemini AI - AI for generating itineraries
- next-themes - Theme management

Deploy on Vercel 🎊!
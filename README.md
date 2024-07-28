# Calorcity

Calorcity is a web application that encourages sustainable living by rewarding users for eco-friendly activities such as running, biking, and using public transportation.

## Features

- Activity tracking for running, cycling, and public transport usage
- Point system for eco-friendly activities
- Rewards redemption from partner merchants
- User profile management
- Tiered reward system

## Technology Stack

- Next.js
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion
- Axios for API requests
- React Query for state management

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## Testing Scenario

To test the application:

1. Sign in using the Strava OAuth flow
2. Add activities manually or sync with Strava
3. Check the home page for activity summaries and available rewards
4. Redeem rewards and verify the points balance update
5. Edit user profile information
6. Test the responsive design on various device sizes

## Environment Variables

Ensure you have the following environment variables set:

- `NEXT_PUBLIC_API_URL`: Base URL for the backend API

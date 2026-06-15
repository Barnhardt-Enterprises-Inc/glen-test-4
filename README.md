# CloudNine

CloudNine is a sustainable coffee roastery marketing site built with Next.js 15, TypeScript, Tailwind CSS v4, and ShadCN UI components. It showcases our seasonal single-origin coffees, roasting philosophy, and shop.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + ShadCN UI
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run type-check   # TypeScript type checking
npm run lint         # Lint with Next.js linter
```

## Deployment on Fly.io

### First-time setup

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login
fly auth login

# Launch the app (one-time setup)
fly launch
```

This will create a `fly.toml` configuration file. Accept the defaults or customise for your region.

### Deploy

```bash
# Deploy to production
fly deploy
```

### Environment variables on Fly

Set production environment variables via:

```bash
fly secrets set NEXT_PUBLIC_SITE_URL=https://cloudnine.fly.dev
fly secrets set NEXT_PUBLIC_APP_NAME=CloudNine
```

## Project Structure

```
src/
  app/           # Next.js App Router pages and layouts
  components/    # Reusable React components
    ui/          # ShadCN UI components
  lib/           # Utility functions (cn, etc.)
```

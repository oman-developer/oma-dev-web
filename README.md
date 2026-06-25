# oma-dev-web

Official website for **oma dev** — premium IT services for Omani businesses.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Features

- Landing page with services, reviews, and contact form
- Services & pricing pages (OMR)
- Gmail contact form notifications
- SEO, Open Graph, and Local Business schema
- WhatsApp floating button

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your Gmail credentials to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address for sending emails |
| `GMAIL_APP_PASSWORD` | Gmail app password |
| `CONTACT_TO_EMAIL` | Email to receive contact form submissions |

## Deploy on Cloudflare Workers

This project uses [@opennextjs/cloudflare](https://opennext.js.org/cloudflare/get-started).

### Cloudflare Dashboard Settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |

### Environment Variables (Cloudflare Dashboard → Settings → Variables)

Add these as **encrypted** variables:

| Variable | Value |
|----------|-------|
| `GMAIL_USER` | `omadev02026@gmail.com` |
| `GMAIL_APP_PASSWORD` | Your Gmail app password |
| `CONTACT_TO_EMAIL` | `omadev02026@gmail.com` |

### Local Cloudflare preview

```bash
npm run preview
```

### Deploy from CLI

```bash
npm run deploy
```

## License

Private — © oma dev

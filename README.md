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

## Deploy on Cloudflare Pages

1. Push this repo to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output directory: `.next` (use `@cloudflare/next-on-pages` for full Next.js support) or deploy as static export
5. Add environment variables in Cloudflare dashboard

## License

Private — © oma dev

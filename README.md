# Classic Baking & Catering Uganda

A premium, interactive web application for **Classic Baking & Catering Uganda**, built with Next.js (App Router), TypeScript, and Vanilla CSS. This platform features a rich, responsive design tailored for culinary education and event catering services.

## 🚀 Key Features

- **Interactive Course Enrollment**: A custom-built WhatsApp application modal allows prospective students to apply for culinary courses directly via automated WhatsApp messages.
- **Corporate Inquiry System**: Integrated Google Forms for streamlined corporate catering and business consultations.
- **Modern & Premium Design**: Custom Vanilla CSS with smooth micro-animations, glassmorphism, and a high-end aesthetic.
- **SEO & AI Ready**: 
  - Optimized meta-tags and JSON-LD structured data (FAQ & Local Business).
  - Explicitly configured `robots.txt` to allow indexing and AI training by common bots (GPTBot, ClaudeBot, etc.).
- **Dual-Deployment Support**: Pre-configured for seamless deployment to both **Vercel** and **cPanel** (via Node.js Passenger).

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Premium curated palettes)
- **Integration**: WhatsApp API, Google Maps Embed API, Google Forms

## 📦 Getting Started

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## 🏗️ Deployment

### Vercel (Preferred)
The project is optimized for Vercel. Deploy using the Vercel CLI:
```bash
vercel --prod
```

### cPanel (High-Performance Node.js)
The project includes a `server.js` wrapper and `standalone` output configuration for cPanel's Passenger environment.
1. Run `npm run build`.
2. Upload the `.next/standalone` contents along with `server.js`, `public/`, and `.next/static/`.
3. Configure the Node.js App in cPanel pointing to `server.js`.

---

© 2026 Classic Baking & Catering Uganda. All rights reserved.

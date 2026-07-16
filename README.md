# Optify - Premium Web, Mobile and Software Solutions

Optify is a modern, high-performance marketing website and platform for a digital agency specializing in custom software development, mobile applications, e-commerce solutions, cloud DevOps, and AI workforce integrations.

## Features

- **Dynamic Interactive UI**: Built with responsive components, custom SVG charts, and interactive layouts.
- **3D Portfolio Carousel**: An interactive showcase card slider utilizing perspective calculations and spring-based animations.
- **Robust Contact Integration**: Resilient form submission that saves queries locally and integrates with Web3Forms for secure client-side email delivery.
- **Hybrid Hosting Architecture**: Built with Vite and React for frontend rendering and Express for local data persistence.
- **SEO Optimized**: Fully equipped with structured JSON-LD data, semantic HTML hierarchy, Sitemap, and Google-friendly Open Graph meta tags.

## Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion (formerly Framer Motion), Lucide React.
- **Backend**: Node.js, Express, tsx.
- **Bundler & Build Tooling**: Vite, esbuild.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/optify.git
   cd optify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables. Create a `.env` file in the root directory and add your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
   ```

### Development

Start both the Express backend API and the Vite development server in middleware mode:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Production Build

To compile both the React client assets and bundle the Express server for production:
```bash
npm run build
```

This compiles client files to the `dist` directory and bundles the server as `dist/server.cjs`.

### Production Execution

To run the compiled production server:
```bash
npm run start
```

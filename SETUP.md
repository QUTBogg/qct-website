# Quick Setup Guide

## Logo Setup

1. **Add your logo file:**
   - Copy your QCT logo to `/public/logo.png`
   - The logo should be at least 200x200px for best quality
   - Supported formats: PNG, JPG, SVG (PNG recommended)

2. **If your logo is at a different path:**
   - The logo is referenced in:
     - `components/Navbar.tsx` (line ~40)
     - `components/Footer.tsx` (line ~15)
   - Update the `src="/logo.png"` paths if needed

## First Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

## Before Deploying

1. **Update team members** in `data/team.ts`
2. **Update sponsors** in `data/sponsors.ts`
3. **Add gallery images** to `/public/` and update `components/GallerySection.tsx`
4. **Add 3D model** to `components/TobogganSection.tsx` (optional)

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Vercel will auto-detect Next.js and deploy

No additional configuration needed!


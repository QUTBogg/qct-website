# Queen's Concrete Toboggan Team Website

A modern, responsive marketing website for the Queen's Concrete Toboggan Team (QCT), built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Fully responsive design optimized for all devices
- Modern UI with baby blue (#4DA3FF) accent colors
- Smooth scrolling navigation
- Dynamic sponsor funding tracker
- Team roster with role-based organization
- Contact form with validation
- Gallery section (ready for images)
- 3D model placeholder for toboggan visualization

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Poppins (Google Fonts)
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add the logo file:
   - Place your logo at `/public/logo.png`
   - Recommended size: 200x200px or larger (will be scaled)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and global styles
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navbar.tsx          # Top navigation with large logo
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── AboutSection.tsx    # About QCT and GNCTR
│   ├── TeamSection.tsx     # Team roster display
│   ├── TobogganSection.tsx # Toboggan information
│   ├── SponsorsSection.tsx # Sponsors and funding tracker
│   ├── GallerySection.tsx  # Image gallery
│   ├── ContactSection.tsx  # Contact info and form
│   └── Footer.tsx          # Footer with logo and copyright
├── data/
│   ├── team.ts             # Team member data
│   └── sponsors.ts         # Sponsor data and funding goal
└── public/
    └── logo.png            # QCT logo (add your file here)
```

## Customization

### Update Team Members
Edit `data/team.ts` to add or modify team members.

### Update Sponsors
Edit `data/sponsors.ts` to add sponsors or change the funding goal.

### Add Gallery Images
1. Place images in `/public/` directory (e.g., `gallery1.jpg`, `gallery2.jpg`)
2. Update the `galleryItems` array in `components/GallerySection.tsx`
3. Uncomment the Image component code

### Add 3D Model
Replace the placeholder in `components/TobogganSection.tsx` with your 3D model viewer. Options:
- `<model-viewer>` web component for glTF/glb files
- iframe for embedded Sketchfab viewer
- Three.js with React Three Fiber

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

## Color Scheme

- **Primary Background**: White (#FFFFFF)
- **Accent Color**: Baby Blue (#4DA3FF)
- **Light Grey**: #F5F7FA
- **Text**: Dark Grey (#1A1A1A, #333333)

## License

Built by the 2025–2026 QCT Team


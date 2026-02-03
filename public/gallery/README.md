# Gallery Images

## How to Add Images

1. **Drop your images** into this folder (`/public/gallery/`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Any filename is fine (e.g., `photo1.jpg`, `team-photo.jpeg`, `event-2024.png`)

2. **Add the filename** to the `galleryImages` array in `components/GallerySection.tsx`
   - Just add the filename (not the full path)
   - Example: If you add `my-photo.jpg` here, add `"my-photo.jpg"` to the array

## Example

If you have these files in `/public/gallery/`:
- `team-photo.jpg`
- `event-2024.jpeg`
- `toboggan-test.png`

Then in `components/GallerySection.tsx`, update the array to:
```typescript
const galleryImages = [
  "team2024.jpeg",
  "team-photo.jpg",
  "event-2024.jpeg",
  "toboggan-test.png",
];
```

That's it! The images will automatically appear in the gallery.


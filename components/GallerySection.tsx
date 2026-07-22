"use client";

import Image from "next/image";

const GallerySection = () => {
  // Simply add image filenames here - just drop images into /public/gallery/ folder
  // Format: "filename.jpg" or "filename.jpeg" or "filename.png"
  const galleryImages = [
    "your-image-1.jpg",
    "your-image-2.jpg",
    "your-image-3.jpg",
    "your-image-4.jpg",
    "your-image-5.jpeg",
    "your-image-6.jpg",
    "your-image-87.jpg",
    "your-image-88.jpg",
    "your-image-89.PNG",
    "your-image-90.jpg",
    "your-image-92.jpg",
    "your-image-93.jpg",
    "your-image-94.jpg",
    "your-image-95.jpg",
    "your-image-96.jpg",
    "your-image-97.jpg",
    "your-image-98.jpg",
    "your-image-99.jpg",
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen pt-40 pb-20 bg-white"
    >
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Gallery
        </h2>

        {galleryImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No images yet. Add images to the gallery array in{" "}
              <code className="bg-light-grey px-2 py-1 rounded">
                components/GallerySection.tsx
              </code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((imageName, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={`/gallery/${imageName}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

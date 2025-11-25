"use client";

import { useState } from "react";
import Image from "next/image";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Actual gallery items – add more as you drop files into /public/gallery
  const galleryItems = [
    {
      id: 1,
      src: "/gallery/team2024.jpeg", // ✅ file at public/gallery/team2024.jpeg
      caption: "Team at GNCTR 2024",
    },
    // Example for later:
    // { id: 2, src: "/gallery/testing_day.jpg", caption: "Toboggan Testing" },
    // { id: 3, src: "/gallery/concrete_mix.jpg", caption: "Concrete Mix Design" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Actual image */}
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover Overlay */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-baby-blue/90 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white font-semibold text-center px-4">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

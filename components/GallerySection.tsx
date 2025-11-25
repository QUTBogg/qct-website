"use client";

import { useState } from "react";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    { id: 1, src: "/gallery1.jpg", caption: "Team at GNCTR 2024" },
    { id: 2, src: "/gallery2.jpg", caption: "Toboggan Testing" },
    { id: 3, src: "/gallery3.jpg", caption: "Concrete Mix Design" },
    { id: 4, src: "/gallery4.jpg", caption: "Race Day Action" },
    { id: 5, src: "/gallery5.jpg", caption: "Team Building" },
    { id: 6, src: "/gallery6.jpg", caption: "Award Ceremony" },
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
              {/* Placeholder - replace with actual Image component when images are available */}
              <div className="w-full h-full bg-gradient-to-br from-baby-blue/20 to-light-grey flex items-center justify-center">
                <div className="text-center p-4">
                  <svg
                    className="w-12 h-12 mx-auto text-baby-blue/50 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs text-gray-500">{item.caption}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-baby-blue/90 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white font-semibold text-center px-4">{item.caption}</p>
                </div>
              )}

              {/* Uncomment when images are available:
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

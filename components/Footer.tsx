import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12 w-full">
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left - Logo and Name */}
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16">  {/* bigger size */}
              <Image
                src="/logo.png"
                alt="QCT Logo"
                width={80}      // previously 48
                height={80}     // increased
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-gray-700 font-medium">
              Queen's Concrete Toboggan Team
            </p>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right text-gray-600 text-sm">
            <p>© {currentYear}</p>
            <p className="mt-1">Built by the 2025–2026 QCT Team</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

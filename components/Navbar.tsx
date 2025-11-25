"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#team", label: "Team" },
    { href: "#toboggan", label: "The Toboggan" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const showSection = (id: string) => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const el = section as HTMLElement;
      if (el.id === id) {
        el.classList.remove("hidden", "opacity-0");
        el.classList.add("opacity-100");
      } else {
        el.classList.add("hidden", "opacity-0");
      }
    });

    if (id === "home") {
      document.body.style.overflowY = "hidden";
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      document.body.style.overflowY = "auto";
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const id = href.replace("#", "");
    showSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-36 md:h-44 lg:h-52">
          
          {/* ⭐ MASSIVE LOGO (5× larger image, inside same container height) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center cursor-pointer"
          >
            <div className="relative h-38 md:h-46 lg:h-54 w-auto">
              <Image
                src="/logo.png"
                alt="QCT Logo"
                width={500}  // HUGE
                height={500} // HUGE
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* ⭐ MASSIVE NAV TEXT (4–5× size) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-700 hover:text-baby-blue font-bold 
                           text-2xl lg:text-3xl tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="md:hidden p-2 text-gray-700"
            type="button"
          >
            <svg
              className="h-10 w-10" // bigger icon
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 bg-white border-t border-gray-200 mt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block w-full text-left text-gray-700 hover:text-baby-blue 
                           font-bold text-2xl py-4"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

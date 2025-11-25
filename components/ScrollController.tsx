"use client";

import { useEffect } from "react";

export default function ScrollController() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const NAV_HEIGHT = 180; // adjust for your big navbar

    // Initially: show home, hide everything else
    sections.forEach((section) => {
      const el = section as HTMLElement;
      if (el.id === "home") {
        el.classList.remove("hidden", "opacity-0");
        el.classList.add("opacity-100");
      } else {
        el.classList.add("hidden", "opacity-0");
        el.classList.remove("opacity-100");
      }
    });

    // Modify all navbar anchor clicks
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = (link as HTMLAnchorElement).getAttribute("href")!.slice(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) return;

        // 1. Hide all sections
        sections.forEach((section) => {
          section.classList.add("hidden", "opacity-0");
          section.classList.remove("opacity-100");
        });

        // 2. Show the clicked section
        targetSection.classList.remove("hidden", "opacity-0");
        targetSection.classList.add("opacity-100");

        // 3. Scroll to it with offset
        const yOffset = -NAV_HEIGHT;
        const y =
          targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        // Unlock scrolling
        document.body.style.overflowY = "auto";
      });
    });

    // Lock scroll on first load
    document.body.style.overflowY = "hidden";
  }, []);

  return null;
}

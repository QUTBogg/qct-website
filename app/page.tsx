import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import TobogganSection from "@/components/TobogganSection";
import SponsorsSection from "@/components/SponsorsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TeamSection />
      <TobogganSection />
      <SponsorsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}


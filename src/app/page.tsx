"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Mvv from "@/components/mvv/mvv";
import Projects from "@/components/projects/projects";
import WhoWeAre from "@/components/whoWeAre/whoWeAre";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const handleLinkClick = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll("[data-scroll]");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = (e.currentTarget as HTMLElement).getAttribute("data-scroll-id")!;
        handleLinkClick(id);
      });
    });
  }, []);

  return (
    <main className="font-sans bg-[#010101] text-white scroll-smooth">
      <Header />
      <Hero />
      <WhoWeAre />
      <Mvv />
      <Projects />
      <Footer />
    </main>
  );
}

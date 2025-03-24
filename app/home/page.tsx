"use client";
import "next-cloudinary/dist/cld-video-player.css";
import "next-cloudinary/dist/cld-video-player.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Tag from "@/components/Tag";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  // Navigation items data
  const navItems = [
    { label: "Know Us", href: "#about-us" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Our Best Work", href: "#projects" },
    { label: "Login", href: "/login", isUnderlined: true },
  ];

  return (
    <div className="flex flex-col w-full bg-noche-black min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 z-50 py-4">
        <NavigationMenu className="relative z-10 flex max-w-max flex-1 items-center justify-center">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className={`font-paragraph text-off-blanco text-paragraph rounded-md px-3 py-1 transition-colors duration-200 hover:bg-white/10
                     ${item.isUnderlined ? "underline" : ""}`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="flex flex-col items-center justify-center gap-[100px] relative bg-noche-black min-h-screen">
        <Hero />

        <Tag />

        <Brands />

        <section id="about-us">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
}

"use client";
import "next-cloudinary/dist/cld-video-player.css";
import "next-cloudinary/dist/cld-video-player.css";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Tag from "@/components/Tag";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-noche-black">
      <header>
        <Navbar />
      </header>

      <main className="relative flex min-h-screen flex-col items-center justify-center gap-[160px] bg-noche-black">
        <Hero />

        <section id="tag">
          <Tag />
        </section>

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

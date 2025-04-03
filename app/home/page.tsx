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
    <div className="flex flex-col w-full bg-noche-black min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col items-center justify-center gap-[100px] relative bg-noche-black min-h-screen">
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

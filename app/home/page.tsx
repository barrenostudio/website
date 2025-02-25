"use client";
import "next-cloudinary/dist/cld-video-player.css";
import "next-cloudinary/dist/cld-video-player.css";
import React from "react";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Tag from "@/components/Tag";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-[100px] relative bg-noche-black min-h-screen">
      <Hero />
      <Tag />

      <Brands />

      <Works />

      <Services />

      <Contact />

      <Footer />
    </div>
  );
}

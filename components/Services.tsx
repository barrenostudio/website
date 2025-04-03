import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Services = () => {
  //   "Josh is absolutely amazing, and I offer my highest recommendation for his phenomenal talent!"
  // "It’s always a delightful experience when I get to work with Josh, who I strongly recommend for all of your creative needs. He is an exceptionally talented photographer and videographer who goes above and beyond to ensure your goals are met, taking the time and care to understand your needs. Beyond his incredible eye and attention to detail, he is one of the kindest, most understanding, and reliable people I have ever worked with."
  // — Leanne Ngo

  // "Josh is the go-to person for creative direction and video production!"
  // "Over the past two years, I have had the privilege of working with Josh across multiple large-scale events, including The University of Melbourne’s Orientation Week, where he expertly captured key moments, producing a standout video that truly encapsulated the energy and essence of the event. His fast turnaround time, professionalism, attention to detail, and ability to bring creative visions to life make him a trusted and invaluable creative partner."
  // — Caty Li

  // "Josh is an absolute legend to work with!"
  // "He’s been incredible in helping FYA bring to life multiple projects—whether it’s photography, editing, or videography. He’s got an incredible eye for detail and always brings a thoughtful approach to everything he does. But beyond his skills, Josh is super fun to work with—reliable, easygoing, and always full of fresh ideas. If you’re looking for someone who can bring a creative vision to life (and make the whole process a joy), I couldn’t recommend him more!"
  // — Krystal Luu

  // "If you want to be seen as a credible authority in your field—and, let’s face it, look great for future clients—Josh is the photographer to call!"
  // "Josh went above and beyond to make the entire process comfortable and enjoyable, ensuring we achieved the best possible results. His attention to detail, professionalism, and ability to put me at ease made all the difference. I’m absolutely thrilled with the outcome and wholeheartedly recommend Josh to solopreneurs and business owners looking to elevate their online presence."
  // — Claude Arganaraz

  const testimonials = [
    {
      name: "Leanne Ngo",
      title: "person",
      text: "Josh is absolutely amazing, and I offer my highest recommendation for his phenomenal talent! It’s always a delightful experience when I get to work with Josh, who I strongly recommend for all of your creative needs.",
    },
    {
      name: "Caty Li",
      title: "person",
      text: "Josh is the go-to person for creative direction and video production! His fast turnaround time, professionalism, attention to detail, and ability to bring creative visions to life make him a trusted and invaluable creative partner.",
    },
    {
      name: "Krystal Luu",
      title: "CEO BLAH",
      text: "Josh is an absolute legend to work with! If you’re looking for someone who can bring a creative vision to life (and make the whole process a joy), I couldn’t recommend him more!",
    },
    {
      name: "Claude Arganaraz",
      title: "Business Coach",
      text: "If you want to be seen as a credible authority in your field—and, let’s face it, look great for future clients—Josh is the photographer to call! His attention to detail, professionalism, and ability to put me at ease made all the difference.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-24 px-8">
      {/* First portfolio image */}
      <Card className="w-full h-full border-0">
        <CardContent className="p-0">
          <div className="flex overflow-hidden items-center justify-center">
            <CldImage
              width="459"
              height="325"
              src="BTS_ahtn9n"
              crop="fill"
              alt="barreno studio team"
              className="rounded-[20px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Our Services heading */}
      <div className="w-full font-heading-1 text-off-blanco lg:text-7xl text-4xl leading-tight text-center">
        Our Services
      </div>

      {/* Our Process section */}
      <Card className="w-full bg-transparent border-0">
        <CardContent className="py-8 text-off-blanco text-right flex flex-col justify-between h-full">
          <p className="font-paragraph leading-paragraph text-sm lg:text-paragraph">
            <b>Align</b> - Your vision, our blueprint. We start by understanding
            exactly what you need—no cookie-cutter concepts, no assumptions.
          </p>
          <p className="font-paragraph leading-paragraph text-sm lg:text-paragraph">
            <b>Create</b> – Precision meets creativity. Every frame, every
            angle, every detail—crafted to make an impact.
          </p>
        </CardContent>
      </Card>

      {/* ACRA section */}
      <Card className="w-full bg-transparent border-0 flex items-center justify-center">
        <CardContent className="p-0 flex text-off-blanco text-right">
          <p className="font-paragraph md:text-4xl text-2xl space-y-6">
            ALIGN - CREATE - <br />
            REFINE - AMPLIFY
          </p>
        </CardContent>
      </Card>

      {/* Second portfolio image */}
      <Card className="w-full h-full border-0">
        <CardContent className="p-0 ">
          <div className="flex bg-cover overflow-hidden items-center justify-center">
            <CldImage
              width="459"
              height="325"
              src="BTS_ahtn9n"
              crop="fill"
              alt="barreno studio team"
              className="rounded-[20px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Our Process section ctd. */}
      <Card className="w-full bg-transparent border-0">
        <CardContent className="py-16 text-off-blanco text-right flex flex-col justify-between h-full">
          <p className="font-paragraph leading-paragraph text-sm lg:text-paragraph">
            <b>Refine</b> - Because good isn’t good enough.
          </p>
          <p className="font-paragraph leading-paragraph text-sm lg:text-paragraph">
            <b>Amplify</b> – Your story, ready to stand out.
          </p>
        </CardContent>
      </Card>

      {/* Infinite Moving Cards */}
      <div className="col-span-2 h-[325px]">
        <h3 className="text-[32px] text-left text-off-blanco leading-8 mt-6">
          WHAT OUR CLIENTS THINK
        </h3>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      {/* Third portfolio image */}
      <Card className="w-full h-full border-0">
        <CardContent className="p-0 ">
          <div className="flex bg-cover overflow-hidden items-center justify-center">
            <CldImage
              width="459"
              height="325"
              src="BTS_ahtn9n"
              crop="fill"
              alt="barreno studio team"
              className="rounded-[20px]"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Services;

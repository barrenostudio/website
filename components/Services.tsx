import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from "@/lib/motionVariants";

const Services = () => {
  const images = [
    {
      id: 0,
      src: "BTS_ahtn9n",
      description: "Barreno Studio Team",
      w: 459,
      h: 325,
    },
    {
      id: 1,
      src: "barreno-studio/BTS3_SDSG",
      description: "Barreno Studio Team",
      w: 459,
      h: 325,
    },
    {
      id: 2,
      src: "barreno-studio/BTS4-LLISH",
      description: "Barreno Studio Team",
      w: 459,
      h: 325,
    },
  ];

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
    <motion.section
      className="grid grid-cols-1 gap-6 px-8 md:grid-cols-3 md:px-14"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* First portfolio image */}
      <motion.div variants={imageVariants}>
        <Card className="col-span-1 h-full w-full border-0">
          <CardContent className="p-0">
            <div className="flex items-center justify-center overflow-hidden">
              <CldImage
                width={images[0].w}
                height={images[0].h}
                src={images[0].src}
                crop="fill"
                alt={images[0].description}
                className="h-full w-full rounded-[20px] object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Our Services heading */}
      <motion.div variants={itemVariants}>
        <div className="w-full text-center font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1">
          Our Services
        </div>
      </motion.div>

      {/* Our Process section */}
      <motion.div variants={itemVariants}>
        <Card className="w-full border-0 bg-transparent">
          <CardContent className="flex h-full flex-col justify-between gap-6 p-0 py-6 text-right text-off-blanco">
            <p className="font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph">
              <b>Align</b> - Your vision, our blueprint. We start by
              understanding exactly what you need—no cookie-cutter concepts, no
              assumptions.
            </p>
            <p className="font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph">
              <b>Create</b> – Precision meets creativity. Every frame, every
              angle, every detail—crafted to make an impact.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* ACRA section */}
      <motion.div variants={itemVariants}>
        <Card className="flex w-full items-center justify-center border-0 bg-transparent">
          <CardContent className="flex p-0 text-right text-off-blanco">
            <p className="space-y-6 font-heading-3 text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3">
              ALIGN - CREATE - <br />
              REFINE - AMPLIFY
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Second portfolio image */}
      <motion.div variants={imageVariants}>
        <Card className="h-full w-full border-0">
          <CardContent className="p-0">
            <div className="flex items-center justify-center overflow-hidden bg-cover">
              <CldImage
                width={images[1].w}
                height={images[1].h}
                src={images[1].src}
                crop="fill"
                alt={images[1].description}
                className="h-full w-full rounded-[20px] object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Our Process section ctd. */}
      <motion.div variants={itemVariants}>
        <Card className="w-full border-0 bg-transparent">
          <CardContent className="flex h-full flex-col justify-between gap-6 p-0 py-16 text-right text-off-blanco">
            <p className="font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph">
              <b>Refine</b> - Because good isn’t good enough.
            </p>
            <p className="font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph">
              <b>Amplify</b> – Your story, ready to stand out.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Infinite Moving Cards */}
      <div className="col-span-1 h-full md:col-span-2">
        <h3 className="mt-6 text-left font-heading-3 text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3">
          WHAT OUR CLIENTS THINK
        </h3>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          pauseOnHover={true}
        />
      </div>

      {/* Third portfolio image */}
      <motion.div variants={imageVariants}>
        <Card className="h-full w-full border-0">
          <CardContent className="p-0">
            <div className="flex items-center justify-center overflow-hidden bg-cover">
              <CldImage
                width={images[2].w}
                height={images[2].h}
                src={images[2].src}
                crop="fill"
                alt={images[2].description}
                className="h-full w-full rounded-[20px] object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default Services;

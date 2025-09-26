import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motionVariants";

export default function ContactSection() {
  // Data for the section
  const sectionData = {
    heading: "Who are we?",
    subheading: "VISION AND MISSION",
    description: [
      "Barreno Studios is a leading creative agency based in Melbourne, Australia - we specialise in delivering tailored solutions that resonate with diverse audiences driving positive impact and culture.",
      "Our mission is to empower businesses, organisations, and individuals to succeed through collaboration/co—design, creating timeless high-quality media assets.",
    ],
    imageSrc: "barreno-studio/FullashipStudio-89",
    w: 1440,
    h: 1080,
  };

  return (
    <motion.section
      id="target-2"
      className="flex justify-center px-8 md:px-14"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Card className="flex flex-col gap-4 border-0 bg-transparent shadow-none md:flex-row">
        <CardContent className="w-full p-0 md:w-1/2 lg:w-3/5">
          <motion.div
            className="w-full overflow-clip object-fill"
            variants={itemVariants}
          >
            <CldImage
              width={sectionData.w}
              height={sectionData.h}
              src={sectionData.imageSrc}
              crop="fill"
              alt="barreno studio team"
              className="h-full w-full rounded-[20px]"
            />
          </motion.div>
        </CardContent>

        <CardContent className="flex w-full flex-col justify-center gap-4 md:w-1/2 lg:w-2/5">
          <motion.h1
            className="font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1"
            variants={itemVariants}
          >
            {sectionData.heading}
          </motion.h1>

          <div className="text-off-blanco">
            <motion.span
              className="mb-4 block font-heading-3 text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3"
              variants={itemVariants}
            >
              {sectionData.subheading}
            </motion.span>

            {sectionData.description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-4 font-paragraph text-paragraph-sm last:mb-0 md:text-paragraph-md lg:text-paragraph"
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

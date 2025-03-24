import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import React from "react";

export default function ContactSection() {
  // Data for the section
  const sectionData = {
    heading: "Who are we?",
    subheading: "VISION AND MISSION",
    description: [
      "Barreno Studios is a leading creative agency based in Melbourne, Australia - we specialise in delivering tailored solutions that resonate with diverse audiences driving positive impact and culture.",
      "Our mission is to empower businesses, organisations, and individuals to succeed through collaboration/co—design, creating timeless high-quality media assets.",
    ],
    imageSrc: "team_shot2_yr1x4d",
  };

  return (
    <section className="flex justify-center py-[100px]">
      <Card className="flex flex-row gap-9 bg-transparent border-0 shadow-none">
        <CardContent className="p-0">
          <div className="w-full max-w-[867px] h-[609px] rounded-[20px] bg-cover bg-center">
            <CldImage
              width="867"
              height="609"
              src={sectionData.imageSrc}
              crop="fill"
              alt="barreno studio team"
            />
          </div>
        </CardContent>

        <CardContent className="flex flex-col justify-center gap-[79px] p-0 max-w-[407px]">
          <h2 className="font-heading-1 lg:text-8xl md:text-6xl text-off-blanco">
            {sectionData.heading}
          </h2>

          <div className="text-off-blanco">
            <span className="block font-heading-1 font-normal text-[#fef8e7] text-[32px] tracking-[0] leading-[23.5px] mb-4">
              {sectionData.subheading}
            </span>

            {sectionData.description.map((paragraph, index) => (
              <p
                key={index}
                className="font-paragraph text-paragraph tracking-paragraph leading-paragraph mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

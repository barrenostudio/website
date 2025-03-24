import React from "react";
import BloomEmbed from "./ui/BloomEmbed";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";

const Contact = () => {
  const nextSteps = [
    "Inquiry sent",
    "Team email correspondence",
    "Proposal and quote",
    "Quote",
  ];

  return (
    <section className="flex flex-col items-center justify-center py-16 w-full bg-black text-off-blanco">
      <Card className="bg-transparent border-none max-w-md">
        <CardContent className="flex flex-col items-center p-0 space-y-6">
          {/* Image container with proper aspect ratio */}
          <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
            <CldImage
              width="600"
              height="460"
              src="team_shot2_yr1x4d"
              crop="fill"
              alt="barreno studio team"
            />
          </div>

          {/* Heading */}
          <h2 className="font-heading-1 text-center text-7xl text-off-blanco [font-style:var(--heading-1-font-style)]">
            Work with us
          </h2>

          {/* Next steps section */}
          <div className="w-full text-[#fef8e7]">
            <p className="[font-family:'PP_Formula-Regular',Helvetica] text-[32px] leading-[23.5px] mb-6">
              SIMPLE NEXT STEPS
            </p>

            <ul className="space-y-2">
              {nextSteps.map((step, index) => (
                <li
                  key={index}
                  className="[font-family:'PP_Formula-Regular',Helvetica] text-2xl leading-6 flex"
                >
                  <span className="mr-2">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Button className="bg-golden-hour-yellow text-red-50 rounded-md opacity-90 w-[180px] h-[50px] font-bold [font-family:'Avenir_Next_Condensed-Bold',Helvetica] text-xl">
            WORK WITH US
          </Button>
          <div>
            <BloomEmbed formId="l0zdgewwx73go" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;

import React from "react";
import BloomEmbed from "./ui/BloomEmbed";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";

const Contact = () => {
  return (
    <section className="flex flex-wrap">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[1135px] mx-auto">
        <h1 className="font-heading-1-halyard text-[72px] text-[#f8971d] text-center">
          COLLABORATE WITH US
        </h1>

        <div className="flex flex-wrap items-center justify-between w-full gap-8 lg:gap-16">
          <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
            <CldImage
              width="600"
              height="460"
              src="team_shot2_yr1x4d"
              crop="fill"
              alt="barreno studio team"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="font-heading-3-halyard text-off-blanco text-[60px] text-center">
              <span>We </span>
              <span className="underline">listen</span>
              <br />
              <span>we DON&apos;T judge</span>
            </h2>
            <Button className="h-[50px] w-[180px] bg-golden-hour-yellow text-red-50 rounded-md opacity-90 hover:opacity-100">
              <span className="font-bold text-xl">WORK WITH US</span>
            </Button>
            <div>
              <BloomEmbed formId="l0zdgewwx73go" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

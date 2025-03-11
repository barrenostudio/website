import { CldImage } from "next-cloudinary";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const portfolioImages = [
  { url: "Gabriel_Gabby_Couple_Shoot-52_iwjmga", height: "925" },
  { url: "OrientationWeekDay1-1_h0zlcn", height: "325" },
  { url: "Mid-AutumnMoonFestival-229_ypqnuu", height: "325" },
];

const Works = () => {
  return (
    <section className="flex flex-col w-full max-w-[1440px] items-end gap-2.5 pb-[100px] px-5">
      <h2 className="text-golden-hour-yellow text-[72px] text-center font-heading-1-halyard">
        WORKS
      </h2>
      <div className="flex items-center">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className={`w-[459px] h-[${image.height}px] rounded-[20px] bg-cover bg-center1 overflow-hidden hover:scale-105 hover:opacity-100 hover:z-10 opacity-80 transition duration-500`}
          >
            <CldImage
              width="460"
              height={Number(image.height)}
              src={image.url}
              crop="fill"
              alt={image.url}
            />
          </div>
        ))}
      </div>
      <div className="w-[800px] h-[61px] relative">
        <div className="w-[800px] h-[52px] left-0 top-[10px] absolute">
          <div className="w-[800px] h-[52px] left-0 top-0 absolute bg-[#fef8e7] rounded-tl-[10px] rounded-bl-[10px]" />
        </div>
        <div className="left-[387px] top-0 absolute text-[#f8971d] text-4xl font-bold font-['Dico_Mono'] leading-[61px]">
          SEE MORE WORKS{" "}
          <Button
            variant="outline"
            size="icon"
            className="w-[38px] h-[38px] p-0 bg-golden-hour-yellow border-none rounded-md hover:bg-golden-hour-yellow/90"
          >
            <ChevronRight className="h-6 w-6 text-off-blanco" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Works;

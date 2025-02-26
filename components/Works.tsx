import { CldImage } from "next-cloudinary";
import React from "react";

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
    </section>
  );
};

export default Works;

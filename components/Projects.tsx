import { CldImage } from "next-cloudinary";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight, Icon, MoveRight } from "lucide-react";
import { image } from "framer-motion/client";

const portfolioImages = [
  { url: "Gabriel_Gabby_Couple_Shoot-52_iwjmga", height: "925" },
  { url: "OrientationWeekDay1-1_h0zlcn", height: "325" },
  { url: "Mid-AutumnMoonFestival-229_ypqnuu", height: "325" },
];

const Works = () => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      image: "World_Mental_Health_Day-352_jwhae6",
      description: "Mental Health Day",
      align: "left",
    },
    {
      id: 2,
      image: "OrientationWeekDay1-1_h0zlcn",
      description: "UniMelb",
      align: "center",
    },
    {
      id: 3,
      image: "Gabriel_Gabby_Couple_Shoot-51_wmt0tg",
      description: "Gabriel and Gabby Engagement",
      align: "right",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-24 w-full">
      <h2 className="w-full text-7xl max-w-[1200px] font-heading-1 text-off-blanco text-right">
        Projects
      </h2>
      <h3 className="w-full text-4xl font-heading-1 text-off-blanco text-center">
        We don’t just press record. We craft stories that hit differently.
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-[1440px] relative">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col w-full md:w-[428px] rounded-[20px] overflow-hidden relative group"
          >
            {project.image && (
              <CldImage
                width="428"
                height="324"
                src={project.image}
                crop="fill"
                alt={project.image}
                className="rounded-[20px] transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90"
              />
            )}

            <div
              className={`font-paragraph text-paragraph bottom-2 absolute text-off-blanco m-4 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${
                project.align === "center"
                  ? "text-center"
                  : project.align === "right"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              {project.description}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row justify-end items-center">
        {/* <MoveRight size={42} className="m-4" /> */}
        <img src="ArrowRight.svg" alt="arrow right" />
        <a
          href="#"
          className="font-heading-1 flex font-normal text-off-blanco text-[32px] text-right tracking-[0] leading-[23.5px] hover:opacity-80 transition-opacity"
        >
          MORE OF OUR WORK
        </a>
      </div>
    </section>
    // <section className="flex flex-col w-full max-w-[1440px] items-end gap-2.5 pb-[100px] px-5">
    //   <h2 className="text-golden-hour-yellow text-[72px] text-center font-heading-1">
    //     WORKS
    //   </h2>
    //   <div className="flex items-center">
    //     {portfolioImages.map((image, index) => (
    //       <div
    //         key={index}
    //         className={`w-[459px] h-[${image.height}px] rounded-[20px] bg-cover bg-center1 overflow-hidden hover:scale-105 hover:opacity-100 hover:z-10 opacity-80 transition duration-500`}
    //       >
    //         <CldImage
    //           width="460"
    //           height={Number(image.height)}
    //           src={image.url}
    //           crop="fill"
    //           alt={image.url}
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="w-[800px] h-[61px] relative">
    //     <div className="w-[800px] h-[52px] left-0 top-[6px] absolute">
    //       <div className="w-[800px] h-[52px] left-0 top-0 absolute bg-off-blanco rounded-tl-[10px] rounded-bl-[10px]" />
    //     </div>
    //     <div className="left-[387px] top-0 absolute text-[#f8971d] text-3xl font-bold font-heading-3 leading-[61px]">
    //       SEE MORE WORKS{" "}
    //       <Button
    //         variant="outline"
    //         size="icon"
    //         className="w-[32px] h-[32px] p-0 bg-off-blanco border-none rounded-md hover:bg-golden-hour-yellow/90"
    //       >
    //         <ChevronRight className="h-8 w-8 text-noche-black" />
    //       </Button>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Works;

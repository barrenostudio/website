import { CldImage } from "next-cloudinary";
import Link from "next/link";

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
      description: "Orientation Week",
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
    <section className="flex w-full flex-col items-center justify-center gap-10 px-14">
      <h2 className="w-full text-right font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1">
        Projects
      </h2>
      <h3 className="w-full text-right font-heading-3 text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3">
        We don’t just press record. We craft stories that hit differently.
      </h3>
      <div className="flex w-full max-w-[1440px] flex-row items-center justify-center gap-2 lg:gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex w-full flex-col overflow-hidden rounded-[20px] md:w-1/3"
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

            {/* <div
              className={`absolute bottom-2 m-4 font-paragraph text-paragraph text-off-blanco transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${
                project.align === "center"
                  ? "text-center"
                  : project.align === "right"
                    ? "text-right"
                    : "text-left"
              }`}
            >
              {project.description}
            </div> */}
          </div>
        ))}
      </div>
      <div className="flex w-full flex-row items-center justify-end">
        {/* <MoveRight size={42} className="m-4" /> */}
        <img src="ArrowRight.svg" alt="arrow right" />
        <Link
          href="/archives"
          className="flex rounded-md px-5 pb-2 pt-4 text-right font-heading-1 text-heading-3-md text-off-blanco transition-colors duration-200 hover:bg-white/10"
        >
          MORE OF OUR WORK
        </Link>
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

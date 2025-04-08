import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const Archives = () => {
  const sectionData = {
    heading: "Archives",
    subheading: "Barreno Studio",
    description: [
      "True Collaboration – We work with you, not just for you, to bring your vision to life.",
      "Standout Visuals – Content that grabs attention and makes an impact.",
      "Precision & Creativity – Sharp execution with an artistic edge.",
    ],
    imageSrc: "team_shot2_yr1x4d",
  };

  const projects = [
    {
      id: 0,
      src: "World_Mental_Health_Day-352_jwhae6",
      description: "Mental Health Day",
      align: ["end", "start"],
      w: 480,
      h: 600,
    },
    {
      id: 1,
      src: "OrientationWeekDay1-1_h0zlcn",
      description: "Orientation Week",
      align: ["end", "end"],
      w: 480,
      h: 325,
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dobclogz9/video/upload/q_auto/c_fill,g_auto,h_600,w_480/v1743490368/Monique_x_YSL_Beauty_ffpc7o.webm",
      description: "YSL Beauty",
      align: ["start", "end"],
      w: 480,
      h: 600,
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dobclogz9/video/upload/c_limit,h_480,w_600/uniqlo__lifewear_for_all_seasons_2160p_o5jcf9",
      description: "uniqlo",
      align: ["end", "end"],
      w: 600,
      h: 480,
    },
    {
      id: 4,
      src: "Gabriel_Gabby_Couple_Shoot-51_wmt0tg",
      description: "Gabriel & Gabby engagement",
      align: ["start", "end"],
      w: 480,
      h: 325,
    },
  ];

  return (
    <section
      className="grid h-screen w-full grid-cols-1 gap-8 px-14 py-14 md:grid-cols-2 lg:grid-cols-3"
      style={{
        gridAutoRows: "minmax(0, 1fr)", // Ensures rows shrink proportionally
      }}
    >
      <Card className="relative col-span-1 row-span-2 flex h-full w-full border-0">
        <Link href={`/archives/${projects[0].id}`} className="h-full w-full">
          <CldImage
            width={projects[0].w}
            height={projects[0].h}
            src={projects[0].src}
            crop="fill"
            alt={projects[0].description}
            className="h-full w-full rounded-[20px] object-cover"
          />
          <div
            className={`absolute inset-2 m-4 flex items-${projects[0].align[0]} justify-${projects[0].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
          >
            {projects[0].description}
          </div>
        </Link>
      </Card>

      <Card className="col-span-1 flex flex-row border-0 lg:col-span-2">
        <CardContent className="flex h-full w-full flex-col justify-center p-0">
          <h2 className="text-right font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1">
            {sectionData.heading}
          </h2>
        </CardContent>
      </Card>

      <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
        <CldImage
          width={projects[1].w}
          height={projects[1].h}
          src={projects[1].src}
          crop="fill"
          alt={projects[1].description}
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${projects[1].align[0]} justify-${projects[1].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {projects[1].description}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-2 flex h-full w-full border-0">
        <video
          width={projects[2].w}
          height={projects[2].h}
          src={projects[2].src}
          muted
          autoPlay
          loop
          playsInline
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${projects[2].align[0]} justify-${projects[2].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {projects[2].description}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
        <video
          width={projects[3].w}
          height={projects[3].h}
          src={projects[3].src}
          muted
          autoPlay
          loop
          playsInline
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${projects[3].align[0]} justify-${projects[3].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {projects[3].description}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
        <CldImage
          width={projects[4].w}
          height={projects[4].h}
          src={projects[4].src}
          crop="fill"
          alt={projects[4].description}
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${projects[4].align[0]} justify-${projects[4].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {projects[4].description}
        </div>
      </Card>
      {/* <Card className="col-span-1 flex h-full w-full flex-row border-0">
        <CardContent className="flex h-full w-full flex-col justify-end p-0 text-center">
          <h2 className="font-heading-1-halyard text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3">
            {sectionData.subheading}
          </h2>
        </CardContent>
      </Card> */}
    </section>
  );
};

export default Archives;

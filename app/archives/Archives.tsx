import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { allProjects } from "@/lib/data";

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

  return (
    <section
      className="grid h-screen w-full grid-cols-1 gap-8 px-8 py-14 md:grid-cols-2 md:px-14 lg:grid-cols-3"
      style={{
        gridAutoRows: "minmax(0, 1fr)", // Ensures rows shrink proportionally
      }}
    >
      <Card className="relative col-span-1 row-span-2 flex h-full w-full border-0">
        <Link href={`/archives/${allProjects[0].id}`} className="h-full w-full">
          <CldImage
            width={allProjects[0].w}
            height={allProjects[0].h}
            src={allProjects[0].src[0]}
            crop="fill"
            alt={allProjects[0].id}
            className="h-full w-full rounded-[20px] object-cover"
          />
          <div
            className={`absolute inset-2 m-4 flex items-${allProjects[0].align[0]} justify-${allProjects[0].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
          >
            {allProjects[0].title}
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
          width={allProjects[1].w}
          height={allProjects[1].h}
          src={allProjects[1].src[0]}
          crop="fill"
          alt={allProjects[1].id}
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${allProjects[1].align[0]} justify-${allProjects[1].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {allProjects[1].title}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-2 flex h-full w-full border-0">
        <video
          width={allProjects[2].w}
          height={allProjects[2].h}
          src={allProjects[2].src[0]}
          muted
          autoPlay
          loop
          playsInline
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${allProjects[2].align[0]} justify-${allProjects[2].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {allProjects[2].title}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
        <video
          width={allProjects[3].w}
          height={allProjects[3].h}
          src={allProjects[3].src[0]}
          muted
          autoPlay
          loop
          playsInline
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${allProjects[3].align[0]} justify-${allProjects[3].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {allProjects[3].title}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
        <CldImage
          width={allProjects[4].w}
          height={allProjects[4].h}
          src={allProjects[4].src[0]}
          crop="fill"
          alt={allProjects[4].id}
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${allProjects[4].align[0]} justify-${allProjects[4].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {allProjects[4].title}
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

import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { allProjects } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

const Archives = () => {
  return (
    <section className="grid h-full w-full gap-8 overflow-hidden px-8 py-14 md:grid-cols-2 md:px-14 lg:grid-cols-3">
      {/* Left Column (Reverse Scroll) */}
      <div className="column column-reverse">
        {[...allProjects.slice(0, allProjects.length / 3)].map(
          (project, index) => (
            <Link
              key={`${project.id}-${index}`}
              href={`/archives/${project.id}`}
              className="column__item h-[300px] w-full flex-shrink-0 overflow-hidden rounded-bs"
            >
              <CldImage
                width={project.w}
                height={project.h}
                src={project.src[0]}
                crop="fill"
                alt={project.id}
                className="h-full w-full object-cover"
              />
            </Link>
          )
        )}
      </div>

      {/* Middle Column (Normal Scroll) */}
      <div className="column">
        {[
          ...allProjects.slice(
            allProjects.length / 3,
            (allProjects.length * 2) / 3
          ),
        ].map((project, index) => (
          <Link
            key={`${project.id}-${index}`}
            href={`/archives/${project.id}`}
            className="column__item h-[300px] w-full flex-shrink-0 overflow-hidden rounded-bs"
          >
            <video
              width={project.w}
              height={project.h}
              src={project.src[0]}
              muted
              autoPlay
              loop
              playsInline
              className="h-full w-full rounded-bs object-cover"
            />
            {/* <div
                className={`absolute inset-2 m-4 flex items-${project.align[0]} justify-${allProjects[2].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
              >
                {allProjects[2].title}
              </div> */}
          </Link>
        ))}
      </div>

      {/* Right Column (Reverse Scroll) */}
      <div className="column column-reverse">
        {[...allProjects.slice((allProjects.length * 2) / 3)].map(
          (project, index) => (
            <Link
              key={`${project.id}-${index}`}
              href={`/archives/${project.id}`}
              className="column__item h-[300px] w-full flex-shrink-0 overflow-hidden rounded-bs"
            >
              <CldImage
                width={project.w}
                height={project.h}
                src={project.src[0]}
                crop="fill"
                alt={project.id}
                className="h-full w-full object-cover"
              />
            </Link>
          )
        )}
      </div>
      <div className="fixed right-4 top-16">
        <Card className="col-span-1 flex flex-row border-0 lg:col-span-2">
          <CardContent className="flex h-full w-full flex-col justify-center p-0">
            <h2 className="text-right font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1">
              Archives
            </h2>
          </CardContent>
        </Card>
      </div>
    </section>
    //   <section
    //   className="grid h-full w-full grid-cols-1 gap-8 overflow-hidden px-8 py-14 md:grid-cols-2 md:px-14 lg:grid-cols-3"
    //   style={{
    //     gridAutoRows: "minmax(0, 1fr)", // Ensures rows shrink proportionally
    //   }}
    // >
    //   <Card className="relative col-span-1 row-span-2 flex h-full w-full border-0">
    //     <Link href={`/archives/${allProjects[0].id}`} className="h-full w-full">
    //       <CldImage
    //         width={allProjects[0].w}
    //         height={allProjects[0].h}
    //         src={allProjects[0].src[0]}
    //         crop="fill"
    //         alt={allProjects[0].id}
    //         className="h-full w-full rounded-bs object-cover"
    //       />
    //       <div
    //         className={`absolute inset-2 m-4 flex items-${allProjects[0].align[0]} justify-${allProjects[0].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
    //       >
    //         {allProjects[0].title}
    //       </div>
    //     </Link>
    //   </Card>

    //   <Card className="col-span-1 flex flex-row border-0 lg:col-span-2">
    //     <CardContent className="flex h-full w-full flex-col justify-center p-0">
    //       <h2 className="text-right font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1">
    //         {sectionData.heading}
    //       </h2>
    //     </CardContent>
    //   </Card>

    //   <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
    //     <CldImage
    //       width={allProjects[1].w}
    //       height={allProjects[1].h}
    //       src={allProjects[1].src[0]}
    //       crop="fill"
    //       alt={allProjects[1].id}
    //       className="h-full w-full rounded-bs object-cover"
    //     />
    //     <div
    //       className={`absolute inset-2 m-4 flex items-${allProjects[1].align[0]} justify-${allProjects[1].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
    //     >
    //       {allProjects[1].title}
    //     </div>
    //   </Card>

    //   <Card className="relative col-span-1 row-span-2 flex h-full w-full border-0">
    //     <video
    //       width={allProjects[2].w}
    //       height={allProjects[2].h}
    //       src={allProjects[2].src[0]}
    //       muted
    //       autoPlay
    //       loop
    //       playsInline
    //       className="h-full w-full rounded-bs object-cover"
    //     />
    //     <div
    //       className={`absolute inset-2 m-4 flex items-${allProjects[2].align[0]} justify-${allProjects[2].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
    //     >
    //       {allProjects[2].title}
    //     </div>
    //   </Card>

    //   <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
    //     <video
    //       width={allProjects[3].w}
    //       height={allProjects[3].h}
    //       src={allProjects[3].src[0]}
    //       muted
    //       autoPlay
    //       loop
    //       playsInline
    //       className="h-full w-full rounded-bs object-cover"
    //     />
    //     <div
    //       className={`absolute inset-2 m-4 flex items-${allProjects[3].align[0]} justify-${allProjects[3].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
    //     >
    //       {allProjects[3].title}
    //     </div>
    //   </Card>

    //   <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
    //     <CldImage
    //       width={allProjects[4].w}
    //       height={allProjects[4].h}
    //       src={allProjects[4].src[0]}
    //       crop="fill"
    //       alt={allProjects[4].id}
    //       className="h-full w-full rounded-bs object-cover"
    //     />
    //     <div
    //       className={`absolute inset-2 m-4 flex items-${allProjects[4].align[0]} justify-${allProjects[4].align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
    //     >
    //       {allProjects[4].title}
    //     </div>
    //   </Card>
    //   {/* <Card className="col-span-1 flex h-full w-full flex-row border-0">
    //     <CardContent className="flex h-full w-full flex-col justify-end p-0 text-center">
    //       <h2 className="font-heading-1-halyard text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3">
    //         {sectionData.subheading}
    //       </h2>
    //     </CardContent>
    //   </Card> */}
    // </section>
  );
};

export default Archives;

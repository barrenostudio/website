import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import { ProjectType } from "./page";

const Project = ({ project }: { project: ProjectType }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section
      className="grid h-screen w-full grid-cols-1 gap-8 px-14 py-14 md:grid-cols-2 lg:grid-cols-3"
      style={{
        gridAutoRows: "minmax(0, 1fr)", // Ensures rows shrink proportionally
      }}
    >
      <Card className="row-span-3 flex flex-row border-0">
        <CardContent className="flex h-full w-full flex-col justify-center p-0">
          <h2 className="text-left font-heading-3 text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3">
            {project.client}
          </h2>
          {project.description?.map((paragraph, index) => (
            <p
              key={index}
              className="my-4 font-paragraph text-paragraph-sm text-off-blanco last:mb-0 md:text-paragraph-md lg:text-paragraph-md"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-6 flex w-full flex-row items-center justify-start">
            <img src="/ArrowDown.svg" alt="arrow down" />
            <h2 className="flex text-left font-heading-3 text-heading-3-sm text-off-blanco">
              Next Project:
              <br />
              {project.client}
            </h2>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 flex flex-row border-0 lg:col-span-2">
        <CardContent className="flex h-full w-full flex-col justify-center p-0">
          <h2 className="text-right font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1">
            {project.title}
          </h2>
        </CardContent>
      </Card>

      <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
        <CldImage
          width={project.w}
          height={project.h}
          src={project.src[0]}
          crop="fill"
          alt={project.title ?? ""}
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${project.align[0]} justify-${project.align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md`}
        >
          {project.title}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-2 flex h-full w-full border-0">
        <CldImage
          width={project.w}
          height={project.h}
          src={project.src[1]}
          crop="fill"
          alt={project.title ?? ""}
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${project.align[0]} justify-${project.align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md`}
        >
          {project.title}
        </div>
      </Card>

      <Card className="relative col-span-1 row-span-1 flex h-full w-full border-0">
        <CldImage
          width={project.w}
          height={project.h}
          src={project.src[2]}
          crop="fill"
          alt={project.title ?? ""}
          className="h-full w-full rounded-[20px] object-cover"
        />
        <div
          className={`absolute inset-2 m-4 flex items-${project.align[0]} justify-${project.align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md`}
        >
          {project.title}
        </div>
      </Card>

      {/* <Card className="relative flex h-full w-full max-w-4xl border-0">
        {project.src.endsWith(".webm") ? (
          <video
            width={project.w}
            height={project.h}
            src={project.src}
            muted
            autoPlay
            loop
            playsInline
            className="h-full w-full rounded-[20px] object-cover"
          />
        ) : (
          <CldImage
            width={project.w}
            height={project.h}
            src={project.src}
            crop="fill"
            alt={project.description}
            className="h-full w-full rounded-[20px] object-cover"
          />
        )}
        <div
          className={`absolute inset-2 m-4 flex items-${project.align[0]} justify-${project.align[1]} font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
        >
          {project.description}
        </div>
      </Card> */}
    </section>
  );
};

export default Project;

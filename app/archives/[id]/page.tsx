"use client";

import Navbar from "@/components/Navbar";
import Project from "./Project";
import { useParams } from "next/navigation";
import { allProjects } from "@/lib/data";

const ProjectPage = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-noche-black">
      <header>
        <Navbar />
      </header>

      <main className="relative flex min-h-screen flex-col items-center justify-center gap-[160px] bg-noche-black">
        <Project project={project} />
      </main>
    </div>
  );
};

export default ProjectPage;

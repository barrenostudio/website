import { allProjects } from "@/lib/data";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motionVariants";

const Works = () => {
  // Project data for mapping
  const selectedProjects = allProjects.slice(0, 3);

  return (
    <motion.section
      className="flex"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex w-screen flex-col items-center justify-center gap-10 px-8 md:px-14">
        <motion.h2
          className="w-full text-right font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <motion.h3
          className="w-full text-right font-heading-3 text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3"
          variants={itemVariants}
        >
          We don’t just press record. We craft stories that hit differently.
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center justify-center gap-2 md:flex-row lg:gap-6"
        >
          {selectedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative flex h-[150px] w-full flex-nowrap rounded-[20px] md:h-[240px] md:w-1/3 lg:h-[320px]"
              variants={itemVariants}
            >
              <Link href={`/archives/${project.id}`} className="h-full w-full">
                {project.src[0].endsWith(".webm") ? (
                  <video
                    width={project.w}
                    height={project.h}
                    src={project.src[0]}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="h-full w-full rounded-[20px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                ) : (
                  <CldImage
                    src={project.src[0]}
                    fill={true}
                    alt={project.id}
                    className="h-full w-full rounded-[20px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                )}
                <div
                  className={`absolute inset-2 m-4 flex items-end justify-start font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph`}
                >
                  {project.title}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-row items-center justify-end"
        >
          {/* <MoveRight size={42} className="m-4" /> */}
          <img src="ArrowRight.svg" alt="arrow right" />
          <Link
            href="/archives"
            className="flex rounded-md px-5 pb-2 pt-4 text-right font-heading-1 text-heading-3-md text-off-blanco transition-colors duration-200 hover:bg-white/10"
          >
            MORE OF OUR WORK
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="z-90 text-center font-heading-1-halyard text-heading-1-halyard text-off-blanco"
    >
      {text}
    </motion.h1>
  );
};

function LogoAnimated() {
  const [aboutInView, setAboutInView] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("target-1");

    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAboutInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the About section is visible
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="z-90 fixed bottom-0 w-full items-center justify-center overflow-hidden mix-blend-exclusion"
      style={{
        transform: aboutInView
          ? "translateY(0vh)" // Move down when About section is visible
          : "translateY(30vh)",
        // : scroll > entryPoint
        //   ? "translateY(0vh)"
        //   : // ? `translateY(${(1 - (scroll - entryPoint) / (1 - entryPoint)) * 20}vh)`
        //     "translateY(20vh)",
        transition: "transform 0.5s ease-in-out", // Smooth animation for transform
      }}
    >
      <TextAnimation text="Barreno Studio" />
    </div>
  );
}

export default LogoAnimated;

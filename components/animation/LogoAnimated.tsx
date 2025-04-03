import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="font-heading-1-halyard z-90 leading-none lg:text-[192px] md:text-[128px] sm:text-[96px] text-[64px] text-off-blanco text-center tracking-[-1.44px]"
    >
      {text}
    </motion.h1>
  );
};

function LogoAnimated() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) {
      return;
    }
    image.style.opacity = "0";

    const timeout = setTimeout(() => {
      if (image) {
        //Double check in case it unmounts
        image.style.opacity = "1";
        image.style.transition = "opacity 1.0s ease-in-out";
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed mix-blend-exclusion z-90 bottom-0 items-center justify-center w-full overflow-hidden">
      <TextAnimation text="Barreno Studio" />
    </div>
  );
}

export default LogoAnimated;

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-[408px] font-heading-1-halyard text-noche-black text-center text-[72px] tracking-[-1.44px] leading-[72px]" // Apply your styles here
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
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image
        ref={imageRef}
        src="/logo-white.png"
        alt="barreno logo"
        width={200}
        height={200}
        style={{ opacity: 0 }} // this was added to fix the flash of white.
      />
      <TextAnimation text="Barreno Studio" />
    </div>
  );
}

export default LogoAnimated;

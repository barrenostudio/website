import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const TextAnimation = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-[408px] font-heading-1-halyard text-white text-center text-[72px] tracking-[-1.44px] leading-[72px]" // Apply your styles here
    >
      {text}
    </motion.h1>
  );
};

function LogoAnimated() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    image.style.opacity = 0;
    // image.style.transform = 'scale(0.8)'; // If you want scaling

    const timeout = setTimeout(() => {
      image.style.opacity = 1;
      image.style.transition = "opacity 0.5s ease-in-out";
      // image.style.transition = 'transform 0.5s ease-in-out'; // If you use scaling
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
      />
      <TextAnimation text="Barreno Studio" />{" "}
      {/* Use the TextAnimation component here */}
    </div>
  );
}

export default LogoAnimated;

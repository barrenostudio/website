import React, { useEffect, useRef, useState } from "react";
import LogoAnimated from "./animation/LogoAnimated";
import { CldVideoPlayer } from "next-cloudinary";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoFixed, setVideoFixed] = useState(true);
  const [videoTranslateY, setVideoTranslateY] = useState(0); // New state for video translation
  const [blurLevel, setBlurLevel] = useState(12); // Initial blur level

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

        if (sectionBottom <= 0) {
          // Section is out of view
          setVideoFixed(false);
          setVideoTranslateY(-sectionBottom); // Translate video with scroll amount
          setBlurLevel(0);
        } else {
          setVideoFixed(true);
          setVideoTranslateY(0); // Reset translation when section is in view

          // Calculate dynamic blur level (adjust values as needed)
          const maxBlur = 6;
          const scrollProgress = Math.max(
            0,
            Math.min(1, sectionBottom / window.innerHeight),
          ); // 0 to 1
          const currentBlur = scrollProgress * maxBlur;
          setBlurLevel(currentBlur);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        className="fixed flex flex-col top-1/2 left-1/2 z-10 items-center"
        style={{
          transform: videoFixed
            ? "translateY(0)"
            : `translateY(-${videoTranslateY}px)`,
        }}
        href="#about-us"
      >
        <h3 className="font-heading-1 lg:text-4xl md:text-3xl">see our work</h3>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown />
        </motion.div>
      </a>
      <div
        ref={videoRef}
        className="fixed top-0 h-full w-[calc(100vh*1920/1080)] overflow-hidden hover:cursor-[url('/BS_cursor64.png'),_auto]"
        style={{
          transform: videoFixed
            ? "translateY(0)"
            : `translateY(-${videoTranslateY}px)`,
          filter: `blur(${blurLevel}px)`,
        }}
      >
        <CldVideoPlayer
          src="uniqlo__lifewear_for_all_seasons_2160p_o5jcf9"
          width="1920"
          height="1080"
          id="splash"
          muted
          autoplay
          loop
          controls={false} // Hides all default controls (including menus)
          className="z-[-1]"
          // className={`transition-filter duration-500 blur-[${blurLevel}px]`} // Apply blur and transition
        />

        {/* <div className={`absolute inset-0 backdrop-blur-[${blur}px] bg-opacity-20`}></div> */}
      </div>

      <section
        ref={sectionRef}
        className="relative h-screen w-screen flex justify-center hover:cursor-[url('/BS_cursor64.png'),_auto]"
      >
        <div
        // className={`absolute inset-0 backdrop-blur-${blurLevel} bg-opacity-20 transition-all duration-500`}
        ></div>

        <LogoAnimated />
      </section>

      <div className="h-screen"></div>
    </>
  );
};

export default Hero;

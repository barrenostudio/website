import React, { useEffect, useRef, useState } from "react";
import LogoAnimated from "./animation/LogoAnimated";
// import { CldVideoPlayer } from "next-cloudinary";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // const router = useRouter(); // Access the current route
  const videoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoFixed, setVideoFixed] = useState(true);
  const [videoTranslateY, setVideoTranslateY] = useState(0); // New state for video translation
  const maxFontSize = 800; // Maximum font size in `vw`
  const minFontSize = 24; // Minimum font size in `vw`
  const [fontSize, setFontSize] = useState(minFontSize); // Initial font size in `vw`
  const [scroll, setScroll] = useState(1); // Initial font size in `vw`

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

        if (sectionBottom <= 0) {
          // Section is out of view
          setVideoFixed(false);
          setVideoTranslateY(-sectionBottom); // Translate video with scroll amount
          setFontSize(maxFontSize);
        } else {
          setVideoFixed(true);
          setVideoTranslateY(0); // Reset translation when section is in view

          const scrollProgress =
            1 - Math.max(0, Math.min(1, sectionBottom / window.innerHeight)); // 0 to 1
          setScroll(scrollProgress);
          // Increase font size based on scroll progress
          const newFontSize =
            minFontSize + scrollProgress * (maxFontSize - minFontSize);
          setFontSize(newFontSize);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={videoRef}
        className="fixed left-0 top-0 h-screen w-screen overflow-hidden"
        style={{
          transform: videoFixed
            ? "translateY(0)"
            : `translateY(-${videoTranslateY}px)`,
        }}
      >
        <video
          src="https://res.cloudinary.com/dobclogz9/video/upload/c_fill,h_2160,w_3840/v1/barreno-studio/splash4k"
          muted
          autoPlay
          loop
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <div className="z-90 h-screen w-full justify-center hover:cursor-[url('/BS_cursor64.png'),_auto]">
          <h1
            className="flex h-screen w-full items-center justify-center bg-noche-black pr-10 text-center font-extrabold text-off-blanco mix-blend-multiply"
            // leading-none, tracking-[-3vw], text-[24vw]
            style={{
              fontSize: `${fontSize}vw`,
              letterSpacing: `${-3 - scroll * 300}vw`,
              paddingTop: `${scroll * 100}vh`,
              lineHeight: `${1 - scroll * 2}`,
              backgroundColor: `${scroll < 0.5 ? "var(--noche-black)" : "var(--off-blanco)"}`,
            }}
          >
            BARRENO
            <br />
            STUDIO
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <a
              className="z-10 flex flex-col items-center justify-center text-center"
              href="#tag"
            >
              {/* <h3 className="font-heading-1 lg:text-4xl md:text-3xl">
              see our work
            </h3> */}
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
          </div>
        </div>
      </div>
      {/* <div
        ref={videoRef}
        className="absolute z-1 top-0 left-0 w-screen h-screen"
        // style={{
        //   transform: videoFixed
        //     ? "translateY(0)"
        //     : `translateY(-${videoTranslateY}px)`,
        //   filter: `blur(${blurLevel}px)`,
        // }}
      >
        <CldVideoPlayer
          src="barreno-studio/splash"
          width="1920"
          height="1080"
          id="splash"
          muted
          autoplay
          loop
          controls={false} // Hides all default controls (including menus)
          className="absolute top-0 left-0 w-full h-full object-cover"
          // transformation={{
          //   width: "1920",
          //   height: "1080",
          //   crop: "fill",
          //   gravity: "auto",
          // }}
        />
      </div> */}

      <section ref={sectionRef} className="h-[100vh] w-full"></section>

      <div id="target-1" className="h-[100vh] w-full"></div>

      <LogoAnimated />
      {/* scroll={scroll} entryPoint={0.4}  */}
    </>
  );
};

export default Hero;

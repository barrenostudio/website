import React, { useRef } from "react";
import LogoAnimated from "./animation/LogoAnimated";
// import { CldVideoPlayer } from "next-cloudinary";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  // const [videoFixed, setVideoFixed] = useState(true);
  // const [videoTranslateY, setVideoTranslateY] = useState(0); // New state for video translation
  // const [blurLevel, setBlurLevel] = useState(12); // Initial blur level

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (sectionRef.current && videoRef.current) {
  //       const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

  //       if (sectionBottom <= 0) {
  //         // Section is out of view
  //         setVideoFixed(false);
  //         setVideoTranslateY(-sectionBottom); // Translate video with scroll amount
  //         setBlurLevel(0);
  //       } else {
  //         setVideoFixed(true);
  //         setVideoTranslateY(0); // Reset translation when section is in view

  //         // Calculate dynamic blur level (adjust values as needed)
  //         const maxBlur = 6;
  //         const scrollProgress = Math.max(
  //           0,
  //           Math.min(1, sectionBottom / window.innerHeight),
  //         ); // 0 to 1
  //         const currentBlur = scrollProgress * maxBlur;
  //         setBlurLevel(currentBlur);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial check on mount

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div
        ref={videoRef}
        className="absolute top-0 left-0 w-screen h-screen overflow-hidden"
      >
        <video
          src="https://res.cloudinary.com/dobclogz9/video/upload/q_auto/c_fill,g_auto,h_1080,w_1920/f_webm,vc_vp9/v1743490368/barreno-studio/splash"
          muted
          autoPlay
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="h-screen z-90 bg-black">
          <h1 className="py-[150px] tracking-[-3vw] font-extrabold leading-[380px] leading-none mix-blend-multiply bg-black lg:text-[400px] md:text-[128px] sm:text-[96px] text-[64px] text-off-blanco text-center tracking-[-1.44px]">
            BARRENO <br />
            STUDIO
          </h1>
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

      <section
        ref={sectionRef}
        className="relative h-screen w-screen flex justify-center hover:cursor-[url('/BS_cursor64.png'),_auto]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            className="flex flex-col items-center justify-center z-10 text-center"
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

        <LogoAnimated />
      </section>
    </>
  );
};

export default Hero;

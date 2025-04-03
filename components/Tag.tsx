import { CldVideoPlayer } from "next-cloudinary";
import React from "react";

const Tag = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-[127px] p-10">
      <div className="w-[496px] bg-transparent border-none">
        <div className="text-center text-[72px] leading-[72px] tracking-[-1.44px] font-heading-1">
          where vision meets precision, and stories come to life.
        </div>
      </div>
      <div className="h-[600px] w-[480px] overflow-hidden z-1">
        <CldVideoPlayer
          src="Monique_x_YSL_Beauty_ffpc7o"
          width="480"
          height="600"
          id="tag"
          muted
          autoplay
          loop
          controls={false} // Hides all default controls (including menus)
          transformation={{
            width: 480,
            height: 600,
            crop: "fill",
          }}
          className="rounded-[20px] z-1"
        />
      </div>
    </section>
  );
};

export default Tag;

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
      <div className="h-[800px] w-[480px] rounded-3xl overflow-hidden">
        <CldVideoPlayer
          src="Monique_x_YSL_Beauty_ffpc7o"
          width="480"
          height="800"
          id="tag"
          muted
          autoplay
          loop
          controls={false} // Hides all default controls (including menus)
          transformation={{
            width: 480,
            height: 800,
            crop: "fill",
            gravity: "auto",
          }}
        />
      </div>
    </section>
  );
};

export default Tag;

import React from "react";

const Tag = () => {
  return (
    <section className="-mt-[160px] flex w-full flex-col items-center justify-center gap-6 px-14 md:flex-row">
      <div className="flex w-full border-none bg-transparent md:w-1/2">
        <div className="flex text-center font-heading-1 text-heading-1 text-off-blanco">
          no story left untold
          {/* where vision meets precision, and stories come to life. */}
        </div>
      </div>
      <div className="z-1 flex w-full items-center justify-center overflow-hidden md:w-1/2">
        <video
          src="https://res.cloudinary.com/dobclogz9/video/upload/q_auto/c_fill,g_auto,h_600,w_480/v1743490368/Monique_x_YSL_Beauty_ffpc7o.webm"
          width="480"
          height="600"
          muted
          autoPlay
          loop
          playsInline
          className="z-1 rounded-[20px]"
        />
        {/* <CldVideoPlayer
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
        /> */}
      </div>
    </section>
  );
};

export default Tag;

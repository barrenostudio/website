"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    name: string;
    title?: string;
    text?: string;
    img?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      console.log("Adding animation...");
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  // Image scroll
  if (items.some((item) => item.img)) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item) => (
            <li className="" key={item.name}>
              <div className="relative z-20 flex flex-row items-center">
                {item.img && (
                  <div className="relative mr-3 h-[64px] w-[64px]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill={true}
                      className="object-fill"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );

    // Card Scroll
  } else {
    return (
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item) => (
            <li
              className="relative w-[350px] max-w-full shrink-0 rounded-[20px] bg-[linear-gradient(180deg,theme(colors.off-blanco),theme(colors.off-blanco))] px-8 py-6 md:w-[450px]"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 font-paragraph text-paragraph-sm text-black md:text-paragraph-md lg:text-paragraph">
                  {item.text}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  {item.img && (
                    <div className="relative mr-3 h-10 w-10">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill={true}
                        className="object-fill"
                      />
                    </div>
                  )}
                  <span className="flex flex-col gap-1">
                    <span className="text-md font-paragraph leading-[1.6] text-black">
                      {item.name}
                    </span>
                    <span className="font-paragraph text-sm leading-[1.6] text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

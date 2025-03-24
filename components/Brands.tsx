import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface Brand {
  name: string;
  icon: string; // Or React.ReactNode if you want to use JSX icons directly
}

const brandList: Brand[] = [
  {
    name: "UNIQLO",
    icon: "/uniqlo.svg",
  },
  {
    name: "UNIVERSITY OF MELBOURNE",
    icon: "/unimelb.svg",
  },
  {
    name: "CULTURE IS LIFE",
    icon: "/culture.svg",
  },
  {
    name: "YSL BEAUTY",
    icon: "/ysl.svg",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const Brands = () => {
  return (
    <div className="bg-off-blanco w-full p-3">
      {/* <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      /> */}
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="font-heading-3 text-3xl text-noche-black">
          BRAND COLLABORATIONS
        </div>
        {brandList.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center">
            <div className="h-[64px] w-[64px] relative">
              <Image src={brand.icon} fill={true} alt={brand.name} />
            </div>

            <h2 className="font-heading-3-halyard text-2xl text-noche-black pl-3">
              {/* {brand.name} */}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

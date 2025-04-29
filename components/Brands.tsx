import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const brandList = [
  {
    name: "UNIQLO",
    img: "/uniqlo.svg",
  },
  {
    name: "UNIVERSITY OF MELBOURNE",
    img: "/unimelb.svg",
  },
  {
    name: "CULTURE IS LIFE",
    img: "/culture.svg",
  },
  {
    name: "YSL BEAUTY",
    img: "/ysl.svg",
  },
];

const Brands = () => {
  return (
    <div className="w-full bg-off-blanco p-3">
      <div className="flex w-full flex-wrap items-center justify-center">
        <div className="flex w-full pl-5 font-heading-3 text-noche-black md:text-xl lg:w-1/5 lg:text-3xl">
          BRAND COLLABORATIONS
        </div>
        <div className="flex w-full lg:w-4/5">
          <InfiniteMovingCards
            items={brandList}
            direction="right"
            speed="fast"
            className="w-full"
          />
        </div>
        {/* {brandList.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center">
            <div className="h-[64px] w-[64px] relative">
            </div>

            <h2 className="font-heading-3-halyard text-2xl text-noche-black pl-3">

            </h2>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Brands;

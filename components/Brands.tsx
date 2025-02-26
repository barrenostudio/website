import React from "react";
import Image from "next/image";

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

const Brands = () => {
  return (
    <div className="bg-off-blanco w-full p-3">
      <div className="flex flex-row items-center justify-center gap-4">
        {brandList.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center">
            <div className="h-[64px] w-[64px] relative">
              <Image src={brand.icon} fill={true} alt={brand.name} />
            </div>

            <h2 className="font-heading-3-halyard text-3xl text-noche-black pl-3">
              {brand.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

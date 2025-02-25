import React from "react";

interface Brand {
  name: string;
  icon: string; // Or React.ReactNode if you want to use JSX icons directly
}

const brandList: Brand[] = [
  {
    name: "UNIQLO",
    icon: "ICON",
  },
  {
    name: "UNIVERSITY OF MELBOURNE",
    icon: "ICON",
  },
  {
    name: "HUME CITY COUNCIL",
    icon: "ICON",
  },
  {
    name: "YSL BEAUTY",
    icon: "ICON",
  },
];

const Brands = () => {
  return (
    <div className="bg-off-blanco w-full p-3">
      <div className="flex flex-row items-center justify-center gap-4">
        {brandList.map((brand) => (
          <div key={brand.name} className="flex">
            <h2 className="font-heading-3-halyard text-3xl text-noche-black">
              {brand.name}
            </h2>
            <p>{brand.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

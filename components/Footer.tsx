import React from "react";

const navigationItems = {
  Brand: ["Our Mission", "Our Team", "Our Process"],
  "Selected Projects": ["University Of Melbourne", "YSL", "UNIQLO"],
  resources: ["Blog", "Contact"],
};

const Footer = () => {
  return (
    <footer className="w-full bg-off-blanco">
      <div className="mx-auto max-w-[1440px] border-t border-[#d9d9d9] px-8 pt-8">
        <div className="grid grid-cols-4 gap-16">
          <div>
            <img
              src="/logo-white.png"
              alt="Logo"
              className="h-[80px] w-[80px] rounded-full bg-noche-black p-2"
            />
          </div>

          {Object.entries(navigationItems).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-3">
              <h3 className="mb-4 font-heading-3-halyard text-xl capitalize text-noche-black">
                {section}
              </h3>
              {items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body-base text-noche-black"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center gap-5">
          <p className="text-center font-paragraph text-noche-black">
            © 2025, Barreno Studio.
            <br />
            All Rights Reserved
          </p>
        </div>
        <h1 className="z-90 text-center font-heading-1-halyard text-heading-1-halyard text-noche-black">
          Barreno Studio
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

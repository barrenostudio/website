import React from "react";

const navigationItems = {
  "Brand": ["Our Mission", "Our Team", "Our Process"],
  "Selected Projects": ["University Of Melbourne", "YSL", "UNIQLO"],
  "resources": ["Blog", "Contact"],
};

const Footer = () => {
  return (
    <footer className="w-full bg-off-blanco">
      <div className="max-w-[1440px] mx-auto pt-8 pb-40 px-8 border-t border-[#d9d9d9]">
        <div className="grid grid-cols-4 gap-16">
          <div>
            <img
              src="/logo-white.png"
              alt="Logo"
              className="w-[80px] h-[80px] bg-noche-black rounded-full p-2"
            />
          </div>

          {Object.entries(navigationItems).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-3">
              <h3 className="font-heading-3-halyard text-xl text-noche-black mb-4 capitalize">
                {section}
              </h3>
              {items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-noche-black font-body-base"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mt-20">
          <p className="text-golden-hour-yellow text-center font-paragraph">
            © 2025, Barreno Studio.
            <br />
            All Rights Reserved
          </p>
          <img
            src=""
            alt="Barreno Wordmark"
            className="w-[100px] h-[100px] object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

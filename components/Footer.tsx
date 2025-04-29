import Image from "next/image";

const navigationItems = {
  Brand: ["Our Mission", "Our Team", "Our Process"],
  "Selected Projects": ["University Of Melbourne", "YSL", "UNIQLO"],
  resources: ["Blog", "Contact"],
};

const Footer = () => {
  return (
    <footer className="w-full bg-off-blanco">
      <div className="px-8 pt-8 lg:px-14">
        <div className="flex">
          <div className="w-[80px]">
            <Image
              src="/logo-white.png"
              alt="Logo"
              width={80}
              height={80}
              className="absolute h-[80px] w-[80px] rounded-full bg-noche-black p-2"
            />
          </div>

          <div className="ml-10 grid w-full grid-cols-3 gap-16 px-16">
            {Object.entries(navigationItems).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-3">
                <h3 className="mb-4 font-heading-3 text-heading-3-sm text-noche-black md:text-heading-3-md lg:text-heading-3">
                  {section}
                </h3>
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-paragraph text-paragraph-sm text-noche-black md:text-paragraph-md lg:text-paragraph"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
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

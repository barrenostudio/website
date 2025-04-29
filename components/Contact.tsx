import React from "react";
import BloomEmbed from "./ui/BloomEmbed";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";

const Contact = () => {
  const sectionData = {
    heading: "Contact",
    subheading: "Why Choose Us",
    description: [
      "True Collaboration – We work with you, not just for you, to bring your vision to life.",
      "Standout Visuals – Content that grabs attention and makes an impact.",
      "Precision & Creativity – Sharp execution with an artistic edge.",
    ],
    imageSrc: "team_shot2_yr1x4d",
  };

  return (
    <section className="flex justify-center px-8 md:px-14">
      <Card className="flex flex-col gap-10 border-0 bg-transparent shadow-none md:flex-row">
        <CardContent className="p-0">
          <div className="h-full w-full overflow-clip bg-cover bg-center object-fill">
            <CldImage
              width="800"
              height="600"
              src={sectionData.imageSrc}
              crop="fill"
              alt="barreno studio team"
              className="rounded-[20px]"
            />
          </div>
        </CardContent>

        <CardContent className="flex flex-col justify-center gap-[79px] p-0">
          <h2 className="font-heading-1 text-heading-1-sm text-off-blanco md:text-heading-1-md lg:text-heading-1">
            {sectionData.heading}
          </h2>

          <div className="text-off-blanco">
            <span className="mb-4 block font-heading-3 text-heading-3-sm text-off-blanco md:text-heading-3-md lg:text-heading-3">
              {sectionData.subheading}
            </span>

            {sectionData.description.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 font-paragraph text-paragraph-sm text-off-blanco md:text-paragraph-md lg:text-paragraph"
              >
                {paragraph}
              </p>
            ))}
            {/* CTA Button */}
            <Button className="mt-4 rounded-md bg-off-blanco p-6 font-paragraph text-paragraph-sm text-noche-black underline hover:text-off-blanco md:text-paragraph-md lg:text-paragraph">
              Ready to turn heads?
            </Button>
            <div>
              <BloomEmbed formId="l0zdgewwx73go" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    // <section className="flex flex-col items-center justify-center py-16 w-full text-off-blanco">
    //   <Card className="bg-transparent border-none max-w-lg">
    //     <CardContent className="flex flex-col items-center p-0 space-y-6">
    //       <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
    //         <CldImage
    //           width="800"
    //           height="600"
    //           src="team_shot2_yr1x4d"
    //           crop="fill"
    //           alt="barreno studio team"
    //         />
    //       </div>

    //       {/* Heading */}
    //       <h2 className="font-heading-1 text-center text-7xl text-off-blanco [font-style:var(--heading-1-font-style)]">
    //         Work with us
    //       </h2>

    //       {/* Next steps section */}
    //       <div className="w-full text-[#fef8e7]">
    //         <p className="[font-family:'PP_Formula-Regular',Helvetica] text-[32px] leading-[23.5px] mb-6">
    //           SIMPLE NEXT STEPS
    //         </p>

    //         <ul className="space-y-2">
    //           {nextSteps.map((step, index) => (
    //             <li
    //               key={index}
    //               className="[font-family:'PP_Formula-Regular',Helvetica] text-2xl leading-6 flex"
    //             >
    //               <span className="mr-2">{index + 1}.</span>
    //               <span>{step}</span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* CTA Button */}
    //       <Button className="bg-golden-hour-yellow text-red-50 rounded-md opacity-90 w-[180px] h-[50px] font-bold [font-family:'Avenir_Next_Condensed-Bold',Helvetica] text-xl">
    //         WORK WITH US
    //       </Button>
    //       <div>
    //         <BloomEmbed formId="l0zdgewwx73go" />
    //       </div>
    //     </CardContent>
    //   </Card>
    // </section>
  );
};

export default Contact;

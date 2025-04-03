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
    <section className="flex justify-center pt-10 pb-[200px] px-8">
      <Card className="flex flex-row gap-9 bg-transparent border-0 shadow-none">
        <CardContent className="p-0">
          <div className="w-full h-[600px] bg-cover bg-center object-fill overflow-clip">
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

        <CardContent className="flex flex-col justify-center gap-[79px] p-0 max-w-[407px]">
          <h2 className="font-heading-1 lg:text-8xl md:text-6xl text-off-blanco">
            {sectionData.heading}
          </h2>

          <div className="text-off-blanco">
            <span className="block font-heading-1 font-normal text-[#fef8e7] text-[32px] tracking-[0] leading-[23.5px] mb-4">
              {sectionData.subheading}
            </span>

            {sectionData.description.map((paragraph, index) => (
              <p
                key={index}
                className="font-paragraph text-paragraph tracking-paragraph leading-paragraph mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
            {/* CTA Button */}
            <Button className="p-6 bg-off-blanco text-noche-black underline rounded-md font-bold [font-family:'Avenir_Next_Condensed-Bold',Helvetica] text-xl">
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

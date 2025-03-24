import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";

const Services = () => {
  const testimonials = [
    { name: "BEN", company: "ASDFAFA" },
    { name: "BOB", comment: "WOW" },
    { name: "MADISON", position: "CEO BLAH", comment: "ASDFASDFADSFSDF" },
  ];

  return (
    <section className="flex flex-wrap max-w-full items-start justify-center gap-8 py-24">
      {/* First portfolio image */}
      <Card className="w-full md:w-[460px] h-[367px] rounded-[20px] overflow-hidden border-0">
        <CardContent className="p-0 h-full">
          <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
            <CldImage
              width="459"
              height="325"
              src="BTS_ahtn9n"
              crop="fill"
              alt="barreno studio team"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full md:w-[300] h-[367px] rounded-[20px] overflow-hidden border-0">
        <CardContent className="p-0 h-full">
          <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden"></div>
        </CardContent>
      </Card>

      {/* Our Services heading */}
      <div className="w-full md:w-[450px] font-heading-1 text-off-blanco lg:text-7xl md:text-6xl leading-tight">
        Our Services
      </div>

      {/* Our Process section */}
      <Card className="w-full md:w-[450px] bg-transparent border-0">
        <CardContent className="p-0 font-heading-1 font-normal text-off-blanco text-right">
          <h3 className="text-[32px] leading-snug mb-6">OUR PROCESS</h3>
          <p className="font-paragraph text-[length:var(--paragraph-font-size)] tracking-paragraph leading-paragraph space-y-6">
            Lorem ipsum dolor sit amet consectetur. Volutpat ut sed eu auctor
            rutrum donec.
          </p>
          <p className="font-paragraph text-paragraph tracking-paragraph leading-paragraph mt-6">
            Lorem ipsum dolor sit amet consectetur. Laoreet mollis potenti
            dictum fermentum pretium sollicitudin. Volutpat ut sed eu auctor
            rutrum donec ultrices sagittisLorem ipsum dolor sit amet
            consectetur.
          </p>
          <p className="font-paragraph text-paragraph tracking-paragraph leading-paragraph mt-6">
            Volutpat ut sed eu auctor rutrum donec ultrices sagittis
          </p>
        </CardContent>
      </Card>

      {/* Second portfolio image */}
      <Card className="w-full md:w-[459px] h-[325px] rounded-[20px] overflow-hidden border-0">
        <CardContent className="p-0 h-full">
          <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
            <CldImage
              width="459"
              height="325"
              src="BTS_ahtn9n"
              crop="fill"
              alt="barreno studio team"
            />
          </div>
        </CardContent>
      </Card>

      {/* Client testimonials section */}
      <Card className="w-full md:flex-1 bg-transparent border-0">
        <CardContent className="p-0 font-heading-1 font-normal text-off-blanco">
          <h3 className="text-[32px] leading-8 mb-6">WHAT OUR CLIENTS THINK</h3>
          <div className="font-paragraph text-[length:var(--paragraph-font-size)] leading-paragraph tracking-paragraph space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mt-6">
                {testimonial.name} -{" "}
                {testimonial.company ||
                  testimonial.comment ||
                  `${testimonial.position} ${testimonial.comment}`}
              </div>
            ))}
            <div className="mt-6">CTA FOR MORE REVIEWS</div>
          </div>
        </CardContent>
      </Card>

      {/* Third portfolio image */}
      <Card className="w-full md:w-[459px] h-[325px] rounded-[20px] overflow-hidden border-0">
        <CardContent className="p-0 h-full">
          <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
            <CldImage
              width="459"
              height="325"
              src="BTS_ahtn9n"
              crop="fill"
              alt="barreno studio team"
            />
          </div>
        </CardContent>
      </Card>
    </section>

    // <section className="flex flex-wrap w-[1167px] items-start gap-[0px_212px]">
    //   <div className="flex items-start gap-[77px]">
    //     <div className="flex flex-col items-center gap-[71px]">
    //       <h2 className="text-golden-hour-yellow text-[72px] text-center font-heading-1">
    //         SERVICES
    //       </h2>
    //       <div className="flex flex-wrap items-center justify-between w-full gap-8 lg:gap-16">
    //         <div className="flex flex-col items-center justify-between gap-8">
    //           <Card className="w-[459px] h-[350px] bg-off-blanco rounded-[20px]">
    //             <CardContent className="p-6 text-noche-black">
    //               <h3 className="text-[36px] font-heading-3 mb-6">We offer</h3>
    //               <p className="text-[18px] font-paragraph">
    //                 COPY PLACEHOLDER: WHAT SERVICES ARE OFFERED..
    //                 <br />
    //                 <br />
    //                 INCLUSIONS ETC..
    //                 <br />
    //                 <br />
    //                 WHY choose Barreno Studio?
    //                 <br />
    //                 <br />
    //                 insert CTA line!
    //               </p>
    //             </CardContent>
    //           </Card>
    //           <Button className="w-[180px] h-[50px] bg-golden-hour-yellow text-white opacity-90 rounded-md">
    //             WORK WITH US
    //           </Button>
    //         </div>
    // <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
    //   <CldImage
    //     width="600"
    //     height="460"
    //     src="BTS_ahtn9n"
    //     crop="fill"
    //     alt="barreno studio team"
    //   />
    // </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Services;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";

const Services = () => {
  return (
    <section className="flex flex-wrap w-[1167px] items-start gap-[0px_212px]">
      <div className="flex items-start gap-[77px]">
        <div className="flex flex-col items-center gap-[71px]">
          <h2 className="text-golden-hour-yellow text-[72px] text-center font-heading-1">
            SERVICES
          </h2>
          <div className="flex flex-wrap items-center justify-between w-full gap-8 lg:gap-16">
            <div className="flex flex-col items-center justify-between gap-8">
              <Card className="w-[459px] h-[350px] bg-off-blanco rounded-[20px]">
                <CardContent className="p-6 text-noche-black">
                  <h3 className="text-[36px] font-heading-3 mb-6">We offer</h3>
                  <p className="text-[18px] font-paragraph">
                    COPY PLACEHOLDER: WHAT SERVICES ARE OFFERED..
                    <br />
                    <br />
                    INCLUSIONS ETC..
                    <br />
                    <br />
                    WHY choose Barreno Studio?
                    <br />
                    <br />
                    insert CTA line!
                  </p>
                </CardContent>
              </Card>
              <Button className="w-[180px] h-[50px] bg-golden-hour-yellow text-white opacity-90 rounded-md">
                WORK WITH US
              </Button>
            </div>
            <div className="flex rounded-[20px] bg-cover bg-center1 overflow-hidden">
              <CldImage
                width="600"
                height="460"
                src="BTS_ahtn9n"
                crop="fill"
                alt="barreno studio team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

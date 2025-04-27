import React from "react";
import heroImage from "../assets/heroImage.avif";

const Hero = () => {
  return (
    <section className="flex justify-center items-center relative -z-1">
      {/* hero image */}
      <img
        src={heroImage}
        alt="Hero image"
        className="w-full h-[180px] object-cover md:h-[300px] lg:h-[400px] xl:h-[500px]"
      />
      {/* title and text container */}
      <div className="border p-4 flex flex-col text-center gap-2 text-white absolute">
        <h1 className="text-[1.5rem] tracking-[4px] lg:text-[1.75rem] xl:text-[2rem]">
          ADAM SCHARF
        </h1>
        <p className="tracking-[4px] font-thin">ART DIRECTOR</p>
      </div>
    </section>
  );
};

export default Hero;

import heroImage from "../assets/heroImage.avif";

const Hero = () => {
  return (
    <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[340px] lg:min-h-[480px] xl:min-h-[560px]">
      <img
        src={heroImage}
        alt="Adam Scharf art direction hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-4 flex max-w-[92vw] flex-col gap-3 border border-white px-5 py-5 text-center text-white sm:px-8 sm:py-7">
        <h1 className="text-2xl tracking-[4px] sm:text-3xl lg:text-4xl">
          ADAM SCHARF
        </h1>
        <p className="text-sm tracking-[4px] font-thin sm:text-base">
          ART DIRECTOR
        </p>
      </div>
    </section>
  );
};

export default Hero;

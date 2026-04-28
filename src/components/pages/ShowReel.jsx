const ShowReel = () => {
  return (
    <section className="p-4 grid gap-4 xl:w-[1100px] xl:mx-auto xl:py-16">
      <video
        controls
        poster={`${import.meta.env.BASE_URL}images/vimeo-video-cover.png`}
        className="h-[250px] md:w-full object-cover shadow-md md:h-[400px] lg:h-[500px]"
      >
        <source
          src={`${import.meta.env.BASE_URL}videos/vimeo-video.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2 pt-8 border-t-2">
        <h3 className="text-lg">SHOW REEL</h3>
        <div className="font-thin xl:col-start-1">
          <p>Year of production: 2025</p>
          <p>Running Time: 2:30 min</p>
          <p>Color / Sound / Subtitled</p>
        </div>
        <p className="font-thin xl:row-start-1 xl:col-start-2 xl:row-span-2">
          A compact motion reel presenting art direction studies across music,
          fashion, and commercial concepts. The edit focuses on visual rhythm,
          image sequencing, and campaign mood rather than a single linear story.
        </p>
      </div>
    </section>
  );
};

export default ShowReel;

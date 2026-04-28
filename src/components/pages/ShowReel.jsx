const ShowReel = () => {
  return (
    <section className="px-4 py-8 xl:mx-auto xl:w-[1100px] xl:py-14">
      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_minmax(220px,360px)] md:items-end">
        <div>
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">SHOW REEL</p>
          <h1 className="text-2xl sm:text-3xl">Motion direction reel</h1>
        </div>
        <p className="font-thin text-gray-600 md:text-right">
          A compact motion edit across music, fashion, and commercial concepts.
        </p>
      </div>

      <div className="overflow-hidden bg-black shadow-sm">
        <video
          controls
          poster={`${import.meta.env.BASE_URL}images/vimeo-video-cover.png`}
          className="aspect-video w-full object-cover"
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/vimeo-video.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-8 grid gap-6 border-t border-gray-200 pt-8 lg:grid-cols-[minmax(0,0.7fr)_1fr]">
        <div className="grid gap-1 font-thin text-gray-600">
          <p>Year of production: 2025</p>
          <p>Running Time: 2:30 min</p>
          <p>Color / Sound / Subtitled</p>
        </div>
        <p className="font-thin text-gray-700">
          The edit focuses on visual rhythm, image sequencing, and campaign
          mood rather than a single linear story. It acts as a quick survey of
          the portfolio's tone and motion language.
        </p>
      </div>
    </section>
  );
};

export default ShowReel;

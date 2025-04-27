const ShowReel = () => {
  return (
    <section className="p-4 grid gap-4  xl:w-[1100px] xl:mx-auto xl:py-16">
      <video
        controls
        poster="../../../public/images/vimeo-video-cover.png"
        className="h-[250px] md:w-full object-cover shadow-md md:h-[400px] lg:h-[500px]"
      >
        <source src="../../../public/videos/vimeo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* title and description */}
      <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2 pt-8 border-t-2 ">
        <h3 className="text-lg">SHOW REEL</h3>
        <div className="font-thin xl:col-start-1">
          <p>Year of production: 2035</p>
          <p>Running Time: 2:30 min</p>
          <p>Color / Sound / Subtitled</p>
        </div>
        <p className="font-thin xl:row-start-1 xl:col-start-2 xl:row-span-2">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
    </section>
  );
};

export default ShowReel;

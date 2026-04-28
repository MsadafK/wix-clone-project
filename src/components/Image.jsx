import { useNavigate } from "react-router-dom";

const Image = ({ title, category, year, image, id, featured = false }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative block w-full overflow-hidden text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-black ${
        featured ? "md:col-span-2 h-[440px] lg:h-[520px]" : "h-[360px] lg:h-[430px]"
      }`}
      aria-label={`View ${title} project`}
    >
      <img
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute left-4 right-4 bottom-4 text-white md:left-6 md:right-6 md:bottom-6">
        <p className="mb-2 text-xs tracking-[3px] text-white/80">
          {category} / {year}
        </p>
        <h2 className="text-xl md:text-2xl">{title}</h2>
      </div>
    </button>
  );
};

export default Image;

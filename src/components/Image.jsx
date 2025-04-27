import { useNavigate } from "react-router-dom";

const Image = ({ title, image, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative h-[373.33px] cursor-pointer md:h-[400px] lg:h-[450px] xl:h-[500px]"
    >
      {/* image */}
      <img className="w-full h-full object-cover" src={image} alt={title} />
      {/* overlay effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      {/* title */}
      <h2 className="text-lg text-white absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
        {title}
      </h2>
    </div>
  );
};

export default Image;

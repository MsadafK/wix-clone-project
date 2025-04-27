import React from "react";
import { useNavigate } from "react-router-dom";

const BookingCard = ({ title, time, type, image, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book-online/${id}/schedule`, {
      state: { id, title, time, type, image },
    });
  };

  return (
    <div className="border border-gray-300 md:w-1/2 md:mx-auto lg:w-[60%] lg:grid lg:grid-cols-2 lg:gap-8 xl:w-full">
      <img
        className="w-full h-[278px] object-cover lg:h-[285px] cursor-pointer"
        src={image}
        alt=""
        onClick={handleClick}
      />
      <div className="flex flex-col gap-2 p-4 font-thin lg:self-center">
        <h3 className="text-xl cursor-pointer" onClick={handleClick}>
          {title}
        </h3>
        <p>{time}</p>
        <p>{type}</p>
        <button
          className="w-full p-2 bg-teal-500 text-white font-thin font-lg lg:w-1/2 xl:w-1/3 my-2 cursor-pointer"
          onClick={handleClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;

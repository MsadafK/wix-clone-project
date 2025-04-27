import React from "react";
import BookingCard from "../BookingCard";
import imageOne from "../../assets/chicksDrive.webp";
import imageTwo from "../../assets/rayOfLight.webp";
import imageThree from "../../assets/jacket.webp";

const BookOnline = () => {
  const dataObj = [
    {
      id: 1,
      title: "TV COMMERCIAL",
      time: "1 hour",
      type: "Creative Meeting",
      image: imageOne,
    },
    {
      id: 2,
      title: "FASHION VIDEO",
      time: "1 hour",
      type: "Creative Meeting",
      image: imageTwo,
    },
    {
      id: 3,
      title: "MUSIC VIDEO",
      time: "1 hour",
      type: "Creative Meeting",
      image: imageThree,
    },
  ];

  return (
    <section className="flex flex-col gap-8 p-4 py-12 xl:w-[1100px] xl:mx-auto xl:gap-16 xl:py-16">
      {dataObj.map((data) => (
        <BookingCard
          key={data.id}
          title={data.title}
          time={data.time}
          type={data.type}
          image={data.image}
          id={data.id}
        />
      ))}
    </section>
  );
};

export default BookOnline;

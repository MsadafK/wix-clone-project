import React from "react";
import Image from "./Image";
import rayOfLightImage from "../assets/rayOfLight.webp";
import rickLandryImage from "../assets/rickLandry.avif";
import reflectionImage from "../assets/reflection.webp";
import thunderStormImage from "../assets/thunderStorm.webp";
import houndsOfLove from "../assets/houndsOfLove.webp";
import newWordImage from "../assets/newWorld.webp";
import chicksDrive from "../assets/chicksDrive.webp";

const Images = () => {
  const imgObj = [
    {
      id: 1,
      title: "Ray of Light",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      url: rayOfLightImage,
    },
    {
      id: 2,
      title: "Rick Landry/Roots",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      url: rickLandryImage,
    },
    {
      id: 3,
      title: "Reflection",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      url: reflectionImage,
    },
    {
      id: 4,
      title: "Thunder Storm",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      url: thunderStormImage,
    },
    {
      id: 5,
      title: "Hounds of Love",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      url: houndsOfLove,
    },
    {
      id: 6,
      title: "A New World",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      url: newWordImage,
    },
    {
      id: 7,
      title: "The Chicks / Drive",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      url: chicksDrive,
    },
  ];

  return (
    <section className="px-4 py-8 flex flex-col gap-4 xl:w-[1100px] xl:mx-auto xl:py-16 xl:gap-8">
      {imgObj.map((img) => (
        <Image key={img.id} title={img.title} image={img.url} id={img.id} />
      ))}
    </section>
  );
};

export default Images;

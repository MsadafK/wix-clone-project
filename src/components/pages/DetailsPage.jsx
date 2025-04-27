import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import rayOfLightImage from "../../assets/rayOfLight.webp";
import rickLandryImage from "../../assets/rickLandry.avif";
import reflectionImage from "../../assets/reflection.webp";
import thunderStormImage from "../../assets/thunderStorm.webp";
import houndsOfLove from "../../assets/houndsOfLove.webp";
import newWordImage from "../../assets/newWorld.webp";
import chicksDrive from "../../assets/chicksDrive.webp";

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

const DetailsPage = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const imageId = parseInt(id, 10);

  const currentImage = imgObj.find((img) => img.id === imageId);

  const handlePrevious = () => {
    if (imageId > 1) {
      navigate(`/details/${imageId - 1}`);
    }
  };

  const handleNext = () => {
    if (imageId < imgObj.length) {
      navigate(`/details/${imageId + 1}`);
    }
  };

  if (!currentImage) {
    return <div className="text-center py-10">Image not found</div>;
  }

  return (
    <div className="px-4 py-8 flex flex-col items-center gap-6 xl:w-[1100px] xl:mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
      <h2 className="text-2xl xl:mb-auto">{currentImage.title}</h2>
      <p className="text-center text-gray-700 xl:text-left">
        {currentImage.text}
      </p>
      <div
        className="relative w-full max-w-3xl xl:col-span-2 xl:max-w-none xl:h-[462px] group cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={currentImage.url}
          alt={currentImage.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
      </div>

      <div className="flex gap-4 xl:col-span-2 xl:justify-between">
        {imageId > 1 && (
          <button
            onClick={handlePrevious}
            className="bg-black text-white px-4 py-2 rounded cursor-pointer"
          >
            Previous
          </button>
        )}
        {imageId < imgObj.length && (
          <button
            onClick={handleNext}
            className="bg-black text-white px-4 py-2 rounded xl:ml-auto cursor-pointer"
          >
            Next
          </button>
        )}
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-12 text-black text-4xl cursor-pointer"
          >
            ×
          </button>
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectById, projects } from "../../data/projects";

const DetailsPage = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const imageId = Number(id);

  const currentProject = getProjectById(imageId);

  const handlePrevious = () => {
    if (imageId > 1) {
      navigate(`/details/${imageId - 1}`);
    }
  };

  const handleNext = () => {
    if (imageId < projects.length) {
      navigate(`/details/${imageId + 1}`);
    }
  };

  if (!currentProject) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl mb-4">Project not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-4 py-2 rounded cursor-pointer"
        >
          Back to gallery
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 flex flex-col items-center gap-6 xl:w-[1100px] xl:mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
      <div className="text-center xl:text-left xl:mb-auto">
        <h2 className="text-2xl mb-3">{currentProject.title}</h2>
        <div className="text-sm tracking-[2px] text-gray-500">
          <p>{currentProject.category}</p>
          <p>{currentProject.year}</p>
          <p>{currentProject.role}</p>
        </div>
      </div>

      <p className="text-center text-gray-700 xl:text-left">
        {currentProject.description}
      </p>

      <div
        className="relative w-full max-w-3xl xl:col-span-2 xl:max-w-none xl:h-[462px] group cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
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
        {imageId < projects.length && (
          <button
            onClick={handleNext}
            className="bg-black text-white px-4 py-2 rounded xl:ml-auto cursor-pointer"
          >
            Next
          </button>
        )}
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-12 text-black text-4xl cursor-pointer"
            aria-label="Close image preview"
          >
            X
          </button>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;

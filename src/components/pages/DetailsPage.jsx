import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectById, projects } from "../../data/projects";

const DetailsPage = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const imageId = Number(id);
  const currentProject = getProjectById(imageId);

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

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
      <section className="px-4 py-20 text-center">
        <h1 className="mb-4 text-2xl">Project not found</h1>
        <Link to="/" className="inline-block bg-black px-5 py-3 text-white">
          Back to gallery
        </Link>
      </section>
    );
  }

  return (
    <section className="px-4 py-8 xl:mx-auto xl:w-[1100px] xl:py-14">
      <Link
        to="/"
        className="mb-8 inline-block text-sm text-gray-500 hover:text-black hover:underline"
      >
        {"< Back to work"}
      </Link>

      <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:items-end">
        <div>
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">
            {currentProject.category}
          </p>
          <h1 className="text-3xl sm:text-4xl">{currentProject.title}</h1>
        </div>

        <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-3 lg:text-right">
          <p>{currentProject.year}</p>
          <p className="sm:col-span-2">{currentProject.role}</p>
        </div>
      </div>

      <button
        type="button"
        className="group relative mb-8 block aspect-[4/3] w-full overflow-hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black sm:aspect-[16/9]"
        onClick={() => setIsLightboxOpen(true)}
        aria-label={`Open ${currentProject.title} image preview`}
      >
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
      </button>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)]">
        <p className="text-gray-700 lg:text-lg">{currentProject.description}</p>

        <div className="grid gap-3 border-t border-gray-200 pt-5 text-sm tracking-[2px] text-gray-500 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p>{currentProject.category}</p>
          <p>{currentProject.year}</p>
          <p>{currentProject.role}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          onClick={handlePrevious}
          disabled={imageId <= 1}
          className="min-h-11 border border-black px-5 py-3 text-sm tracking-[2px] disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={imageId >= projects.length}
          className="min-h-11 bg-black px-5 py-3 text-sm tracking-[2px] text-white disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${currentProject.title} image preview`}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-4 top-4 min-h-11 min-w-11 text-2xl font-bold"
            aria-label="Close image preview"
          >
            X
          </button>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="max-h-[85dvh] max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default DetailsPage;

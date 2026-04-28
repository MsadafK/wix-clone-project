import { useMemo, useState } from "react";
import Image from "./Image";
import { projects } from "../data/projects";

const Images = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="px-4 py-10 xl:w-[1100px] xl:mx-auto xl:py-16">
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs tracking-[4px] text-gray-500 mb-3">
            SELECTED WORK
          </p>
          <h2 className="text-2xl md:text-3xl">Campaigns and visual systems</h2>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border px-3 py-2 text-xs tracking-[2px] transition-colors cursor-pointer ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:gap-6">
        {filteredProjects.map((project, index) => (
          <Image
            key={project.id}
            title={project.title}
            category={project.category}
            year={project.year}
            image={project.image}
            id={project.id}
            featured={index === 0 && selectedCategory === "All"}
          />
        ))}
      </div>
    </section>
  );
};

export default Images;

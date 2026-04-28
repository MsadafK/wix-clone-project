import Image from "./Image";
import { projects } from "../data/projects";

const Images = () => {
  return (
    <section className="px-4 py-8 flex flex-col gap-4 xl:w-[1100px] xl:mx-auto xl:py-16 xl:gap-8">
      {projects.map((project) => (
        <Image
          key={project.id}
          title={project.title}
          image={project.image}
          id={project.id}
        />
      ))}
    </section>
  );
};

export default Images;

import rayOfLightImage from "../assets/rayOfLight.webp";
import rickLandryImage from "../assets/rickLandry.avif";
import reflectionImage from "../assets/reflection.webp";
import thunderStormImage from "../assets/thunderStorm.webp";
import houndsOfLoveImage from "../assets/houndsOfLove.webp";
import newWorldImage from "../assets/newWorld.webp";
import chicksDriveImage from "../assets/chicksDrive.webp";

export const projects = [
  {
    id: 1,
    title: "Ray of Light",
    category: "Music Video",
    year: "2025",
    role: "Art Direction, visual concept, campaign mood",
    image: rayOfLightImage,
    description:
      "A high-contrast visual direction study built around movement, silhouette, and fast editorial pacing. The project focuses on translating a music brief into a bold screen language with strong lighting and atmospheric composition.",
  },
  {
    id: 2,
    title: "Rick Landry / Roots",
    category: "Brand Film",
    year: "2025",
    role: "Creative direction, set styling, visual research",
    image: rickLandryImage,
    description:
      "A grounded identity film concept using natural textures, documentary framing, and warm color grading to create a sense of memory, place, and craft.",
  },
  {
    id: 3,
    title: "Reflection",
    category: "Editorial Campaign",
    year: "2024",
    role: "Art direction, look development, production design",
    image: reflectionImage,
    description:
      "An editorial image system exploring mirrors, soft contrast, and layered compositions. The visual approach balances clean commercial styling with a quieter cinematic tone.",
  },
  {
    id: 4,
    title: "Thunder Storm",
    category: "Commercial Concept",
    year: "2024",
    role: "Concept development, lighting direction, frame design",
    image: thunderStormImage,
    description:
      "A dramatic product and lifestyle direction study shaped around tension, weather, and saturated contrast. Built to feel immediate, polished, and campaign-ready.",
  },
  {
    id: 5,
    title: "Hounds of Love",
    category: "Music Campaign",
    year: "2024",
    role: "Campaign art direction, image sequencing, styling",
    image: houndsOfLoveImage,
    description:
      "A romantic, performance-led visual system with a strong editorial point of view. The concept uses texture, color, and close framing to create an intimate campaign presence.",
  },
  {
    id: 6,
    title: "A New World",
    category: "Launch Visuals",
    year: "2023",
    role: "Visual identity, moodboards, campaign direction",
    image: newWorldImage,
    description:
      "A future-facing campaign concept designed around scale, optimism, and clean visual hierarchy. The project explores how art direction can make a launch feel expansive without losing clarity.",
  },
  {
    id: 7,
    title: "The Chicks / Drive",
    category: "Music Video",
    year: "2023",
    role: "Art direction, location mood, visual references",
    image: chicksDriveImage,
    description:
      "A road-film inspired music visual built around motion, daylight, and performance energy. The direction keeps the imagery direct and emotionally readable.",
  },
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === Number(id));

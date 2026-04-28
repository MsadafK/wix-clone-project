import chicksDriveImage from "../assets/chicksDrive.webp";
import rayOfLightImage from "../assets/rayOfLight.webp";
import jacketImage from "../assets/jacket.webp";

export const services = [
  {
    id: 1,
    title: "TV Commercial",
    time: "1 hour",
    type: "Creative Meeting",
    image: chicksDriveImage,
    description:
      "A focused session for commercial concepts, campaign tone, and shot direction.",
  },
  {
    id: 2,
    title: "Fashion Video",
    time: "1 hour",
    type: "Creative Meeting",
    image: rayOfLightImage,
    description:
      "A visual planning session for fashion films, editorial motion, and styling references.",
  },
  {
    id: 3,
    title: "Music Video",
    time: "1 hour",
    type: "Creative Meeting",
    image: jacketImage,
    description:
      "A concept session for performance visuals, moodboards, and production direction.",
  },
];

export const getServiceById = (id) =>
  services.find((service) => service.id === Number(id));

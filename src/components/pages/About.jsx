import { useState } from "react";
import facebookIcon from "../../assets/facebookIcon.avif";
import instaIcon from "../../assets/instaIcon.avif";
import twitterIcon from "../../assets/twitterIcon.avif";
import vimeoIcon from "../../assets/vimeoIcon.avif";

const About = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {};

    if (!formData.firstName.trim()) {
      tempErrors.firstName = "! Enter a first name.";
    }
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "! Enter a last name.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "! Enter an email address like example@mysite.com.";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});
    setFormSubmitted(true);
  };

  return (
    <section className="md:grid md:grid-cols-2 xl:w-[1100px] xl:mx-auto xl:gap-12 xl:py-16">
      <div className="md:col-span-2 flex flex-col gap-8 px-4 py-8 text-center md:grid md:grid-cols-2 xl:py-16">
        <img
          className="md:row-span-2 md:self-center"
          src={`${import.meta.env.BASE_URL}images/about-image.avif`}
          alt="Adam Scharf portrait"
        />
        <h3 className="text-lg md:col-start-2 md:row-start-1">
          ABOUT ADAM SCHARF
        </h3>
        <p className="font-thin md:col-start-2 md:row-start-1 md:mt-auto md:pt-12">
          Adam Scharf is an art director focused on visual systems for music,
          fashion, and commercial storytelling. His work blends cinematic
          references, clean composition, and campaign-ready production thinking.
        </p>
        <p className="font-thin md:col-start-2 md:row-start-2">
          This React rebuild keeps the original Wix-inspired visual direction
          while tightening the portfolio experience: clearer case studies,
          stronger project structure, and a booking flow that feels intentional.
        </p>
      </div>

      <div className="font-thin flex flex-col gap-8 px-4 py-8 text-center">
        <h3 className="text-lg">AWARDS AND RECOGNITIONS</h3>
        <div>
          <p>2025 - Shortlisted Visual Direction - Digital Campaign Awards</p>
          <p>2024 - Best Music Campaign Concept - Studio Showcase</p>
          <p>2024 - Editorial Art Direction Selection - Creative Review</p>
          <p>2023 - Emerging Portfolio Feature - Motion Design Week</p>
        </div>
      </div>

      <div className="font-thin flex flex-col gap-8 px-4 py-8 text-center">
        <h3 className="text-lg">CONTACT</h3>
        <div>
          <p>hello@adamscharf.studio</p>
          <p>-</p>
          <p>Available for selected creative direction projects</p>
        </div>
        <div className="flex justify-center items-center gap-4 lg:order-2">
          <a
            href="https://www.facebook.com/wix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8" src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/wix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8" src={instaIcon} alt="Instagram" />
          </a>
          <a href="https://x.com/wix" target="_blank" rel="noopener noreferrer">
            <img className="w-8" src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://vimeo.com/wix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8" src={vimeoIcon} alt="Vimeo" />
          </a>
        </div>
      </div>

      <div className="font-thin px-4 py-8 text-center md:col-span-2 md:w-1/2 md:mx-auto xl:w-[75%]">
        <form
          className="flex flex-col gap-4 xl:grid xl:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border w-full p-2"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border w-full p-2"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm">{errors.lastName}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-2"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border w-full p-2"
            />
          </div>

          <div className="flex flex-col items-start gap-2 xl:col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border w-full p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white border-none p-2 w-full xl:col-span-2 cursor-pointer"
          >
            Submit
          </button>
        </form>

        {formSubmitted && (
          <p className="text-center mt-4">
            Thanks for reaching out. This demo keeps the message local, but the
            form now shows a complete success state.
          </p>
        )}
      </div>
    </section>
  );
};

export default About;

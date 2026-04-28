import { useState } from "react";
import facebookIcon from "../../assets/facebookIcon.avif";
import instaIcon from "../../assets/instaIcon.avif";
import twitterIcon from "../../assets/twitterIcon.avif";
import vimeoIcon from "../../assets/vimeoIcon.avif";

const socials = [
  { href: "https://www.facebook.com/wix", label: "Facebook", icon: facebookIcon },
  { href: "https://www.instagram.com/wix", label: "Instagram", icon: instaIcon },
  { href: "https://x.com/wix", label: "Twitter", icon: twitterIcon },
  { href: "https://vimeo.com/wix", label: "Vimeo", icon: vimeoIcon },
];

const awards = [
  "2025 - Shortlisted Visual Direction - Digital Campaign Awards",
  "2024 - Best Music Campaign Concept - Studio Showcase",
  "2024 - Editorial Art Direction Selection - Creative Review",
  "2023 - Emerging Portfolio Feature - Motion Design Week",
];

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
    <section className="px-4 py-8 xl:mx-auto xl:w-[1100px] xl:py-14">
      <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.85fr)_1fr] lg:items-center">
        <img
          className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/5]"
          src={`${import.meta.env.BASE_URL}images/about-image.avif`}
          alt="Adam Scharf portrait"
        />

        <div className="grid gap-5">
          <p className="text-xs tracking-[4px] text-gray-500">ABOUT</p>
          <h1 className="text-2xl sm:text-3xl">Adam Scharf, art director</h1>
          <p className="font-thin text-gray-700">
            Adam Scharf is an art director focused on visual systems for music,
            fashion, and commercial storytelling. His work blends cinematic
            references, clean composition, and campaign-ready production
            thinking.
          </p>
          <p className="font-thin text-gray-700">
            This React rebuild keeps the original Wix-inspired visual direction
            while tightening the portfolio experience: clearer case studies,
            stronger project structure, and a booking flow that feels
            intentional.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 border-y border-gray-200 py-10 md:grid-cols-2">
        <div>
          <h2 className="mb-5 text-lg">AWARDS AND RECOGNITIONS</h2>
          <div className="grid gap-3 font-thin text-gray-700">
            {awards.map((award) => (
              <p key={award}>{award}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-lg">CONTACT</h2>
          <div className="grid gap-3 font-thin text-gray-700">
            <p>hello@adamscharf.studio</p>
            <p>Available for selected creative direction projects</p>
          </div>

          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid min-h-11 min-w-11 place-items-center"
                aria-label={social.label}
              >
                <img className="w-7" src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[820px]">
        <div className="mb-6 text-center">
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">CONTACT</p>
          <h2 className="text-2xl">Start a conversation</h2>
        </div>

        <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="min-h-11 border border-gray-300 p-3"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="min-h-11 border border-gray-300 p-3"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm">{errors.lastName}</p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="min-h-11 border border-gray-300 p-3"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="min-h-11 border border-gray-300 p-3"
            />
          </div>

          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[140px] border border-gray-300 p-3"
            />
          </div>

          <button
            type="submit"
            className="min-h-12 bg-black px-5 py-3 text-sm tracking-[2px] text-white transition-colors hover:bg-red-400 cursor-pointer sm:col-span-2"
          >
            Submit
          </button>
        </form>

        {formSubmitted && (
          <p className="mt-4 text-center text-gray-700">
            Thanks for reaching out. This demo keeps the message local, but the
            form now shows a complete success state.
          </p>
        )}
      </div>
    </section>
  );
};

export default About;

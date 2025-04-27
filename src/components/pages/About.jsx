import React, { useState } from "react";
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

    let tempErrors = {};

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
    } else {
      // No errors, pretend we submitted
      setErrors({});
      setFormSubmitted(true);
    }
  };

  return (
    <section className="md:grid md:grid-cols-2 xl:w-[1100px] xl:mx-auto xl:gap-12 xl:py-16">
      {/* about container */}
      <div className="md:col-span-2 flex flex-col gap-8 px-4 py-8 text-center md:grid md:grid-cols-2 xl:py-16">
        <img
          className="md:row-span-2 md:self-center"
          src="../../../public/images/about-image.avif"
          alt=""
        />
        <h3 className="text-lg md:col-start-2 md:row-start-1">
          ABOUT ADAM SCHARF
        </h3>
        <p className="font-thin md:col-start-2 md:row-start-1 md:mt-auto md:pt-12">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p className="font-thin md:col-start-2 md:row-start-2">
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
      </div>

      {/* awards and recognitions */}
      <div className="font-thin flex flex-col gap-8 px-4 py-8 text-center">
        <h3 className="text-lg">AWARDS AND RECOGNITIONS</h3>
        <div className="">
          <p>2035 - Add Award Name - Add City</p>
          <p>2035 - Add Award Name - Add City</p>
          <p>2035 - Add Award Name - Add City</p>
          <p>2035 - Add Award Name - Add City</p>
          <p>2035 - Add Award Name - Add City</p>
          <p>2035 - Add Award Name - Add City</p>
        </div>
      </div>

      {/* contact */}
      <div className="font-thin flex flex-col gap-8 px-4 py-8 text-center">
        <h3 className="text-lg">CONTACT</h3>
        <div className="">
          <p>info@mysite.com</p>
          <p>—</p>
          <p>Tel: 123-456-7890</p>
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

      {/* contact form */}
      <div className="font-thin px-4 py-8 text-center md:col-span-2 md:w-1/2 md:mx-auto xl:w-[75%]">
        <form
          className="flex flex-col gap-4 xl:grid xl:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {/* First Name */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="firstName">First Name *</label>
            <input
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

          {/* Last Name */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="lastName">Last Name *</label>
            <input
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

          {/* Email */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email">Email *</label>
            <input
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

          {/* Subject */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border w-full p-2"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col items-start gap-2 xl:col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
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

        {/* Show after form submit */}
        {formSubmitted && (
          <p className="text-center mt-4">
            ! We could not submit your form. Try again later.
          </p>
        )}
      </div>
    </section>
  );
};

export default About;

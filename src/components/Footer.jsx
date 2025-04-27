import React from "react";
import facebookIcon from "../assets/facebookIcon.avif";
import instaIcon from "../assets/instaIcon.avif";
import twitterIcon from "../assets/twitterIcon.avif";
import vimeoIcon from "../assets/vimeoIcon.avif";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 items-center justify-center px-4 py-8 lg:flex-row lg:justify-between xl:w-[1100px] xl:mx-auto">
      {/* socials icons */}
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
      {/* text and copywrite */}
      <div>
        <p className="text-center text-[0.75rem] tracking-[4px] font-thin text-gray-500 lg:text-left">
          © 2025 ADAM SCHARF. ALL RIGHTS RESERVED.
        </p>
        <p className="text-center text-[0.75rem] tracking-[4px] font-thin text-gray-500 lg:text-left">
          DESIGN BY ADAM SCHARF
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import facebookIcon from "../assets/facebookIcon.avif";
import instaIcon from "../assets/instaIcon.avif";
import twitterIcon from "../assets/twitterIcon.avif";
import vimeoIcon from "../assets/vimeoIcon.avif";

const socials = [
  { href: "https://www.facebook.com/wix", label: "Facebook", icon: facebookIcon },
  { href: "https://www.instagram.com/wix", label: "Instagram", icon: instaIcon },
  { href: "https://x.com/wix", label: "Twitter", icon: twitterIcon },
  { href: "https://vimeo.com/wix", label: "Vimeo", icon: vimeoIcon },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 px-4 py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="order-2 lg:order-1">
          <p className="text-xs tracking-[3px] text-gray-500 sm:tracking-[4px]">
            Copyright 2026 ADAM SCHARF. ALL RIGHTS RESERVED.
          </p>
          <p className="mt-2 text-xs tracking-[3px] text-gray-500 sm:tracking-[4px]">
            DESIGN BY ADAM SCHARF
          </p>
        </div>

        <div className="order-1 flex justify-center gap-4 lg:order-2">
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
    </footer>
  );
};

export default Footer;

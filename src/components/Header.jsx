import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AllContext } from "../components/AllContext";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import fbIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/show-reel", label: "SHOW REEL" },
  { to: "/about", label: "ABOUT" },
  { to: "/book-online", label: "BOOK ONLINE" },
];

const Header = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { toggle, setToggle } = useContext(AllContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setToggle(false);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [setToggle]);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  const navLinkClass = ({ isActive }) =>
    `inline-block py-1 transition-colors hover:text-red-400 ${
      isActive ? "text-red-400" : ""
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div
          className={`px-4 transition-colors ${
            toggle ? "bg-blue-950/95" : "bg-white"
          }`}
        >
          <div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between gap-4 md:min-h-[88px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <Link
              to="/"
              onClick={() => setToggle(false)}
              className={`shrink-0 text-sm tracking-[4px] sm:text-base ${
                toggle ? "text-white" : "text-blue-950"
              }`}
            >
              ADAM SCHARF
            </Link>

            <button
              onClick={() => setToggle(!toggle)}
              className="grid min-h-11 min-w-11 place-items-center focus:outline-none focus:ring-2 focus:ring-red-400 md:hidden"
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
            >
              <img
                src={toggle ? closeIcon : hamburgerIcon}
                alt=""
                className={`transition-transform duration-300 ${
                  toggle ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <nav className="hidden md:block" aria-label="Primary navigation">
              <ul className="flex items-center justify-center gap-5 text-xs tracking-[2px] text-blue-950 lg:gap-8 xl:text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} className={navLinkClass}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setShowLoginPopup(true)}
              className="hidden min-h-11 justify-self-end bg-red-400 px-7 py-2 text-xs font-medium tracking-[3px] text-white transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-black md:inline-flex md:items-center"
            >
              LOGIN
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-x-0 top-[76px] z-40 flex h-[calc(100dvh-76px)] flex-col items-center bg-blue-950/95 px-6 transition-all duration-300 md:hidden ${
            toggle
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <nav className="w-full max-w-sm pt-8" aria-label="Mobile navigation">
            <ul className="border-t border-white/30 text-center">
              {navLinks.map((link) => (
                <li
                  key={link.to}
                  className="border-b border-white/30 py-4 text-sm tracking-[4px] text-white"
                >
                  <Link to={link.to} onClick={() => setToggle(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setShowLoginPopup(true)}
            className="mt-6 min-h-11 w-full max-w-sm border border-white px-4 py-2 text-sm font-semibold tracking-[4px] text-white"
          >
            LOGIN
          </button>

          <div className="mt-auto flex items-center gap-8 pb-8">
            <img src={fbIcon} alt="Facebook Icon" />
            <img src={twitterIcon} alt="Twitter Icon" />
          </div>
        </div>

        {showLoginPopup && (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="header-login-title"
          >
            <button
              onClick={() => setShowLoginPopup(false)}
              className="absolute right-4 top-4 min-h-11 min-w-11 text-2xl font-bold"
              aria-label="Close login prompt"
            >
              X
            </button>
            <div className="max-w-sm text-center space-y-4">
              <h1 id="header-login-title" className="text-2xl font-bold text-gray-900">
                Demo Mode
              </h1>
              <p className="text-gray-700">
                This portfolio demo does not include account login.
              </p>
              <button
                onClick={() => setShowLoginPopup(false)}
                className="min-h-11 bg-black px-6 py-2 text-white transition-colors hover:bg-red-400"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </header>

      {!toggle && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 grid min-h-11 min-w-11 place-items-center rounded-full bg-black text-white shadow-lg md:hidden"
          aria-label="Scroll to top"
        >
          ^
        </button>
      )}
    </>
  );
};

export default Header;

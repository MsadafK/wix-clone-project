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

  const handleToggle = () => {
    setToggle(!toggle);
  };

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

  return (
    <>
      <header className="relative bg-white md:sticky md:top-0 z-50">
        <div
          className="flex items-center justify-between px-4 py-6 md:py-8 lg:py-10 lg:grid lg:grid-cols-3 xl:px-12"
          style={{
            backgroundColor: toggle ? "hsla(229, 30.80%, 21.00%, 0.90)" : "",
          }}
          aria-label="Main Navigation"
        >
          <Link
            to="/"
            className={`tracking-widest text-md lg:text-md ${
              toggle ? "text-white" : ""
            }`}
          >
            ADAM SCHARF
          </Link>

          <button
            onClick={handleToggle}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            <img
              src={toggle ? closeIcon : hamburgerIcon}
              alt=""
              className={`transition-transform duration-300 ${
                toggle ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <div className="hidden md:block">
            <nav>
              <ul className="flex items-center justify-between gap-8 text-xs xl:text-sm text-blue-950">
                {navLinks.map((link) => (
                  <li
                    key={link.to}
                    className="transition-transform duration-300 hover:scale-105 hover:text-red-400"
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? "text-red-400" : undefined
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button
            onClick={() => setShowLoginPopup(true)}
            className="hidden md:block bg-red-400 text-white font-medium px-8 py-2 rounded-md text-xs tracking-widest cursor-pointer shadow-md xl:text-sm transition-transform duration-300 hover:scale-105 hover:text-red-400 hover:bg-white hover:border-2 hover:border-red-400 lg:ml-auto"
          >
            LOGIN
          </button>
        </div>

        <div
          className={`absolute top-[100%] left-0 w-full flex flex-col items-center transition-all duration-500 ease-in-out ${
            toggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{
            height: toggle ? "calc(100vh - 79.8px)" : "0",
            backgroundColor: toggle ? "hsla(229, 30.80%, 21.00%, 0.90)" : "",
          }}
        >
          {toggle && (
            <>
              <nav className="w-[60%] mt-6 mb-6">
                <ul className="text-center border-t border-gray-500 transition-all duration-500 ease-in-out">
                  {navLinks.map((link) => (
                    <li
                      key={link.to}
                      className="border-b border-gray-500 p-4 text-white tracking-widest hover:scale-105"
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
                className="p-2 text-white w-[60%] border border-white rounded-md tracking-widest font-semibold"
              >
                LOGIN
              </button>

              <div className="flex items-center gap-8 mt-auto mb-6">
                <img src={fbIcon} alt="Facebook Icon" />
                <img src={twitterIcon} alt="Twitter Icon" />
              </div>
            </>
          )}
        </div>

        {showLoginPopup && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
            <button
              onClick={() => setShowLoginPopup(false)}
              className="absolute top-4 right-4 text-2xl font-bold"
              aria-label="Close login prompt"
            >
              X
            </button>
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">Demo Mode</h1>
              <p className="text-gray-700">
                This portfolio demo does not include account login.
              </p>
              <button
                onClick={() => setShowLoginPopup(false)}
                className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-800"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </header>

      {toggle === false && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg md:hidden z-50"
          aria-label="Scroll to top"
        >
          ^
        </button>
      )}
    </>
  );
};

export default Header;

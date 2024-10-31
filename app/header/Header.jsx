import logo from "/app/assets/logo.png";
import linkedin from "/app/assets/logo/linkedin-logo.png";
import github from "/app/assets/logo/github-logo.png";
import line from "/app/assets/logo/line-logo.png";

import AvailableButton from "../../components/AvailableButton";

import { toast } from "sonner";
import { useState, useCallback, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const Header = ({ aboutRef, expRef, workRef, contactRef }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const headerRef = useRef(null);

  const navItems = useMemo(
    () => [
      { label: "About me", ref: aboutRef },
      { label: "Key Experiences", ref: expRef },
      { label: "Contact me", ref: contactRef },
    ],
    [aboutRef, expRef, contactRef]
  );

  const handleMouseToggle = useCallback((index) => {
    setHoveredIcon(index);
  }, []);

  const handleClickLogo = useCallback(() => {
    const goToTop = document.getElementById("go-to-top");
    goToTop.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleClick = useCallback((ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div ref={headerRef} id="go-to-top">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="top-0 right-0 left-0 z-[100] max-h-[70px] py-2 px-4 scroll-mb-0 fixed backdrop-blur-[12px] bg-[rgba(255,255,255,.7)]"
      >
        <div className="flex flex-row items-center justify-between lg:justify-between font-extralight max-w-[100vw]">
          <button onClick={handleClickLogo} aria-label="Go to top">
            <img src={logo} alt="Logo" className="h-10 min-w-8" />
          </button>
          <div className="flex max-md:hidden">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="py-2 px-1 mx-4 max-md:mx-2 my-2 font-light text-[#000e23] hover:underline underline-offset-8 decoration-0 decoration-[#439051] hover:cursor-pointer"
                onClick={() => handleClick(item.ref)}
                aria-label={`Navigate to ${item.label}`}
                role="button"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center w-auto">
            <div className="flex items-center justify-center">
              <AvailableButton />
              <div className="sm:hidden"></div>
              <a
                href="https://www.linkedin.com/in/anthony-abramo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  className={`ml-2 min-w-[38px] h-[38px] border border-white rounded-lg cursor-pointer ${
                    hoveredIcon === 0 ? "mt-1" : ""
                  }`}
                  onMouseEnter={() => handleMouseToggle(0)}
                  onMouseLeave={() => handleMouseToggle(null)}
                  onClick={() =>
                    toast.success("Get in touch. Happy to meet anytime.")
                  }
                  alt="LinkedIn Logo"
                />
              </a>
              <img
                src={line}
                className={`ml-2 min-w-9 h-9 cursor-pointer ${
                  hoveredIcon === 1 ? "mt-1" : ""
                }`}
                onMouseEnter={() => handleMouseToggle(1)}
                onMouseLeave={() => handleMouseToggle(null)}
                onClick={() =>
                  toast.info(
                    "Get in touch by email down below, we can exchange Lines after meeting."
                  )
                }
                alt="Line Logo"
              />
              <a
                href="https://github.com/TonyKYC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  className={`ml-2 min-w-9 h-9 cursor-pointer ${
                    hoveredIcon === 2 ? "mt-1" : ""
                  }`}
                  onMouseEnter={() => handleMouseToggle(2)}
                  onMouseLeave={() => handleMouseToggle(null)}
                  onClick={() =>
                    toast.success("I am now only a developer on my own time.")
                  }
                  alt="Github Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;

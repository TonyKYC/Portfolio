import logo from "/app/assets/logo.png";
import linkedin from "/app/assets/logo/linkedin-logo.png";
import instagram from "/app/assets/logo/instagram-logo.png";
import line from "/app/assets/logo/line-logo.png";

import AvailableButton from "../../components/AvailableButton";

import { toast } from "sonner";
import { useState, useCallback, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const Header = ({ aboutRef, expRef, workRef, contactRef }) => {
  const [isHovered, setIsHovered] = useState(Array(4).fill(false));
  const headerRef = useRef(null);

  const navItems = useMemo(
    () => [
      { label: "About me", ref: aboutRef },
      { label: "Experiences", ref: expRef },
      { label: "How I work", ref: workRef },
      { label: "Contact me", ref: contactRef },
    ],
    [aboutRef, expRef, workRef, contactRef]
  );

  const handleMouseToggle = useCallback((index, isEntering) => {
    setIsHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = isEntering;
      return newHovered;
    });
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
        className="top-0 right-0 left-0 z-[100] py-2 px-4 scroll-mb-0 fixed backdrop-blur-[12px] bg-[rgba(255,255,255,.7)]"
      >
        <div className="flex flex-row items-center justify-between lg:justify-between font-extralight max-w-[100vw]">
          <button onClick={handleClickLogo} aria-label="Go to top">
            <img src={logo} alt="Logo" className="h-10 mr-4 min-w-8" />
          </button>
          <div className="flex max-lg:hidden">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="py-2 px-1 mx-4 my-2 font-light text-[#000e23] hover:underline underline-offset-8 decoration-0 decoration-[#439051] hover:cursor-pointer"
                onClick={() => handleClick(item.ref)}
                aria-label={`Navigate to ${item.label}`}
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
                  className={`ml-2 min-w-9 h-9 cursor-pointer ${
                    isHovered[0] ? "mt-1" : ""
                  }`}
                  onMouseEnter={() => handleMouseToggle(0, true)}
                  onMouseLeave={() => handleMouseToggle(0, false)}
                  onClick={() =>
                    toast.success("Get in touch. Happy to meet anytime.")
                  }
                  aria-label="LinkedIn"
                />
              </a>
              <img
                src={line}
                className={`ml-2 min-w-9 h-9 cursor-pointer ${
                  isHovered[1] ? "mt-1" : ""
                }`}
                onMouseEnter={() => handleMouseToggle(1, true)}
                onMouseLeave={() => handleMouseToggle(1, false)}
                onClick={() =>
                  toast.info(
                    "Get in touch by email first, I'd be happy to give you my line after meeting."
                  )
                }
                aria-label="Line"
              />
              <img
                src={instagram}
                className={`ml-2 min-w-10 h-10 cursor-pointer ${
                  isHovered[2] ? "mt-1" : ""
                }`}
                onMouseEnter={() => handleMouseToggle(2, true)}
                onMouseLeave={() => handleMouseToggle(2, false)}
                onClick={() =>
                  toast.error("I don't post pictures of me, sorry.")
                }
                aria-label="Instagram"
              />
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;

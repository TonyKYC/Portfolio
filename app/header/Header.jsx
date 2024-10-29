import logo from "/app/assets/logo.png";
import linkedin from "/app/assets/logo/linkedin-logo.png";

import AvailableButton from "../../components/AvailableButton";
import { useState, useCallback } from "react";

const navItems = [
  { label: "About me", link: "aboutRef" },
  { label: "Experiences", link: "expRef" },
  { label: "How I work", link: "workRef" },
  { label: "Contact me", link: "contactRef" },
];

const Header = ({ aboutRef, expRef, workRef, contactRef }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleClickLogo = useCallback(() => {
    const goToTop = document.getElementById("go-to-top");
    goToTop.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, []);

  const handleClick = useCallback((ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <div id="go-to-top">
      <nav className="top-0 right-0 left-0 z-[100] py-2 px-4 scroll-mb-0 fixed backdrop-blur-[12px] bg-[rgba(255,255,255,.7)]">
        <div className="flex justify-center items-center max-w-[1320px] font-extralight m-auto">
          <button className="mb-1 mr-4" onClick={handleClickLogo}>
            <img
              src={logo}
              alt="Agile icons created by Flat Icons - Flaticon https://www.flaticon.com/free-icons/agile"
              className="h-8 mr-4 min-w-8"
            />
          </button>
          <div className="flex flex-row items-center w-full max-lg:justify-end">
            <div className="flex flex-grow overflow-hidden w-fit max-sm:hidden max-lg:hidden">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="py-2 px-1 mx-4 my-2 font-light text-[#000e23] hover:underline underline-offset-8 decoration-0 decoration-[#439051] hover:cursor-pointer"
                  onClick={() => handleClick(eval(item.link))}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <AvailableButton />
              <div className="sm:hidden"></div>
              <a
                href="https://www.linkedin.com/in/anthony-abramo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  className={`ml-2 min-w-9 h-9 ${isHovered ? "mt-1" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

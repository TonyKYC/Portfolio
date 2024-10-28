import logo from "/app/assets/logo.png";
import linkedin from "/app/assets/images/linkedin-logo.png";
import AvailableButton from "../../components/AvailableButton";
import { useState, useCallback, useRef } from "react";

const navItems = [
  { label: "About me", link: "/" },
  { label: "Experiences", link: "/" },
  { label: "How I work", link: "/" },
  { label: "Contact me", link: "/" },
];

const Header = ({ aboutRef, expRef, workRef, contactRef }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleClickLogo = () => {
    const goToTop = document.getElementById("go-to-top");
    goToTop.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const handleClickAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };
  const handleClickExp = () => {
    if (expRef.current) {
      expRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const handleClickProcess = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  const handleClickContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <div id="go-to-top">
      <nav className="top-0 right-0 left-0 z-[100] py-2 px-4 scroll-mb-0 fixed backdrop-blur-[12px] bg-[rgba(255,255,255,.7)]">
        <div className="flex justify-center items-center max-w-[1320px] font-extralight m-auto">
          <button className="mb-1 mr-4" onClick={handleClickLogo}>
            <img
              src={logo}
              alt="Agile icons created by Flat Icons - Flaticon https://www.flaticon.com/free-icons/agile"
              className="w-auto h-8 mr-4"
              onClick={handleClickLogo}
            />
          </button>
          <div className="flex flex-row items-center w-full max-sm:justify-end">
            <div className="flex flex-grow overflow-hidden w-fit max-sm:hidden max-md:hidden">
              <button
                key={0}
                className="py-2 px-1 mx-4 my-2 font-light text-[#000e23] hover:underline underline-offset-8 decoration-0 decoration-[#439051] hover:cursor-pointer"
                onClick={handleClickAbout}
              >
                {navItems[0].label}
              </button>
              <button
                key={1}
                className="py-2 px-1 mx-4 my-2 font-light text-[#000e23] hover:underline underline-offset-8 decoration-0 decoration-[#439051] hover:cursor-pointer"
                onClick={handleClickExp}
              >
                {navItems[1].label}
              </button>
              <button
                key={2}
                className="py-2 px-1 mx-4 my-2 font-light text-[#000e23] hover:underline underline-offset-8 decoration-0 decoration-[#439051] hover:cursor-pointer"
                onClick={handleClickProcess}
              >
                {navItems[2].label}
              </button>
              <button
                key={3}
                className="py-2 px-1 mx-4 my-2 font-light text-[#000e23] hover:underline underline-offset-8 decoration-0 decoration-[#439051] hover:cursor-pointer"
                onClick={handleClickContact}
              >
                {navItems[3].label}
              </button>
            </div>
            <div className="flex items-center">
              <AvailableButton style={""} />
              <div className="sm:hidden"></div>
              <a
                href="https://www.linkedin.com/in/anthony-abramo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  className={`ml-2 w-auto h-[35px] ${isHovered ? "mt-1" : ""}`}
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

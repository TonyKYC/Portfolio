import logo from "/app/assets/logo.png";
import linkedin from "/app/assets/logo/linkedin-logo.png";
import instagram from "/app/assets/logo/instagram-logo.png";
import twitter from "/app/assets/logo/twitter-logo.png";
import line from "/app/assets/logo/line-logo.png";

import AvailableButton from "../../components/AvailableButton";

import { toast } from "sonner";
import { useState, useCallback, useRef, useEffect } from "react";

const navItems = [
  { label: "About me", link: "aboutRef" },
  { label: "Experiences", link: "expRef" },
  { label: "How I work", link: "workRef" },
  { label: "Contact me", link: "contactRef" },
];

const Header = ({ aboutRef, expRef, workRef, contactRef }) => {
  const [isHovered, setIsHovered] = useState(
    Array(navItems.length).fill(false)
  );
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback((index) => {
    setIsHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = true;
      return newHovered;
    });
  }, []);

  const handleMouseLeave = useCallback((index) => {
    setIsHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = false;
      return newHovered;
    });
  }, []);

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
    <div ref={headerRef} id="go-to-top">
      <nav
        className={`top-0 right-0 left-0 z-[100] py-2 px-4 scroll-mb-0 fixed backdrop-blur-[12px] bg-[rgba(255,255,255,.7)] transition-opacity duration-500 ${
          isHeaderVisible ? "opacity-100" : "opacity-0"
        }`}
      >
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
                  className={`ml-2 min-w-9 h-9 ${isHovered[0] ? "mt-1" : ""}`}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                  onClick={() => {
                    toast.success("Get in touch. Happy to meet anytime.");
                  }}
                />
              </a>
              <img
                src={line}
                className={`ml-2 min-w-9 h-9 ${isHovered[1] ? "mt-1" : ""}`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                onClick={() => {
                  toast.info(
                    "Get in touch by email first, I'd be happy to give you my line after meeting."
                  );
                }}
              />
              <img
                src={instagram}
                className={`ml-2 min-w-10 h-10 ${isHovered[2] ? "mt-1" : ""}`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
                onClick={() => {
                  toast.error("I don't post pictures of me, sorry.");
                }}
              />
              <img
                src={twitter}
                className={`ml-2 min-w-9 h-[34px] ${
                  isHovered[3] ? "mt-1" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
                onClick={() => {
                  toast.warning(
                    "I don't tell everyone what I do all day long either."
                  );
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import { useState, useCallback } from "react";

import linkedin from "/app/assets/images/linkedin-logo.png";

const Poster = ({
  companyName,
  companyDetails,
  image,
  imageAlt,
  handleOnClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className="flex flex-col justify-around w-full transition-transform duration-300 bg-white hover:scale-105 hover:ease-in rounded-[20px] shadow-lg max-sm:h-[200px] max-md:h-[200px] h-[400px] max-sm:justify-around"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered ? image : linkedin}
        alt={isHovered ? imageAlt : ""}
        style={{
          opacity: isHovered ? 0.8 : 1,
          transition: "opacity 1s ease-in-out",
        }}
        className={`max-sm:h-[70%] max-md:h-[130px] grayscale-[10%] self-center rounded-[20px] ${
          isHovered ? "w-full h-[300px]" : "w-auto md:mt-14 h-32 max-sm:h-24"
        } shadow-md`}
        onClick={isHovered ? handleOnClick : undefined}
      />

      <div
        className={`flex flex-col px-5 py-3 text-left font-rubik max-sm:h-[30%] max-sm:text-xs max-sm:px-4 max-sm:py-2 transition-transform duration-1000 ${
          isHovered ? "-translate-y-[1px]" : "translate-y-0"
        }`}
      >
        <div className="font-[500]">{companyName}</div>
        <div>{companyDetails}</div>
      </div>
    </div>
  );
};

export default Poster;

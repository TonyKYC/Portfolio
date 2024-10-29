import { useState, useCallback, useEffect } from "react";

const Poster = ({
  companyName,
  companySummary,
  companyDetails,
  year,
  image,
  imageAlt,
  handleOnClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    const preloadImages = [image];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [image]);

  return (
    <div
      className="flex flex-col justify-around w-full transition-transform duration-200 bg-white hover:scale-[1.05] hover:ease-in rounded-[20px] max-sm:h-[200px] max-md:h-[200px] h-[290px] max-sm:justify-around shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        alt={imageAlt}
        className={`grayscale-[10%] h-[65%] self-center align-middle rounded-t-[20px] ${
          isHovered ? "w-auto " : "w-auto max-sm:h-24"
        } `}
        onClick={isHovered ? handleOnClick : undefined}
      />

      <div
        id="drawer"
        className={`flex flex-col text-left p-4 font-rubik h-[35%] max-sm:h-[30%] transition-transform duration-[700ms] rounded-b-[20px] bg-white ${
          isHovered ? "z-40 rounded-b-[20px] bg-[#f6f6f6]" : ""
        }`}
      >
        <div className="flex flex-row">
          <div className="flex justify-start flex-grow font-[500]">
            {companyName}
          </div>
          <div className="text-sm">{year}</div>
        </div>
        <div className="flex flex-col mt-1 overflow-auto">
          <span className="text-sm max-sm:hidden">{companySummary}</span>
          <span className="text-sm max-sm:hidden">{companyDetails}</span>
        </div>
      </div>
    </div>
  );
};

export default Poster;

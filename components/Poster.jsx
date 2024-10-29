import { useState, useCallback, useEffect } from "react";

const Poster = ({
  companyName,
  companySummary,
  companyDetails,
  year,
  logo,
  image,
  imageAlt,
  handleOnClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    const preloadImages = [logo, image];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [logo, image]);

  return (
    <div
      className="flex flex-col justify-around w-full transition-transform duration-300 bg-white hover:scale-105 hover:ease-in rounded-[20px] max-sm:h-[200px] max-md:h-[200px] h-[400px] max-sm:justify-around"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered ? image : logo}
        alt={isHovered ? imageAlt : ""}
        style={{
          opacity: isHovered ? 0.8 : 1,
          transition: "opacity 3s ease-in-out",
        }}
        className={`max-sm:h-[70%] max-md:h-[130px] grayscale-[10%] self-center rounded-t-[20px] ${
          isHovered ? "w-full h-[300px]" : "w-auto md:mt-14 h-44 max-sm:h-24"
        } `}
        onClick={isHovered ? handleOnClick : undefined}
      />

      <div
        id="1"
        className={`flex flex-col px-5 py-3 text-left font-rubik max-sm:h-[30%] max-sm:text-xs max-sm:px-4 max-sm:py-2 transition-transform duration-[700ms] rounded-[20px] bg-white ${
          isHovered
            ? "md:translate-y-[-43%] lg:translate-y-[-43%] z-40 rounded-[20px] py-5 h-aut border-t-2 bg-[#f6f6f6]"
            : "translate-y-[-0%] h-auto"
        }`}
      >
        <div className="font-[500]">{companyName}</div>
        <div className={`${isHovered ? "hidden" : ""}`}>{companySummary}</div>
        <div
          className={`${
            isHovered
              ? "flex flex-col sm:mt-1 max-h-24 overflow-hidden"
              : "hidden"
          }`}
        >
          <span>{year}</span>

          <span className="max-sm:hidden">{companyDetails}</span>
        </div>
      </div>
    </div>
  );
};

export default Poster;

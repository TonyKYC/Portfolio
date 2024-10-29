import { useState, useCallback, useEffect, useRef } from "react";

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
  const imgRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className="flex flex-col justify-around w-full max-sm:w-full transition-transform duration-200 bg-white hover:scale-[1.05] hover:ease-in rounded-[20px] max-sm:h-[250px] max-md:h-[250px] h-[300px]  shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={isImageVisible ? image : undefined}
        alt={imageAlt}
        loading="lazy"
        className={`grayscale-[10%] max-sm:h-[50%] max-md:h-[50%] md:h-[50%] lg:-h-[50%] xl:h-[60%] max-sm:w-auto self-center align-middle rounded-t-[20px] transition-opacity duration-1000 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onClick={isHovered ? handleOnClick : undefined}
        onLoad={handleImageLoad}
      />

      <div
        id="drawer"
        className={`flex flex-col text-left p-4 font-rubik xl:h-[40%] lg:h-[50%] max-sm:h-[50%] md:h-[50%] transition-transform duration-[700ms] rounded-b-[20px] bg-white ${
          isHovered ? "z-40 rounded-b-[20px] bg-[#f6f6f6]" : ""
        }`}
      >
        <div className="flex flex-row">
          <div className="flex justify-start flex-grow font-[500] max-sm:text-sm">
            {companyName}
          </div>
          <div className="text-sm max-sm:text-xs">{year}</div>
        </div>
        <div className="flex flex-col mt-1 overflow-auto">
          <span className="text-sm max-sm:text-xs">
            {companySummary}
            {companyDetails}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Poster;

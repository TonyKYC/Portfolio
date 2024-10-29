import { useState, useEffect, useRef } from "react";

const Card = ({ skill, description, image, imageAlt }) => {
  const imgRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
      ref={imgRef}
      className="w-full lg:h-[300px] md:h-[200px] p-2 rounded-[20px] border bg-white transition-transform duration-300 hover:scale-105 overflow-hidden"
    >
      <div className="flex flex-col justify-around bg-gradient-to-b from-[#f7f7f8] via-white via-70% to-white w-full h-full rounded-[20px]">
        <img
          // ref={imgRef}
          src={isImageVisible ? image : undefined}
          alt={imageAlt}
          onLoad={handleImageLoad}
          width={150}
          height={150}
          className={`grayscale-[70%] self-center max-sm:w-[125px] max-sm:h-[125px] max-lg:w-[125px] max-lg:h-[125px] transition-opacity duration-1000 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="px-8 py-3 sm:text-center md:text-center lg:text-left font-rubik">
          <div className="font-[500] max-sm:text-xs md:text-xs lg:text-base max-md:overflow-hidden">
            {skill}
          </div>
          <div className="max-lg:hidden">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

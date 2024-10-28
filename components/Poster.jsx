import { useState } from "react";

const Poster = ({
  companyName,
  companyDetails,
  image,
  imageAlt,
  handleOnClick,
}) => {
  return (
    // <div className="w-full h-[400px] p-2 rounded-[20px] border bg-white transition-transform duration-300 hover:scale-105 hover:ease-in">
    <div className="flex flex-col justify-between h-full w-full transition-transform duration-300 bg-white hover:scale-105 hover:ease-in rounded-[20px] shadow-lg max-sm:h-[300px] max-md:h-[300px] ">
      <img
        src={image}
        alt={imageAlt}
        style={{ opacity: 0.8 }}
        className="grayscale-[10%] self-center rounded-[20px] w-full h-[300px] shadow-md"
        onClick={handleOnClick}
      />
      <div className="flex flex-col px-5 py-3 text-left font-rubik">
        <div className="font-[500]">{companyName}</div>
        <div>{companyDetails}</div>
      </div>
    </div>
    // </div>
  );
};

export default Poster;

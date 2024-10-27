import { useState } from "react";

const Poster = ({
  companyName,
  companyDetails,
  image,
  imageAlt,
  handleOnClick,
}) => {
  return (
    <div className="w-full h-[400px] p-2 rounded-[20px] border bg-white transition-transform duration-300 hover:scale-105 hover:ease-in">
      <div className="flex flex-col justify-between h-full px-3">
        <img
          src={image}
          alt={imageAlt}
          style={{ opacity: 0.8 }}
          className="grayscale-[10%] self-center border border-[#eaeaeb] rounded-[20px] w-full h-[300px] shadow-lg scale-95"
          onClick={handleOnClick}
        />
        <div className="flex flex-col px-5 py-3 text-left font-rubik">
          <div className="font-[500]">{companyName}</div>
          <div>{companyDetails}</div>
        </div>
      </div>
    </div>
  );
};

export default Poster;

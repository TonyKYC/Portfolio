import React from "react";
import Hero from "../../components/Hero";
import SuccessStories from "../../components/SuccessStories";

const Curriculum = () => {
  return (
    <div className="flex flex-col justify-between mt-[72px]">
      <SuccessStories />
      <SuccessStories />
    </div>
  );
};

export default Curriculum;

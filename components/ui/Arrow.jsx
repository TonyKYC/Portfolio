import React from "react";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ml-[2px] transition-transform duration-200 ${
        isHovered ? "translate-x-1" : ""
      } text-white`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6l6 6-6 6"
      />
    </svg>
  );
};

export default Arrow;

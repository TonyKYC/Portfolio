import { useState } from "react";

const ContactButton = ({ variant, label, style, iconPosition }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex ${
        iconPosition === "left" ? "flex-row-reverse" : "flex-row"
      } justify-center items-center rounded-xl px-4 pb-1 pt-[.3rem] text-sm min-w-[120px] h-11 hover:cursor-pointer bg-gradient-to-b shadow-md font-normal font-rubik ${style} ${
        variant && variant === "outlined"
          ? "border border-[#1f7bff] text-[#1f7bff] bg-white/[.03] hover:bg-white/70"
          : "from-[#448ffe] to-[#1f7bff] font-normal text-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      {variant && variant === "filled" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ml-[2px] transition-transform duration-200 ${
            isHovered ? "translate-x-1 rotate-90" : ""
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
      )}
    </div>
  );
};

export default ContactButton;

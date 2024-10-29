import { useState } from "react";
import avatar from "/app/assets/icons/avatar.png";

const AvailableButton = ({ style }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [statusText, setStatusText] = useState("Available for work");

  return (
    <div
      className={`relative flex items-center w-[180px] rounded-xl ps-1 pe-3 py-4 h-11 mr-3 bg-[#f0f0f0] hover:cursor-pointer transition-transform hover:ease-in ${style} ${
        isHovered ? "shadow" : "shadow-md"
      }`}
      onMouseEnter={() => {
        setIsHovered(true);
        setStatusText("Are you ready ?");
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setStatusText("Available for work");
      }}
    >
      <img src={avatar} alt="avatar" className="w-8 h-auto py-2 mx-2" />
      <span
        className={`pt-1 text-center text-sm font-normal font-rubik ${
          isHovered ? "text-green-600" : ""
        }`}
      >
        {statusText}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[2px] ml-8 h-3 w-3 bg-green-500 rounded-full border-2 border-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      />
    </div>
  );
};

export default AvailableButton;

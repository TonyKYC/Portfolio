import { useState } from "react";
import avatar from "/app/assets/icons/avatar.png";

const AvailableButton = ({ style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center w-auto rounded-xl px-3 md:px-3 lg:px-3 py-3 h-11 md:h-11 lg:h-12 mr-3 bg-[#f0f0f0] hover:cursor-pointer transition-transform hover:ease-in ${style} ${
        isHovered ? "shadow" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={avatar}
        alt="avatar"
        className="h-auto py-2 mr-2 w-7 md:w-8 lg:w-8"
      />
      <span className="pt-1 pl-1 text-xs font-normal text-center md:text-sm lg:text-base font-rubik">
        <span className="hidden sm:inline">Available for work</span>
        <span className="inline sm:hidden">Available</span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[2px] ml-5 md:ml-6 lg:ml-6 xl:ml-6 h-3 w-3 bg-green-500 rounded-full border-2 border-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      />
    </div>
  );
};

export default AvailableButton;

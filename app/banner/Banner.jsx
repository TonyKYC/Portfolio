import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-16">
      <motion.svg
        className="mt-1 animate-bounce opacity-90"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16l-4-4h8l-4 4zm 4l-4-4h8l-4 4z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
};

export default Banner;

import { forwardRef } from "react";
import { motion } from "framer-motion";
import linkedin from "/app/assets/logo/linkedin-logo.png";
import github from "/app/assets/logo/github-logo.png";
import line from "/app/assets/logo/line-logo.png";

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="flex items-center justify-center py-8 mt-auto text-white"
    >
      <div className="container flex flex-col items-center px-4 mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          &copy; {new Date().getFullYear()} Anthony Abramo. All rights reserved.
        </motion.p>
        <div className="flex mt-4 space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/anthony-abramo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            className="border border-white rounded-md"
          >
            <img src={linkedin} className="w-8 h-8" alt="LinkedIn" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Line"
            onClick={(e) => e.preventDefault()}
            whileHover={{ scale: 1.1 }}
            className="border border-white rounded-lg"
          >
            <img src={line} className="w-8 h-8" alt="Line" />
          </motion.a>
          <motion.a
            href="https://github.com/TonyKYC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            whileHover={{ scale: 1.1 }}
            className="border border-white rounded-lg"
          >
            <img src={github} className="w-8 h-8" alt="Github" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

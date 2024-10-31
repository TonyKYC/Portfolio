import React from "react";
import { motion, useAnimation } from "framer-motion";
import "../index.css";

const logos = [
  { src: "/assets/svg/javascript.svg", alt: "JavaScript" },
  { src: "/assets/svg/typescript.svg", alt: "TypeScript" },
  { src: "/assets/svg/html.svg", alt: "HTML" },
  { src: "/assets/svg/css.svg", alt: "CSS" },
  { src: "/assets/svg/react.svg", alt: "React" },
  { src: "/assets/svg/next.svg", alt: "Next.js" },
  { src: "/assets/svg/vite.svg", alt: "Vite" },
  { src: "/assets/svg/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/assets/svg/jest.svg", alt: "Jest" },
  { src: "/assets/svg/nodejs.svg", alt: "Node.js" },
  { src: "/assets/svg/mongodb.svg", alt: "MongoDB" },
  { src: "/assets/svg/vscode.svg", alt: "VSCode" },
  { src: "/assets/svg/bun.svg", alt: "Bun" },
  { src: "/assets/svg/docker.svg", alt: "Docker" },
  { src: "/assets/svg/git.svg", alt: "Git" },
  { src: "/assets/svg/gitlab.svg", alt: "GitLab" },
  { src: "/assets/svg/github.svg", alt: "GitHub" },
  { src: "/assets/svg/brew.svg", alt: "Brew" },
  { src: "/assets/svg/jenkins.svg", alt: "Jenkins" },
  { src: "/assets/svg/jira.svg", alt: "Jira" },
  { src: "/assets/svg/json.svg", alt: "JSON" },
  { src: "/assets/svg/mui.svg", alt: "MUI" },
  { src: "/assets/svg/npm.svg", alt: "NPM" },
  { src: "/assets/svg/stackoverflow.svg", alt: "Stack Overflow" },
  { src: "/assets/svg/electron.svg", alt: "Electron" },
  { src: "/assets/svg/babel.svg", alt: "Babel" },
  { src: "/assets/svg/firebase.svg", alt: "Firebase" },
  { src: "/assets/svg/sonarqube.svg", alt: "SonarQube" },
];

const Banner = React.memo(({ reverse = false }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ x: reverse ? "-100%" : "100%" });
  }, [reverse, controls]);

  return (
    <>
      <div className="absolute flex flex-col items-center justify-center w-full h-16">
        <motion.svg
          className="relative z-10 mt-10 transform calc(translate-x-1/-15px) animate-bounce opacity-90"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16l-4-4h8l-4 4z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
      <div className="relative flex items-center justify-center h-16 overflow-hidden md:h-20 lg:h-24">
        <motion.div
          className={`flex space-x-28 ${
            reverse ? "animate-scroll-logos-reverse" : "animate-scroll-logos"
          }`}
          initial={{ x: reverse ? "100%" : "-100%" }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={40}
              height={40}
              className="opacity-90 grayscale"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </>
  );
});

export default Banner;

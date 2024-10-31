import { motion } from "framer-motion";
import "../index.css";

const Banner = () => {
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
          className="flex space-x-28 animate-scroll-logos"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 1 }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={40} // Adjust size as needed
              height={5} // Adjust size as needed
              className="opacity-90 grayscale"
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Banner;

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
  { src: "/assets/svg/nodejs.svg", alt: "nodejs" },
  { src: "/assets/svg/mongodb.svg", alt: "mongodb" },
  { src: "/assets/svg/vscode.svg", alt: "vscode" },
  { src: "/assets/svg/bun.svg", alt: "bun" },
  { src: "/assets/svg/docker.svg", alt: "docker" },
  { src: "/assets/svg/git.svg", alt: "git" },
  { src: "/assets/svg/gitlab.svg", alt: "gitlab" },
  { src: "/assets/svg/github.svg", alt: "github" },
  { src: "/assets/svg/brew.svg", alt: "brew" },
  { src: "/assets/svg/jenkins.svg", alt: "jenkins" },
  { src: "/assets/svg/jira.svg", alt: "jira" },
  { src: "/assets/svg/json.svg", alt: "json" },
  { src: "/assets/svg/mui.svg", alt: "mui" },
  { src: "/assets/svg/npm.svg", alt: "npm" },
  { src: "/assets/svg/stackoverflow.svg", alt: "stack-overflow" },
  { src: "/assets/svg/electron.svg", alt: "electron" },
  { src: "/assets/svg/babel.svg", alt: "babel" },
  { src: "/assets/svg/firebase.svg", alt: "firebase" },
  { src: "/assets/svg/sonarqube.svg", alt: "sonarqube" },
];

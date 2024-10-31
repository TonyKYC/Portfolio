import { motion } from "framer-motion";
import "../index.css";

const Banner = () => {
  return (
    <>
      <div className="absolute flex flex-col items-center justify-center w-full h-16">
        <motion.svg
          className="relative z-10 mt-1 transform calc(translate-x-1/-15px) animate-bounce opacity-90"
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
  { src: "/app/assets/icons/javascript.svg", alt: "JavaScript" },
  { src: "/app/assets/icons/typescript.svg", alt: "TypeScript" },
  { src: "/app/assets/icons/html.svg", alt: "HTML" },
  { src: "/app/assets/icons/css.svg", alt: "CSS" },
  { src: "/app/assets/icons/react.svg", alt: "React" },
  { src: "/app/assets/icons/next.svg", alt: "Next.js" },
  { src: "/app/assets/icons/vite.svg", alt: "Vite" },
  { src: "/app/assets/icons/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/app/assets/icons/jest.svg", alt: "Jest" },
  { src: "/app/assets/icons/nodejs.svg", alt: "nodejs" },
  { src: "/app/assets/icons/mongodb.svg", alt: "mongodb" },
  { src: "/app/assets/icons/vscode.svg", alt: "vscode" },
  { src: "/app/assets/icons/bun.svg", alt: "bun" },
  { src: "/app/assets/icons/docker.svg", alt: "docker" },
  { src: "/app/assets/icons/git.svg", alt: "git" },
  { src: "/app/assets/icons/gitlab.svg", alt: "gitlab" },
  { src: "/app/assets/icons/github.svg", alt: "github" },
  { src: "/app/assets/icons/brew.svg", alt: "brew" },
  { src: "/app/assets/icons/jenkins.svg", alt: "jenkins" },
  { src: "/app/assets/icons/jira.svg", alt: "jira" },
  { src: "/app/assets/icons/json.svg", alt: "json" },
  { src: "/app/assets/icons/mui.svg", alt: "mui" },
  { src: "/app/assets/icons/npm.svg", alt: "npm" },
  { src: "/app/assets/icons/stackoverflow.svg", alt: "stack-overflow" },
  { src: "/app/assets/icons/electron.svg", alt: "electron" },
  { src: "/app/assets/icons/babel.svg", alt: "babel" },
  { src: "/app/assets/icons/firebase.svg", alt: "firebase" },
  { src: "/app/assets/icons/sonarqube.svg", alt: "sonarqube" },
];

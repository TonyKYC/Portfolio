import agile from "/app/assets/images/agile.png";
import developer from "/app/assets/images/developer.png";
import efficiency from "/app/assets/images/efficiency.png";

import Card from "../../components/Card";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center"
        >
          About Me
        </motion.h2>
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Hi, I'm Anthony Abramo</h3>
            <p className="text-lg text-gray-600">
              I'm a passionate Full Stack Developer with a knack for turning
              complex problems into elegant solutions. My journey in tech has
              been nothing short of exhilarating, and I'm always eager to learn
              and grow. With a solid background in software development, I bring
              versatile experience from both high-performing and challenging
              Agile environments as an Agile Coach to deliver you value.
            </p>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill.name} className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    {skill.name}: {skill.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 bg-gray-100 rounded-lg">
              <h4 className="mb-4 text-xl font-semibold">My Toolkit</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Python",
                  "Docker",
                  "AWS",
                  "MongoDB",
                  "PostgreSQL",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-3 py-1 text-sm text-white bg-blue-500 rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="h-4 overflow-hidden bg-gray-200 rounded-full"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-blue-500 rounded-full"
              />
            </motion.div>
            <p className="text-center text-gray-600">
              Up to 80% improved efficiency
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-lg text-gray-600">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying the great
            outdoors. I believe in continuous learning and pushing the
            boundaries of what's possible in tech.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutMe;

const SelfIntroduction = () => {
  return (
    <p className="font-rubik text-xl text-[#000e23] font-light tracking-wide mb-16 max-sm:text-sm ">
      With a solid{" "}
      <span className="underline selection:bg-fuchsia-300 underline-offset-4 decoration-0">
        background in software development
      </span>
      , I bring versatile experience from both{" "}
      <span className="bg-green-200 selection:bg-fuchsia-300">
        high-performing
      </span>{" "}
      and{" "}
      <span className="bg-orange-200 selection:bg-fuchsia-300">
        challenging
      </span>
      <br /> Agile environments as an Agile Coach to{" "}
      <span className="underline bg-red-200 selection:bg-fuchsia-300 underline-offset-4 decoration-0">
        deliver you value
      </span>
      . Adaptable to{" "}
      <span className="underline bg-yellow-200 selection:bg-fuchsia-300 underline-offset-4 decoration-0">
        your needs
      </span>
      , I align my coaching with your strategy to drive{" "}
      <span className="underline selection:bg-fuchsia-300 underline-offset-4 decoration-0">
        continuous improvement
      </span>
      , enhance{" "}
      <span className="underline selection:bg-fuchsia-300 underline-offset-4 decoration-0">
        team performance
      </span>
      , and{" "}
      <span className="underline selection:bg-fuchsia-300 underline-offset-4 decoration-0">
        deliver measurable results
      </span>{" "}
      in Agile transformation.
    </p>
  );
};

const skills = [
  {
    name: "Software Engineer background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius",
    image: developer,
    imageAlt:
      "Icon by Paul J. - @www.freepik.com/icon/developer_9436966#fromView=search&page=1&position=30&uuid=dd4ec1f9-cb6a-4ce6-9a4b-22933d3504f5",
  },
  {
    name: "Agility Expert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te",
    image: agile,
    imageAlt:
      "Icon by SBTS2018 - @https://www.freepik.com/icon/agile_6419083#fromView=search&page=1&position=72&uuid=799b70a4-4d8e-47ac-8535-4437d01ac1dc",
  },
  {
    name: "Efficiency virtuoso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te",
    image: efficiency,
    imageAlt:
      "Icon by mikan933 - @https://www.freepik.com/icon/efficiency_8209963#fromView=search&page=2&position=89&uuid=4770b237-4080-4c91-b768-ea42cab59809",
  },
];

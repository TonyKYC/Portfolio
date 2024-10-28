import agile from "/app/assets/images/agile.png";
import developer from "/app/assets/images/developer.png";
import efficiency from "/app/assets/images/efficiency.png";

import Card from "../../components/Card";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="mx-auto text-center h-fit bg-[#f7f7f8] w-3/4 rounded-[40px] p-6"
    >
      <h2 className="text-[calc(1rem+.9vw)] text-3xl text-[#000e23] font-semibold mt-5 pb-5 tracking-wide">
        Agile Coach
      </h2>
      <SelfIntroduction />
      <div className="flex flex-row gap-5 cursor-pointer justify-evenly max-w-3/4">
        {skills.map((skill, index) => (
          <Card
            key={index}
            skill={skill.name}
            description={skill.description}
            image={skill.image}
            imageAlt={skill.imageAlt}
          />
        ))}
      </div>
    </div>
  );
});

export default AboutMe;

const SelfIntroduction = () => {
  return (
    <p className="font-rubik text-xl text-[#000e23] font-light tracking-wide mb-16">
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

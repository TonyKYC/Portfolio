import React from "react";

const style = "border border-[#e0e0e0]/[.2] p-4 rounded-[20px] tracking-wide";

const WorkProcess = () => {
  return (
    <div className="flex justify-center items-center mx-auto h-[900px] w-full py-8">
      <div className="flex flex-row w-full h-full gap-0 text-center">
        <HoverableDiv
          backgroundImage="/app/assets/images/bg-red.png"
          hoverText="Identify your needs"
        >
          <div className={style}>Phase 1</div>
        </HoverableDiv>
        <HoverableDiv
          backgroundImage="/app/assets/images/bg-green.png"
          hoverText="Understand how you work"
        >
          <div className={style}>Phase 2</div>
        </HoverableDiv>
        <HoverableDiv
          backgroundImage="/app/assets/images/bg-blue.png"
          hoverText="Work with the teams"
        >
          <div className={style}>Phase 3</div>
        </HoverableDiv>
      </div>
    </div>
  );
};

export default WorkProcess;

const HoverableDiv = ({ backgroundImage, children, hoverText }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="w-1/3 h-full bg-center bg-cover border-[0.05rem] opacity-1 hover:opacity-100 border-[#414141]/[.5] text-white flex items-center justify-center font-rubik text-xl cursor-grab"
      style={{
        backgroundImage: hovered ? `url(${backgroundImage})` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? <div>{hoverText}</div> : <div>{children}</div>}
    </div>
  );
};

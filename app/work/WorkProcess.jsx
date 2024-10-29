import { forwardRef, useState, useEffect } from "react";

const style = "border border-[#e0e0e0]/[.2] p-4 rounded-[20px] tracking-wide";

const WorkProcess = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-center items-center mx-auto w-full pt-8 h-[900px] max-sm:h-[500px]"
    >
      <div className="flex flex-row w-full h-full gap-0 text-center">
        <HoverableDiv
          backgroundImage="/assets/bg-red.png"
          hoverText="Identify your needs"
        >
          <div className={style}>Phase 1</div>
        </HoverableDiv>
        <HoverableDiv
          backgroundImage="/assets/bg-green.png"
          hoverText="Understand how you work"
        >
          <div className={style}>Phase 2</div>
        </HoverableDiv>
        <HoverableDiv
          backgroundImage="/assets/bg-blue.png"
          hoverText="Work with the teams"
        >
          <div className={style}>Phase 3</div>
        </HoverableDiv>
      </div>
    </div>
  );
});

export default WorkProcess;

const HoverableDiv = ({ backgroundImage, children, hoverText }) => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy loading effect
  const handleScroll = () => {
    const rect = document
      .getElementById(`hoverable-${hoverText}`)
      .getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Pre-load the image
      const img = new Image();
      img.src = backgroundImage;

      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id={`hoverable-${hoverText}`}
      className="w-1/3 h-full bg-center bg-cover border-[0.05rem] opacity-1 hover:opacity-100 border-[#414141]/[.5] text-white flex items-center justify-center font-rubik text-xl cursor-grab"
      style={{
        backgroundImage:
          isVisible && hovered ? `url(${backgroundImage})` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? <div>{hoverText}</div> : <div>{children}</div>}
    </div>
  );
};

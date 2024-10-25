import React from "react";

const Placeholder = ({ sqW, sqH }) => {
  return (
    <div
      className={`flex bg-gray-200 bg-[length:100%_100%,100%_100%] bg-no-repeat justify-center items-center text-gray-400 mx-2 font-light overflow-hidden`}
      style={{
        minWidth: 10,
        minHeight: 10,
        width: sqW || 300,
        height: sqH || 300,
        backgroundImage: `
          linear-gradient(to top left,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) calc(50% - 0.8px),
            rgba(156,163,175,.5) 50%,
            rgba(0,0,0,0) calc(50% + 0.8px),
            rgba(0,0,0,0) 100%),
          linear-gradient(to top right,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) calc(50% - 0.8px),
            rgba(156,163,175,.5) 50%,
            rgba(0,0,0,0) calc(50% + 0.8px),
            rgba(0,0,0,0) 100%)
        `,
      }}
    />
  );
};

export default Placeholder;

import carrefour from "/app/assets/images/carrefour.png";
import ras from "/app/assets/images/ras-interim.png";
import vivlio from "/app/assets/images/vivlio.png";
import thales from "/app/assets/images/thales.png";

import Poster from "../../components/Poster";
import { useState } from "react";

const Jobs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleExpand = (image) => {
    setIsExpanded(!isExpanded);
    setExpandedImage(image);
  };

  return (
    <div className="text-center bg-[#f7f7f8] w-full h-fit rounded-[50px] p-6">
      {isExpanded && (
        <>
          <img
            src={expandedImage}
            onClick={() => handleExpand(expandedImage)}
            className="absolute z-50 w-auto transform translate-x-[20%] translate-y-[15%] h-3/4 shadow-2xl"
          />
          <button
            className="absolute z-50 left-[calc(50%-21px)] translate-y-[100%] border rounded-full border-black p-1 cursor-pointer hover:bg-white transition-transform duration-300 hover:-rotate-90" // Changed to rotate the button
            onClick={() => handleExpand(expandedImage)} // Close the expanded view
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="z-50 w-8 h-8 text-black "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="absolute z-40 w-[90vw] h-[105vh] backdrop-blur-lg rounded-[50px]"
            // onClick={() => handleExpand(expandedImage)}
          ></div>
        </>
      )}
      <h2 className="text-[calc(1rem+.5vw)] text-3xl text-[#000e23] font-semibold mt-5 pb-5 tracking-wide">
        Key Experiences
      </h2>
      <div className="mb-16">
        In order to{" "}
        <span className="underline selection:bg-yellow-300 underline-offset-4 decoration-0">
          respect NDAs
        </span>
        , the pictures shown are screenshots of images publically available. Not
        representative of actual projects I worked on.
      </div>
      <div className="flex justify-center">
        <div className="grid w-[70%] grid-cols-2 gap-5 cursor-pointer">
          {jobs.map((job, index) => (
            <Poster
              key={index}
              companyName={job.name}
              companyDetails={job.description}
              image={job.image}
              imageAlt={job.imageAlt}
              handleOnClick={() => handleExpand(job.image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

const jobs = [
  {
    name: "Carrefour",
    year: "2023 - 2024",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: carrefour,
    imageAlt:
      "Icon by Paul J. - @www.freepik.com/icon/developer_9436966#fromView=search&page=1&position=30&uuid=dd4ec1f9-cb6a-4ce6-9a4b-22933d3504f5",
  },
  {
    name: "RAS Interim & ZoL",
    year: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: ras,
    imageAlt:
      "Icon by SBTS2018 - @https://www.freepik.com/icon/agile_6419083#fromView=search&page=1&position=72&uuid=799b70a4-4d8e-47ac-8535-4437d01ac1dc",
  },
  {
    name: "Vivlio",
    year: "2021 - 2022",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: vivlio,
    imageAlt:
      "Icon by mikan933 - @https://www.freepik.com/icon/efficiency_8209963#fromView=search&page=2&position=89&uuid=4770b237-4080-4c91-b768-ea42cab59809",
  },
  {
    name: "Thales",
    year: "2019 - 2021",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: thales,
    imageAlt:
      "Icon by mikan933 - @https://www.freepik.com/icon/efficiency_8209963#fromView=search&page=2&position=89&uuid=4770b237-4080-4c91-b768-ea42cab59809",
  },
];

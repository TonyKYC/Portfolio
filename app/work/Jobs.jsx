import carrefour from "/app/assets/images/carrefour.png";
import ras from "/app/assets/images/ras-interim.png";
import vivlio from "/app/assets/images/vivlio.png";
import thales from "/app/assets/images/thales.png";
import carrefourLogo from "/app/assets/logo/carrefour-logo.jpg";
import rasLogo from "/app/assets/logo/ras-interim-logo.png";
import zolLogo from "/app/assets/logo/zol-logo.jpeg";
import vivlioLogo from "/app/assets/logo/vivlio-logo.webp";
import thalesLogo from "/app/assets/logo/thales-logo.jpg";

import Poster from "../../components/Poster";
import { forwardRef } from "react";

const Jobs = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="text-center bg-[#f7f7f8] w-full h-fit rounded-[50px] p-6"
    >
      <h2 className="text-[calc(1rem+.9vw)] text-3xl text-[#000e23] font-semibold mt-14 pb-5 tracking-wide">
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
      <div className="flex justify-center mb-6">
        <div className="grid w-[70%] lg:grid-cols-2 gap-6 cursor-pointer max-sm:grid-col-1 md:grid-cols-1">
          {jobs.map((job, index) => (
            <Poster
              key={index}
              companyName={job.name}
              companySummary={job.summary}
              companyDetails={job.description}
              year={job.year}
              logo={job.logo}
              image={job.image}
              imageAlt={job.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Jobs;

const jobs = [
  {
    name: "Carrefour",
    year: "2023 - 2024",
    summary: "Summary of the company",
    description: "Lorem ipsum dolor sit amet, consectetur",
    logo: carrefourLogo,
    image: carrefour,
    imageAlt:
      "Icon by Paul J. - @www.freepik.com/icon/developer_9436966#fromView=search&page=1&position=30&uuid=dd4ec1f9-cb6a-4ce6-9a4b-22933d3504f5",
  },
  {
    name: "RAS Interim",
    year: "2022 - 2023",
    summary: "Summary of the company",
    description: "Lorem ipsum dolor sit amet, consectetur",
    logo: rasLogo,
    image: ras,
    imageAlt:
      "Icon by SBTS2018 - @https://www.freepik.com/icon/agile_6419083#fromView=search&page=1&position=72&uuid=799b70a4-4d8e-47ac-8535-4437d01ac1dc",
  },
  {
    name: "ZoL",
    year: "2022 - 2023",
    summary: "Summary of the company",
    description: "Lorem ipsum dolor sit amet, consectetur",
    logo: zolLogo,
    image: ras,
    imageAlt:
      "Icon by SBTS2018 - @https://www.freepik.com/icon/agile_6419083#fromView=search&page=1&position=72&uuid=799b70a4-4d8e-47ac-8535-4437d01ac1dc",
  },
  {
    name: "Vivlio",
    year: "2021 - 2022",
    summary: "Summary of the company",
    description:
      "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet",
    logo: vivlioLogo,
    image: vivlio,
    imageAlt:
      "Icon by mikan933 - @https://www.freepik.com/icon/efficiency_8209963#fromView=search&page=2&position=89&uuid=4770b237-4080-4c91-b768-ea42cab59809",
  },
  {
    name: "Thales",
    year: "2019 - 2021",
    summary: "Summary of the company",
    description: "Lorem ipsum dolor sit amet, consectetur",
    logo: thalesLogo,
    image: thales,
    imageAlt:
      "Icon by mikan933 - @https://www.freepik.com/icon/efficiency_8209963#fromView=search&page=2&position=89&uuid=4770b237-4080-4c91-b768-ea42cab59809",
  },
];

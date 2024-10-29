import { forwardRef } from "react";

import Poster from "../../components/Poster";
import jobs from "../../constants/jobsData";

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
        <div className="grid w-[70%]  gap-4 cursor-pointer xl:grid-cols-3 lg:grid-cols-2 max-sm:grid-col-1 md:grid-cols-2">
          {jobs.map((job, index) => (
            <Poster
              key={index}
              companyName={job.name}
              companySummary={job.summary}
              companyDetails={job.description}
              year={job.year}
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

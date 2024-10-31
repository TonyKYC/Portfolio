import { forwardRef } from "react";
import { motion } from "framer-motion";

import jobs from "../../constants/jobsData";

const Jobs = forwardRef((props, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      className="flex justify-center py-20 mx-auto bg-gray-100 rounded-[40px] scroll-mt-7"
    >
      <div className="container flex flex-col items-center px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-700 mb-14 font-rubik"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <img
                src={job?.image}
                alt={job?.imageAlt}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <div className="flex flex-row items-center justify-between">
                  <h3 className="mb-2 text-xl font-semibold">{job?.name}</h3>
                  <p>{job.year}</p>
                </div>
                <p className="text-gray-600">{job?.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Jobs;

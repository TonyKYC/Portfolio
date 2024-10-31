import { forwardRef } from "react";
import { motion } from "framer-motion";

import projects from "../../constants/jobsData";

const Projetcs = forwardRef((props, ref) => {
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <img
                src={project?.image}
                alt={project?.imageAlt}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <div className="flex flex-row items-center justify-between">
                  <h3 className="mb-2 text-xl font-semibold">
                    {project?.name}
                  </h3>
                  <p>{project?.year}</p>
                </div>
                <p className="text-gray-600">{project?.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projetcs;

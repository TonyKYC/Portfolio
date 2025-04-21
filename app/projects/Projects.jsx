import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useState, useEffect } from "react";

import projects from "../../constants/projectData";

const getProjectBackground = (projectName) => {
  // Map project names to their brand colors
  const colorMap = {
    RENWU: "bg-[#1e1f22]",
    Carrefour: "bg-[#254f9b]",
    "RAS Interim": "bg-[#ff914d]",
    ZoL: "bg-[#2aabf6]",
    Vivlio: "bg-[#d8161a]",
    THALES: "bg-[#242b75]",
    "University of Kent": "bg-[#06467d]",
    "HEC Paris": "bg-[#00427a]",
    EPITECH: "bg-[#0091d3]",
  };

  // Extract company name from full project name (e.g., "Agile Coach | Carrefour France" -> "Carrefour France")
  const companyName = projectName.split("|")[1]?.trim() || projectName;

  // Return the mapped color or a default color
  return colorMap[companyName] || "bg-gray-50";
};

const Projects = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Add useEffect to handle body scroll lock
  useEffect(() => {
    if (selectedProject) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      ref={ref}
      className="flex justify-center py-20 mx-auto bg-gray-100 scroll-mt-7"
    >
      <div className="container flex flex-col items-center px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-700 font-rubik"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-center text-gray-600 mb-14 max-sm:p-5 max-sm:text-center"
        >
          Throughout my career, I have had the privilege of working on a diverse
          range of projects, from emerging startups to established global
          enterprises.
          <br /> Below is a curated selection of some of these endeavors.
        </motion.p>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`card-container-${index}`}
              onClick={() => setSelectedProject(project)}
              className="h-full overflow-hidden transition-shadow duration-300 bg-white shadow-md cursor-pointer rounded-xl hover:shadow-xl max-sm:mx-4"
              whileHover={{
                scale: 1.03,
              }}
            >
              <motion.div
                layoutId={`card-image-container-${index}`}
                className={`relative pt-[50%] ${getProjectBackground(
                  project?.name
                )} bg-opacity-10`}
              >
                <motion.img
                  layoutId={`card-image-${index}`}
                  src={project?.image}
                  alt={project?.imageAlt}
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </motion.div>
              <motion.div layoutId={`card-content-${index}`} className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{project?.name}</h3>
                  <p className="text-sm text-gray-500">{project?.year}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {project?.description}
                </p>
              </motion.div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 flex items-start justify-center pt-10 overflow-y-auto md:items-center bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  layoutId={`card-container-${projects.indexOf(
                    selectedProject
                  )}`}
                  className="relative w-full max-w-4xl mx-4 my-4 overflow-hidden bg-white shadow-2xl md:mt-20 lg:mt-20 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    marginTop: "0px",
                    maxHeight: "calc(100vh - 60px)",
                  }} // Ensure modal doesn't exceed viewport height
                >
                  <div className="max-h-[calc(100vh-60px)] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {/* Left Column - Image and Basic Info */}
                      <div
                        className={`h-[200px] md:h-full md:min-h-[300px] flex items-center justify-center ${getProjectBackground(
                          selectedProject.company
                        )}`}
                      >
                        <motion.div
                          layoutId={`card-image-container-${projects.indexOf(
                            selectedProject
                          )}`}
                          className="relative w-full h-full"
                        >
                          <motion.img
                            layoutId={`card-image-${projects.indexOf(
                              selectedProject
                            )}`}
                            src={selectedProject.image}
                            alt={selectedProject.imageAlt}
                            className="object-contain w-full h-full"
                          />
                        </motion.div>
                      </div>

                      {/* Right Column - Content */}
                      <div className="flex flex-col col-span-2 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold">
                              {selectedProject.name}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                                {selectedProject.year}
                              </span>
                              {selectedProject.status && (
                                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">
                                  {selectedProject.status}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex-grow space-y-6">
                          {selectedProject.technologies && (
                            <div>
                              <h3 className="mb-2 text-sm font-semibold text-gray-700">
                                Technologies
                              </h3>
                              <div className="flex flex-wrap gap-1.5">
                                {selectedProject.technologies.map(
                                  (tech, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-0.5 text-xs text-blue-800 bg-blue-100 rounded-full"
                                    >
                                      {tech}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          )}

                          <div>
                            <h3 className="mb-2 text-sm font-semibold text-gray-700">
                              Project Details
                            </h3>
                            <p className="text-sm text-gray-600">
                              {selectedProject.details}
                            </p>
                          </div>

                          {selectedProject.challenges && (
                            <div>
                              <h3 className="mb-2 text-sm font-semibold text-gray-700">
                                Challenges
                              </h3>
                              <p className="text-sm text-gray-600">
                                {selectedProject.challenges}
                              </p>
                            </div>
                          )}

                          {selectedProject.achievements && (
                            <div>
                              <h3 className="mb-2 text-sm font-semibold text-gray-700">
                                Achievements
                              </h3>
                              <ul className="text-sm text-gray-600 list-disc list-inside">
                                {selectedProject.achievements.map(
                                  (achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Role and Duration */}
                        <div className="pt-6 pr-4 mt-6 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <h3 className="text-sm font-semibold text-gray-700">
                                Role
                              </h3>
                              <p className="text-sm text-gray-600">
                                {selectedProject.role}
                              </p>
                            </div>
                            <div className="space-y-1">
                              <h3 className="text-sm font-semibold text-gray-700">
                                Duration
                              </h3>
                              <p className="text-sm text-gray-600">
                                {selectedProject.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Keep close button outside scrollable area but inside modal */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className="absolute z-50 p-2 text-gray-600 transition-colors bg-white rounded-full shadow-md cursor-pointer hover:text-gray-900 top-6 right-6 hover:shadow-lg"
                    aria-label="Close details"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

export default Projects;

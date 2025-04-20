import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useState } from "react";

import projects from "../../constants/projectData";

const Projects = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="flex justify-center py-20 mx-auto bg-gray-100 scroll-mt-7" //rounded-[40px]
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

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-sm:p-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={
                selectedProject === null && { opacity: 0, y: 20, duration: 0.5 }
              }
              whileInView={selectedProject === null && { opacity: 1, y: 0 }}
              layoutId={`project-${index}`}
              onClick={() => setSelectedProject(project)}
              className="h-full overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg rounded-2xl"
            >
              <motion.img
                layoutId={`project-image-${index}`}
                src={project?.image}
                alt={project?.imageAlt}
                className="block object-cover w-full h-48"
              />
              <motion.div layoutId={`project-content-${index}`} className="p-6">
                <div className="flex flex-row items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{project?.name}</h3>
                  <p className="text-sm">{project?.year}</p>
                </div>
                <p className="text-gray-600">{project?.description}</p>
              </motion.div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedProject && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 z-40 bg-black/50"
                />
                <motion.div
                  layoutId={`project-${projects.indexOf(selectedProject)}`}
                  className="fixed top-[10vh] left-[calc(50%-25vw)] w-full max-w-[50vw] bg-white z-50 overflow-hidden max-h-[90vh] overflow-y-auto rounded-2xl"
                >
                  <motion.img
                    layoutId={`project-image-${projects.indexOf(
                      selectedProject
                    )}`}
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt}
                    className="w-full h-[300px] object-cover"
                  />
                  <motion.div
                    layoutId={`project-content-${projects.indexOf(
                      selectedProject
                    )}`}
                    className="p-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold">
                        {selectedProject.name}
                      </h2>
                      <div className="flex items-center gap-4">
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

                    <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
                      <div className="col-span-2">
                        <h3 className="mb-4 text-xl font-semibold">Overview</h3>
                        <p className="mb-6 leading-relaxed text-gray-600">
                          {selectedProject.description}
                        </p>

                        {selectedProject.longDescription && (
                          <p className="mb-6 leading-relaxed text-gray-600">
                            {selectedProject.longDescription}
                          </p>
                        )}

                        {selectedProject.challenges && (
                          <div className="mb-6">
                            <h3 className="mb-3 text-xl font-semibold">
                              Challenges
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                              {selectedProject.challenges}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="space-y-6">
                        {selectedProject.technologies && (
                          <div>
                            <h3 className="mb-2 text-lg font-semibold">
                              Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map(
                                (tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {selectedProject.role && (
                          <div>
                            <h3 className="mb-2 text-lg font-semibold">Role</h3>
                            <p className="text-gray-600">
                              {selectedProject.role}
                            </p>
                          </div>
                        )}

                        {selectedProject.duration && (
                          <div>
                            <h3 className="mb-2 text-lg font-semibold">
                              Duration
                            </h3>
                            <p className="text-gray-600">
                              {selectedProject.duration}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {selectedProject.links && (
                      <div className="flex gap-4 mb-8">
                        {selectedProject.links.live && (
                          <a
                            href={selectedProject.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                          >
                            View Live
                          </a>
                        )}
                        {selectedProject.links.github && (
                          <a
                            href={selectedProject.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700"
                          >
                            View Code
                          </a>
                        )}
                      </div>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(null);
                      }}
                      className="absolute p-2 transition-colors text-white/80 top-4 right-4 hover:text-white"
                      aria-label="Close details"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    </button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

export default Projects;

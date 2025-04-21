import { motion } from "framer-motion";
import React from "react";
import ManagementIcon from "../../components/ui/ManagementIcon";
import MetricsIcon from "../../components/ui/MetricsIcon";
import TechnicalAgileIcon from "../../components/ui/TechnicalAgileIcon";

const Expertise = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-3/4 mx-auto space-y-12"
    >
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 font-rubik">
          Expertise
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-600">
            Helping{" "}
            <span className="px-2 py-1 text-green-800 bg-green-100 rounded-md">
              your teams work <strong>more efficiently</strong> using{" "}
              <u>Agility</u>
            </span>{" "}
            through Scrum, Kanban, SAFe or custom framework.
            <br className="md:hidden" /> Including{" "}
            <span className="px-2 py-1 rounded-md bg-amber-100 text-amber-800">
              tools, <u>workflows</u>, <u>communication</u> and <u>processes</u>
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group"
        >
          <div className="h-full p-8 transition-all duration-300 bg-white shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1">
            <div className="mb-6 text-blue-600 transition-transform duration-300 group-hover:scale-110">
              <TechnicalAgileIcon />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Technical Agile Practices
            </h3>
            <p className="leading-relaxed text-gray-600">
              Proficient in Agile engineering practices, automated workflows and
              scaled agility (SAFe).
            </p>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group"
        >
          <div className="h-full p-8 transition-all duration-300 bg-white shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1">
            <div className="mb-6 text-blue-600 transition-transform duration-300 group-hover:scale-110">
              <ManagementIcon />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Management & Facilitation
            </h3>
            <p className="leading-relaxed text-gray-600">
              Experienced in orchestrating Agile ceremonies and leading
              organizational transformations.
            </p>
          </div>
        </motion.div>

        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group"
        >
          <div className="h-full p-8 transition-all duration-300 bg-white shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1">
            <div className="mb-6 text-blue-600 transition-transform duration-300 group-hover:scale-110">
              <MetricsIcon />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Metrics-Driven
            </h3>
            <p className="leading-relaxed text-gray-600">
              Data-driven approach to performance optimization using Agile
              metrics and analytics.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;

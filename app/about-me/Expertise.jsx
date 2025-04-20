import { motion } from "framer-motion";
import React from "react";
import ManagementIcon from "../../components/ui/ManagementIcon";
import MetricsIcon from "../../components/ui/MetricsIcon";
import TechnicalAgileIcon from "../../components/ui/TechnicalAgileIcon";

const Expertise = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl m-5 mb-2 space-y-10 text-center mt-14"
    >
      <h2 className="text-3xl font-bold text-gray-700 font-rubik">Expertise</h2>
      <p className="mt-2 text-gray-600 underline-offset-4 decoration-0">
        Helping
        <span className="p-1 leading-8 bg-green-200">
          your teams work <b>more efficiently</b> using <u>Agility</u>
        </span>
        through Scrum, Kanban, SAFe or custom framework.
        <br />
        Including
        <span className="p-1 bg-yellow-200">
          tools, <u>workflows</u>, <u>communication</u> and <u>processes</u>.{" "}
        </span>
      </p>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <TechnicalAgileIcon />
          <h3 className="text-lg font-semibold text-gray-800">
            Technical Agile Practices
          </h3>
          <p className="mt-2 text-gray-600">
            Proficient in Agile engineering practices, automated workflows and
            scaled agility (SAFe).
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <ManagementIcon />
          <h3 className="text-lg font-semibold text-gray-800">
            Management & Facilitation
          </h3>
          <p className="mt-2 text-gray-600">
            Experienced in orchestrating Agile ceremonies and leading
            organizational transformations.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <MetricsIcon />
          <h3 className="text-lg font-semibold text-gray-800">
            Metrics-Driven
          </h3>
          <p className="mt-2 text-gray-600">
            Data-driven approach to performance optimization using Agile metrics
            and analytics.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Expertise;

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
      className="w-5/6 mx-auto space-y-12"
    >
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 font-rubik">
          Expertise
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-600">
            Bridging
            <span className="px-2 py-1 text-green-800 bg-green-100 rounded-md">
              technical excellence with{" "}
              <strong>organizational transformation</strong> through{" "}
              <u>scaled agility</u>
            </span>{" "}
            <br />
            from startups to world-class enterprises.
            <br className="md:hidden" /> Specializing in{" "}
            <span className="px-0 py-1 rounded-md bg-amber-100 text-amber-800">
              <u>SAFe</u>
              <span className="py-1 bg-white">, </span>
              <u>Scrum/Kanban </u>
              <span className="py-1 bg-white">, </span>
              <u> AI integration</u>
              <span className="py-1 bg-white"> and </span>
              <u> full-stack development (ReactJS)</u>
            </span>
            .
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
              Enterprise Agile Leadership
            </h3>
            <p className="leading-relaxed text-gray-600">
              Proven track record in implementing SAFe for 250+ people teams,
              with expertise in large-scale transformations at companies like
              Carrefour, RAS Interim and THALES.
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
              Technical Innovation
            </h3>
            <p className="leading-relaxed text-gray-600">
              Combining military-grade development experience from Thales with
              cutting-edge AI integration in modern web applications at RENWU.
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
              Strategic Growth
            </h3>
            <p className="leading-relaxed text-gray-600">
              Track record of scaling teams and processes up to 5x, while
              maintaining efficiency through data-driven decision making and
              automation.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;

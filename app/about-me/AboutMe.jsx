import { motion } from "framer-motion";
import { forwardRef, useCallback, useState } from "react";
import { toast } from "sonner";

import ContactButton from "../../components/ContactButton";
import DownloadButton from "../../components/DownloadButton";
import CopyIcon from "../../components/ui/CopyIcon";

import CVModal from "../hero/CVModal";
import Expertise from "./Expertise";

const AboutMe = forwardRef(({ contactRef }, ref) => {
  const [isEmailCopied, setEmailCopied] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCopyEmail = useCallback(() => {
    setEmailCopied(true);
    navigator.clipboard.writeText("anthony.abramo.pro@gmail.com");
    setTimeout(() => setEmailCopied(false), 100);
  }, []);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center w-full mx-auto px-4 py-16 rounded-[40px] bg-gray-50"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center w-4/5 max-w-6xl lg:flex-row lg:items-stretch lg:gap-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-full mb-8 lg:w-1/2 lg:mb-0"
        >
          <div className="relative h-full overflow-hidden shadow-lg rounded-2xl">
            <img
              src="/assets/me.jpeg"
              alt="Profile"
              className="object-cover w-full h-full transition-transform duration-300 max-h-[550px] hover:scale-105"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col justify-between w-full space-y-8 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="mb-2 text-4xl font-bold text-gray-800 font-rubik">
              Agile Coach <span className="text-gray-600">&</span>
              <br />
              Fullstack Developer
            </h1>
            <div className="w-20 h-1 mb-6 bg-blue-600 rounded-full"></div>
            <SelfIntroduction />
            <Keywords />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <ContactButton
              style={isEmailCopied ? "translate-y-1" : ""}
              variant="outlined"
              label={
                <CopyIcon
                  onClick={() => {
                    handleCopyEmail();
                    toast.success("Email copied successfully");
                  }}
                />
              }
            />
            <button
              onClick={toggleModal}
              className="px-6 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              View CV
            </button>
            <DownloadButton />
          </motion.div>
        </div>
      </motion.section>

      <CVModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpen={toggleModal}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full mx-auto mt-16"
      >
        <Expertise />
      </motion.div>
    </div>
  );
});

export default AboutMe;

const SelfIntroduction = () => {
  return (
    <div className="space-y-4 text-lg leading-relaxed text-gray-600">
      <p>
        Agile Coach and Project/Product Manager with 6+ years of experience
        driving team efficiency and product delivery. Combines strategic
        guidance and process optimization with hands-on coding expertise in
        ReactJS (web ecosystem).
      </p>
      <p>
        Integrates AI-powered automation to streamline workflows and elevate
        productivity. Possesses a unique blend of leadership and technical
        skills, enabling effective strategy execution and direct contribution to
        development.
      </p>
    </div>
  );
};

const Keywords = () => {
  return (
    <div className="flex flex-wrap gap-1.5 pt-2">
      {keywords.map((keyword, index) => (
        <span
          key={index}
          className="px-2 py-0.5 text-xs text-blue-800 bg-blue-100 rounded-full"
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};

const keywords = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Zod",
  "ShadcnUI",
  "Supabase",
  "PostgresSQL",
  "Vercel",
  "AI",
  "Agile Coaching",
  "Agile Transformation",
  "Scrum",
  "Kanban",
  "SAFe",
  "Jira",
  "Confluence",
  "Miro",
  "CI/CD",
  "Documentation",
  "Scalability",
];

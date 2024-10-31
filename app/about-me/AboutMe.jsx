import { forwardRef, useCallback, useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

import ContactButton from "../../components/ContactButton";
import CopyIcon from "../../components/ui/CopyIcon";
import TechnicalAgileIcon from "../../components/ui/TechnicalAgileIcon";
import ManagementIcon from "../../components/ui/ManagementIcon";
import MetricsIcon from "../../components/ui/MetricsIcon";

const AboutMe = forwardRef(({ contactRef }, ref) => {
  const [isEmailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    setEmailCopied(true);
    navigator.clipboard.writeText("anthony.abramo.pro@gmail.com");
    setTimeout(() => setEmailCopied(false), 100);
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center w-[75%] mx-auto min-h-screen px-4 py-12 rounded-[40px] bg-gray-50 scroll-mt-7"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center w-full max-w-5xl p-2 lg:flex-row"
      >
        <img
          src="/assets/me.jpeg"
          alt="Profile"
          className="w-auto h-full mb-6 md:mb-0 md:mr-8 md:w-1/2"
        />
        <div className="mb-1 text-center md:w-1/2">
          <h1 className="pb-2 text-4xl font-bold text-gray-700 font-rubik md:p-5">
            Agile Coach <span className="text-3xl">&</span>
            <br /> Developer
          </h1>

          <SelfIntroduction />
          <div className="flex flex-row-reverse">
            <Toaster richColors position="top-center" className="top-[10%]" />
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
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mt-10 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-700 font-rubik">
          Specialities
        </h2>
        <p className="mt-2 text-gray-600">
          Working hand-in-hand with teams to uncover opportunities in order to
          turn <br />
          efficiency ideas and processes into reality.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <TechnicalAgileIcon />
            <h3 className="text-lg font-semibold text-gray-800">
              Technical Agile Practices
            </h3>
            <p className="mt-2 text-gray-600">
              Proficient in Agile engineering practices like TDD, CI/CD, Git and
              automated workflows.
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
              Data-driven approach to performance optimization using Agile
              metrics and analytics.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
});

export default AboutMe;

const SelfIntroduction = () => {
  return (
    <div className="font-rubik text-lg text-[#000e23] font-[320] tracking-wide mb-4 max-sm:text-sm text-justify">
      <p>
        With a solid foundation in software development, I’ve had the
        opportunity to work in dynamic, fast-paced Agile environments.
      </p>
      <p className="mt-3">
        I’m passionate about aligning with your specific needs and goals,
        leveraging my expertise to enhance tools, simplify workflows, and
        improve overall efficiency.
      </p>
      <p className="mt-3">
        My focus is always on driving results, whether it is through coaching
        teams or guiding management to unlock their full productivity potential.
      </p>
    </div>
  );
};

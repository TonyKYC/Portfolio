import { forwardRef, useCallback, useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

import ContactButton from "../../components/ContactButton";
import CopyIcon from "../../components/ui/CopyIcon";
import DownloadButton from "../../components/DownloadButton";

import Expertise from "./Expertise";
import CVModal from "./CVModal";

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
      className="flex flex-col items-center justify-center w-[75%] mx-auto px-4 py-12 rounded-[40px] bg-gray-50 scroll-mt-7"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center w-full max-w-5xl p-2 md:p-5 lg:flex-row lg:max-h-[550px]"
      >
        <img
          src="/assets/me.jpeg"
          alt="Profile"
          className="w-auto h-full mb-6 md:mb-3 lg:mr-8 md:w-1/2 max-sm:h-[200px] max-md:h-[300px]"
        />
        <div className="flex flex-col justify-between w-full h-full mb-1 text-center md:w-3/4">
          <h1 className="pb-2 text-4xl font-bold text-gray-700 font-rubik max-sm:text-center max-sm:text-xl max-md:text-2xl md:text-2xl lg:text-4xl">
            Agile Coach{" "}
            <span className="text-3xl max-sm:text-md max-lg:text-xl lg:text-2xl">
              ,
            </span>
            <br /> Developer
          </h1>

          <SelfIntroduction />
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-row-reverse items-center justify-end">
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
                className="px-4 py-2 mr-2 text-white bg-blue-600 h-11 hover:bg-blue-700 rounded-xl"
              >
                View CV
              </button>{" "}
              <DownloadButton />
            </div>
          </div>
        </div>
      </motion.section>

      <CVModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpen={toggleModal}
      />
      <Expertise />
    </div>
  );
});

export default AboutMe;

const SelfIntroduction = () => {
  return (
    <div className="text-lg text-[#000e23] font-[320] tracking-wide mb-4 max-sm:text-sm text-justify">
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

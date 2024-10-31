import { forwardRef, useCallback, useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

import ContactButton from "../../components/ContactButton";
import CopyIcon from "../../components/ui/CopyIcon";

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
          src="/app/assets/images/me.jpeg"
          alt="Profile"
          className="w-auto h-full mb-6 md:mb-0 md:mr-8 md:w-1/2"
        />
        <div className="mb-1 text-center md:w-1/2">
          <h1 className="pb-2 text-4xl font-bold text-gray-700 font-rubik md:p-5">
            Agile Coach & Developer
          </h1>

          <SelfIntroduction />
          <div className="flex flex-row-reverse gap-2 mb-1">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non
          nisl tincidunt ut elementum turpis.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="icon-url-lightbulb"
              alt="Product Design Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Product Design
            </h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, solor adipicing elit. Non nisl solor
              ut elementum turpis.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="icon-url-pencil"
              alt="UI/UX Design Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              UI/UX Design
            </h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, solor adipicing elit. Non nisl solor
              ut elementum turpis.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="icon-url-interactive"
              alt="Interactive Design Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Interactive Design
            </h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, solor adipicing elit. Non nisl solor
              ut elementum turpis.
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
    <div className="font-rubik text-xl text-[#000e23] font-[320] tracking-wide mb-4 max-sm:text-sm text-justify">
      <p>
        With a solid foundation in software development, I’ve had the
        opportunity to work in dynamic, fast-paced Agile environments.
      </p>
      <div className="mt-3">
        I’m passionate about aligning with your specific needs and goals,
        leveraging my expertise to enhance tools, simplify workflows, and
        improve overall efficiency.
      </div>
      <div className="mt-3">
        My focus is always on driving results, whether it is through coaching
        teams or guiding management to unlock their full productivity potential.
      </div>
    </div>
  );
};

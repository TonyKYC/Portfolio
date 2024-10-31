import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

import CopyIcon from "../../components/ui/CopyIcon";
import ArrowIcon from "../../components/ui/ArrowIcon";
import ContactButton from "../../components/ContactButton";

import "../index.css";

const Hero = ({ aboutRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEmailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    setEmailCopied(true);
    navigator.clipboard.writeText("anthony.abramo.pro@gmail.com");
    setTimeout(() => setEmailCopied(false), 100);
  }, []);

  const handleClickAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="w-[100vw] justify-center items-center rounded-b-[50px] h-[92.2vh] overflow-hidden bg-[#f6f6f6] md:max-h-[900px] lg:max-h-[900px]">
      <motion.div
        initial={{ opacity: 0, y: -20, width: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute z-200000 top-[24%] left-0 right-0 ms-auto me-auto w-fit align-middle text-center bg-radial-custom"
      >
        <p className="text-[#438fff] font-square-peg text-[calc(1.5rem+1vw)]">
          Mastering agility, optimizing efficiency
        </p>
        <h1 className="font-rubik text-[calc(1.1rem+3.9vw)] font-[600] leading-tight bg-gradient-to-t from-[#439051] via-[#042350] via-30% to-[#002c6d] inline-block text-transparent bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] z-50">
          Harnessing Agility for
          <br />
          Efficient Product Delivery
        </h1>
        <div className="flex flex-col justify-center items-center font-rubik text-xl text-[#000e23] font-[350] pt-3 tracking-wide">
          <p>Hi! I&apos;m Anthony, an efficiency virtuoso.</p>
          <div className="flex flex-row justify-around gap-3 mt-7">
            <div
              className="from-[#448ffe] to-[#1f7bff] font-normal text-white justify-center items-center rounded-xl px-4 pb-1 pt-[.3rem] text-sm min-w-[120px] h-11 hover:cursor-pointer bg-gradient-to-b shadow-md font-rubik flex flex-row"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button onClick={handleClickAbout}>Learn More</button>
              <ArrowIcon isHovered={isHovered} />
            </div>
            <div>
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
        </div>
      </motion.div>
      <div className="pt-[72px]">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(63px,1fr))] gap-0">
          {Array.from({ length: 351 }).map((_, index) => (
            <div
              key={index}
              className="h-16 border-[#eaeaeb] border-[0.5px] hover:bg-white hover:shadow-[0_3px_40px_-15px_rgba(0,0,0,0.4)]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

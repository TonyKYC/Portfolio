import { useState, useCallback, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";

import ContactButton from "../../components/ContactButton";

const Hero = ({ aboutRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEmailCopied, setEmailCopied] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

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
    <div className=" justify-center items-center rounded-b-[50px] h-[92.2vh] overflow-hidden bg-[#f6f6f6] md:max-h-[900px] lg:max-h-[900px]">
      <div
        id="header-hero"
        ref={headerRef}
        className={`absolute z-200000 top-[24%] left-0 right-0 ms-auto me-auto w-fit align-middle text-center bg-radial-custom transition-opacity duration-500 ${
          isHeaderVisible ? "opacity-100" : "opacity-0"
        }`}
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
              className="from-[#448ffe] to-[#1f7bff] font-normal text-white justify-center items-center rounded-xl px-4 pb-1 pt-[.3rem] text-sm min-w-[120px] h-11 hover:cursor-pointer bg-gradient-to-b shadow-md  font-rubik flex flex-row"
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
      </div>
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

const CopyIcon = ({ onClick }) => (
  <div className="flex items-center" onClick={onClick}>
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
      <path d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4" />
      <rect x="9" y="9" width="10" height="10" rx="2" />
    </svg>
    <p className="ml-1">Copy Email</p>
  </div>
);

const ArrowIcon = ({ isHovered }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ml-[2px] transition-transform duration-200 ${
        isHovered ? "translate-x-1 rotate-90" : ""
      } text-white`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6l6 6-6 6"
      />
    </svg>
  );
};

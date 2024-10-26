import ContactButton from "../../components/ContactButton";

const Hero = () => {
  return (
    <div className=" justify-center items-center rounded-b-[50px] h-[92.2vh] overflow-hidden bg-[#f6f6f6]">
      <div
        id="header-hero"
        className="absolute z-200000 top-[24%] left-0 right-0 ms-auto me-auto w-fit align-middle text-center bg-radial-custom"
      >
        <p className="text-[#438fff] font-square-peg text-[calc(1.5rem+1vw)]">
          Mastering agility, optimizing efficiency
        </p>
        <h1 className="font-rubik text-[calc(1.1rem+3.9vw)] font-[600] leading-tight bg-gradient-to-t from-[#439051] via-[#042350] via-30% to-[#002c6d] inline-block text-transparent bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
          Harnessing Agility for
          <br />
          Efficient Product Delivery
        </h1>
        <div className="flex flex-col justify-center items-center font-rubik text-xl text-[#000e23] font-[350] pt-3 tracking-wide">
          <p>Hi! I&apos;m Anthony, an efficiency virtuoso.</p>
          <div className="flex flex-row justify-around gap-3 mt-7">
            <ContactButton variant="filled" label="Contact me" />
            <ContactButton variant="outlined" label="About me" />
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

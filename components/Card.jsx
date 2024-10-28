const Card = ({ skill, description, image, imageAlt }) => {
  return (
    <div className="w-full h-[300px] p-2 rounded-[20px] border bg-white transition-transform duration-300 hover:scale-105 overflow-hidden">
      <div className="flex flex-col justify-around bg-gradient-to-b from-[#f7f7f8] via-white via-70% to-white w-full h-full rounded-[20px]">
        <img
          src={image}
          alt={imageAlt}
          width={150}
          height={150}
          style={{ opacity: 0.8 }}
          className="grayscale-[70%] self-center max-sm:w-[125px] max-sm:h-[125px] "
        />
        <div className="px-8 text-left font-rubik">
          <div className="font-[500] max-sm:text-xs max-sm:overflow-hidden">
            {skill}
          </div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

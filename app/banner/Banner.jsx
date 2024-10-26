import mouse from "/app/assets/icons/mouse.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={mouse} width={50} height={50} className="my-3" />
    </div>
  );
};

export default Banner;

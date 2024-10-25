import logo from "/app/assets/logo.png";
import ContactButton from "../../components/ContactButton";
import AvailableButton from "../../components/AvailableButton";

const navItems = [
  { label: "About me", link: "/" },
  { label: "Achievements", link: "/" },
  { label: "How I work", link: "/" },
  { label: "Contact me", link: "/" },
];

const Header = () => {
  return (
    <nav className="top-0 right-0 left-0 z-[1030] p-2 fixed backdrop-blur-[12px] bg-[rgba(255,255,255,.7)]">
      <div className="flex justify-center items-center max-w-[1320px] font-extralight m-auto">
        <a href="/" className="mb-1 mr-4">
          <img
            src={logo}
            alt="Agile icons created by Flat Icons - Flaticon https://www.flaticon.com/free-icons/agile"
            className="w-auto h-8 mr-4"
          />
        </a>
        <div className="flex flex-row items-center w-full">
          <div className="flex flex-grow">
            {navItems.map((item, index) => {
              return (
                <a
                  key={index}
                  className="p-2 mx-4 my-2 font-light text-gray-900 hover:underline underline-offset-8 decoration-0 hover:cursor-pointer"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="flex items-center justify-end">
            <AvailableButton />
            <ContactButton variant="filled" label="Contact me" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

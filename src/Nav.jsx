import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import LOGO from "../public/Devfolio_Logo.png";
const Nav = () => {
  return (
    <nav className="bg-black h-20 flex text-white items-center">
      <RxHamburgerMenu size={30} className="" />
      <img src={LOGO} alt="" className="mx-auto" />
      <RxAvatar size={30} />
    </nav>
  );
};

export default Nav;

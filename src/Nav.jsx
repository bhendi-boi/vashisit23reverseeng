import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import LOGO from "../public/Devfolio - Normal.png";
const Nav = () => {
  return (
    <nav className="h-[76px] flex text-black items-center p-8 border">
      <div className="mr-auto flex gap-4 text-nav-inactive font-semibold">
        <img src={LOGO} alt="" className="items-center h-[20px]" />
        <span className="hover:text-black">Home</span>
        <span className="hover:text-black">Blog</span>
      </div>
      <RxAvatar size={30} />
    </nav>
  );
};

export default Nav;

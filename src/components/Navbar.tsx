import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import logo from "../../public/logo.png";
const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>(false);
      const toogleMenu = () => {
        setToggle(!toggle);
      };
  return (
    <header>
      <nav className="flex justify-between items-center w-[80%] mx-auto my-[30px]">
        <Link to="/" className="z-20">
          <img className="w-[60px]" src={logo} alt="Logo" />
        </Link>
      </nav>
      <div className="sm:hidden">
        {toggle ? (
          <IoMdCloseCircle
            onClick={toogleMenu}
            className=" text-sky-400 text-3xl"
          />
        ) : (
          <HiOutlineMenuAlt3
            onClick={toogleMenu}
            className="text-rose-500 text-3xl"
          />
        )}
      </div>
      <div
        className={
          toggle
            ? "sm:hidden absolute top-0 left-0 h-screen w-[300px] flex justify-center items-center  backdrop-blur-[150px] rounded-2xl transition-all duration-900"
            : "sm:hidden absolute top-0 left-[-100%] h-screen w-[300px] flex justify-center items-center  backdrop-blur-[1px] rounded-2xl transition-all duration-900"
        }
      >
        <ul className="flex flex-col gap-[30px]">
          {/* {NavbarData.map(({ href, tags }: NavbarItems) => (
            <NavItem key={href} href={href} tags={tags} />
          ))} */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

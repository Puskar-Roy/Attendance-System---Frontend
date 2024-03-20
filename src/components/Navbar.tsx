import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import logo from "/logo1.png";
import { NavbarData } from "../lib/data";
import { NavbarItems } from "../interfaces";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavItem = ({ href, tags , closeNav }: NavbarItems) => {
  return (
    <li onClick={closeNav} className="hover:text-indigo-500 font-semibold text-lg gabarito-regular">
      <Link to={href}>{tags}</Link>
    </li>
  );
};

const Navbar = () => {
  const { logout } = useLogout();
  const { state } = useAuthContext();

  const [toggle, setToggle] = useState<boolean>(false);
  const toogleMenu = () => {
    setToggle(!toggle);
  };
  const handleClick = () => {
    logout();
    setToggle(!toggle);
  };
  return (
    <header>
      <nav className="flex justify-between items-center w-[80%] mx-auto my-[30px]">
        <Link to="/" className="z-20 flex items-center gap-1">
          <img className="h-[55px] " src={logo} alt="Logo" />
          <h2 className="text-2xl font-bold text-indigo-400 ubuntu-bold">
            Attendance
          </h2>
        </Link>

        <div className="sm:hidden">
          {toggle ? (
            <IoMdCloseCircle
              onClick={toogleMenu}
              className=" text-sky-400 text-3xl"
            />
          ) : (
            <HiOutlineMenuAlt3
              onClick={toogleMenu}
              className="text-indigo-400 text-3xl"
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
            {!state.user &&
              NavbarData.map(({ href, tags }: NavbarItems) => (
                <NavItem
                  closeNav={toogleMenu}
                  key={href}
                  href={href}
                  tags={tags}
                />
              ))}
            {state.user && (
              <div className="flex flex-col gap-[30px]">
                <div className="hover:text-indigo-500 font-semibold text-lg gabarito-regular cursor-pointer">
                  {state.user.email}
                </div>
                <div
                  onClick={handleClick}
                  className="hover:text-indigo-500 font-semibold text-lg gabarito-regular cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )}
          </ul>
        </div>
        <div className="hidden sm:block">
          <ul className="list-none flex gap-x-12">
            {!state.user &&
              NavbarData.map(({ href, tags }: NavbarItems) => (
                <NavItem key={href} href={href} tags={tags} />
              ))}
            {state.user && (
              <div className="list-none flex gap-x-12">
                <div className="hover:text-indigo-500 font-semibold text-lg gabarito-regular cursor-pointer">
                  {state.user.email}
                </div>
                <div
                  onClick={handleClick}
                  className="hover:text-indigo-500 font-semibold text-lg gabarito-regular cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { React, useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MenuBar from "./MenuBar.jsx";



const Navbar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="flex justify-between bg-transparent text-white p-4   ">
        <div>
          <Link to='/'> <h1 className="font-signature text-4xl font-bold ">
           <span className="text-yellow-500 ">L</span>alit
          </h1>
          </Link>
        </div>
        <nav>
          <div>
            <FaBars
              className="md:hidden text-2xl releaive hover:animate-spin"
              onClick={showMenu}
            />
          </div>
          <ul className="hidden md:flex gap-8 p-1 uppercase">
            <li className="hover:bg-yellow hover:scale-105 duration-200 border-teal-400">
              <NavLink
                className="m-4 hover:text-teal-400 hover:font-bold"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="hover:scale-105 duration-200">
              <NavLink
                className="m-4 hover:text-teal-400 hover:font-bold"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="hover:scale-105 duration-200">
              <NavLink
                className="m-4 hover:text-teal-400 hover:font-bold"
                to="/project"
              >
                Project
              </NavLink>
            </li>
            <li className="hover:scale-105 duration-200">
              <NavLink
                className="m-4 hover:text-teal-400 hover:font-bold"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="">
            <MenuBar showMenu={showMenu} active={active} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MenuBar = ({ showMenu, active }) => {
  return (
    <>
      <nav className="relative h-full w-full">
        <ul
          className={
            active
              ? "block  py-6 fixed inset-0 z-50 uppercase bg-black/20 backdrop-blur-lg md:hidden "
              : "hidden"
          }
        >
          <FaWindowClose onClick={showMenu} className="mx-4 scale-120 " />
          <li className="hover:bg-black w-full py-3" onClick={showMenu}>
            <NavLink className="m-4 hover:text-teal-400" to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:bg-black w-full py-3" onClick={showMenu}>
            <NavLink className="m-4 hover:text-teal-400" to="/about">
              About
            </NavLink>
          </li>
          <li className="hover:bg-black w-full py-3" onClick={showMenu}>
            <NavLink className="m-4 hover:text-teal-400" to="/project">
              Project
            </NavLink>
          </li>
          <li className="hover:bg-black w-full py-3" onClick={showMenu}>
            <NavLink className="m-4 hover:text-teal-400" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuBar;

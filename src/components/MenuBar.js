import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MenuBar = ({ showMenu, active }) => {
  return (
    <>
      <nav>
        <div></div>
        <ul
          className={
            active
              ? "block  py-6 fixed inset-x-0 uppercase bg-black/20 backdrop-blur-lg md:hidden"
              : "hidden"
          }
        >
          <FaWindowClose onClick={showMenu} className="mx-4 scale-120 " />
          <li className="hover:bg-black w-full py-3">
            <NavLink className="m-4 hover:text-teal-400" to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:bg-black w-full py-3">
            <NavLink className="m-4 hover:text-teal-400" to="/about">
              About
            </NavLink>
          </li>
          <li className="hover:bg-black w-full py-3">
            <NavLink className="m-4 hover:text-teal-400" to="/project">
              Project
            </NavLink>
          </li>
          <li className="hover:bg-black w-full py-3">
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

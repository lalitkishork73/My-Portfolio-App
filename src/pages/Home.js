import React from "react";
import proimg from "../assets/lalitgray.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Quotes from "../components/Quotes.js";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 bg-fixed"
      >

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full md:flex-row">
          <div className="flex flex-col justify-center h-full w-full p-2">
            <h1 className="text-white text-4xl  sm:text-7xl font-bold">
              <span className="text-teal-400 animate-bounce">H</span>
              <span className="hover:scale-105 duration-200">i</span>
              <span className="hover:scale-105 duration-200">!,</span>
              <br />
            </h1>
            <h1 className="mb-1 font-mono text-4xl text-gray-100 sm:text-6xl font-bold">
              I'm <br className="block md:hidden" />
              <span className="sm- inline-flex h-20 pt-2 overflow-x-hidden animate-type text-yellow-500 group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform md:text-6xl">
                LalitKishor
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h1>
            <h1 className="text-white text-4xl md:text-7xl animate-pulse">
              Web Developer
            </h1>
            <h2 className="text-white mt-5 mb-5">
              Full-Stack Developer/Electronics & Communication Engineer
            </h2>

            <div className="p-2">
              <button className="p-3 text-white border-2 hover:bg-teal-400 rounded-md hover:font-bold hover:border-2 hover:border-teal-400">
                Contact Me
              </button>
            </div>
          </div>

          <div className="w-full p-3">
            <img
              src={proimg}
              alt="my profile"
              className="hover:shadow-blue-500 rounded-full border-2 border-t-teal-500  border-r-yellow-500 border-b-teal-500 border-l-0 mx-auto w-2/3 md:w-full "
            />
          </div>
        </div>
      </div>
      <div className="h-full bg-black text-white">
        <div>
          <Quotes/>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;

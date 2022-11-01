import React from 'react'
import proimg from "../assets/lalitgray.png";

const HomesVisit = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex flex-col  items-center justify-center  h-1/2 md:flex-row w-full mt-24">
        <div className=" flex flex-col flex-auto justify-center h-auto w-full p-5 animate__animated animate__fadeInLeft ">
          <h1 className="text-white text-4xl font-bold">
            <span className="text-teal-400 ">न</span>
            <span className="">मस्ते</span>
            <span className="">!,</span>
            <br />
          </h1>
          <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl font-bold">
            I'm <br className=" md:hidden" />
            <span className="sm- inline-flex h-20 pt-2 overflow-x-hidden animate-type text-yellow-500 group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform md:text-6xl">
              LalitKishor
            </span>
            <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
          </h1>
          <h1 className="text-white text-4xl md:text-7xl animate-pulse">
            Web Developer
          </h1>
          <h3 className="text-white mt-5 mb-5">
            Software Engineer/Electronics & Communication Engineer
          </h3>

          <div className="p-2">
            <button className="p-3 text-white border-2 hover:bg-teal-400 rounded-md hover:font-bold hover:border-2 hover:border-teal-400">
              Contact Me
            </button>
          </div>
        </div>

        <div className="p-5 md:p-24 w-full animate__animated animate__fadeInRight ">
          <img
            src={proimg}
            alt="my profile"
            className="rounded-3xl border-2 border-t-teal-500  border-r-yellow-500 border-b-teal-500 border-l-0 mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </>
  );
}

export default HomesVisit
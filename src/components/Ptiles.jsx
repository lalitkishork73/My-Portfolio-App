import React, { useState } from "react";
import gd from "../assets/Projects.png";
import vd from "../assets/video.mp4";
const yt = "https://www.youtube.com/watch?v=ahSJrP9iLGU";

const Ptiles = () => {
  const [color, setColor] = useState("Portfolio");
  const change = () => {
    if (color === "Portfolio") {
      setColor("momo");
    } else {
      setColor("Portfolio");
    }
  };

  return (
    <>
      <div>
        <div className="border-2 border-black h-82 w-72 flex flex-col items-center p-3 text-white bg-black rounded-lg flex-shrink hover:scale-110 m-2 duration-200">
          {/*  <img
          src={gd}
          alt="logo"
          className="border-2 border-black w-full h-1/2 rounded-md hover:scale-150"
        /> */}
          <video
            src={vd}
            className="border-2 border-black w-full h-3/4 rounded-md hover:scale-120 duration-300"
            autoPlay
            loop
            muted
            controls
          />
          <h1 className="font-bold mt-1">{color}</h1>
          <p className="mt-1 p-2 text-justify">
            This is backend app based on book mangement on library based system
            where you can publish your books for public.
          </p>
          <div className="p-2 w-auto mt-3 grid-cols-3 md:grid-cols-1">
            <button
              className="border-2 hover:bg-white hover:text-black  border-white rounded-lg p-1 mr-1 ml-1 w-16"
              onClick={change}
            >
              Codes
            </button>
            <button className="border-2 hover:bg-white hover:text-black border-white rounded-lg p-1  mr-1 ml-1 w-16">
              Site
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ptiles;

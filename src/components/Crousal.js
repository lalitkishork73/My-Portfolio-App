import React from "react";
import sample from "../assets/video.mp4";

const Crousal = () => {
  return (
    <>
      <div className="">
        <div className="relative ">
          <div className="absolute w-full h-screen bg-black/50 "></div>
          <video
            src={sample}
            className="videoTag object-fill w-full h-screen "
            autoPlay
            loop
            muted
          />
          <div className="w-full h-1/2 absolute flex justify-center items-center text-white top-0">
            <div className="flex flex-col p-5">
              <h1 className="font-bold text-4xl text-center mb-6">
                Welcome To Projects Session
              </h1>
              <div className="flex justify-center">
                <button className="p-3 text-white border-2 hover:bg-teal-400 rounded-md hover:font-bold hover:border-2 hover:border-teal-400">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
};

export default Crousal;

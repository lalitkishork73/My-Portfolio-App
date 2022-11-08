import React from "react";
import sample from "../assets/circuit.mp4";
const ProjctHead = () => {
  return (
    <>
      <div className="">
        <div className="relative ">
          <div className="absolute w-full h-80 bg-black/10  backdrop-blur-sm"></div>
          <video
            src={sample}
            className="videoTag object-cover bg-center w-full h-80"
            autoPlay
            loop
            muted
          />
          <div className="w-full h-full absolute flex justify-center items-center text-white top-0">
            <div className="flex flex-col p-5">
              <h1 className="font-bold text-4xl text-center mb-6">
                <span className="text-cyan-500 font-extrabold">W</span>elcome To Projects 
              </h1>
              <div className="flex justify-center">
               <p>Project hepls you to understand new concepts!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjctHead;

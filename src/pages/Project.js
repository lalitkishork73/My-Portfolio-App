import React from "react";
import ProjctHead from "../components/ProjctHead.js";
import vid from "../assets/circuit.mp4"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

const Project = () => {

  return (
    <>
      <ProjctHead />
      <div className="bg-slate-200 w-full flex flex-col flex-wrap justify-center items-center">
        <div className="bg-white grid  grid-cols-1 grid-row-2 md:grid-cols-3 md:grid-rows-3 gap-4 place-content-stretch mt-5 mb-5 border-2 rounded-xl p-5 h-auto max-w-screen-2xl">
          <div className="md:col-span-2 md:row-span-3 p-1">
            <video src={vid} className="rounded-xl w-auto h-auto" controls autoPlay loop clipboard-write encrypted-media gyroscope picture-in-picture allowFullScreen
              title="Embedded youtube" />
            <div className="grid grid-cols-1 md:grid-cols-4 ">
              <img src={'https://img.icons8.com/color/48/000000/git.png'} />
              <img src={'https://img.icons8.com/color/48/000000/git.png'} />
              <img src={'https://img.icons8.com/color/48/000000/git.png'} />
            </div>
          </div>
          <div className="row-span-3 border-1 rounded-xl bg-sky-100 border-slate-500 flex flex-col justify-center p-2 md:w-auto ">
            <div className="h-auto flex flex-col justify-around">
              <div className="p-1 h-auto flex flex-col ">
                <div className={`p-1 w-full`}>
                <h3 className="text-center">Description</h3>  
                  <p className="text-sm p-1 text-justify ">
                    Hi, I am LalitKishor Kanojiya, I lives in Surat. I am Electronics
                    and Communication & Software Engineer. I have been completed
                    Bechlor's in Electronics and communication Engneering from Shri
                    Sitarambhai Naranji Patel Institute of Technology and Research
                    Center Bardoli affiliated by Gujarat Technical University.
                  </p>
                </div>
              </div>
              <div className="p-1">
                <div className="flex justify-center p-2 w-auto">
                  <button className="p-2 bg-yellow-500 rounded-l-lg w-auto text-center">Demo</button>
                  <button className="p-2 bg-yellow-500 rounded-r-lg w-auto text-center">Code</button>
                </div>
                <div className="flex justify-around p-2 w-auto">
                  <button className="p-2 bg-yellow-500 rounded-l-md w-auto text-center"><GrFormPrevious /></button>
                  <button className="p-2 bg-yellow-500 rounded-r-md w-auto text-center"><GrFormNext /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

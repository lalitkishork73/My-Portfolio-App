import React from "react";
import edu from "../Data/EducData.js";
const Education = () => {

  return (
    <>
      <section className="bg-transparent">
        <div className="max-w-screen-lg mx-auto p-1 flex flex-col justify-center w-full h-full text-white">
          <div className="p-1">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Education
            </p>
            
            <div className="">
              <div className="text-white p-5">
                {edu.map(
                  ({
                    id,
                    src,
                    Intitute,
                    Degree,
                    Duration,
                    Department,
                    University,
                  }) => (
                    <div
                      key={id}
                      className={`shadow-md hover:scale-110 duration-200 rounded-lg hover:shadow-cyan-500 p-8 my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center  sm:px-0`}
                    >
                      
                      <div className="pl-2">
                        <p className="font-bold text-md text-cyan-300">
                          {Intitute}
                        </p>
                        <p className="text-sm font-bold">{Degree}</p>
                        <p className="text-sm font-bold">{University}</p>
                        <p className="text-sm font-bold">{Department}</p>
                        <p className="text-sm font-bold">{Duration}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <img
                          src={src}
                          alt=""
                          className="w-20 mx-auto rounded-lg ml-4 mr-2"
                          draggable="false"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;

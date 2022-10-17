import React from "react";
import lalit from "../assets/lalitcolor.png";

function AboutMe() {
  return (
    <>
      <section className=" bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full md:flex-row h-full">
          <div className="p-5 w-full">
            <img
              src={lalit}
              alt="logo"
              className="hover:shadow-blue-500 rounded-full border-2 border-t-teal-500  border-l-yellow-500 border-b-teal-500 border-r-0 mx-auto w-2/3 md:w-full shadow-lg hover:scale-105 duration-500 bg-gradient-to-t from-green-400 to-blue-500 mt-20"
            />
          </div>
          <div className="w-full">
            <p className="text-sm p-3 text-justify">
              Hi, I am LalitKishor Kanojiya, I lives in Surat. I am Electronics
              and Communication & Software Engineer. I have been completed
              Bechlor's in Electronics and communication Engneering from Shri
              Sitarambhai Naranji Patel Institute of Technology and Research
              Center Bardoli affiliated by Gujarat Technical University.
            </p>
            <br />
            <p className="text-sm p-3 text-justify">
              I also learned Full-Stack web-development from Functionup
              Bootcamp. I have completed few Projects here. Now i am
              FullStack-Developer and creating wonderfull Website from both end
              Front-End and Back-End.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

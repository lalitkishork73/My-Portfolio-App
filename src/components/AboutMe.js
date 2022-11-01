import React from "react";


function AboutMe() {
  return (
    <>
      <section className=" bg-transparent text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center w-full md:flex-row h-full">
          <div className="md:p-24 w-full">
            <img
              src={"https://images.pexels.com/photos/14261372/pexels-photo-14261372.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              alt="logo"
              className="hover:shadow-blue-200 rounded-3xl border-2 border-t-teal-500  border-l-yellow-500 border-b-teal-500 border-r-0 mx-auto w-2/3 md:w-full shadow-lg hover:scale-105 duration-500 bg-[linear-gradient(360deg,_#009B48_33.333%,_#FFF_33.333%_66.666%,_#FF7900_33.333%)] backdrop-blur-lg mt-20"
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

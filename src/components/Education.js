import React from "react";
import Archana from "../assets/ARchana.jpg";
const Education = () => {
  const edu = [
    {
      id: 1,
      Intitute: "FUNCTIONUP",
      Degree: "Full-Stack ",
      Duration: "May-Sep 2022",
      Department: "Web Development",
      src: "https://www.functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fsvgs%2Flogo.cf39bc1f26c09b255e7ac4d324a931d7.svg&w=64&q=75",
    },
    {
      id: 2,
      Intitute: "SNPIT&RC",
      Degree: "Bechlor's Engneering",
      Duration: "2014-2018",
      University: "Gujarat Tech. University",
      Department: "Electrionics and Communication",
      src: "https://storage.googleapis.com/ezap-prod/colleges/6300/sitarambhai-naranji-patel-institute-of-technology-and-research-centre-surat-logo.jpg",
    },
    {
      id: 3,
      Intitute: "SAMRAT INTERNATIONAL",
      Degree: "HSC",
      Duration: "2012-2014",
      Department: "Science",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJkKZIWbCquNmIJYyfP6-eD4H-laZZyx7eY2pMJlp1HpgC_ELnxnp27l0vtwWSKeC1Yo&usqp=CAU ",
    },
    {
      id: 4,
      Intitute: "ARCHANA SCHOOL",
      Degree: "SSC",
      Duration: "2003-2012",
      Department: "High School",
      src: Archana,
    },
  ];
  return (
    <>
      <section className="bg-gray-800">
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
                      className={`shadow-md hover:scale-110 duration-200 rounded-lg hover:shadow-cyan-500 p-8 my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-left   sm:px-0`}
                    >
                      <link rel="stylesheet" href="www.google.com" />
                      <div className="pl-2">
                        <p className="font-bold text-md text-cyan-300">
                          {Intitute}
                        </p>
                        <p className="text-sm font-bold">{Degree}</p>
                        <p className="text-sm font-bold">{University}</p>
                        <p className="text-sm font-bold">{Department}</p>
                        <p className="text-sm font-bold">{Duration}</p>
                      </div>
                      <div>
                        <img
                          src={src}
                          alt=""
                          className="w-20 mx-auto rounded-lg ml-4  items-center"
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

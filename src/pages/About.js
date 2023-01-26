import React from "react";
import Education from "../components/Education.jsx";
import Skils from "../components/Skils.jsx";
import ParticleBG from "../components/ParticleBG.jsx";
import AboutMe from "../components/AboutMe.jsx";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <AboutMe />
        <Education />
        <Skils />
      </div>
    </>
  );
};

export default About;

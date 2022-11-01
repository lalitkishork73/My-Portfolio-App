import React from "react";
import Education from "../components/Education.js";
import Skils from "../components/Skils.js";
import ParticleBG from "../components/ParticleBG.js";
import AboutMe from "../components/AboutMe.js";

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

import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particles-config.js";

const ParticleBG = () => {
  return (
    <>
      <Particles params={particlesConfig}></Particles>
    </>
  );
};

export default ParticleBG;

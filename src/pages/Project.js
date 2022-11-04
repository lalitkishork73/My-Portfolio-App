import React, { useState } from "react";
import ProjctHead from "../components/ProjctHead.js";
import ProjectMain from "../components/ProjectMain.js";
const Project = () => {
  
  return (
    <>
      <ProjctHead />
      <div className="bg-slate-200 w-full flex flex-col flex-wrap justify-center items-center">

     <ProjectMain/>
      </div>
    </>
  );
};

export default Project;

import React from "react";
import ProjctHead from "../components/ProjctHead.js";
import ProjectMain from "../components/ProjectMain.js";
import styled, { keyframes } from 'styled-components';

const Project = () => {

  const breatheAnimation = keyframes`
  0% {background-position: 0%}
  100% {background-position: 100%}
`
  const Circle = styled.div`
  width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706);
    background-size: 600% 100%;
    animation: gradient 16s linear infinite;
    animation-direction: alternate;
    animation-name: ${breatheAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;`
  return (
    <>
      <ProjctHead />
      <div className="relative overflow-clip w-full flex flex-col justify-center items-center">
        <Circle/>
        <ProjectMain />
      </div>

    </>
  );
};

export default Project;

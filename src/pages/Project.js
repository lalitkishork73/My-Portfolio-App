import React from "react";
import Crousal from "../components/Crousal.js";
import Ptiles from "../components/Ptiles.jsx";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../actions/action.js";
import ParticleBG from "../components/ParticleBG.js";

const Project = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <ParticleBG/>
      <Crousal />
      <div className="flex justify-center items-center">
        <div className="border-black border-2 flex">
          <a
            className="bg-cyan-300 text-white font-bold"
            title="Increment"
            onClick={() => dispatch(decNumber())}
          >
            <span className="ml-5 mr-5">-</span>
          </a>
          <input type="text" className="text-center" value={myState} />
          <a
            className="bg-cyan-300 text-white font-bold"
            title="Decrement"
            onClick={() => dispatch(incNumber())}
          >
            <span className="ml-5 mr-5">+</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-full bg-yellow-300 h-72 w-72">
        <div className="flex justify-center items-center rounded-full bg-red-500 h-64 w-64">
          <div className="flex justify-center items-center rounded-full bg-purple-500 h-52 w-52">
            <div className="flex justify-center items-center rounded-full bg-green-500 h-32 w-32"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

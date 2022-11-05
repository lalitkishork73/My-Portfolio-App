import React, { useState,useEffect } from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import ReactPlayer from "react-player"
import ProjectData from "../Data/ProjectData";
import styled from "styled-components";





function ProjectMain() {
    let [num, setNum] = useState(0);
    let [effect,setEffect]= useState()
    let limit = ProjectData.length;
    const Previous = () => {
        setNum(num - 1)
        if (num < 0) {
            setNum(limit)
        }
    }
    const Next = () => {
        setNum(num + 1)
        if (num > limit) {
            setNum(0)
        }
    }
    const Circle = styled.div`
    position:absolute;
    width:300px;
    height:300px;
    top:-4.2em;
    right:-10em;
    z-index:0;
    background-color:#fbbe01;
    border-radius:50%;
    
    `;
    return (
        <>
            <div className="bg-black/70 backdrop-blur-md grid  grid-cols-1 grid-row-2 md:grid-cols-3 md:grid-rows-2 gap-4 place-content-stretch mt-5 mb-5 border-2 rounded-xl p-5 h-auto max-w-screen-xl">
                <div className="relative box md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 pb-[56.22%]">
                    {/*   <video src={vid} className="rounded-xl w-auto h-auto" controls autoPlay loop clipboard-write encrypted-media gyroscope picture-in-picture allowFullScreen
              title="Embedded youtube" /> */}
                    {/*  <ReactPlayer
              url="https://youtu.be/LIIDh-qI9oI?list=RDLIIDh-qI9oI"
              className="rounded-xl w-auto h-auto"
              width={"auto"}
              height={"auto"}
              playing={"true"}
              
            /> */}
                    <iframe
                        width="100%"
                        height="100%"
                        src={ProjectData[num].videoLink}
                        title="The Weeknd & Ariana Grande - Save Your Tears (Remix) (Official Video)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="absolute inset-0 top-0 left-0 w-[100%] h-[100%] rounded-xl"
                    ></iframe>
                </div>

                <div className="relative box md:row-start-1 md:row-end-3 border-[4px]  border-white rounded-xl bg-[#e4dfdc] text-white flex flex-col h-full p-2 md:w-auto overflow-hidden top-0 left-0 ">
                    <Circle />
                    <div className="z-10 h-full flex flex-col justify-between p-1  ">
                        <div className=" p-1 h-auto flex flex-col  ">
                            <div className={`p-1 w-full`}>
                                <h3 className="text-center font-extrabold text-black">{ProjectData[num].projectName}</h3>
                                <p className="text-sm p-1 text-justify ">
                                    {ProjectData[num].description}
                                </p>
                            </div>
                        </div>
                        <div className="p-1">
                            <div className="flex justify-center p-2 w-auto">
                                <button className="p-2 bg-yellow-500 rounded-l-lg w-auto text-center">Visit</button>
                                <button className="p-2 bg-yellow-500 rounded-r-lg w-auto text-center">Code</button>
                            </div>
                            <div className="flex justify-around p-2 w-auto">
                                <button className="p-2 bg-yellow-500 rounded-l-md w-auto text-center" onClick={Previous}><GrFormPrevious /></button>
                                <button className="p-2 bg-yellow-500 rounded-r-md w-auto text-center" onClick={Next}><GrFormNext /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default ProjectMain
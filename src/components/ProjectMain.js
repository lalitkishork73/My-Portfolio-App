import React from 'react'
import ProjectData from "../Data/ProjectData";

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import styled from 'styled-components';




function ProjectMain() {

    const Circle = styled.div`
    position:absolute;
    width:300px;
    height:300px;
    top:-4.2em;
    right:-10em;
    z-index:0;
    background-color:#fbbe01;
    border-radius:50%;
    transition: background-color 0.5s ease;
    box-shadow: 10px -10px 15px 10px green;
    `;
    
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard, Autoplay]}


                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={"auto"}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="w-[100%] max-w-screen-xl"
            >
                {
                    ProjectData.map((items) => (
                        < SwiperSlide key={items.id}>
                            <div
                                className="bg-black/70 backdrop-blur-sm grid  grid-cols-1 grid-row-2 md:grid-cols-3 md:grid-rows-2 gap-4 place-content-center mt-5 mb-5 border-2 rounded-xl p-5 h-auto ">
                                <div className="relative box md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 pb-[56.22%]">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={items.videoLink}
                                        title={items.projectName}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        className="absolute inset-0 top-0 left-0 w-[100%] h-[100%] rounded-xl"
                                    ></iframe>
                                </div>

                                <div className="relative box md:row-start-1 md:row-end-3 border-[4px]  border-white/10 rounded-xl bg-[#313030]/10 text-white flex flex-col h-full p-2 md:w-auto overflow-hidden top-0 left-0 ">
                                    <Circle />
                    
                                    <div className="z-10 h-full flex flex-col justify-between p-1  ">
                                        <div className=" p-1 h-auto flex flex-col  ">
                                            <div className={`p-1 w-full`}>
                                                <h3 className="text-center font-extrabold">{items.projectName}</h3>
                                                <p className="text-sm font-semibold p-1 text-justify  ">
                                                    {items.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="flex justify-center p-2 w-auto">
                                                <a href={items.visitSite} ><button className="p-2 border-l-2 rounded-l-lg w-auto text-center hover:bg-gradient-to-r from-black via-gray-900 to-gray-700 hover:font-semibold">Visit</button></a>
                                                <a href={items.viewCode} ><button className="p-2 border-r-2 rounded-r-lg w-auto text-center hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black border-l-2 hover:font-semibold">Code</button></a>   
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </>
    )
}

export default ProjectMain
import React,{useEffect} from 'react'
import SocData from "../Data/SocialData.js";
import AOS from "aos";
import 'aos/dist/aos.css';


function SocialTab() {
    useEffect(()=>{
      {
        AOS.init({duration : 1000})
      }
    })
  return (
    <>
     <div data-aos="fade-up" className="h-auto p-5 w-full flex justify-center items-center mt-16 mb-12">
          <div className="flex w-auto rounded-lg pl-5 pr-5">
          {
          SocData.map((item) => (
            <a href={item.url} key={item.id}>
                <img src={item.img} draggable="false" className={`w-20 mx-auto hover:scale-110 rounded-full shadow-sm ${item.style} `} />
            </a>
            ))
        }
           
          </div>
        </div>
    </>
  )
}

export default SocialTab
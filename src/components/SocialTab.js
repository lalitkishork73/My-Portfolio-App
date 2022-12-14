import React from 'react'
import SocData from "../Data/SocialData.js";



function SocialTab() {
    
  return (
    <>
     <div className="h-auto p-5 w-full flex justify-center items-center mt-1">
          <div className="flex w-auto rounded-lg pl-5 pr-5">
          {
          SocData.map((item) => (
            <a href={item.url} key={item.id}>
                <img src={item.img} size={30} draggable="false" className={`w-20 mx-auto hover:scale-110 rounded-full shadow-sm ${item.style} `} />
            </a>
            ))
        }
           
          </div>
        </div>
    </>
  )
}

export default SocialTab
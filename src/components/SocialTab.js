import React from 'react'
import SocData from "../Data/SocialData.js";

function SocialTab() {
  return (
    <>
     <div className="h-24 w-full flex justify-center items-center">
          <div className="bg-black/70 flex w-auto rounded-lg pl-5 pr-5">
          {
          SocData.map((item) => (
            <a href={item.url} key={item.id}>
                <img src={item.img} className={`w-20 mx-auto hover:scale-110 rounded-full shadow-sm ${item.style} `} />
            </a>
            ))
        }
           
          </div>
        </div>
    </>
  )
}

export default SocialTab
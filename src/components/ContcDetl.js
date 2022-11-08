import React from 'react'
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import SocialTab from './SocialTab';

function ContcDetl() {
  return (
    <>
      <div className="w-full flex flex-col text-white justify-center sm:p-5 animate__animated animate__fadeInRight  ">
        <div className="bg-gradient-to-b from-black/70 to-gray-900/70 backdrop-blur-sm rounded-lg md:p-5 break-all shadow-sm hover:scale-100 duration-200 hover:shadow-yellow-500 h-1/2">
          <div>
            <h1 className="font-bold text-center p-3">Get In Touch </h1>
          </div>
          <div className="flex">
            <div className="p-2">
              <MdPersonOutline />
            </div>
            <div className="p-1">
              <h1 className="font-bold">Name</h1>
              <h1>LalitKishor Kanojiya</h1>
            </div>
          </div>
          <div className="flex">
            <div className="p-2">
              <GoLocation />
            </div>
            <div className="p-1">
              <h1 className="font-bold">Address</h1>
              <h1>Surat,Gujarat</h1>
            </div>
          </div>
          <div className="flex">
            <div className="p-2">
              <FiMail />
            </div>
            <div className="p-1">
              <h1 className="font-bold">Email</h1>
              <h1>lalitkishork73@gmail.com</h1>
            </div>
          </div>
        <SocialTab/>  
        </div>
      </div>
    </>
  );
}

export default ContcDetl
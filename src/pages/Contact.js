import React  from "react";
import SimpleMap from "../components/map.js";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import ParticleBG from "../components/ParticleBG.js";


const Contact = () => {

  return (
    <>
    <ParticleBG/>
      <section className="h-full w-full flex flex-col ">
        <div className=" flex flex-col md:flex-row  p-5 ">
          <h1 >Particles</h1>

          <div className="w-full sm:p-5 flex md:flex-col ">
            <form
              action="https://formspree.io/f/mgeqzzzv"
              method="POST"
              className="flex flex-col w-full bg-gradient-to-b from-black/70 to-gray-800/70 p-8 text-white rounded-lg mt-32 mb-32 backdrop-blur-sm shadow-md hover:scale-101 duration-200 hover:shadow-blue-300"
            >
              <input
                type="text"
                name="username"
                placeholder="Name"
                autoComplete="off"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="Email"
                placeholder="email123@gmail.com"
                autoComplete="off"
                required
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                autoComplete="off"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-teal-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Submit
              </button>
            </form>
          </div>
          <div className="w-full flex flex-col text-white justify-center sm:p-5 ">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg md:p-5 break-all shadow-md hover:scale-100 duration-200 hover:shadow-yellow-500">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

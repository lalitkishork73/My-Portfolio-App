import React from 'react'
import techs from '../Data/SkilsData.js';

const Skils = () => {

  return (
    <>
      <section>
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full h-auto"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                  Skils
              </p>
              <p className="py-6">
                These are the technologies I've worked with
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-4 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style,url }) => (
                <div
                  key={id}
              
                >
                <a href={url} >

                  <img src={src} alt="" className={`w-20 mx-auto shadow-md hover:scale-105 duration-500 py-2 rounded-lg `} />
                  <p className="mt-4">{title}</p>
                </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skils
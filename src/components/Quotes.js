import React, { useState, useEffect } from "react";


const Quotes = () => {
  let API = "http://api.quotable.io/random";
  const [api, setApi] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setApi(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <div className="w-auto flex justify-center">
        <div data-aos="fade-right" className="flex flex-col max-w-screen-xl w-auto text-white text-center mt-24 animate__slideInUp"  >
          <h1 className="text-2xl font-bold text-yellow-500">Quotes</h1>
          <div className="flex justify-center">
            <div className="flex flex-col justi items-center p-3 bg-black/20 rounded-lg flex-shrink hover:scale-110 m-2 duration-200 text-center">
              <h1 className="font-bold text-md p-3">" {api.content} "</h1>
              <p className="font-bold text-sm p-3">~{api.author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
   
import React, { useState, useEffect } from "react";

const Quotes = () => {
  let API = "https://type.fit/api/quotes";
  const [api, setApi] = useState([]);

  const getRandomObject = () => {
    const randomObject = api[Math.floor(Math.random() * api.length)];
  
  };

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
      <div className="text-white">


        {api.map((items, id) => (
          <div
            key={items.id}
            className="border-cyan-500 border-2 h-auto h-82 w-72 flex flex-col items-center p-3 text-white bg-black rounded-lg flex-shrink hover:scale-110 m-2 duration-200"
          >
            <h1 className="text-white">{items.text}</h1>
            <p className="text-white">{items.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Quotes;

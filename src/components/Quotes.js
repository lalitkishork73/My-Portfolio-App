import React, { useEffect } from "react";

const Quotes = () => {
  let API = "https://hn.algolia.com/api/v1/search?query=html";
  let Data
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      Data = data.hits[0].title.toString();
      console.log(Data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API);
  });
  return (
    <>
      <h1 className="text-white">hi{Data}</h1>
    </>
  );
};

export default Quotes;

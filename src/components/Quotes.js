import React, { useState, useEffect } from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

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
      <div
        data-aos="slide-up"
        className="w-auto flex justify-center">
        <div className="flex flex-col max-w-screen-xl w-auto text-white text-center mt- "  >
          <div className="flex justify-center">
            <div className="flex flex-col justi items-center p-3 bg-black/20 rounded-lg m-2 text-center">
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

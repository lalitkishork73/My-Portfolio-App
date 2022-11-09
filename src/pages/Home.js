import React from "react";
import ParticleBG from "../components/ParticleBG.js";
import Quotes from "../components/Quotes.js";
import HomesVisit from "../components/HomesVisit.js";
import SocialFlot from "../components/SocialFlot.js";


const Home = () => {
  return (
    <>

      <div className="relative w-full bg-fixed ">
        <ParticleBG />
        <HomesVisit />
        <Quotes />
        <SocialFlot />
      </div>
    </>
  );
};

export default Home;

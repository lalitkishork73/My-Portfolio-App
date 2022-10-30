import React from "react";
import ParticleBG from "../components/ParticleBG.js";
import Quotes from "../components/Quotes.js";
import HomesVisit from "../components/HomesVisit.js";
import SocialTab from "../components/SocialTab.js";


const Home = () => {
  return (
    <>
      <div className="w-full bg-fixed ">
        <ParticleBG />   
        <HomesVisit />
        <Quotes />
        <SocialTab />
       
        
      </div>
    </>
  );
};

export default Home;

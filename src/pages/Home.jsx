import React from "react";
import ParticleBG from "../components/ParticleBG.jsx";
import Quotes from "../components/Quotes.jsx";
import HomesVisit from "../components/HomesVisit.jsx";
import SocialFlot from "../components/SocialFlot.jsx";


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

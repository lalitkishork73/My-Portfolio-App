import React from "react";
import ParticleBG from "../components/ParticleBG.js";
import Form from "../components/Form.js";
import ContcDetl from "../components/ContcDetl.js";

const Contact = () => {
  return (
    <>
      <ParticleBG />
      <section className="h-full w-full flex flex-col ">
        <div className=" flex flex-col md:flex-row  p-5 ">
         <Form/>
         <ContcDetl/>
        </div>
      </section>
    </>
  );
};

export default Contact;

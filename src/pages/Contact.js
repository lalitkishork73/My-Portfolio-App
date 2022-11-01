import React from "react";
import ParticleBG from "../components/ParticleBG.js";
import Form from "../components/Form.js";
import ContcDetl from "../components/ContcDetl.js";

const Contact = () => {
  return (
    <>
      <section className="h-full w-full flex flex-col bg-[url('https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg')] bg-cover">
        <h1 className="text-white text-2xl text-center font-bold">Contact Me</h1>
        <div className=" flex flex-col md:flex-row  p-5">
          <Form />
          <ContcDetl />
        </div>
      </section>
    </>
  );
};

export default Contact;

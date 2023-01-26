import React from 'react'

const Form = () => {
  return (
    <>
      <div className="w-full sm:p-5 flex md:flex-col animate__animated animate__fadeInLeft" 
      
      >
        <form
          action="https://formspree.io/f/mgeqzzzv"
          method="POST"
          className="flex flex-col w-full bg-gradient-to-b from-black/70 to-gray-900/70 p-8 text-white rounded-lg mt-32 mb-32 backdrop-blur-sm shadow-sm hover:scale-101 duration-200 hover:shadow-blue-300"
        >
          <input
            type="text"
            name="username"
            placeholder="Name"
            autoComplete="off"
            required
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="email"
            name="Email"
            placeholder="email123@gmail.com"
            autoComplete="off"
            required
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            autoComplete="off"
            required
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>
          <button className="text-white bg-gradient-to-b from-cyan-500 to-teal-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form
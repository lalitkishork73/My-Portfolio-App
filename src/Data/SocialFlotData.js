import React from "react";
import {BsLinkedin,BsGithub,BsInstagram,BsFacebook,BsYoutube,BsTwitter} from "react-icons/bs"

const links = [
    {
      id: 1,
      child: (
        <>
          <BsLinkedin size={30}/> LinkedIn 
        </>
      ),
      href: "https://www.linkedin.com/in/lalitkishor-kanojiya-2a5592b9/",
      style: "rounded-tl-md bg-sky-900/70",
    },
    {
      id: 2,
      child: (
        <>
          <BsGithub size={30}/> GitHub 
        </>
      ),
      href: "https://github.com/lalitkishork73",
      style: "bg-gray-500/30",
    },
    {
      id: 3,
      child: (
        <>
          <BsInstagram size={30}/> Instagram
        </>
      ),
      href: "https://www.instagram.com/lalit.kishor33/",
      style: "bg-pink-500/70",
    },
      {
        id: 4,
        child: (
          <>
            <BsFacebook size={30}/> Facebook 
          </>
        ),
        href: "https://www.facebook.com/lalit.kishor.373",
        style: "bg-blue-500/70",
      },
      {
        id: 5,
        child: (
          <>
            <BsTwitter size={30}/> Twiiter 
          </>
        ),
        href: "https://twitter.com/lalitkishork",
        style: "bg-sky-500/70",
      },
    {
      id: 6,
      child: (
        <>
          <BsYoutube size={30}/> Youtube 
        </>
      ),
      href: "https://www.youtube.com/channel/UCXhAMO4lu0xJml_8WaG8zDA",
      style: "bg-rose-600/70 rounded-bl-md",
    },
    /* {
      id: 7,
      child: (
        <>
          Resume 
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    }, */
  ];

  export default links;
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Project from "./pages/Project.js";
import Footer from "./components/Footer.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 900
    })

    AOS.refreshHard()

  }, []);

  return (
    <>

      <BrowserRouter>
        <Navbar className="z-10" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

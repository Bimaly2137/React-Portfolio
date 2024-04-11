import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT."
        text="Hi, I'm Bimal Kumar Shrestha, a front-end developer passionate
         about crafting captivating digital experiences. 
         With expertise in HTML, CSS, and JavaScript frameworks like React,
          I blend creativity with technology to build seamless 
         user interfaces. Let's collaborate and create something remarkable together!"
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;

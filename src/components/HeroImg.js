import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/hero image.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro" />
      </div>
      <div className="content">
        <p>Hi I'M a FREELANCER.</p>
        <h1>Front-End Developer</h1>
        <br />
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

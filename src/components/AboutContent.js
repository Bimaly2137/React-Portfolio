import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am dedicated to crafting immersive digital experiences that
          captivate and inspire. With a blend of creativity and technical
          expertise, I strive to push the boundaries of front-end development,
          creating seamless interfaces that elevate user interactions. My
          mission is to transform ideas into reality, delivering innovative
          solutions that leave a lasting impact.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

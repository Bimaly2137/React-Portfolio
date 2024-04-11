import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>280 Wellesly Street East</p>
              <p>Toronto, Canada</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              647-451-4960
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              bimal35640@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            👋 Hello there! I'm Bimal Kumar Shrestha, a seasoned frontend
            developer with a passion for crafting immersive digital experiences.
            With a blend of creativity, technical proficiency, and an unwavering
            dedication to excellence, I bring ideas to life through the power of
            code.
          </p>
          <div className="social"></div>
          <FaFacebook
            size={20}
            style={{ color: "white", marginRight: "2rem" }}
          />
          <FaTwitter
            size={20}
            style={{ color: "white", marginRight: "2rem" }}
          />
          <FaLinkedinIn
            size={20}
            style={{ color: "white", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

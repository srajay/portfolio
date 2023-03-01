import React from "react";
import "./herosection.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/logo.png";

const Herosection = () => {
  return (
    <div className="hero-section">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="first-line">
        <h2>
          Hi<span>👋</span>
        </h2>
        <h1>
          I'm <span>Ajay Chaudhary</span>
        </h1>
        <p>UI Designer | React Developer</p>
      </div>

      <div className="third-line">
        <a href="https://github.com/srajay">
          <div className="icons">
            <GitHubIcon />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ajay-chaudhary-b64214242/">
          <div className="icons">
            <LinkedInIcon />
          </div>
        </a>
        <a href="https://www.instagram.com/__ajaychaudhary/">
          <div className="icons">
            <InstagramIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Herosection;

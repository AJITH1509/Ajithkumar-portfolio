import React, { useEffect, useContext } from "react";
import "./Home.css";
import { Button } from "@mui/material";
import astronaut from "../images/homeimage.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./NavBar";

// Your updated resume link
const RESUME_LINK = "https://drive.google.com/file/d/1zCMsGIy2-0rsRozujPVkGMTbuE01xDpU/view";

function redirectToLink() {
  window.open(RESUME_LINK, "_blank");
}

export const Home = () => {
  const { styles } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ backgroundColor: styles }} className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="hi" data-aos="fade-down" data-aos-delay="600">
            Hi 👋, I am
          </span>
          <span className="myname" data-aos="fade-right" data-aos-delay="450">
            AJITHKUMAR
          </span>
          <span className="role" data-aos="fade-up" data-aos-delay="800">
            Software Developer
          </span>
          
          <div data-aos="zoom-in" data-aos-delay="1000" className="btn-wrapper">
            <Button onClick={redirectToLink} id="i-btn" variant="outlined">
              Resume
            </Button>
          </div>

          <div className="i-icons" data-aos="fade-up" data-aos-delay="1200">
            <div onClick={() => window.open("https://github.com/AJITH1509", "_blank")}>
              <img src={github} alt="GitHub" />
              <p>AJITH1509</p>
            </div>
            
            <div onClick={() => window.open("https://www.linkedin.com/in/ajithkumar-m-2603b5175/", "_blank")}>
              <img src={linkedin} alt="LinkedIn" />
              <p>Ajithkumar M</p>
            </div>

            <div onClick={() => window.open("mailto:your.email@example.com")}>
              <img src={gmail} alt="Gmail" />
              <p>Contact Me</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="i-right" data-aos="zoom-in" data-aos-duration="1500">
        <img className="floating-image" src={astronaut} alt="astronaut coding in space" />
      </div>
    </div>
  );
};

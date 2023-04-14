import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import astronaut from "../images/homeimage.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function redirectToLink() {
  window.location.href =
    "https://drive.google.com/file/d/1gvJRZZ5cdF38X8ZxIciwdnFXmqiuOa9t/view";
}

export const Home = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, I am 👋</span>
          <span>AJITHKUMAR</span>
          <span>Full stack developer</span>
          <Button onClick={redirectToLink} id="i-btn" variant="outlined">
            Resume
          </Button>
          <div className="i-icons">
            <a href="https://github.com/AJITH1509">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/ajithkumar-m-2603b5175/">
              <img src={linkedin} />
            </a>
            {/* <img src={github}/> */}
          </div>
        </div>
      </div>
      <div className="i-right">
        <img className="floating-image" src={astronaut} alt="astronaut" />
      </div>
    </div>
  );
};

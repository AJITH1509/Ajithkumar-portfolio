import React from "react";
import { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const Skills = () => {
  const skillsData = [
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      text: "JavaScript",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      text: "React",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      alt: "Redux",
      text: "Redux",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
      text: "MongoDB",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
      text: "Git",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      alt: "VS Code",
      text: "VS Code",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
      text: "HTML5",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
      text: "CSS3",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      alt: "Material UI",
      text: "Material UI",
    },
    // Add more skills here
  ];

  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="skills-container">
      <div>
        <h2
          data-aos="fade-down"
          data-aos-duration="500"
          className="skill-heading"
          // data-aos-delay="500"
        >
          Skills & Tools
        </h2>
      </div>
      <div className="skill-cards-container">
        <div id="skill-cards" data-aos="flip-left" data-aos-delay="600">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>JavaScript</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={80} />
          </div>
        </div>

        <div data-aos="flip-left" data-aos-delay="700" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <p>React</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={90} />
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="800" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          <p>Redux</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={70} />
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="900" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
          <p>MongoDB</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={80} />
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="1000" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <p>Git Hub</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={60} />
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="1100" id="skill-cards">
          <img
            className="skills-image"
            src="	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <p>VS Code</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={90} />
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="1200" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <p>Html5</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={90} />
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="1300" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <p>CSS3</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={80} />
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="1400" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          />
          <p>MaterialUI</p>
          <div style={{ width: 100 }}>
            <LinearProgress color="success" variant="determinate" value={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

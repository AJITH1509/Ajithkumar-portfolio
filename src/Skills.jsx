import React from "react";
import { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="skills-container">
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
        </div>

        <div data-aos="flip-left" data-aos-delay="700" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <p>React</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="800" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          <p>Redux</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="900" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
          <p>MongoDB</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="1000" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <p>Git</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="1100" id="skill-cards">
          <img
            className="skills-image"
            src="	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <p>VS Code</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="1200" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <p>Html5</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="1300" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <p>CSS3</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="1400" id="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          />
          <p>MaterialUI</p>
        </div>
      </div>
    </div>
  );
};

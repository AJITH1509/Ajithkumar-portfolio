import React from "react";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div>
        <h2 className="skill-heading">Skills & Tools</h2>
      </div>
      <div className="skill-cards-container">
        <div className="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>JavaScript</p>
        </div>

        <div className="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <p>React</p>
        </div>
        <div className="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          <p>Redux</p>
        </div>
        <div className="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
          <p>MongoDB</p>
        </div>
        <div className="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <p>Git</p>
        </div>
        <div className="skill-cards">
          <img
            className="skills-image"
            src="	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <p>VS Code</p>
        </div>
        <div className="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <p>Html5</p>
        </div>
        <div className="skill-cards">
          <img
            className="skills-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <p>CSS3</p>
        </div>
        <div className="skill-cards">
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

import * as React from "react";
import { useEffect, useContext } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./NavBar";

export const About = () => {
  const { styles } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ backgroundColor: styles }} className="about-container">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        About Me
      </h1>
      
      <div className="about-bio-content" data-aos="fade-up" data-aos-duration="1500">
        <p className="bio-lead">
          I am a driven, solutions-oriented <strong>Software Developer</strong> dedicated to engineering high-performance, scalable, and meticulously designed web applications. 
        </p>

        <p>
          My technical expertise spans across robust full-stack architectures. I pair a foundational mastery of 
          <span className="highlight-text"> HTML, CSS, and JavaScript</span> with deep ecosystem proficiency in 
          <span className="courses"> React, Node.js, Express, and MongoDB</span>, alongside enterprise-ready frontend engineering using 
          <span className="courses"> Angular, TypeScript, and RxJS</span>. Whether designing optimized database structures or building highly reactive, event-driven user interfaces, I ensure clean code separation and seamless performance at every layer.
        </p>

        <p>
          My experience includes managing intricate feature workflows and implementing advanced application logic. I have successfully architected modular <strong>questionnaire and survey management platforms</strong>, built fluid and interactive user workspaces using customized <strong>drag-and-drop functionalities</strong> for complex UI components (such as dynamic tiles and hierarchical folder structures), and optimized multi-tab server communication paths using <strong>global request header protocols</strong> like custom tab identifiers.
        </p>

        <p>
          Bringing an engineering-first mindset to software systems, I specialize in translating complex business requirements into maintainable, robust frontend logic. I am a natural collaborator, a passionate problem-solver, and am deeply committed to pushing code boundaries while maintaining a high baseline for accessibility and performance.
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa'; // Importing icons
import '../app/styles/skills.css'; // Path to the custom CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        {/* Title and Description */}
        <div className="skills-header">
          <h2 className="skills-title">Technologies I Work With</h2>
          <p className="skills-description">
  I&apos;m a passionate web developer skilled in modern technologies like HTML, CSS,
  JavaScript, and TypeScript. I enjoy building responsive, interactive websites
  and am constantly learning new tools to improve my craft.
</p>
        </div>

        {/* Skills Icons */}
        <div className="skills-grid">
          <div className="skill-item">
            <FaHtml5 className="skill-icon html-icon" />
            <p className="skill-name">HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon css-icon" />
            <p className="skill-name">CSS</p>
          </div>
          <div className="skill-item">
            <FaJs className="skill-icon js-icon" />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon react-icon" />
            <p className="skill-name">React.js</p>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon node-icon" />
            <p className="skill-name">Node.js</p>
          </div>
          <div className="skill-item">
            <FaGithub className="skill-icon github-icon" />
            <p className="skill-name">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

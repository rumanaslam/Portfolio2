// Projects.tsx
import React from 'react';
import ProjectsDiagonal from './ProjectsDiagonal'; // Nayi file import kar rahe hain

const Projects = () => {
  return (
    <div id="projects" className="container pt-32" data-aos="zoom-out-down">
      <ProjectsDiagonal />  {/* ProjectsDiagonal component ko yahan render karenge */}
    </div>
  );
};

export default Projects;

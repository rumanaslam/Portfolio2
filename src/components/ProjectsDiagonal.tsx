import React from 'react';
import '../app/styles/projects.css'; // Path to the custom CSS file

const ProjectsDiagonal = () => {
  const projects = [
    {
      title: 'Simple Calculator',
      description:
        'A user-friendly calculator built with TypeScript and JavaScript. It handles basic arithmetic operations with a clean interface.',
      technologies: ['TypeScript', 'JavaScript', 'Node.js'],
      icon: '🧮',
    },
    {
      title: 'To-Do List',
      description:
        'A dynamic to-do list app designed with simplicity, allowing users to manage tasks efficiently using TypeScript and CSS.',
      technologies: ['HTML', 'CSS', 'TypeScript'],
      icon: '✅',
    },
    {
      title: 'Resume Builder',
      description:
        'An online resume builder offering real-time customization and downloadable templates for professionals.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      icon: '📄',
    },
    {
      title: 'Multi-Page Website',
      description:
        'A responsive multi-page website developed using Next.js and styled with Tailwind CSS, showcasing modern design and navigation.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      icon: '🌐',
    },
    {
      title: 'Dynamic Resume Builder',
      description:
        'A dynamic resume builder with form validation, live preview, and downloadable templates, crafted with Next.js and TypeScript.',
      technologies: ['Next.js', 'TypeScript', 'CSS'],
      icon: '🖋️',
    },
  ];

  return (
    <div className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <span className="icon">{project.icon}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDiagonal;

import React from 'react';

function Projects() {
  const featuredProjects = [
    {
      name: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce website with product listings, cart functionality, and secure payment integration.',
      github: 'https://github.com/your-repo/e-commerce',
    },
    {
      name: 'Social Media App',
      description: 'A social networking app with real-time messaging and post feeds, built with Node.js and React.',
      github: 'https://github.com/your-repo/social-media-app',
    },
    {
      name: 'AI Chatbot',
      description: 'A conversational AI chatbot designed for customer support, integrated with natural language processing (NLP).',
      github: 'https://github.com/your-repo/ai-chatbot',
    },
  ];

  const otherProjects = [
    {
      name: 'Weather App',
      description: 'A weather forecasting app built with React and OpenWeather API.',
      github: 'https://github.com/your-repo/weather-app',
    },
    {
      name: 'Todo List',
      description: 'A simple and elegant to-do list application using Vanilla JS.',
      github: 'https://github.com/your-repo/todo-list',
    },
    {
      name: 'Personal Blog',
      description: 'A personal blog platform built with Django and Bootstrap.',
      github: 'https://github.com/your-repo/personal-blog',
    },
    {
      name: 'Chat App',
      description: 'A real-time chat application using WebSockets and Node.js.',
      github: 'https://github.com/your-repo/chat-app',
    },
  ];

  return (
    <div className="projects-page">
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Divider between Featured and Other Projects */}
   

      <section className="other-projects">
        <h2>Other Projects</h2>
        <div className="project-grid">
          {otherProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

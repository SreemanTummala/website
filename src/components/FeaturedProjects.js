import React from 'react';

function FeaturedProjects() {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce website with product listings, cart functionality, and secure payment integration.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-repo-link'
    },
    {
      name: 'Social Media App',
      description: 'A social networking app with real-time messaging and post feeds, built with Node.js and React.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-repo-link'
    },
    {
      name: 'AI Chatbot',
      description: 'A conversational AI chatbot designed for customer support, integrated with natural language processing (NLP).',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-repo-link'
    }
  ];

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="button" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;

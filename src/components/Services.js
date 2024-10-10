import React from 'react';

function Services() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Building scalable and responsive web applications from frontend to backend.',
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Designing and deploying machine learning models for real-world applications.',
    },
    {
      title: 'API Integration',
      description: 'Integrating third-party APIs to enhance the functionality of existing systems.',
    },
  ];

  return (
    <section className="services-section">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

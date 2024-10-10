import React from 'react';

function CareerTimeline() {
  const events = [
    { year: '2025', event: 'Graduated with a Master\'s in Data Science' },
    { year: '2022', event: 'Developed AI chatbot for virtual teaching assistant' },
    { year: '2021', event: 'Software Developer at Netzyn' },
    { year: '2020', event: 'Built and deployed first full-stack web app' },
    { year: '2019', event: 'Started studying Computer Science' }
  ];

  return (
    <section className="timeline-section">
      <h2>My Career Journey</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <h3>{event.year}</h3>
            <p>{event.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareerTimeline;

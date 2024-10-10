import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: 'Sreeman is a highly skilled developer with a passion for problem-solving. His ability to think critically and deliver projects on time is unmatched.',
      author: 'John Doe, Senior Engineer at Tech Corp'
    },
    {
      quote: 'Working with Sreeman has been an absolute pleasure. His attention to detail and technical knowledge have consistently exceeded my expectations.',
      author: 'Jane Smith, Project Manager at Netzyn'
    }
  ];

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <blockquote key={index}>
          <p>"{testimonial.quote}"</p>
          <footer>- {testimonial.author}</footer>
        </blockquote>
      ))}
    </section>
  );
}

export default Testimonials;

import React from 'react';

function Blog() {
  const blogPosts = [
    { title: 'How to Build a REST API', description: 'A guide to building RESTful APIs with Node.js and Express.' },
    { title: 'Understanding React Hooks', description: 'A tutorial on React hooks and their uses.' },
  ];

  return (
    <section>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blog;

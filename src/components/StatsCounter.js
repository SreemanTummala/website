import React, { useState, useEffect } from 'react';

function StatsCounter() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        return {
          projects: prevStats.projects < 20 ? prevStats.projects + 1 : 20,
          clients: prevStats.clients < 10 ? prevStats.clients + 1 : 10,
          experience: prevStats.experience < 5 ? prevStats.experience + 1 : 5,
        };
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-counter">
      <h2>My Impact</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <h3>{stats.projects}</h3>
          <p>Completed Projects</p>
        </div>
        <div className="stat-item">
          <h3>{stats.clients}</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3>{stats.experience}</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;

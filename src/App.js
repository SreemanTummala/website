import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // No need for Router here
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactForm from './components/ContactForm';
import FeaturedProjects from './components/FeaturedProjects';
import CareerTimeline from './components/CareerTimeline';
import StatsCounter from './components/StatsCounter';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTABanner from './components/CTABanner';
import HeroBanner from './components/HeroBanner';
import './styles.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>

      {/* Main Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroBanner />
              <FeaturedProjects />
              <CareerTimeline />
              <StatsCounter />
              <Services />
              <Testimonials />
              <CTABanner />
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

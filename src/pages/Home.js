import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedProjects from '../components/FeaturedProjects';
import CareerTimeline from '../components/CareerTimeline';
import StatsCounter from '../components/StatsCounter';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedProjects />
      <div className="section-divider"></div>
      <CareerTimeline />
      <StatsCounter />
      <Services />
      <Testimonials />
      <CTABanner />
    </div>
  );
}

export default Home;

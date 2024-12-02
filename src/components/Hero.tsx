import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css'; // Import custom CSS

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <Navbar />
      <div className="hero-container hero-container-lg">
        {/* Left column */}
        <div className="hero-row">
          <div className="hero-text hero-text-lg">
            <p className="hero-heading" data-aos="zoom-out-down">Welcome!</p>
            <p className="hero-heading" data-aos="zoom-out-down">Let&#39;s Explore</p>
            <p className="hero-heading" data-aos="zoom-out-down">My Work Together.</p>
          </div>
        </div>

        {/* Empty right column (for large screens) */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Hero;

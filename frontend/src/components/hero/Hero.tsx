import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../../assets/images/HeroImage.jpg';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('');

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">
              <span className="badge-icon">✓</span>
              Built for Kenya · M-Pesa ready
            </span>
          </div>

          <h1 className="hero-title">
            Book skilled <span className="highlight">technicians</span>, fast.
          </h1>
          
          <p className="hero-description">
            Built for households and property owners, myFundi Hub connects you with 
            verified, GPS-matched local technicians for electrical, plumbing, and more 
            – right to your door.
          </p>

          <div className="hero-actions">
            <button className="action-link primary" onClick={scrollToServices}>
              Book a service →
            </button>
            <button className="action-link secondary" onClick={scrollToHowItWorks}>
              Join as a technician
            </button>
            <button className="action-link tertiary">
              Log in
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="hero-image-container">
            <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
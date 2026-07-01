import React, { useState } from 'react';
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
        <div className="hero-badge-wrapper">
          <span className="hero-badge">
            <span className="badge-icon">✓</span>
            Built for Kenya · M-Pesa ready
          </span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Book skilled <span className="highlight">technicians</span>, fast.
          </h1>
          
          <p className="hero-description">
            Built for households and property owners, myFundi Hub connects you with 
            verified, GPS-matched local technicians for electrical, plumbing, and more 
            – right to your door.
          </p>

          <div className="hero-search-wrapper">
            <div className="search-input-container">
              <span className="search-icon">📍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Enter your location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="search-button" onClick={scrollToServices}>
              Book a service →
            </button>
          </div>

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

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1,000+</span>
              <span className="stat-label">Trusted technicians</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.8★</span>
              <span className="stat-label">Average rating</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction rate</span>
            </div>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="floating-card card-1">
            <span className="card-icon">🔧</span>
            <span className="card-text">Plumbing</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">⚡</span>
            <span className="card-text">Electrical</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">🔨</span>
            <span className="card-text">Carpentry</span>
          </div>
          <div className="floating-card card-4">
            <span className="card-icon">🎨</span>
            <span className="card-text">Painting</span>
          </div>
          <div className="floating-card card-5">
            <span className="card-icon">🔩</span>
            <span className="card-text">Masonry</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
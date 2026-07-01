import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Trusted by 1,000+ households</span>
          <h1 className="hero-title">
            Find Trusted <span className="highlight">Fundis</span> Near You
          </h1>
          <p className="hero-subtitle">
            Connect with verified, skilled professionals for all your home
            maintenance and repair needs. Fast, reliable, and hassle-free.
          </p>

          <div className="hero-search">
            <div className="search-input-wrapper">
              <span className="search-icon">📍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Enter your location..."
              />
            </div>
            <button className="search-btn" onClick={scrollToServices}>
              Search Fundis
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Verified Fundis</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1,000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Services Offered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-1">
            <span className="card-icon">🔧</span>
            <div className="card-info">
              <span className="card-label">Plumbing</span>
              <span className="card-rating">⭐ 4.9</span>
            </div>
          </div>
          <div className="hero-card hero-card-2">
            <span className="card-icon">⚡</span>
            <div className="card-info">
              <span className="card-label">Electrical</span>
              <span className="card-rating">⭐ 4.8</span>
            </div>
          </div>
          <div className="hero-card hero-card-3">
            <span className="card-icon">🪚</span>
            <div className="card-info">
              <span className="card-label">Carpentry</span>
              <span className="card-rating">⭐ 4.9</span>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="ill-circle ill-circle-1"></div>
            <div className="ill-circle ill-circle-2"></div>
            <div className="ill-circle ill-circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
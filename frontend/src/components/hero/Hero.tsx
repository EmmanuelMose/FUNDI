import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import Vedio4 from '../../assets/images/Vedio4.mp4';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
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
          <div className="hero-video-container" onClick={handleVideoClick}>
            <video
              ref={videoRef}
              className="hero-video"
              loop
              muted
              playsInline
              poster={Vedio4}
            >
              <source src={Vedio4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={`video-overlay ${isPlaying ? 'hidden' : ''}`}>
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
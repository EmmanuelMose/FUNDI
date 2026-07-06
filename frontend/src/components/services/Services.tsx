import React, { useState } from 'react';
import './Services.css';
import Image4 from '../../assets/images/Image4.jpg';
import Image5 from '../../assets/images/Image5.jpeg';
import Image6 from '../../assets/images/Image6.jpeg';
import Image8 from '../../assets/images/Image8.jpeg';
import Image9 from '../../assets/images/Image9.jpeg';
import PlasteringImage from '../../assets/images/PlasteringImage.jpeg';
import PlumbingImage from '../../assets/images/PlumbingImage.jpeg';
import GardeningImage from '../../assets/images/GardeningImage.jpeg';
import LocksmithImage from '../../assets/images/LockSmithImage.jpeg';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'cleaning',
      image: Image9,
      title: 'Cleaning Services',
      description: 'Deep cleaning, carpet & upholstery',
      fullDescription: 'Comprehensive cleaning services including deep cleaning, carpet shampooing, upholstery cleaning, and post-construction clean-up.'
    },
    {
      id: 'locksmith',
      image: LocksmithImage,
      title: 'Locksmith',
      description: 'Locks, keys & security systems',
      fullDescription: 'Professional locksmith services including lock installation, key cutting, security system setup, and emergency lockout assistance.'
    },
    {
      id: 'gardening',
      image: GardeningImage,
      title: 'Gardening',
      description: 'Lawn care, landscaping & pruning',
      fullDescription: 'Professional gardening services including lawn maintenance, landscape design, tree pruning, and garden clean-up.'
    },
    {
      id: 'plastering',
      image: PlasteringImage,
      title: 'Plastering',
      description: 'Walls, ceilings & drywall repair',
      fullDescription: 'Expert plastering services for walls, ceilings, drywall installation, and surface finishing.'
    },
    {
      id: 'electrical',
      image: Image4,
      title: 'Electrical',
      description: 'Wiring, sockets, lighting & fans',
      fullDescription: 'Complete electrical solutions including wiring installation, socket repairs, lighting fixtures, and ceiling fan installations.'
    },
    {
      id: 'plumbing',
      image: PlumbingImage,
      title: 'Plumbing',
      description: 'Pipes, drains, taps, bathrooms & water heaters',
      fullDescription: 'Professional plumbing services including pipe repairs, drain unblocking, tap installation, bathroom fittings, and water heater maintenance.'
    }
  ];

  const stats = [
    { number: '300+', label: 'TECHNICIANS' },
    { number: '1k+', label: 'JOBS COMPLETED' },
    { number: '4.8★', label: 'AVERAGE RATING' },
    { number: '<15m', label: 'MATCH TIME' }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">WHAT WE OFFER</h2>
          <h3 className="services-subtitle">Services built for everyday life</h3>
          <p className="services-description">
            From cleaning and electrical to plumbing and locksmith - book any home service in minutes.
          </p>
          <p className="services-hint">Hover a service to see what's covered</p>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${hoveredService === service.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              {hoveredService === service.id && (
                <div className="service-tooltip">
                  <p>{service.fullDescription}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
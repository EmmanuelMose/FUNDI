import React, { useState } from 'react';
import './Services.css';
import Image1 from '../../assets/images/Image1.jpg';
import Image2 from '../../assets/images/Image2.jpg';
import Image3 from '../../assets/images/Image3.jpeg';
import Image4 from '../../assets/images/Image4.jpg';
import Image5 from '../../assets/images/Image5.jpeg';
import Image6 from '../../assets/images/Image6.jpeg';
import Image7 from '../../assets/images/Image7.jpeg';
import Image8 from '../../assets/images/Image8.jpeg';
import Image9 from '../../assets/images/Image9.jpeg';
import Image10 from '../../assets/images/Image10.jpeg';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'moving-transport',
      image: Image1,
      title: 'Moving & Transport',
      description: 'Local moves, delivery & logistics',
      fullDescription: 'Reliable moving and transport services including local moves, furniture delivery, and logistics coordination.'
    },
    {
      id: 'cleaning',
      image: Image2,
      title: 'Cleaning Services',
      description: 'Deep cleaning, carpet & upholstery',
      fullDescription: 'Comprehensive cleaning services including deep cleaning, carpet shampooing, upholstery cleaning, and post-construction clean-up.'
    },
    {
      id: 'roofing',
      image: Image3,
      title: 'Roofing',
      description: 'Repairs, installation & maintenance',
      fullDescription: 'Professional roofing services including leak repairs, roof installation, maintenance, and gutter cleaning.'
    },
    {
      id: 'locksmith',
      image: Image4,
      title: 'Locksmith',
      description: 'Locks, keys & security systems',
      fullDescription: 'Professional locksmith services including lock installation, key cutting, security system setup, and emergency lockout assistance.'
    },
    {
      id: 'gardening',
      image: Image5,
      title: 'Gardening',
      description: 'Lawn care, landscaping & pruning',
      fullDescription: 'Professional gardening services including lawn maintenance, landscape design, tree pruning, and garden clean-up.'
    },
    {
      id: 'plastering',
      image: Image6,
      title: 'Plastering',
      description: 'Walls, ceilings & drywall repair',
      fullDescription: 'Expert plastering services for walls, ceilings, drywall installation, and surface finishing.'
    },
    {
      id: 'electrical',
      image: Image7,
      title: 'Electrical',
      description: 'Wiring, sockets, lighting & fans',
      fullDescription: 'Complete electrical solutions including wiring installation, socket repairs, lighting fixtures, and ceiling fan installations.'
    },
    {
      id: 'plumbing',
      image: Image8,
      title: 'Plumbing',
      description: 'Pipes, drains, taps, bathrooms & water heaters',
      fullDescription: 'Professional plumbing services including pipe repairs, drain unblocking, tap installation, bathroom fittings, and water heater maintenance.'
    },
    {
      id: 'painting',
      image: Image9,
      title: 'Painting & Decorating',
      description: 'Interior, exterior & wall papering',
      fullDescription: 'Professional painting and decorating services including interior walls, exterior surfaces, wallpaper installation, and finish coatings.'
    },
    {
      id: 'carpentry',
      image: Image10,
      title: 'Carpentry',
      description: 'Furniture, cabinets & woodwork',
      fullDescription: 'Expert carpentry services covering custom furniture, kitchen cabinets, shelving, doors, and general woodwork repairs.'
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
            From moving and transport to cleaning and roofing - book any home service in minutes.
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
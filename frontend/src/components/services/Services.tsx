import React, { useState } from 'react';
import './Services.css';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'electrical',
      icon: '⚡',
      title: 'Electrical',
      description: 'Wiring, sockets, lighting & fans',
      fullDescription: 'Complete electrical solutions including wiring installation, socket repairs, lighting fixtures, and ceiling fan installations.'
    },
    {
      id: 'plumbing',
      icon: '🔧',
      title: 'Plumbing',
      description: 'Pipes, drains, taps, bathrooms & water heaters',
      fullDescription: 'Professional plumbing services including pipe repairs, drain unblocking, tap installation, bathroom fittings, and water heater maintenance.'
    },
    {
      id: 'fridge',
      icon: '❄️',
      title: 'Fridge Repair',
      description: 'Cooling faults, gas refills & compressors',
      fullDescription: 'Expert refrigerator repair including cooling system diagnosis, gas refilling, compressor replacement, and temperature control fixes.'
    },
    {
      id: 'washing',
      icon: '👕',
      title: 'Washing Machine',
      description: 'Repairs, installation & servicing',
      fullDescription: 'Comprehensive washing machine services covering repairs, new installations, routine servicing, and parts replacement.'
    },
    {
      id: 'cooker',
      icon: '🔥',
      title: 'Cooker & Oven',
      description: 'Gas, electric, microwave & oven repairs',
      fullDescription: 'Full range of cooking appliance repairs including gas cookers, electric ovens, microwaves, and built-in oven units.'
    },
    {
      id: 'television',
      icon: '📺',
      title: 'Television',
      description: 'Screen, board & smart TV repairs',
      fullDescription: 'Television repair services covering screen replacements, main board repairs, smart TV software issues, and connectivity problems.'
    },
    {
      id: 'security',
      icon: '🔒',
      title: 'Security Systems',
      description: 'CCTV, alarms, gates & access control',
      fullDescription: 'Complete security system installation and maintenance including CCTV cameras, burglar alarms, automatic gates, and access control systems.'
    },
    {
      id: 'solar',
      icon: '☀️',
      title: 'Solar & Power',
      description: 'Solar, inverters & backup power',
      fullDescription: 'Renewable energy solutions including solar panel installation, inverter systems, battery backup, and power management systems.'
    },
    {
      id: 'appliances',
      icon: '🔌',
      title: 'Small Appliances',
      description: 'Kettles, irons, blenders & AC units',
      fullDescription: 'Repair and maintenance of small household appliances including kettles, irons, blenders, and air conditioning units.'
    },
    {
      id: 'other',
      icon: '🛠️',
      title: 'Other Technical',
      description: 'DSTV, WiFi, doorbells & home tech',
      fullDescription: 'General home technology services including DSTV installation, WiFi network setup, doorbell installation, and smart home integration.'
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
            From electrical faults to fridge repairs and solar installs - book any home service in minutes.
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
              <div className="service-icon">{service.icon}</div>
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

        <div className="services-footer">
          <div className="footer-content">
            <h3>FOR CUSTOMERS</h3>
            <h2>WHY MYFUNDI HUB</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
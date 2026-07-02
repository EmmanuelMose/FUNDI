// cusdashboard/Dashboard.tsx
import React, { useState } from 'react';
import './CusDashboard.css';

const CusDashboard: React.FC = () => {
  const [activeJobTab, setActiveJobTab] = useState('active');

  const stats = [
    { label: 'Total Bookings', value: '0', icon: '📋' },
    { label: 'Active Now', value: '0', icon: '🟢' },
    { label: 'Completed', value: '0', icon: '✅' },
  ];

  const serviceCategories = [
    { name: 'Fridge Repair', icon: '🔧' },
    { name: 'Wiring', icon: '⚡' },
    { name: 'Plumbing', icon: '🔩' },
    { name: 'Lighting', icon: '💡' },
    { name: 'Sockets', icon: '🔌' },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dashboard-greeting">
          <h1 className="greeting-title">GOOD MORNING, EMMANUEL</h1>
          <p className="greeting-subtitle">What do you need fixed today?</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="services-section">
        <h2 className="section-title">WHAT DO YOU NEED FIXED?</h2>
        <div className="services-grid">
          {serviceCategories.map((service, index) => (
            <button key={index} className="service-btn">
              <span className="service-icon">{service.icon}</span>
              <span className="service-name">{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="jobs-section">
        <div className="jobs-tabs">
          <button 
            className={`tab-btn ${activeJobTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveJobTab('active')}
          >
            ACTIVE JOB
          </button>
          <button 
            className={`tab-btn ${activeJobTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveJobTab('past')}
          >
            PAST JOBS
          </button>
        </div>
        <div className="jobs-content">
          <p className="empty-state">No jobs in this category</p>
        </div>
      </div>

      <div className="settings-link">
        <span className="settings-icon">⚙️</span>
        <span className="settings-text">SETTINGS</span>
      </div>
    </div>
  );
};

export default CusDashboard;
// cusdashboard/CusDashboard.tsx
import React, { useState } from 'react';
import './CusDashboard.css';

const CusDashboard: React.FC = () => {
  const [activeJobTab, setActiveJobTab] = useState('active');

  const stats = [
    { label: 'Total Bookings', value: '0' },
    { label: 'Active Now', value: '0' },
    { label: 'Completed', value: '0' },
  ];

  const serviceCategories = [
    { name: 'Fridge Repair', icon: '❄️' },
    { name: 'Wiring', icon: '⚡' },
    { name: 'Plumbing', icon: '🔧' },
    { name: 'Lighting', icon: '💡' },
    { name: 'Sockets', icon: '🔌' },
  ];

  const recentActivities = [
    { id: 1, title: 'No recent bookings', time: '' }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dashboard-greeting">
          <h1 className="greeting-title">Good Morning, Emmanuel</h1>
          <p className="greeting-subtitle">What do you need fixed today?</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="services-section">
        <div className="section-header">
          <h2 className="section-title">What do you need fixed?</h2>
          <p className="section-subtitle">Select a service category to get started</p>
        </div>
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
        <div className="jobs-header">
          <h2 className="section-title">Your Jobs</h2>
          <div className="jobs-tabs">
            <button 
              className={`tab-btn ${activeJobTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveJobTab('active')}
            >
              Active
            </button>
            <button 
              className={`tab-btn ${activeJobTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveJobTab('past')}
            >
              Past Jobs
            </button>
          </div>
        </div>
        <div className="jobs-content">
          <div className="empty-state">
            <span className="empty-icon">📋</span>
            <p className="empty-text">No jobs in this category</p>
            <p className="empty-subtext">Book a service to get started</p>
          </div>
        </div>
      </div>

      <div className="quick-actions-section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="quick-actions-grid">
          <button className="quick-action-btn primary">
            <span className="quick-action-icon">🔍</span>
            <span className="quick-action-label">Find a Technician</span>
          </button>
          <button className="quick-action-btn secondary">
            <span className="quick-action-icon">📅</span>
            <span className="quick-action-label">View Bookings</span>
          </button>
          <button className="quick-action-btn tertiary">
            <span className="quick-action-icon">💬</span>
            <span className="quick-action-label">Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CusDashboard;
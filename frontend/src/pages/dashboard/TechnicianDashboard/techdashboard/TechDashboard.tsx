// techniciandashboard/Dashboard.tsx
import React, { useState } from 'react';
import './TechDashboard.css';

const TechDashboard: React.FC = () => {
  const [activeStatusTab, setActiveStatusTab] = useState('active');

  const stats = [
    { label: 'Total Jobs', value: '0', icon: '📋' },
    { label: 'Active Jobs', value: '0', icon: '🟢' },
    { label: 'Completed', value: '0', icon: '✅' },
    { label: 'Earnings', value: 'KSh 0', icon: '💰' },
  ];

  const quickActions = [
    { name: 'Find Jobs', icon: '🔍', color: '#e08a0e' },
    { name: 'My Schedule', icon: '📅', color: '#4caf50' },
    { name: 'Earnings', icon: '💰', color: '#2196f3' },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dashboard-greeting">
          <h1 className="greeting-title">GOOD MORNING, EMMANUEL</h1>
          <p className="greeting-subtitle">Ready to earn today?</p>
        </div>
      </div>

      <div className="quick-actions">
        {quickActions.map((action, index) => (
          <button key={index} className="action-btn">
            <span className="action-icon">{action.icon}</span>
            <span className="action-name">{action.name}</span>
          </button>
        ))}
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

      <div className="jobs-section">
        <div className="jobs-header">
          <h2 className="section-title">My Jobs</h2>
          <div className="jobs-tabs">
            <button 
              className={`tab-btn ${activeStatusTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveStatusTab('active')}
            >
              Active
            </button>
            <button 
              className={`tab-btn ${activeStatusTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveStatusTab('completed')}
            >
              Completed
            </button>
            <button 
              className={`tab-btn ${activeStatusTab === 'cancelled' ? 'active' : ''}`}
              onClick={() => setActiveStatusTab('cancelled')}
            >
              Cancelled
            </button>
          </div>
        </div>
        <div className="jobs-content">
          <div className="empty-state">
            <span className="empty-icon">🔧</span>
            <p className="empty-text">No jobs in this category</p>
            <p className="empty-subtext">Jobs you accept will appear here</p>
          </div>
        </div>
      </div>

      <div className="availability-section">
        <div className="availability-status">
          <span className="status-dot online"></span>
          <span className="status-label">You are online</span>
        </div>
        <button className="toggle-status-btn">Go Offline</button>
      </div>
    </div>
  );
};

export default TechDashboard;
// admindashboard/Dashboard.tsx
import React from 'react';
import './AdDashboard.css';

const AdDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Users', value: '0', color: '#4caf50' },
    { label: 'Total Fundis', value: '0', color: '#e08a0e' },
    { label: 'Total Bookings', value: '0', color: '#2196f3' },
    { label: 'Revenue', value: 'KSh 0', color: '#ff9800' },
    { label: 'Pending Fundis', value: '0', color: '#ff4757' },
    { label: 'Active Jobs', value: '0', color: '#4caf50' },
  ];

  const recentActivities = [
    { id: 1, action: 'New fundi registered', time: '5 mins ago', status: 'pending' },
    { id: 2, action: 'Payment of KSh 3,500 confirmed', time: '15 mins ago', status: 'completed' },
    { id: 3, action: 'New booking request', time: '30 mins ago', status: 'pending' },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dashboard-greeting">
          <h1 className="greeting-title">GOOD MORNING, ADMIN</h1>
          <p className="greeting-subtitle">Welcome to your admin dashboard</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderColor: stat.color + '33' }}>
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="recent-section">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-dot ${activity.status}`}></div>
                <div className="activity-content">
                  <span className="activity-action">{activity.action}</span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            <button className="quick-action-btn">
              <span className="action-name">Manage Users</span>
            </button>
            <button className="quick-action-btn">
              <span className="action-name">Verify Fundis</span>
            </button>
            <button className="quick-action-btn">
              <span className="action-name">View Bookings</span>
            </button>
            <button className="quick-action-btn">
              <span className="action-name">Payment Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDashboard;
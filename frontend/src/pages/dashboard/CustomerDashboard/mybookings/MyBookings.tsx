// mybookings/MyBookings.tsx
import React, { useState } from 'react';
import './MyBookings.css';

const MyBookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = ['All', 'Active', 'Completed', 'Cancelled'];

  return (
    <div className="my-bookings-page">
      <div className="page-header">
        <h1 className="page-title">My Bookings</h1>
        <p className="page-subtitle">View and manage all your service bookings</p>
      </div>

      <div className="bookings-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bookings-list">
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p className="empty-text">No bookings in this category</p>
          <p className="empty-subtext">When you book a service, it will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
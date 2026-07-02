// bookings/Bookings.tsx
import React, { useState } from 'react';
import './Bookings.css';

const Bookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = ['All', 'Active', 'In Progress', 'Completed', 'Cancelled'];

  return (
    <div className="bookings-page">
      <div className="page-header">
        <h1 className="page-title">Bookings</h1>
        <p className="page-subtitle">Manage all platform bookings</p>
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

      <div className="bookings-table-wrapper">
        <div className="bookings-table">
          <div className="table-header">
            <span>ID</span>
            <span>Customer</span>
            <span>Fundi</span>
            <span>Service</span>
            <span>Status</span>
            <span>Amount</span>
            <span>Actions</span>
          </div>
          <div className="table-body">
            <div className="empty-state">
              <span className="empty-icon">📋</span>
              <p className="empty-text">No bookings found</p>
              <p className="empty-subtext">Bookings will appear here when customers book services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
// myjobs/MyJobs.tsx
import React, { useState } from 'react';
import './MyJobs.css';

const MyJobs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');

  const tabs = ['Active', 'In Progress', 'Completed', 'Cancelled'];

  return (
    <div className="my-jobs-page">
      <div className="page-header">
        <h1 className="page-title">My Jobs</h1>
        <p className="page-subtitle">View and manage all your accepted jobs</p>
      </div>

      <div className="jobs-tabs">
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

      <div className="jobs-list">
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p className="empty-text">No jobs in this category</p>
          <p className="empty-subtext">Jobs you accept will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
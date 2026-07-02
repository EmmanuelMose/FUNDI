// CustomerDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './CustomerDashboard.css';
import CustomerDrawer from './aside/CustomerDrawer';

const CustomerDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="customer-dashboard">
      <CustomerDrawer 
        isSidebarOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
        isMobile={isMobile}
      />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Outlet />
      </div>
      {isMobile && isSidebarOpen && (
        <div className="mobile-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default CustomerDashboard;
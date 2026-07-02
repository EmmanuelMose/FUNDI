// CustomerDashboard.tsx
import React, { useState, useEffect } from 'react';
import './CustomerDashboard.css';
import CustomerDrawer from './aside/CustomerDrawer';
import CusDashboard from '../CustomerDashboard/cusdashboard/CusDashboard';
import BookService from './bookservice/BookService';
import MyBookings from './mybookings/MyBookings';
import NearbyTechs from './nearbytechs/NearbyTechs';
import Payments from '../CustomerDashboard/payments/Payments';
import Notifications from '../CustomerDashboard/notifications/Notifications';
import Settings from '../CustomerDashboard/settings/Settings';

const CustomerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
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

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <CusDashboard />;
      case 'book-service':
        return <BookService />;
      case 'my-bookings':
        return <MyBookings />;
      case 'nearby-techs':
        return <NearbyTechs />;
      case 'payments':
        return <Payments />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      default:
        return <CusDashboard />;
    }
  };

  return (
    <div className="customer-dashboard">
      <CustomerDrawer 
        isSidebarOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
        activeTab={activeTab}
        setActiveTab={handleTabSelect} isMobile={false}      />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderContent()}
      </div>
      {isMobile && isSidebarOpen && (
        <div className="mobile-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default CustomerDashboard;
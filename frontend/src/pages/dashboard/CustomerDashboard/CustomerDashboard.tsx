// CustomerDashboard.tsx
import React, { useState } from 'react';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default CustomerDashboard;
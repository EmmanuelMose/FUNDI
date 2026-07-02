// AdminDashboard.tsx
import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import AdminDrawer from '../AdminDashboard/aside/AdminDrawer';
import AdDashboard from '../AdminDashboard/admindashboard/AdDashboard';
import Users from '../AdminDashboard/users/Users';
import Fundis from '../AdminDashboard/fundis/Fundis';
import Bookings from '../AdminDashboard/bookings/Bookings';
import Payments from '../AdminDashboard/payments/Payments';
import Reports from '../AdminDashboard/reports/Reports';
import Settings from '../AdminDashboard/settings/Settings';

const AdminDashboard: React.FC = () => {
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
        return <AdDashboard />;
      case 'users':
        return <Users />;
      case 'fundis':
        return <Fundis />;
      case 'bookings':
        return <Bookings />;
      case 'payments':
        return <Payments />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <AdDashboard />;
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminDrawer 
        isSidebarOpen={isSidebarOpen} 
        onToggle={handleSidebarToggle}
        activeTab={activeTab}
        setActiveTab={handleTabSelect}
        isMobile={isMobile}
      />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderContent()}
      </div>
      {isMobile && isSidebarOpen && (
        <div className="mobile-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default AdminDashboard;
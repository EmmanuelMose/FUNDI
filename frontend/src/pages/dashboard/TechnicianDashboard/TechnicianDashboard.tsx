// TechnicianDashboard.tsx
import React, { useState, useEffect } from 'react';
import './TechnicianDashboard.css';
import TechnicianDrawer from '../TechnicianDashboard/aside/TechnicianDrawer';
import TechDashboard from '../TechnicianDashboard/techdashboard/TechDashboard';
import AvailableJobs from '../TechnicianDashboard/availablejobs/AvailableJobs';
import MyJobs from '../TechnicianDashboard/myjobs/MyJobs';
import Earnings from '../TechnicianDashboard/earnings/Earnings';
import Notifications from '../TechnicianDashboard/notifications/Notifications';
import Settings from '../TechnicianDashboard/settings/Settings';

const TechnicianDashboard: React.FC = () => {
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
        return <TechDashboard />;
      case 'available-jobs':
        return <AvailableJobs />;
      case 'my-jobs':
        return <MyJobs />;
      case 'earnings':
        return <Earnings />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      default:
        return <TechDashboard />;
    }
  };

  return (
    <div className="technician-dashboard">
      <TechnicianDrawer 
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

export default TechnicianDashboard;
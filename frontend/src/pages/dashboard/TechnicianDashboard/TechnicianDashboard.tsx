// TechnicianDashboard.tsx
import React, { useState } from 'react';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

export default TechnicianDashboard;
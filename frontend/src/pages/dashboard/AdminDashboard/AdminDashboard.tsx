// AdminDashboard.tsx
import React, { useState } from 'react';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

export default AdminDashboard;
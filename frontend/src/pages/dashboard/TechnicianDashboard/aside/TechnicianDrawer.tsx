
//import React from 'react';
import { technicianDrawerData, type DrawerData } from './DrawerData';
import './TechnicianDrawer.css';

type TechnicianDrawerProps = {
  isSidebarOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const TechnicianDrawer = ({ isSidebarOpen, onToggle, activeTab, setActiveTab }: TechnicianDrawerProps) => {
  return (
    <aside className={`technician-drawer ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="drawer-header">
        <div className="drawer-brand">
          <span className="brand-text">myFundi</span>
          <span className="brand-suffix">Hub</span>
        </div>
        <button onClick={onToggle} className="drawer-toggle">
          {isSidebarOpen ? '◀' : '▶'}
        </button>
      </div>

      <div className="drawer-role">
        <span className="role-label">TECHNICIAN</span>
        <span className="role-portal">TECHNICIAN PORTAL</span>
      </div>

      <nav className="drawer-nav">
        {technicianDrawerData.map((item: DrawerData) => (
          <button
            key={item.id}
            className={`drawer-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="drawer-icon">
              <item.icon size={20} />
            </span>
            {isSidebarOpen && <span className="drawer-label">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="drawer-footer">
        <div className="drawer-user">
          <div className="user-avatar">EM</div>
          {isSidebarOpen && (
            <div className="user-info">
              <span className="user-name">Emmanuel M.</span>
              <span className="user-role">Account & settings</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default TechnicianDrawer;
// aside/CustomerDrawer.tsx
//import React from 'react';
import { drawerData, type DrawerData } from './DrawerData';
import './CustomerDrawer.css';

type CustomerDrawerProps = {
  isSidebarOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const CustomerDrawer = ({ isSidebarOpen, onToggle, activeTab, setActiveTab }: CustomerDrawerProps) => {
  return (
    <aside className={`customer-drawer ${isSidebarOpen ? 'open' : 'closed'}`}>
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
        <span className="role-label">CUSTOMER</span>
        <span className="role-portal">CUSTOMER PORTAL</span>
      </div>

      <nav className="drawer-nav">
        {drawerData.map((item: DrawerData) => (
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

export default CustomerDrawer;
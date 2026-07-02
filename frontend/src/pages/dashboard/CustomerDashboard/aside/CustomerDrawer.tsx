// aside/CustomerDrawer.tsx
//import React from 'react';
import { drawerData, type DrawerData } from './DrawerData';
import './CustomerDrawer.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

type CustomerDrawerProps = {
  isSidebarOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobile: boolean;
};

const CustomerDrawer = ({ 
  isSidebarOpen, 
  onToggle, 
  activeTab, 
  setActiveTab,
  isMobile 
}: CustomerDrawerProps) => {
  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          className={`mobile-menu-btn ${isSidebarOpen ? 'hidden' : ''}`}
          onClick={onToggle}
          aria-label="Toggle Menu"
        >
          <AiOutlineMenu size={24} />
        </button>
      )}

      <aside className={`customer-drawer ${isSidebarOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="brand-text">myFundi</span>
            <span className="brand-suffix">Hub</span>
          </div>
          <button onClick={onToggle} className="drawer-toggle">
            {isSidebarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
                <item.icon size={isSidebarOpen ? 20 : 22} />
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
    </>
  );
};

export default CustomerDrawer;
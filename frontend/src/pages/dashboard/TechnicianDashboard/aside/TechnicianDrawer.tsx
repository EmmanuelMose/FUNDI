// src/components/aside/TechnicianDrawer.tsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { technicianDrawerData, type DrawerData } from './DrawerData';
import './TechnicianDrawer.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logout from '../../../../components/logout/Logout';

type TechnicianDrawerProps = {
  isSidebarOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
};

const TechnicianDrawer = ({ 
  isSidebarOpen, 
  onToggle, 
  isMobile 
}: TechnicianDrawerProps) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    // Additional logout logic if needed
    console.log('User logged out successfully');
  };

  const handleUserClick = () => {
    navigate('/technician-dashboard/techsettings');
  };

  return (
    <>
      {isMobile && (
        <button 
          className={`mobile-menu-btn ${isSidebarOpen ? 'hidden' : ''}`}
          onClick={onToggle}
          aria-label="Toggle Menu"
        >
          <AiOutlineMenu size={24} />
        </button>
      )}

      <aside className={`technician-drawer ${isSidebarOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="brand-text">myFundi</span>
            <span className="brand-suffix">Hub</span>
          </div>
          <button onClick={onToggle} className="drawer-toggle" aria-label="Toggle Sidebar">
            {isSidebarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>

        <div className="drawer-role">
          <span className="role-label">TECHNICIAN</span>
          <span className="role-portal">TECHNICIAN PORTAL</span>
        </div>

        <nav className="drawer-nav">
          {technicianDrawerData.map((item: DrawerData) => {
            // Handle logout separately
            if (item.id === 'techlogout') {
              return (
                <button
                  key={item.id}
                  onClick={handleLogoutClick}
                  className="drawer-item logout-item"
                >
                  <span className="drawer-icon">
                    <item.icon size={isSidebarOpen ? 20 : 22} />
                  </span>
                  {isSidebarOpen && <span className="drawer-label">{item.label}</span>}
                </button>
              );
            }
            
            return (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `drawer-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="drawer-icon">
                  <item.icon size={isSidebarOpen ? 20 : 22} />
                </span>
                {isSidebarOpen && <span className="drawer-label">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div className="drawer-footer">
          <div className="drawer-user" onClick={handleUserClick}>
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

      {/* Logout Modal */}
      <Logout 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default TechnicianDrawer;
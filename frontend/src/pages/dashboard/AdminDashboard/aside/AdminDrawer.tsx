// aside/AdminDrawer.tsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { adminDrawerData, type DrawerData } from './DrawerData';
import './AdminDrawer.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logout from '../../../../components/logout/Logout';

type AdminDrawerProps = {
  isSidebarOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
};

const AdminDrawer = ({ 
  isSidebarOpen, 
  onToggle, 
  isMobile 
}: AdminDrawerProps) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    console.log('Admin logged out successfully');
  };

  const handleUserClick = () => {
    navigate('/admin-dashboard/settings');
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

      <aside className={`admin-drawer ${isSidebarOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
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
          <span className="role-label">ADMIN</span>
          <span className="role-portal">ADMIN PORTAL</span>
        </div>

        <nav className="drawer-nav">
          {adminDrawerData.map((item: DrawerData) => {
            if (item.id === 'logout') {
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
            <div className="user-avatar">AD</div>
            {isSidebarOpen && (
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">Account & settings</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      <Logout 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default AdminDrawer;
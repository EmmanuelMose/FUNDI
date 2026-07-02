// aside/CustomerDrawer.tsx
import { NavLink } from 'react-router-dom';
import { drawerData, type DrawerData } from './DrawerData';
import './CustomerDrawer.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

type CustomerDrawerProps = {
  isSidebarOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
};

const CustomerDrawer = ({ 
  isSidebarOpen, 
  onToggle, 
  isMobile 
}: CustomerDrawerProps) => {
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
// src/components/logout/Logout.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

interface LogoutProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

const Logout: React.FC<LogoutProps> = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all user authentication data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    sessionStorage.clear();
    
    // Call custom onConfirm if provided
    if (onConfirm) {
      onConfirm();
    }
    
    // Navigate to landing page
    navigate('/');
    
    // Close the modal
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="logout-overlay" onClick={handleCancel}>
      <div className="logout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="logout-modal-header">
          <div className="logout-icon-wrapper">
            <svg 
              className="logout-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          <button className="logout-close-btn" onClick={handleCancel}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="logout-modal-body">
          <h3 className="logout-title">Ready to leave?</h3>
          <p className="logout-message">
            Are you sure you want to logout? You'll need to sign in again to access your account.
          </p>
        </div>

        <div className="logout-modal-footer">
          <button className="logout-btn cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="logout-btn confirm-btn" onClick={handleLogout}>
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
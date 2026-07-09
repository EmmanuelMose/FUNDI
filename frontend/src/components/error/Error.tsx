// components/error/Error.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

const Error: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-content">
          <div className="error-animation">
            <div className="error-circle">
              <span className="error-number">404</span>
            </div>
            <div className="error-particles">
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
            </div>
          </div>

          <h1 className="error-title">Page Not Found</h1>
          <p className="error-description">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="error-subtext">
            Let's get you back on track.
          </p>

          <div className="error-actions">
            <button className="error-btn primary-btn" onClick={handleGoHome}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go to Homepage
            </button>
            <button className="error-btn secondary-btn" onClick={handleGoBack}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Go Back
            </button>
          </div>

          <div className="error-help">
            <p className="help-text">Need help? <a href="mailto:support@myfundihub.com" className="help-link">Contact Support</a></p>
          </div>
        </div>

        <div className="error-footer">
          <p className="footer-text">© 2026 myFundi Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
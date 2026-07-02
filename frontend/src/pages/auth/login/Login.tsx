// Login.tsx (Updated with dashboard navigation)
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [isCustomer, setIsCustomer] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleLoginType = () => {
    setIsCustomer(!isCustomer);
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCustomer) {
      navigate('/customer-dashboard');
    } else {
      navigate('/technician-dashboard');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-header">
            <h1 className="login-brand">
              myFundi <span className="brand-suffix">Hub</span>
            </h1>
            <h2 className="login-subtitle">
              {isCustomer ? 'CUSTOMER PORTAL' : 'TECHNICIAN PORTAL'}
            </h2>
            <h3 className="login-title">
              {isCustomer ? 'Sign in' : 'Built to earn your trust'}
            </h3>
          </div>

          <div className="login-tabs">
            <button 
              className={`tab-btn ${isCustomer ? 'active' : ''}`}
              onClick={() => setIsCustomer(true)}
            >
              Customer
            </button>
            <button 
              className={`tab-btn ${!isCustomer ? 'active' : ''}`}
              onClick={() => setIsCustomer(false)}
            >
              Technician
            </button>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">
                {isCustomer ? 'Username or Email' : 'Technician account'}
              </label>
              <input 
                type="text" 
                className="form-input" 
                placeholder={isCustomer ? 'you@email.com' : 'Verified on the platform'}
              />
              {!isCustomer && (
                <p className="form-hint">
                  Identity-checked and admin-approved - customers know you're the real deal.
                </p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-wrapper">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="form-input password-input" 
                  placeholder="Enter your password"
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="forgot-link" onClick={handleForgotPassword}>
                Forgot password?
              </button>
            </div>

            <button type="submit" className="signin-btn">Sign in</button>
          </form>

          <div className="login-footer">
            <p className="divider-text">or</p>
            <p className="create-account">
              Don't have an account? <button type="button" onClick={handleCreateAccount} className="create-link">Create one</button>
            </p>
            <button 
              className="switch-btn"
              onClick={toggleLoginType}
            >
              Switch to {isCustomer ? 'Technician' : 'Customer'} login
            </button>
          </div>
        </div>

        <div className="login-right">
          <div className="feature-grid">
            <div className="feature-item">
              <h4 className="feature-title">Post your request</h4>
              <p className="feature-desc">
                Describe what you need and drop your location - takes under 60 seconds
              </p>
            </div>

            <div className="feature-item">
              <h4 className="feature-title">Get matched instantly</h4>
              <p className="feature-desc">
                Your job is broadcast to verified technicians near you in real time.
              </p>
            </div>

            <div className="feature-item">
              <h4 className="feature-title">Pay securely</h4>
              <p className="feature-desc">
                Once the job is done to your satisfaction, pay directly from your phone.
              </p>
            </div>
          </div>

          <div className="login-right-footer">
            <p className="switch-hint">
              Switch to {isCustomer ? 'Technician' : 'Customer'} login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
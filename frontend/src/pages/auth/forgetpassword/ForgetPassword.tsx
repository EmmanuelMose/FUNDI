// ForgotPassword.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendCode = () => {
    if (email) {
      navigate('/verify-reset-code');
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-left">
          <div className="forgot-password-header">
            <button className="back-btn" onClick={handleBack}>
              ← Back
            </button>
            <h1 className="forgot-password-brand">
              myFundi <span className="brand-suffix">Hub</span>
            </h1>
            <h2 className="forgot-password-title">Forgot Password</h2>
            <p className="forgot-password-description">
              Enter your email address and we'll send you a verification code to reset your password.
            </p>
          </div>

          <form className="forgot-password-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="send-code-btn" onClick={handleSendCode}>
              Send Code
            </button>
          </form>

          <div className="forgot-password-footer">
            <p className="back-to-login">
              Remember your password?{' '}
              <button type="button" className="login-link" onClick={handleBack}>
                Sign in
              </button>
            </p>
          </div>
        </div>

        <div className="forgot-password-right">
          <div className="reset-info">
            <div className="reset-icon">🔐</div>
            <h3 className="reset-title">Password Reset</h3>
            <p className="reset-desc">
              We'll send a 6-digit verification code to your email address.
              Enter the code on the next page to reset your password.
            </p>
            <div className="reset-steps">
              <div className="step-item">
                <span className="step-number">1</span>
                <span className="step-text">Enter your email</span>
              </div>
              <div className="step-item">
                <span className="step-number">2</span>
                <span className="step-text">Receive verification code</span>
              </div>
              <div className="step-item">
                <span className="step-number">3</span>
                <span className="step-text">Create new password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
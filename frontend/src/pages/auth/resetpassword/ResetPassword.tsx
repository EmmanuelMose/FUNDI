// ResetPassword.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleReset = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      navigate('/login');
    }
  };

  const handleBack = () => {
    navigate('/verify-reset-code');
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <div className="reset-password-left">
          <div className="reset-password-header">
            <button className="back-btn" onClick={handleBack}>
              ← Back
            </button>
            <h1 className="reset-password-brand">
              myFundi <span className="brand-suffix">Hub</span>
            </h1>
            <h2 className="reset-password-title">Reset Password</h2>
            <p className="reset-password-description">
              Enter your new password below. Make sure it's strong and secure.
            </p>
          </div>

          <form className="reset-password-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">New Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input password-input"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <ul className="password-requirements">
                <li className={newPassword.length >= 8 ? 'met' : ''}>
                  • At least 8 characters
                </li>
                <li className={/[A-Z]/.test(newPassword) ? 'met' : ''}>
                  • At least one uppercase letter
                </li>
                <li className={/[a-z]/.test(newPassword) ? 'met' : ''}>
                  • At least one lowercase letter
                </li>
                <li className={/\d/.test(newPassword) ? 'met' : ''}>
                  • At least one number
                </li>
                <li className={/[@$!%*?&]/.test(newPassword) ? 'met' : ''}>
                  • At least one special character (@$!%*?&)
                </li>
              </ul>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input password-input"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {confirmPassword && newPassword !== confirmPassword && (
                <span className="error-message">Passwords do not match</span>
              )}
            </div>

            <button type="submit" className="reset-btn" onClick={handleReset}>
              Reset Password
            </button>
          </form>

          <div className="reset-password-footer">
            <p className="back-to-login">
              Remember your password?{' '}
              <button type="button" className="login-link" onClick={() => navigate('/login')}>
                Sign in
              </button>
            </p>
          </div>
        </div>

        <div className="reset-password-right">
          <div className="reset-success-info">
            <div className="reset-success-icon">✅</div>
            <h3 className="reset-success-title">Password Reset</h3>
            <p className="reset-success-desc">
              Your new password must be strong and unique. We recommend using a combination of uppercase, lowercase, numbers, and special characters.
            </p>
            <div className="reset-security-tips">
              <div className="security-tip">
                <span className="security-icon">🔑</span>
                <span className="security-text">Use a unique password you haven't used before</span>
              </div>
              <div className="security-tip">
                <span className="security-icon">🔄</span>
                <span className="security-text">Change your password regularly for better security</span>
              </div>
              <div className="security-tip">
                <span className="security-icon">🔒</span>
                <span className="security-text">Never share your password with anyone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForTechnicians.css';
import TechnicianImage from '../../assets/images/TechnicianImage.jpeg';

const ForTechnicians: React.FC = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <section className="for-technicians" id="technicians">
      <div className="technicians-overlay"></div>
      <div className="technicians-container">
        <div className="technicians-content">
          <h1 className="technicians-title">
            Earn with your <span className="highlight">skills</span>
          </h1>
          
          <p className="technicians-description">
            Join hundreds of technicians already earning on myFundi Hub. 
            Set your own hours, accept jobs near you, and get paid instantly via M-Pesa.
          </p>

          <div className="technicians-actions">
            <button className="btn-apply" onClick={handleApply}>Apply as a technician →</button>
            <div className="login-link">
              Already registered? <button className="login-btn" onClick={handleLogin}>Log in</button>
            </div>
          </div>

          <div className="technicians-contact">
            <span className="contact-label">Questions?</span>
            <a href="mailto:myfundihub@gmail.com" className="contact-email">
              myfundihub@gmail.com
            </a>
            <span className="contact-divider">·</span>
            <a href="tel:+254799160014" className="contact-phone">
              +254 799 160 014
            </a>
          </div>
        </div>

        <div className="technicians-illustration">
          <img src={TechnicianImage} alt="Technicians" className="technicians-image" />
        </div>
      </div>
    </section>
  );
};

export default ForTechnicians;
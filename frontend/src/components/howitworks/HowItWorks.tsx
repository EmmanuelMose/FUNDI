import React from 'react';
import './HowItWorks.css';
import Image1 from '../../assets/images/Image1.jpg';
import Image2 from '../../assets/images/Image2.jpg';
import Image3 from '../../assets/images/Image3.png';
import Image4 from '../../assets/images/Image4.jpg';
import Image5 from '../../assets/images/Image5.jpeg';
import Image10 from '../../assets/images/Image10.jpeg';


const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 'step1',
      number: '01',
      title: 'Post your request',
      description: 'Describe what you need and drop your location. Takes under 60 seconds.',
      tag: '<60 sec',
      image: Image1
    },
    {
      id: 'step2',
      number: '02',
      title: 'Get matched instantly',
      description: 'Our system broadcasts your job to verified technicians near you in real time.',
      tag: 'Real-time',
      image: Image2
    },
    {
      id: 'step3',
      number: '03',
      title: 'Pay securely via M-Pesa',
      description: 'Once the job is done to your satisfaction, pay directly from your phone.',
      tag: 'M-Pesa payments',
      image: Image3
    }
  ];

  const features = [
    {
      id: 'feature1',
      title: 'Verified technicians',
      description: 'Every technician is identity-checked and admin-approved before going live on the platform.',
      icon: '✓',
      image: Image4
    },
    {
      id: 'feature2',
      title: 'GPS-based matching',
      description: 'Jobs are broadcast only to technicians who are actually near your location.',
      icon: '📍',
      image: Image5
    },
    {
      id: 'feature3',
      title: 'Real-time tracking',
      description: 'Watch job status update live - from requested to assigned to completed.',
      icon: '🔄',
      image: Image10
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="hiw-container">
        <div className="hiw-header">
          <span className="hiw-badge">FOR CUSTOMERS</span>
          <h2 className="hiw-title">WHY MYFUNDI HUB</h2>
          <h3 className="hiw-subtitle">Three steps to a fixed home</h3>
          <p className="hiw-description">
            Built to earn your trust. myFundi Hub makes booking a technician as simple as sending a text.
            We do the hard work of vetting, matching, and securing every booking.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className={`step-item step-${index + 1}`}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-image-wrapper">
                  <img src={step.image} alt={step.title} className="step-image" />
                  <span className="step-tag">{step.tag}</span>
                </div>
                <div className="step-text">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="features-container">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-image-wrapper">
                <img src={feature.image} alt={feature.title} className="feature-image" />
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <div className="feature-text">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hiw-cta">
          <button className="cta-button">Book a service →</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
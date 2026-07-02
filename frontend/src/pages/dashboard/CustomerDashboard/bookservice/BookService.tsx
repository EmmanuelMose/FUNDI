// bookservice/BookService.tsx
import React, { useState } from 'react';
import './BookService.css';

const BookService: React.FC = () => {
  const [serviceType, setServiceType] = useState('');
  const [location, setLocation] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
    <div className="book-service-page">
      <div className="page-header">
        <h1 className="page-title">Book a Service</h1>
        <p className="page-subtitle">Fill in the details below to request a service</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Service Type</label>
          <select 
            className="form-select" 
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="carpentry">Carpentry</option>
            <option value="painting">Painting</option>
            <option value="masonry">Masonry</option>
            <option value="appliance-repair">Appliance Repair</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Location</label>
          <div className="location-input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="Enter your location or pin on map"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <button type="button" className="location-btn">
              📍 Detect
            </button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-input"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Time</label>
            <input
              type="time"
              className="form-input"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            placeholder="Describe what you need fixed..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        <button type="submit" className="submit-btn">
          Find Technician →
        </button>
      </form>
    </div>
  );
};

export default BookService;
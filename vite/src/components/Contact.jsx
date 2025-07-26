import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-item">
              <h3 className="contact-label">Email</h3>
              <p className="contact-value">info@youraddress.com</p>
            </div>

            <div className="contact-item">
              <h3 className="contact-label">Phone</h3>
              <p className="contact-value">646-675-5974</p>
            </div>

            <div className="contact-item">
              <h3 className="contact-label">Address</h3>
              <p className="contact-value">3961 Small Street, New York, United States</p>
            </div>

            <div className="contact-divider">
              <div className="divider-line"></div>
              <div className="divider-star">✦</div>
              <div className="divider-line"></div>
            </div>

            <p className="contact-message">
              We welcome your inquiries and suggestions. Reach out to us anytime!
            </p>
          </div>

    
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <span className="required-asterisk">*</span>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <span className="required-asterisk">*</span>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
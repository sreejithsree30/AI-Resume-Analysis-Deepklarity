import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
  
        <div className="footer-main">
      
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon"></div>
              <span className="logo-text">Resume Analyser</span>
              <span className="logo-badge">RA</span>
            </div>
            <p className="footer-description">
              Subscribe to our newsletter for the latest updates on new features 
              and product releases.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe to Newsletter
              </button>
            </form>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
              <li><a href="#faqs" className="footer-link">FAQs</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#cookies" className="footer-link">Cookie Policy</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#sitemap" className="footer-link">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Follow Us</h3>
            <div className="social-links">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
                <span>X</span>
              </a>
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="#youtube" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
                <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>

    
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">© 2025 Company Name. All rights reserved.</p>
            <p className="designer-credit">Designed by RA</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#privacy" className="footer-bottom-link">/privacy</a>
            <a href="#terms" className="footer-bottom-link">/terms</a>
            <a href="#cookies" className="footer-bottom-link">/cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
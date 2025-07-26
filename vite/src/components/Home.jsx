import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/resume.jpg'
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Resume Analyzer</h1>
          <p className="hero-description">
            Upload your resume and receive detailed analysis and feedback for improvement.
          </p>
          <div className="hero-actions">
           <Link to="/upload"><button className="cta-btn primary">Get Started</button></Link>
            <button className="cta-btn secondary">Learn More</button>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-content">
          <div className="feature-item">
            <div className="feature-border"></div>
            <div className="feature-content">
              <h2 className="feature-title">Live Resume Analysis</h2>
              <p className="feature-description">
                Upload a resume in PDF format for automated analysis.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-border"></div>
            <div className="feature-content">
              <h2 className="feature-title">Historical Viewer</h2>
              <p className="feature-description">
                View previously analyzed resumes in a neat table.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="resume" className='resume-image' />
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Improve Your Resume?</h2>
            <p className="cta-description">
              Upload your resume now for a detailed analysis and personalized feedback.
            </p>
          </div>
          <div className="cta-action">
            <Link to="/upload"><button className="cta-button">Get Started</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
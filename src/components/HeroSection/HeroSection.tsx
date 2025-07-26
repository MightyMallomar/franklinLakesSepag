import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Supporting Families of Students with Special Needs in Franklin Lakes
          </h1>
          <p className="hero-subtitle">
            We advocate, educate, and empower families to ensure every child receives the education and support they deserve.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary btn-large">
              Learn About Us
            </Link>
            <Link to="/events" className="btn btn-outline btn-large">
              Join Our Events
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Families Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Annual Events</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
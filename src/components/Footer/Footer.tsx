import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Franklin Lakes SEPAG</h3>
            <p className="footer-description">
              Supporting families and students with special needs in Franklin Lakes, NJ.
              Together we advocate, educate, and empower our community.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="social-icon facebook">📘</i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="social-icon twitter">🐦</i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="social-icon instagram">📷</i>
              </a>
              <a href="mailto:info@franklinlakessepag.org" aria-label="Email">
                <i className="social-icon email">✉️</i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/resources#advocacy">Advocacy</Link></li>
              <li><Link to="/resources#education">Education</Link></li>
              <li><Link to="/resources#support">Support Groups</Link></li>
              <li><Link to="/resources#legal">Legal Resources</Link></li>
              <li><Link to="/resources#community">Community</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@franklinlakessepag.org">info@franklinlakessepag.org</a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+12015551234">(201) 555-1234</a>
              </p>
              <p>
                <strong>Address:</strong><br />
                Franklin Lakes, NJ 07417
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Franklin Lakes SEPAG. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
    { path: '/#newsletter', label: 'Subscribe', isSubscribe: true },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-container">
              <img src={logo} alt="Franklin Lakes SEPAG Logo" className="logo-image" />
              <div className="logo-text">
                <h1>Franklin Lakes SEPAG</h1>
                <span className="logo-subtitle">Special Education Parent Advisory Group</span>
              </div>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  {item.isSubscribe ? (
                    <button
                      onClick={() => {
                        if (location.pathname === '/') {
                          // If on home page, scroll to newsletter section
                          const newsletterSection = document.getElementById('newsletter-signup');
                          if (newsletterSection) {
                            newsletterSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          // If on other pages, navigate to home and scroll
                          window.location.href = '/#newsletter';
                        }
                      }}
                      className="nav-link nav-link-subscribe"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
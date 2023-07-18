import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Game Zone</h1>
        </div>
        <button className={`toggle-button ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="close-icon">X</span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item" style={{ zIndex: '9999' }}>
            <a href="#about">About</a>
          </li>
          <li className="navbar-item" style={{ zIndex: '9999' }}>
            <a href="#contact">Contact</a>
          </li>
          <li className="navbar-item" style={{ zIndex: '9999' }}>
            <a href="/login">Login / Register</a>
          </li>
        </ul>
      </div>
      <div className="backwrap gradient">
        <div className="back-shapes">
          <span
            className="floating circle"
            style={{
              top: '66.59856996935649%',
              left: '13.020833333333334%',
              animationDelay: '-0.9s',
            }}
          ></span>
          <span
            className="floating triangle"
            style={{
              top: '31.46067415730337%',
              left: '33.59375%',
              animationDelay: '-4.8s',
            }}
          ></span>
          <span
            className="floating cross"
            style={{
              top: '76.50663942798774%',
              left: '38.020833333333336%',
              animationDelay: '-4s',
            }}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

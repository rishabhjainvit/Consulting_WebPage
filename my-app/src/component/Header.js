import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    height: '60px',
  };

  const infoStyle = {
    color: '#555',
    fontSize: '14px',
    marginRight: '20px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    margin: '0 15px',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '10px',
  };

  const contactSectionStyle = {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px', // Adds space between contact info and nav links
  };

  return (
    <header style={headerStyle}>
      {/* Logo Section */}
      <div>
      <img src={logo} alt="RST Group Logo" style={logoStyle} />
      </div>

      {/* Contact Information and Navigation Links */}
      <div style={contactSectionStyle}>
        {/* Contact Information */}
        <div style={contactInfoStyle}>
          <p style={infoStyle}>
            Email: <a href="mailto:info@rstgroup.com" style={linkStyle}>info@rstgroup.com</a>
          </p>
          <p style={infoStyle}>
            Contact Us: <a href="tel:1800-123-8796" style={linkStyle}>1800-123-8796</a>
          </p>
        </div>

        {/* Navigation Links */}
        <nav style={navStyle}>
          <Link to="/About" style={linkStyle}>About Us</Link>
          <Link to="/Venture" style={linkStyle}>Our Ventures</Link>
          <Link to="/gallery" style={linkStyle}>Gallery</Link>
          <Link to="/contact" style={linkStyle}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Capture from '../assets/Capture.png';

// Header Component
const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    backgroundColor: '#ffffff', // Changed background to white for a cleaner look
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // More pronounced shadow for depth
    zIndex: 1000,
  };

  const logoStyle = {
    height: '60px',
    transition: 'transform 0.3s ease', // Smooth transition for logo
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
    transition: 'color 0.3s ease', // Smooth transition for link color
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
        <img 
          src={logo} 
          alt="RST Group Logo" 
          style={logoStyle} 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Logo hover effect
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* Contact Information and Navigation Links */}
      <div style={contactSectionStyle}>
        {/* Contact Information */}
        <div style={contactInfoStyle}>
          <p style={infoStyle}>
            Email: <a href="mailto:info@rstgroup.com" style={{ ...linkStyle, margin: 0 }}>info@rstgroup.com</a>
          </p>
          <p style={infoStyle}>
            Contact Us: <a href="tel:1800-123-8796" style={{ ...linkStyle, margin: 0 }}>1800-123-8796</a>
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

// Hero Component
const Hero = () => {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundImage: `url(${Capture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    padding: '40px',
    color: '#ffffff',
    textAlign: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text visibility
    zIndex: 0,
  };

  const heroTextStyle = {
    position: 'relative',
    zIndex: 1, // Ensure text is above the overlay
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Subtle text shadow for contrast
  };

  const heroTextHeadingStyle = {
    fontSize: '40px',
    margin: '0',
  };

  const heroTextSubStyle = {
    fontSize: '20px',
    margin: '0',
  };

  return (
    <section style={heroStyle}>
      {/* Optional overlay for darker background to make text stand out */}
      <div style={overlayStyle}></div>

      {/* Hero Text */}
      <div style={heroTextStyle}>
        {/* <h1 style={heroTextHeadingStyle}>India's Top Choice for Advanced PLC Panels</h1>
        <p style={heroTextSubStyle}>#EnergyEfficientPanels</p> */}
      </div>
    </section>
  );
};

// Combined Component
const CombinedComponent = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default CombinedComponent;

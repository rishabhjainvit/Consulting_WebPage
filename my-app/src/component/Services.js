import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import B from '../assets/B.png';
import C from '../assets/C.png';
// import D from '../assets/D.png';
import E from '../assets/E.png';
import F from '../assets/F.png';

const Services = () => {
  const servicesStyle = {
    display: 'grid', // Grid layout
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 cards per row
    gap: '20px', // Space between the cards
    padding: '40px',
    backgroundColor: '#f1f1f1',
  };

  const cardStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '0', // Remove padding
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px', // Add rounded corners
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover transition
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)', // Slight upward movement on hover
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px', // Adjust height to ensure it fills the card properly
    objectFit: 'cover', // Ensures the image covers the entire area without distortion
    borderTopLeftRadius: '10px', // Rounded corners for the image as well
    borderTopRightRadius: '10px', // Rounded corners for the image as well
  };

  const cardTitleStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    color: '#333',
    fontSize: '1.2rem',
  };

  const cardLinkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    marginTop: '15px',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: 'bold',
    paddingBottom: '20px',
  };

  const cardContainerStyle = {
    position: 'relative',
  };

  return (
    <section style={servicesStyle}>
      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <img src={B} alt="RST Electricals" style={cardImageStyle} />
          <h3 style={cardTitleStyle}>RST Electricals</h3>
          <Link to="/RstElectricals" style={cardLinkStyle}>Know More</Link>
        </div>
      </div>

      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <img src={C} alt="Power Solutions" style={cardImageStyle} />
          <h3 style={cardTitleStyle}>Power Solutions</h3>
          <Link to="/PowerSolutions" style={cardLinkStyle}>Know More</Link>
        </div>
      </div>

      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <img src={E} alt="Media Production" style={cardImageStyle} />
          <h3 style={cardTitleStyle}>Media Production</h3>
          <Link to="/MediaProduction" style={cardLinkStyle}>Know More</Link>
        </div>
      </div>

      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <img src={F} alt="Automation Solutions" style={cardImageStyle} />
          <h3 style={cardTitleStyle}>Automation Solutions</h3>
          <Link to="/AutomationSolutions" style={cardLinkStyle}>Know More</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

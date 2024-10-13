import React from 'react';
import A from '../assets/A.png';

const Overview = () => {
  const overviewStyle = {
    backgroundColor: '#fff', // Background color of the section
    padding: '40px',
    textAlign: 'center',
    marginTop: '20px', // Creates a gap between Hero and this box
    marginLeft: '40px', // Adds space on the left side
    marginRight: '40px', // Adds space on the right side
    borderRadius: '8px', // Optional: gives a slight rounded corner for a smoother look
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a subtle shadow for better visual appeal
  };

  const imageStyle = {
    maxWidth: '100%', // Ensures image is responsive
    height: 'auto', // Maintains aspect ratio of the image
    marginBottom: '20px', // Adds some space below the image
    borderRadius: '20px', // Adjust this value to control the border curve
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adds a shadow around the image
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Adds smooth transitions on hover
  };

  const imageHoverStyle = {
    transform: 'scale(1.05)', // Slight zoom-in effect on hover
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)', // Stronger shadow on hover
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, imageHoverStyle); // Apply hover effect
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, imageStyle); // Reset to normal style
  };

  return (
    <section style={overviewStyle}>
      {/* Image at the top with curved borders and shadow */}
      <img 
        src={A} 
        alt="Overview" 
        style={imageStyle} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />
    </section>
  );
};

export default Overview;

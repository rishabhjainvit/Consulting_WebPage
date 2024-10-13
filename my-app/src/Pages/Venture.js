import React from 'react';
import styled from 'styled-components';
import M from '../assets/M.png';
import N from '../assets/N.png';
import O from '../assets/O.png';
import P from '../assets/P.png';
import L from '../assets/L.png';
import AE from '../assets/AE.png';
import logo from '../assets/logo.png';

// Styled-components for CSS-in-JS styling
const Container = styled.div`
  font-family: Arial, sans-serif;
`;
const Headerr = styled.header`
  background-color: #ffffff; /* Changed to white */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 16px;
`;

const Header = styled.div`
  background-color: #00bfa6; /* Change to green */
  padding: 20px;
  text-align: left;
`;


const ContentSection = styled.div`
  display: flex; /* Flex layout for the content */
  flex: 1; /* Take full space */
  gap: 40px; /* Space between categories, image, and highlights */
`;

const CategoriesSection = styled.div`
  flex: 1; /* Categories take up 1 part */
  padding-right: 20px; /* Space to the right */
  border-right: 1px solid #e0e0e0; /* Divider line */
  
  h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    font-size: 16px;
    cursor: pointer;
    color: #0073b1;
  }

  li:hover {
    color: #00bfa6; /* Change color on hover */
  }
`;

const HighlightImage = styled.div`
  flex: 2; /* Image takes more space */
  
  img {
    width: 90%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 75px; /* Add gap above the image */
  }
`;
const ImageContent = styled.div`
  margin-top: 20px; /* Space above the additional content */
  
  h2 {
    color: #0073b1; /* Heading color */
    margin-bottom: 10px; /* Space below heading */
    font-size: 22px; /* Heading size */
    font-weight: 600; /* Bold heading */
    text-align: center; /* Center the heading */
    
  }

  p {
    color: #333; /* Paragraph text color */
    font-size: 16px; /* Paragraph font size */
    line-height: 1.6; /* Improved readability */
  }

  ul {
    list-style-type: circle; /* Different bullet style for the list */
    padding-left: 20px; /* Indentation for list items */
  }

  li {
    margin-bottom: 10px; /* Space between list items */
    font-size: 16px; /* List item font size */
  }
`;

const HighlightText = styled.div`
  flex: 1; /* Highlights take 1 part */
  
  h2 {
    color: #0073b1;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
  }
  
  li::before {
    content: '✔️'; /* Checkmark before each item */
    margin-right: 10px;
    color: #00bfa6;
  }
`;



const ProductSection = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 20px 0;
`;

const Product = styled.div`
  width: 300px;
  background-color: #fff;
  text-align: center;
  padding: 10px;
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    color: #0073b1;
    margin-top: 15px;
  }
  p {
    font-size: 14px;
    color: #555;
  }
`;

const ContactForm = styled.div`
  background-color: #00bfa5;
  padding: 30px;
  text-align: center;
  color: white;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input, textarea {
    width: 300px;
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
  button {
    padding: 10px 20px;
    background-color: #0073b1;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const LocationsSection = styled.section`
  padding: 40px 20px;
  background-image: url(${L}); /* Set the map image as the background */
  background-size: cover; /* Ensure the map covers the entire section */
  background-position: center; /* Center the map within the section */
  position: relative; /* Ensure the boxes can be positioned over the map */
  min-height: 500px; /* Set a minimum height for the section */
`;
const MapSectionTitle = styled.h2`
  color: #0073b1;
  margin-bottom: 20px; /* Space between title and the map */
  text-align: center; /* Center the title above the map */
`;

const Locations = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allow boxes to wrap for better responsiveness */
 padding: 250px 10px 10px 10px; /* Add more top padding to move boxes further down */
`;

const LocationBox = styled.div`
  width: 200px;
  background-color: #00bfa6; /* Green background */
  padding: 15px; /* Smaller padding to minimize size */
  text-align: center;
  border-radius: 8px;
  color: #fff; /* White text for better contrast */
  margin: 5px; /* Minimal margin between the boxes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for better appearance */
  
  h4 {
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }
`;


const FooterContainer = styled.footer`
  padding: 20px 0; /* Adjust padding as needed */
  color: #fff; /* Change text color for visibility */
`;

const FooterContent = styled.div`
  display: flex; /* Display flex for column layout */
  justify-content: space-around; /* Space columns evenly */
  max-width: 1200px; /* Optional: Set a max width */
  margin: 0 auto; /* Center the content */
`;

const FooterColumn = styled.div`
  flex: 1; /* Allow columns to grow equally */
  padding: 20px; /* Adjust padding as needed */
`;

const FooterBottom = styled.div`
  text-align: center; /* Center the text */
  margin-top: 20px; /* Space between columns and footer text */
`;



// const Footer = styled.div`
//   background-color: #f2f2f2;
//   padding: 20px;
//   text-align: center;
//   color: #555;
//   small {
//     display: block;
//     margin-top: 10px;
//   }
// `;

// const MapSection = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   text-align: center;
//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//   }
// `;

const Venture = () => {
  return (
    <Container>
      <Headerr>
        <LogoContainer>
          <Logo src={logo} alt="RST Logo" />
          {/* <HeaderTitle>RST Power Solutions</HeaderTitle> */}
        </LogoContainer>
        <Nav>
          <NavLink href="#news">News & Media</NavLink>
          <NavLink href="#careers">Careers</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </Nav>
      </Headerr>
      {/* Header */}
      <Header>
        <h1>Our Product</h1>
      </Header>

      {/* Categories Section */}
      <ContentSection>
        <CategoriesSection>
          <h2>Categories</h2>
          <h2>LV/MV Panels</h2>
          <ul>
            <li>TTA Panel</li>
            <li>HT Panel</li>
            <li>MCC Panel</li>
            <li>IMCC Panel</li>
            <li>PCC Panel</li>
            <li>Stainless Steel Panel</li>
            <li>LV Busduct</li>
            <li>VFD Panel / Soft Starter Panel</li>
            <li>ATS Panel</li>
            <li>APFC Panel</li>
            <li>PLC & Smart Panel</li>
            <li>800V AC & DC Panel</li>
            <li>DC Switchboard</li>
            <li>CRP Panel</li>
            <li>Synchronization Panel</li>
            <li>Drawout Panel</li>
          </ul>
            <h2>Resistor</h2>
            <ul>
                <li>LAVT Panel</li>
                <li>NGR Panel</li>
            </ul>
        </CategoriesSection>

        {/* Highlight Image */}
        <HighlightImage>
          <img src={M} alt="TTA Panel" />
          <ImageContent>
        <h2>About TTA Panels</h2>
        <p>
          TTA Panels are designed for optimal performance in various industrial applications. 
          With advanced features and robust construction, they ensure safety and efficiency. 
          Ideal for installations requiring high reliability and performance.
        </p>
        <p>
          TTA Panels are designed for optimal performance in various industrial applications. 
          With advanced features and robust construction, they ensure safety and efficiency. 
          Ideal for installations requiring high reliability and performance.
        </p>
        </ImageContent>
        </HighlightImage>

        {/* Highlight Text Section */}
        <HighlightText>
          <h2>Highlights</h2>
          <ul>
            <li>Compliance with the latest IEC standards: IEC 61439-1 & 2.</li>
            <li>Designed up to 6300A.</li>
            <li>Stringent fault withstand capacity up to 100kA for 1s.</li>
            <li>Ingress Protection rating of up to IP54, and IP2X after opening the door.</li>
            <li>Seismic Zone V compliance.</li>
            <li>Internal arc withstand capacity of 70kA for 500ms.</li>
            <li>Flexibility in busbar and cable entry.</li>
            <li>Available in ABB, Schneider, Siemens, L&T, and others.</li>
            <li>Flexibility in busbar and cable entry.</li>
            <li>Available in ABB, Schneider, Siemens, L&T, and others.</li>
            <li>Flexibility in busbar and cable entry.</li>
            <li>Available in ABB, Schneider, Siemens, L&T, and others.</li>
            <li>Flexibility in busbar and cable entry.</li>
            <li>Available in ABB, Schneider, Siemens, L&T, and others.</li>
            <li>Flexibility in busbar and cable entry.</li>
            <li>Available in ABB, Schneider, Siemens, L&T, and others.</li>
          </ul>
        </HighlightText>

         {/* <AdditionalContent>
    <h2>About TTA Panels</h2>
    <p>
      TTA Panels are designed for optimal performance in various industrial applications. 
      With advanced features and robust construction, they ensure safety and efficiency. 
      Ideal for installations requiring high reliability and performance.
    </p> */}
    
    
  
  {/* </AdditionalContent> */}
      </ContentSection>
  

      {/* Product Section */}
      <ProductSection>
        <Product>
          <img src={N} alt="800V AC and DC Panel" />
          <h3>800V AC and DC Panel</h3>
          <p>High-quality control panels for solar power and energy management systems.</p>
        </Product>
        <Product>
          <img src={O} alt="CRP Panel" />
          <h3>CRP Panel</h3>
          <p>Compact and efficient control relay panels for optimal power distribution.</p>
        </Product>
        <Product>
          <img src={P} alt="HT Panel" />
          <h3>HT Panel</h3>
          <p>High-tension panels for reliable power distribution and fault management.</p>
        </Product>
      </ProductSection>

      {/* Contact Form */}
      <ContactForm>
        <h2>Request a Quote</h2>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="Company (Optional)" />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Items Needed" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </ContactForm>

      {/* Map Section
      <MapSection>
        <h2>Our Locations</h2>
        <img src="https://via.placeholder.com/600x300" alt="Location Map" />
      </MapSection>

      {/* Footer */}
      {/* <Footer>
        <p>© 2024 RST Electricals Pvt. Ltd. All Rights Reserved.</p>
        <small>ISO 9001, 14001, 18001 Certified</small>
      </Footer> */} 
       {/* Locations Section */}
      {/* Our Locations Section */}
      <MapSectionTitle>Our Locations</MapSectionTitle>
      <LocationsSection>
      
        <Locations>
          <LocationBox>
            <h4>Unit I</h4>
            <p>Location details here</p>
          </LocationBox>
          <LocationBox>
            <h4>Unit II</h4>
            <p>Location details here</p>
          </LocationBox>
          <LocationBox>
            <h4>Unit III</h4>
            <p>Location details here</p>
          </LocationBox>
          <LocationBox>
            <h4>Unit IV</h4>
            <p>Location details here</p>
          </LocationBox>
        </Locations>
      </LocationsSection>


      {/* Footer Section */}
      {/* Footer Section */}
      <FooterContainer style={{
       backgroundImage: `url(${AE})`, // Replace with your image path
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}>
      <FooterContent>
        {/* Column 1 - Logo and Company Info */}
        <FooterColumn>
          <h3 className="footer-logo">Your Logo</h3>
          <p className="footer-description">
            A brief description or tagline of your company that gives context about what you do.
          </p>
        </FooterColumn>

        {/* Column 2 - Navigation Links */}
        <FooterColumn>
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </FooterColumn>

        {/* Column 3 - Services Links */}
        <FooterColumn>
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="/web-design">Web Design</a></li>
            <li><a href="/seo">SEO</a></li>
            <li><a href="/marketing">Digital Marketing</a></li>
            <li><a href="/hosting">Hosting</a></li>
          </ul>
        </FooterColumn>

        {/* Column 4 - Contact Information */}
        <FooterColumn>
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li>Email: info@yourcompany.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main Street, City</li>
          </ul>
        </FooterColumn>
      </FooterContent>

      {/* Footer bottom section */}
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>

    </Container>
  );
};

export default Venture;

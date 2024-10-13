import React from 'react';
import styled from 'styled-components';
import ZZ from '../assets/ZZ.png';
import logo from '../assets/logo.png';
import XX from '../assets/XX.png';
import XXX from '../assets/XXX.png';
import XXXX from '../assets/XXXX.png';
import AAA from '../assets/AAA.png';
import L from '../assets/L.png';
import AB from '../assets/AB.png';
import BA from '../assets/BA.png';
import CD from '../assets/CD.png';
import AE from '../assets/AE.png';

// Styled Components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  padding: 0;
`;

// Header Section
const Header = styled.header`
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

// Large Image Section
const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroText = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px;

  h1 {
    font-size: 48px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }
`;

// Popular Products & Categories Section
const PopularSection = styled.section`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #00bfa6; /* Darker green hex code */
  text-align: center;
  margin-bottom: 10px;
`;


const SectionDescription = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
`;

const PopularContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 30px; /* Added margin to prevent overlapping */
`;

// Arrow Component
const Arrow = styled.span`
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
`;

// Updated CategoryCard
const CategoryCard = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden; /* Ensure content doesn't overflow */
`;

const CategoryImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 200px; /* Adjust height as necessary */
  /* Using props to set background image */
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`;

const CategoryContent = styled.div`
  background-color: rgba(255, 255, 255, 0.9); /* Light background for better readability */
  padding: 10px;
`;

const CategoryCardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  text-align: center; /* Center the text */
`;


const CategoryCardDescription = styled.p`
  font-size: 1rem;
  margin: 5px 0 0;
  text-align: center; /* Center the text */
`;

const ImageSection = styled.section`
  margin: 40px auto;
  padding: 20px;
  text-align: center;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 20px auto;
`;

const InsertedImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 10px;
  text-align: left;
`;

const FormTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #00bfa6; /* Darker green for the title */
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #00bfa6; /* Darker green for the button background */
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;

  &:hover {
    background-color: #388e3c; /* Slightly darker green for hover effect */
  }
`;
  

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const DownloadFormButton = styled.button`
  background-color: #00bfa6;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #008f78;
  }
`;

const BrowseTitle = styled.h4`
  margin-top: 30px;
  font-size: 1.5rem;
  color: #00bfa6; /* Darker green hex code */
`;


const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const HorizontalImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 10px;
`;



// Team Section
// Team Section
const TeamSection = styled.section`
  margin: 60px auto; /* Center the section and add vertical spacing */
  text-align: center; /* Center the section content */
  max-width: 1200px; /* Set a max width for the section */
  padding: 0 20px; /* Add some padding for smaller screens */
`;

const TeamImage = styled.img`
  width: 100%; /* Adjust width to cover the section */
  max-width: 1200px; /* Set a max width for the image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Optional: Add rounded corners */
  margin-top: 20px; /* Space above the image */
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
  color: #00bfa6; /* Darker green hex code */
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




// Component Structure
const MyWebPage = () => {
  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <LogoContainer>
          <Logo src={logo} alt="RST Logo" />
        </LogoContainer>
        <Nav>
          <NavLink href="/About">About Us</NavLink>
          <NavLink href="/Venture">Ventures</NavLink>
          <NavLink href="#contact">Co</NavLink>
        </Nav>
      </Header>

      {/* Large Image Section */}
      <HeroSection>
        <HeroImage src={ZZ} alt="Main Image" />
        <HeroText>
          {/* <h1>India's Most Trusted Diesel Genset</h1>
          <p>Providing reliable energy solutions since 2005. Powering industries and businesses across the nation.</p> */}
        </HeroText>
      </HeroSection>

      {/* Popular Products & Categories */}
      <PopularSection>
        <SectionTitle>Popular Products</SectionTitle>
        <SectionDescription>Explore our range of popular products.</SectionDescription>
        <PopularContent>
          <Arrow>&lt;</Arrow> {/* Left arrow */}
          <CategoryCard>
            <CategoryImage backgroundImage={XX} />
            <CategoryContent>
              <CategoryCardTitle>Product Title 1</CategoryCardTitle>
              <CategoryCardDescription>Short description about product 1.</CategoryCardDescription>
            </CategoryContent>
          </CategoryCard>

          <CategoryCard>
            <CategoryImage backgroundImage={XXX} />
            <CategoryContent>
              <CategoryCardTitle>Product Title 2</CategoryCardTitle>
              <CategoryCardDescription>Short description about product 2.</CategoryCardDescription>
            </CategoryContent>
          </CategoryCard>

          <CategoryCard>
            <CategoryImage backgroundImage={XXXX} />
            <CategoryContent>
              <CategoryCardTitle>Product Title 3</CategoryCardTitle>
              <CategoryCardDescription>Short description about product 3.</CategoryCardDescription>
            </CategoryContent>
          </CategoryCard>
          <Arrow>&gt;</Arrow> {/* Right arrow */}
        </PopularContent>   
      </PopularSection>

      <ImageSection>
  <ContentBox>
    <InsertedImage src={AB} alt="Inserted Image" />
    <FormContainer>
      <FormTitle>Download Our Brochure</FormTitle>
      <DownloadButton href="#">Download Brochure</DownloadButton>
      <Form>
        <FormRow>
          <InputField type="text" placeholder="First Name" required />
          <InputField type="text" placeholder="Last Name" required />
        </FormRow>
        <InputField type="text" placeholder="Company" required />
        <InputField type="email" placeholder="Email" required />
        <DownloadFormButton type="submit">Download</DownloadFormButton>
      </Form>
    </FormContainer>
  </ContentBox>

  <BrowseTitle>Or Browse All Categories</BrowseTitle>

  <ImageGrid>
    <HorizontalImage src={BA} alt="Category 1" />
    <HorizontalImage src={CD} alt="Category 2" />
  </ImageGrid>
</ImageSection>

      {/* Team Section */}
      <TeamSection>
        <SectionTitle>Meet Our Team</SectionTitle>
        <TeamImage src={AAA} alt="Our Team" />
      </TeamSection>
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
    </PageContainer>
  );
};

export default MyWebPage;

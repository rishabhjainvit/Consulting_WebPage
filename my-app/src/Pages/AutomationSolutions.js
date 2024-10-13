import React from 'react';
import styled from 'styled-components';
import Q from '../assets/Q.png';
import R from '../assets/R.png';
import S from '../assets/S.png';
import I from '../assets/I.png';
import J from '../assets/J.png';
import K from '../assets/K.png';
import H from '../assets/H.png';
import T from '../assets/T.png';
import U from '../assets/U.png';

import logo from '../assets/logo.png';

const AutomationSolution = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo src={logo} alt="RST Logo" />
          {/* <HeaderTitle>RST Power Solutions</HeaderTitle> */}
        </LogoContainer>
        <Nav>
          <NavLink href="#news">News & Media</NavLink>
          <NavLink href="#careers">Careers</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </Nav>
      </Header>
      {/* Hero Section with the large image */}
      <HeroSection>
        <HeroImg src={Q} alt="Large Background Image" />
        <HeroOverlay>
          <HeroText>
            “Global Push for Renewable Energy Accelerates, Driven by Solar and Wind Power Investments.”
          </HeroText>
          <HeroButton>Discover More</HeroButton>
        </HeroOverlay>
      </HeroSection>

      {/* Welcome Section */}
      <WelcomeSection>
        <WelcomeHeading>Welcome to RST Power Project Pvt. Ltd.</WelcomeHeading>
        <WelcomeText>
          At RST Power Project Pvt. Ltd., we are dedicated to providing innovative solutions in the power distribution and transmission sector. 
          With a commitment to sustainability, our services ensure reliable and efficient energy solutions for a wide range of industries. 
          Our team of experts focuses on enhancing the renewable energy landscape, aligning with global initiatives to reduce carbon footprints.
        </WelcomeText>
        <WelcomeText>
          From power distribution to state-of-the-art transmission systems, we ensure that our clients receive the best possible services to meet their energy needs. 
          Our goal is to pave the way for a cleaner, more energy-efficient future.
        </WelcomeText>
        <ReadMoreButton>Read More</ReadMoreButton>
      </WelcomeSection>

      {/* About Section with image and text side by side, including services */}
      <AboutSection>
  <AboutImageContainer>
    <Img src={R} alt="About Us Image" />
  </AboutImageContainer>
  <AboutContent>
    {/* <AboutHeading>About RST Power Project Pvt. Ltd.</AboutHeading>
    <AboutText>
      At RST Power Project Pvt. Ltd., we pride ourselves on being a premier provider of innovative, efficient, and reliable solutions 
      within the electrical power systems industry. Our unwavering commitment to quality and customer satisfaction has established 
      us as a trusted name in the sector. */}
    {/* </AboutText> */}

    {/* Our Services Section within the About Section */}
    <ServicesSection>
      <SectionHeading>Our Services Include:</SectionHeading>
      <Service>
        <ServiceHeading>Power Distribution & Transmission</ServiceHeading>
        <ServiceText>
          We specialize in providing state-of-the-art power distribution and transmission solutions.
        </ServiceText>
        <ServiceText>
          Our expertise in solar, wind, and other renewable energy sources helps us provide sustainable energy solutions that reduce carbon footprints.
        </ServiceText>
        <ServiceText>
          We integrate cutting-edge smart grid technology to optimize energy efficiency and reliability.
        </ServiceText>
      </Service>
      {/* <Service>
        <ServiceHeading>Renewable Energy Solutions</ServiceHeading>
        <ServiceText>
          Our expertise in solar, wind, and other renewable energy sources helps us provide sustainable energy solutions that reduce carbon footprints.
        </ServiceText>
      </Service>
      <Service>
        <ServiceHeading>Smart Grid Technology</ServiceHeading>
        <ServiceText>
          We integrate cutting-edge smart grid technology to optimize energy efficiency and reliability.
        </ServiceText>
      </Service> */}
    </ServicesSection>
  </AboutContent>
</AboutSection>

      {/* Management Team Section */}
      {/* <ManagementSection>
  <TeamContainer>
    <ManagementInfo>
      <InfoText>EXISTENCE: 21 Years</InfoText>
      <InfoText>FOOTPRINTS: PAN India & Neighboring Countries</InfoText>
      <InfoText>PEOPLE STRENGTH: 110</InfoText>
      <InfoText>SYSTEMS: ISO 9001, 14001, 18001</InfoText>
    </ManagementInfo>
    <SectionHeading>Management Team</SectionHeading>
    <TeamGrid>
      <TeamMember>
        <TeamImage src={H} alt="R.S. Tomar" />
        <TeamName>R.S. Tomar</TeamName>
        <TeamPosition>Founder & Chairman</TeamPosition>
      </TeamMember>
      <TeamMember>
        <TeamImage src={S} alt="Shantanu Tomar" />
        <TeamName>Shantanu Tomar</TeamName>
        <TeamPosition>Director</TeamPosition>
      </TeamMember>
      <TeamMember>
        <TeamImage src={H} alt="Sachin Tomar" />
        <TeamName>Sachin Tomar</TeamName>
        <TeamPosition>Director</TeamPosition>
      </TeamMember>
      <TeamMember>
        <TeamImage src={S} alt="Siddhartha Tomar" />
        <TeamName>Siddhartha Tomar</TeamName>
        <TeamPosition>Director</TeamPosition>
      </TeamMember>
    </TeamGrid>
  </TeamContainer>
</ManagementSection> */}

<ManagementSection>
  <TeamContainer>
    <TeamImage src={U} alt="Team Image" />
  </TeamContainer>
</ManagementSection>




      {/* Clients Section */}
      <CertificationsSection>
  <SectionTitle>Our Clients</SectionTitle>
  <Certifications>
    <CertificationBox>
      <CertificationImage src={I} alt="ISO 9001:2015" />
      {/* <CertificationText>ISO 9001:2015</CertificationText> */}
    </CertificationBox>
    <CertificationBox>
      <CertificationImage src={J} alt="Pepsi" />
      {/* <CertificationText>Certified Partner of Pepsi</CertificationText> */}
    </CertificationBox>
    <CertificationBox>
      <CertificationImage src={K} alt="Nestle" />
      {/* <CertificationText>Certified Partner of Nestle</CertificationText> */}
    </CertificationBox>
  </Certifications>
</CertificationsSection>

<GetInTouchSection>
      <SectionHeading>Get in Touch</SectionHeading>
      <InfoText>
        Ready to power up your next project? Contact us today to learn more about how RST Power Project Pvt. Ltd. can help you achieve your energy and infrastructure goals.
      </InfoText>
      <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>JOIN OUR NEWSLETTER</p>
      <NewsletterContainer>
        <Input type="email" placeholder="E-mail" />
        <SubscribeButton>Subscribe</SubscribeButton>
      </NewsletterContainer>
    </GetInTouchSection>

      {/* Footer Section */}
      <FooterContainer>
      <FooterLogo>RST Power Projects</FooterLogo>
      <FooterContent>
        <FooterColumn>
          <h4>About</h4>
          <a href="#">About RST Electricals</a>
          <a href="#">Our Story</a>
          <a href="#">Careers</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Contact Us</h4>
          <a href="#">Email Us</a>
          <a href="#">Call Us</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Resources</h4>
          <a href="#">Credit Application</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Return Policy</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Terms</h4>
          <a href="#">Terms of Service</a>
          <a href="#">Warranty & Testing</a>
          <a href="#">Sitemap</a>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        <FooterText>
          Electrical Solutions Now | RST Electricals Pvt. Ltd. is a provider of both small and complex electrical solutions. Electrical contractors value our short lead times. From replacement circuit breakers to custom-built switchgear and switchboards, our team of experts solves problems of all sizes for various industries.
        </FooterText>
        <FooterText>© Copyright 2024 RST Power Projects Pvt. Ltd. All Rights Reserved.</FooterText>
      </FooterBottom>
    </FooterContainer>
  {/* );
}; */}
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;
const Header = styled.header`
  background-color: #002f6c; /* Dark blue */
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
  color: #fff;
  text-decoration: none;
  font-size: 16px;
`;

// Hero Section Styles
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroText = styled.h2`
  color: #fff;
  font-size: 32px;
  max-width: 800px;
`;

const HeroButton = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #ff5733;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Welcome Section Styles
const WelcomeSection = styled.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #f8f8f8;
`;

const WelcomeHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const WelcomeText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const ReadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// About Section Styles
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: 60px 20px;
  background-color: #f8f8f8;
`;

const AboutImageContainer = styled.div`
  flex: 1;
  margin-right: 40px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const AboutContent = styled.div`
  flex: 2;
`;

const AboutHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

// Updated Services Section (without box styling)
const ServicesSection = styled.div`
  margin-top: -90px; /* Move the section upwards */
`;

const SectionHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Service = styled.div`
  margin: 20px 0;
`;

const ServiceHeading = styled.h3`
  font-size: 20px;
`;

const ServiceText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;
// Management Team Section
// const ManagementSection = styled.section`
//   padding: 40px 20px;
//   text-align: center;
// `;

// const TeamContainer = styled.div`
//   position: relative; /* Position relative for overlapping effect */
//   background-color: #007bff; /* Blue background */
//   padding: 40px 20px; /* Padding inside the blue box */
//   border-radius: 10px; /* Rounded corners */
//   overflow: visible; /* Allows for the images to overflow */
// `;

// const ManagementInfo = styled.div`
//   margin-bottom: 20px; /* Space between info and title */
//   font-size: 16px; /* Font size for info */
//   color: #fff; /* Color for info text */
// `;

// const InfoText = styled.p`
//   margin: 5px 0; /* Space between info texts */
// `;

// // const SectionHeading = styled.h2`
// //   font-size: 24px;
// //   color: #fff; /* Color for section heading */
// //   margin: 10px 0; /* Space around heading */
// // `;

// const TeamGrid = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px; /* Adjust gap as needed */
//   margin-top: 20px; /* Space between title and images */
// `;

// const TeamMember = styled.div`
//   position: relative; /* To position the image */
//   text-align: center;
//   width: 200px; /* Set a width for uniformity */
//   margin-top: 40px; /* Adjust as necessary to position images correctly */
// `;

// const TeamImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px; /* Box style */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow effect */
//   position: absolute; /* Absolute positioning for overlap */
//   top: -40px; /* Move the image upwards to overlap */
// `;

// const TeamName = styled.h4`
//   font-size: 18px;
//   margin-top: 10px;
// `;

// const TeamPosition = styled.p`
//   font-size: 16px;
// `;

const ManagementSection = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const TeamContainer = styled.div`
  position: relative; /* Position relative for the image */
//   background-color: #007bff; /* Blue background */
  padding: 0; /* Remove padding since we are using a full image */
  overflow: hidden; /* Prevent overflow */
  height: 400px; /* Set a height for the blue box */
  border-radius: 10px; /* Optional: Rounded corners */
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%; /* Make sure the image covers the entire box */
  object-fit: cover; /* Ensure the image covers without distortion */
`;


// Clients Section
const SectionTitle = styled.h2`
  color: #0073b1;
  text-align: center;
  margin: 40px 0 20px;
`;
const CertificationsSection = styled.section`
  padding: 40px 20px;
  background-color: #f8f8f8;
`;

const Certifications = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
   gap: 30px;
`;

const CertificationBox = styled.div`
  width: 180px;  /* Increased box width */
  height: 180px;  /* Increased box height */
  background-color: #fff;  /* Changed background color to white */
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Added subtle shadow for better appearance */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const CertificationImage = styled.img`
  width: 100px;  /* Increased image width */
  height: auto;
  margin-bottom: 10px;
`;

const CertificationText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;
const Arrow = styled.div`
  position: absolute;
  font-size: 24px;
  cursor: pointer;
  color: #0073b1; /* Change color as needed */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2); /* Scale effect on hover */
  }
`;
const GetInTouchSection = styled.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #fff; /* Light background */
`;

// const SectionHeading = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
//   color: #003366; /* Slight blue shade */
// `;

const InfoText = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  width: 300px;
  outline: none;
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
// Footer Section
const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: #002f6c;
  color: #fff;
  text-align: center;
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  & h4 {
    margin-bottom: 15px;
    font-size: 18px;
  }

  & a {
    color: #fff;
    margin-bottom: 10px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ffffff50;
  padding-top: 20px;
  font-size: 12px;
`;

const FooterText = styled.p`
  margin: 0;
`;

export default AutomationSolution;

import React from "react";
import styled from "styled-components";
import V from '../assets/V.png';
import logo from '../assets/logo.png';
import X from '../assets/X.png';
import Y from '../assets/Y.png';
import I from '../assets/I.png';
import J from '../assets/J.png';
import K from '../assets/K.png';
import Z from '../assets/Z.png';
const PowerSolution = () => {
  return (
    <Container>
      {/* Header Section */}
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

      {/* Hero Section */}
      <HeroSection>
        <HeroImage src={V} alt="Main Image" />
        <HeroText>
          {/* <h1>India's Most Trusted Diesel Genset</h1>
          <p>Providing reliable energy solutions since 2005. Powering industries and businesses across the nation.</p> */}
        </HeroText>
      </HeroSection>

      {/* Info Section */}
      <InfoSection>
        <InfoContent>
          <InfoLogo>
            <LogoImage src={X} alt="RST Logo" />
          </InfoLogo>
          <InfoText>
            <h2>Why Choose RST Power Solutions?</h2>
            <p>We are committed to delivering quality and reliability in every project we undertake. Our extensive network and unparalleled expertise ensure that we meet the energy demands of businesses across the country.</p>
            <p>With over two decades of experience, we pride ourselves on providing world-class services that are tailored to the unique needs of our clients.</p>
          </InfoText>
        </InfoContent>
      </InfoSection>

      {/* Services Section */}
      <ServicesSection>
        <ServicesTitle>Our Best Services</ServicesTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🔧</ServiceIcon>
            <ServiceTitle>24/7 Support</ServiceTitle>
            <ServiceDesc>Providing education and consulting in our services.</ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>📞</ServiceIcon>
            <ServiceTitle>Service on Call</ServiceTitle>
            <ServiceDesc>Expert solutions delivered on time.</ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🛠️</ServiceIcon>
            <ServiceTitle>Strong Dealer Network</ServiceTitle>
            <ServiceDesc>Reaching every corner of the nation.</ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🔇</ServiceIcon>
            <ServiceTitle>Lowest Noise</ServiceTitle>
            <ServiceDesc>Minimizing operational noise for peace of mind.</ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>⛽</ServiceIcon>
            <ServiceTitle>Lowest Fuel Consumption</ServiceTitle>
            <ServiceDesc>Maximizing efficiency with reduced costs.</ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>💸</ServiceIcon>
            <ServiceTitle>Lowest Operation Cost</ServiceTitle>
            <ServiceDesc>Optimized for cost-effective operations.</ServiceDesc>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Management Team Section */}
      {/* <TeamSection>
        <SectionTitle>Management Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="R.S. Tomar" />
            <MemberName>R.S. Tomar</MemberName>
            <MemberRole>Founder & Chairman</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Shantanu Tomar" />
            <MemberName>Shantanu Tomar</MemberName>
            <MemberRole>Director</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Vishal Yadav" />
            <MemberName>Vishal Yadav</MemberName>
            <MemberRole>Director</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Abhinandan Singh" />
            <MemberName>Abhinandan Singh</MemberName>
            <MemberRole>Branding & Strategy Head</MemberRole>
          </TeamMember>
        </TeamGrid>
      </TeamSection> */}
      <TeamSection>
  <TeamBackground>
    <SectionTitle>Our Team</SectionTitle>
    <TeamImage src={Y} alt="Team Background" />
  </TeamBackground>
</TeamSection>

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
<GallerySection>
        <GalleryBackground>
          {/* <SectionTitle>Our Organization's Gallery</SectionTitle> */}
          <GalleryImage src={Z} alt="Gallery Background" />
        </GalleryBackground>
      </GallerySection>

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
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  background-color: #d71a22;
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

const HeroSection = styled.section`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the section without distortion */
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroText = styled.div`
  position: relative;
  z-index: 1; /* Ensures the text appears above the image */
  color: #fff;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px; /* Adds some padding to the text for better readability */
  
  h1 {
    font-size: 48px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }
`;

const InfoSection = styled.section`
  padding: 60px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
`;

const InfoContent = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const InfoLogo = styled.div`
  flex: 1;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 300px;
`;

const InfoText = styled.div`
  flex: 2;
  padding-left: 20px;

  h2 {
    font-size: 32px;
    color: #d71a22;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }
`;

const ServicesSection = styled.section`
  background-color: #d71a22;
  color: #fff;
  padding: 40px;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
`;

const ServiceDesc = styled.p`
  font-size: 14px;
`;

// const TeamSection = styled.section`
//   padding: 40px;
//   background-color: #fff;
// `;

// const SectionTitle = styled.h2`
//   font-size: 28px;
//   margin-bottom: 20px;
//   text-align: center;
// `;

const TeamSection = styled.section`
  position: relative;
  padding: 60px 0; /* Removed horizontal padding to cover full width */
`;

const TeamBackground = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed */
  overflow: hidden;
`;

const TeamImage = styled.img`
  width: 100vw; /* Use viewport width to cover full width */
  height: 100%; /* Keep height at 100% of the container */
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Image behind text */
`;

const SectionTitle = styled.h2`
  position: relative;
  color: #000; /* Change text color to black */
  text-align: center;
  z-index: 1; /* Text above image */
  font-size: 28px;
  margin-top: -25px;
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
const GallerySection = styled.section`
  position: relative;
  padding: 60px 0; /* Adjust padding as needed */
`;

const GalleryBackground = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed */
  overflow: hidden;
`;

const GalleryImage = styled.img`
  width: 100vw; /* Use viewport width to cover full width */
  height: 100%; /* Keep height at 100% of the container */
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Image behind text */
`;



const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: #b00000; /* Updated to red */
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

export default PowerSolution;

import React from 'react';
import styled from 'styled-components';
import  AA from '../assets/AA.png';
import logo from '../assets/logo.png';
import  BB from '../assets/BB.png';
import CC from '../assets/CC.png';
import DD from '../assets/DD.png';
import EE from '../assets/EE.png';
import FF from '../assets/FF.png';
import GG from '../assets/GG.png';
import HH from '../assets/HH.png';
import II from '../assets/II.png';

const MediaProduction = () => {
  return (
    <Container>
       <TopImageSection>
        <TopImage src={CC} alt="Top Image" />
      </TopImageSection>
      {/* Header Section */}
      <Header>
        <LogoContainer>
          <Logo src={BB} alt="RST Logo" />
          {/* <HeaderTitle>RST Power Solutions</HeaderTitle> */}
        </LogoContainer>
        <Nav>
          <NavLink href="#news">News & Media</NavLink>
          <NavLink href="#careers">Careers</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </Nav>
      </Header>

      {/* Large Main Image */}
      <MainImageSection>
        <MainImage src={AA} alt="Main Image" />
      </MainImageSection>

      {/* Black Text Box */}
      <BlackBox>
        <ArrowButton>◀</ArrowButton>
        <ContentContainer>
          <ImageContainer>
            <StyledImage src={DD} alt="Branding Image" />
          </ImageContainer>
          <TextBox>
            <h2>Branding & Designing</h2>
            <p>
  Branding is at the core of any business, and at RST Productions & Media, we understand the importance of crafting a compelling narrative that resonates with your target audience. Our mission is to elevate your brand's identity through creative, tailored solutions that not only capture attention but also build lasting connections. With a deep understanding of the market, our team of experts brings innovative strategies and cutting-edge media solutions to ensure your brand stands out in a crowded marketplace. From conceptualization to execution, we are committed to helping your brand achieve its full potential, one impactful story at a time.
</p>

          </TextBox>
        </ContentContainer>
        <ArrowButton>▶</ArrowButton>
      </BlackBox>

      {/* White Box with Moving Arrows */}
      <WhiteBox style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', padding: '0' }}>
  {/* Arrows and Image Section */}
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <AArrowButton>◀</AArrowButton>
    <ImageWithArrow src={EE} alt="Image with Arrow" />
    <AArrowButton>▶</AArrowButton>
  </div>

  {/* Black Box with Text Below the Image */}
  <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign: 'center', marginTop: '20px', width: '100vw', boxSizing: 'border-box' }}>
    <h2>Why Choose RST Production & Media</h2>
  </div>
</WhiteBox>



      {/* Team Section */}
      <TeamBackground>
    
    <TeamImage src={FF} alt="Team Background" />
  </TeamBackground>


      {/* Clients Section */}
      <ClientsSection>
        <ArrowButton>◀</ArrowButton>
        <ClientLogos>
          <ClientLogo src={GG} alt="Client 1" />
          <ClientLogo src={HH} alt="Client 2" />
          <ClientLogo src={II} alt="Client 3" />
        </ClientLogos>
        <ArrowButton>▶</ArrowButton>
      </ClientsSection>

      {/* Footer Section */}
      (
    <FooterContainer>
      <FooterLogo>RST Power Projects</FooterLogo>

      <InfoText>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}></p>
        <NewsletterContainer>
          <Input type="email" placeholder="E-mail" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </NewsletterContainer>
      </InfoText>

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
  font-family: 'Arial, sans-serif';
  color: #333;
  text-align: center;
`;
const TopImageSection = styled.div`
  width: 100%;
  background-color: #f0f0f0; /* You can change this background color */
`;

const TopImage = styled.img`
  width: 100%;
  height: 34px; /* Adjust the height as per your needs */
  object-fit: cover;
`;

const Header = styled.header`
  background-color: #000; /* Dark blue */
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
const MainImageSection = styled.div`
  /* Removed the margin */
  margin: 0; 
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px; /* Set a fixed height */
  object-fit: cover; /* This ensures the image covers the area without being distorted */
`;


const BlackBox = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const ImageContainer = styled.div`
  flex-shrink: 0; /* Prevents the image from shrinking */
  margin-right: 20px;
`;

const StyledImage = styled.img`
  width: 200px; /* Adjust the width of the image */
  height: auto;
`;

const TextBox = styled.div`
  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    color: #ccc; /* Lighter color on hover */
  }
`;


const WhiteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
`;

const AArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 20px;
`;

const ImageWithArrow = styled.img`
  width: 500px;
  height: auto;
`;

// const TeamSection = styled.section`
//   position: relative;
//   padding: 60px 0; /* Removed horizontal padding to cover full width */
// `;

const TeamBackground = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust height as needed */
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

// const SectionTitle = styled.h2`
//   position: relative;
//   color: #000; /* Change text color to black */
//   text-align: center;
//   z-index: 1; /* Text above image */
//   font-size: 28px;
//   margin-top: -25px;
// `;

const ClientsSection = styled.div`
  background-color: black;
  color: white;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClientLogos = styled.div`
  display: flex;
  gap: 90px; /* Increased the gap between images */
`;

const ClientLogo = styled.img`
  width: 250px; /* Increased the size of the logos */
  height: auto; /* Maintain aspect ratio */
  margin: 0 10px; /* Optional: Additional margin for spacing */
`;

const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: #000; /* Updated to black */
  color: #fff;
  text-align: center;
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const InfoText = styled.div`
  margin-bottom: 20px;
`;

const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 5px 0 0 5px;
  width: 250px;
`;

const SubscribeButton = styled.button`
  padding: 10px;
  font-size: 14px;
  background-color: #b00000;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
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

export default MediaProduction;

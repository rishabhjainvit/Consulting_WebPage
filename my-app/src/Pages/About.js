import React from 'react';
import styled from 'styled-components';
import G from '../assets/G.png';
import H from '../assets/H.png';
import I from '../assets/I.png';
import J from '../assets/J.png';
import K from '../assets/K.png';
import L from '../assets/L.png';
import AE from '../assets/AE.png';
import logo from '../assets/logo.png';

// Styled components for About section
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
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
const Header = styled.section`
  display: flex;
  padding: 20px;
  background-color: #f2f2f2;
  img {
    width: 300px;
    height: auto;
  }
`;

const HeaderContent = styled.div`
  padding-left: 20px;
  h1 {
    color: #0073b1;
  }
  p {
    font-size: 16px;
  }
`;

const SectionTitle = styled.h2`
  color: #0073b1;
  text-align: center;
  margin: 40px 0 20px;
`;

const TeamSection = styled.section`
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
`;

const TeamTitle = styled.h2`
  color: #0073b1;
  text-align: center;
  margin-bottom: 20px;
`;

const TeamMemberBox = styled.div`
  display: flex;
  background-color: #00bfa6; /* Green background */
  padding: 20px;
  border-radius: 10px;
  width: 100%; /* Make the green box take the full width */
  max-width: 100%; /* Ensures it spans the entire screen */
  margin: 0 auto;
  justify-content: center; /* Center the content */
  align-items: center;
`;

const TeamMemberImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    width: 80%; /* Control the width of the image within the box */
    height: auto;
    object-fit: contain;
  }
`;

const TeamMemberContent = styled.div`
  flex: 2;
  color: white;
  padding-left: 20px;
  text-align: left;
  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
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



const JourneySection = styled.section`
  padding: 40px 20px;
`;

const Timeline = styled.div`
  position: relative;
  padding: 20px 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: #0073b1; /* Line in the middle */
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  display: flex;
  justify-content: ${({ alignRight }) => (alignRight ? 'flex-start' : 'flex-end')};
  width: 100%;
  clear: both;
`;

const TimelineYear = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  background-color: #fff;
  border: 2px solid #0073b1;
  border-radius: 50%;
  width: 40px; /* Reduced size */
  height: 40px; /* Reduced size */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #0073b1;
  transform: translateX(-50%);
`;

const TimelineContent = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  width: 45%; /* Adjust width for smaller box */
  border-radius: 8px;
  position: relative;
  ${({ alignRight }) => (alignRight ? 'margin-left' : 'margin-right')}: 60px;
  text-align: ${({ alignRight }) => (alignRight ? 'left' : 'left')}; 
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


const About = () => {
  return (
    <Container>
      {/* Header Section */}
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
      <Header>
        <img
          src={G} // Replace with your header image path
          alt="Electric Poles"
        />
        <HeaderContent>
          <h1>PST Electricals Pvt. Ltd</h1>
          <p>
            Founded in 2003, PST Electricals Pvt. Ltd. has established itself as
            a leader in providing innovative and cost-effective solutions in the
            field of electrical panel manufacturing, power distribution, and
            automation systems. Over the past two decades, we have built a
            reputation for delivering high-quality LT/HT panels, power control
            centers, and motor control centers tailored to meet the needs of
            industries across India.
          </p>
          <p>
          Founded in 2003, PST Electricals Pvt. Ltd. has established itself as
            a leader in providing innovative and cost-effective solutions in the
            field of electrical panel manufacturing, power distribution, and
            automation systems. Over the past two decades, we have built a
            reputation for delivering high-quality LT/HT panels, power control
            centers, and motor control centers tailored to meet the needs of
            industries across India.
          </p>
          <p>
          Founded in 2003, PST Electricals Pvt. Ltd. has established itself as
            a leader in providing innovative and cost-effective solutions in the
            field of electrical panel manufacturing, power distribution, and
            automation systems. Over the past two decades, we have built a
            reputation for delivering high-quality LT/HT panels, power control
            centers, and motor control centers tailored to meet the needs of
            industries across India.
          </p>
        </HeaderContent>
      </Header>

      {/* Our Team Section */}
      <TeamSection>
  <SectionTitle>Our Team</SectionTitle>
  <TeamMemberBox>
    <TeamMemberImageWrapper>
      <img
        src={H} // Replace with team member's image path
        alt="R.S. Tomar"
      />
    </TeamMemberImageWrapper>
    <TeamMemberContent>
      <h3>R.S. Tomar</h3>
      <p>
        Founder & Chairman, PST Electricals Pvt. Ltd. has been instrumental
        in establishing the company as a leader in electrical panel
        manufacturing and automation systems. He has over 20 years of
        experience in the field.
      </p>
      <p>
        Founder & Chairman, PST Electricals Pvt. Ltd. has been instrumental
        in establishing the company as a leader in electrical panel
        manufacturing and automation systems. He has over 20 years of
        experience in the field.
      </p>
      <p>
        Founder & Chairman, PST Electricals Pvt. Ltd. has been instrumental
        in establishing the company as a leader in electrical panel
        manufacturing and automation systems. He has over 20 years of
        experience in the field.
      </p>
      <p>
        Founder & Chairman, PST Electricals Pvt. Ltd. has been instrumental
        in establishing the company as a leader in electrical panel
        manufacturing and automation systems. He has over 20 years of
        experience in the field.
      </p>
    </TeamMemberContent>
  </TeamMemberBox>
</TeamSection>

      {/* Our Certifications Section */}

      {/* Our Sources Section */}
{/* Our Sources Section */}
<CertificationsSection>
  <SectionTitle>Our Certification</SectionTitle>
  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
    <Arrow style={{ left: '-30px' }}>&#10094;</Arrow> {/* Left Arrow */}
    <Certifications>
      <CertificationBox>
        {/* <CertificationImage src={I} alt="ISO 9001:2015" /> */}
        <CertificationText>ISO 9001:2015</CertificationText>
      </CertificationBox>
      <CertificationBox>
        {/* <CertificationImage src={J} alt="Pepsi" /> */}
        <CertificationText>Certified Partner of Pepsi</CertificationText>
      </CertificationBox>
      <CertificationBox>
        {/* <CertificationImage src={K} alt="Nestle" /> */}
        <CertificationText>Certified Partner of Nestle</CertificationText>
      </CertificationBox>
    </Certifications>
    <Arrow style={{ right: '-30px' }}>&#10095;</Arrow> {/* Right Arrow */}
  </div>
</CertificationsSection>



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


      {/* Our Journey Section */}
      <JourneySection>
        <SectionTitle>Our Journey</SectionTitle>
        <Timeline>
          <TimelineItem alignRight={false}>
            <TimelineYear>2003</TimelineYear>
            <TimelineContent alignRight={false}>
              <h3>Establishment of the Organization</h3>
              <p>
                PST Electricals was founded with a vision to provide top-notch
                solutions in the electrical industry.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem alignRight={true}>
            <TimelineYear>2007</TimelineYear>
            <TimelineContent alignRight={true}>
              <h3>First Major Project Completed</h3>
              <p>
                Successfully completed our first large-scale project for an
                industrial client, marking a milestone in our growth.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem alignRight={false}>
            <TimelineYear>2011</TimelineYear>
            <TimelineContent alignRight={false}>
              <h3>ISO 9001 Certification</h3>
              <p>
                Achieved ISO 9001:2015 certification, affirming our commitment
                to quality and customer satisfaction.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem alignRight={true}>
            <TimelineYear>2015</TimelineYear>
            <TimelineContent alignRight={true}>
              <h3>Partnership with Multinational Clients</h3>
              <p>
                Established partnerships with global giants such as Pepsi and
                Nestle for the supply of electrical panels and automation
                solutions.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem alignRight={false}>
            <TimelineYear>2018</TimelineYear>
            <TimelineContent alignRight={false}>
              <h3>Expansion to a New Facility</h3>
              <p>
                Opened our second manufacturing unit to meet growing demand and
                expand production capacity.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem alignRight={true}>
            <TimelineYear>2022</TimelineYear>
            <TimelineContent alignRight={true}>
              <h3>Leader in Green Energy Solutions</h3>
              <p>
                Launched a new product line focused on solar power and energy
                management systems, contributing to sustainability goals.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </JourneySection>


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

export default About;

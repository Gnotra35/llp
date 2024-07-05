import React from 'react';
import './about.css'; // Assuming you have shared styles here
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import image1 from './images/image1.jpg';
import image3 from './images/image3.jpg';

const AboutPage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/policies">General Policies</Link></li>
          <li><a href="/guidelines">Ethical Guidelines</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      
      <div className="document-section">
        <div className="document-content">
          <h1>About Us</h1>
          <hr className="divider" />
          <p>The Open Science Publishers LLP is an independent academic publishing company, registered in India under Section 12(1)(b) of the LLP Act, 2008 with registration no. AAB-0678, having its corporate office at 305, GTB Bussiness Plaza, University Road, Near Silver Estate, Saraswati Nagar, Gwalior-474002, Madhya Pradesh, India.

            The OSP fully supports open-access publishing models. The publisher developed and owned world-class publishing and journal hosting platform that provides easy workflows and methods for text and data publishing of journals. The publisher is currently providing publishing services including pre-publication, post-publication, and technical support to the following journals;.</p>
          
          <h2>Our Services</h2>
          <hr className="divider" />
          <table className="service-table">
            <tbody>
              <tr>
                <td className="service-name">Online journal publishing platform</td>
                <td>Description of Service 1</td>
              </tr>
              <tr>
                <td className="service-name">Production Services</td>
                <td>Description of Service 1</td>
              </tr>
              <tr>
                <td className="service-name">Subscription Management</td>
                <td>Description of Service 2</td>
              </tr>
              <tr>
                <td className="service-name">Book Publishing</td>
                <td>Description of Service 2</td>
              </tr>
            </tbody>
          </table>

          <h2>Our Team</h2>
          <hr className="divider" />
          
          <h3>John Doe</h3>
          <h4>Chief Executive Officer</h4>
          <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
          <p>JohnDoe is a highly accomplished professional with a strong educational background and extensive experience in scholarly publishing. She holds a Master's degree in Pharmaceutical sciences and a diploma in Intellectual Property Rights Law, which has equipped her with a diverse set of skills and knowledge that she has applied in her career. With over 12 years of experience in the industry, she has developed a collaborative approach to work and a deep understanding of the publishing process. Currently, she is responsible for the acquisition, finance-related activities, and operations at Open Science Publishers LLP, where she applies her expertise to ensure the smooth functioning of the organization.</p>

          <h3>Jane Smith</h3>
          <h4>Chief Operating Officer</h4>
          <p>Email: <a href="mailto:jane.smith@example.com">jane.smith@example.com</a></p>
          <p>Jane is a highly qualified medical professional with a passion for scholarly publishing. He holds an MBBS degree and an MD in Radiodiagnosis, which has given him an in-depth understanding of the field. He is well-versed in the ethical requirements of scholarly publishing such as COPE and ICMJE guidelines. He takes a keen interest in resolving day-to-day publishing challenges and is committed to ensuring that all publications adhere to high ethical standards. At Open Science Publishers LLP, Dr. Dubey is responsible for handling indexing-related requirements and publishing ethics compliance. He is a dedicated professional who works tirelessly to ensure that the organization's publications are of the highest quality.</p>
          
          <h2>Other Team Members</h2>
          
          <h3>Emily Johnson (Chief Financial Officer)</h3>
          <p>Email: <a href="mailto:emily.johnson@example.com">emily.johnson@example.com</a></p>

          <h3>Michael Brown (Chief Technology Officer)</h3>
          <p>Email: <a href="mailto:michael.brown@example.com">michael.brown@example.com</a></p>

          <h3>Sarah Davis (Chief Marketing Officer)</h3>
          <p>Email: <a href="mailto:sarah.davis@example.com">sarah.davis@example.com</a></p>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            
            <li><a href="#link2">Advertisement</a></li>
            <li><a href="#link3">Our Services</a></li>
            <li><a href="#link4">Management Team</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
        
        <div className="footer-column">
          <div className="icon-container">
            <img src={image1} alt="Icon 1" />
          </div>
        </div>
        
        <div className="footer-column">
          <div className="icon-container">
            <img src={image3} alt="Icon 3" />
          </div>
        </div>
      </footer>
      <div className="copyright-section">
        <div className="copyright-content">
          <p className="copyright-text">© 2024 Open Science Publishers LLP</p>
          <div className="privacy-terms">
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

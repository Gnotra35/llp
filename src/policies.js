import React from 'react';
import './policies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import image1 from './images/image1.jpg';
import image3 from './images/image3.jpg';
import { Link } from 'react-router-dom';

const PoliciesPage = () => {
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
          <h1>General Policies</h1>
          
          <h2>Advertising Policies</h2>
          <p>The journal does not accept commercial advertisements. Other than commercial advertisements, our advertising policy is consistent with the principles mentioned in the Recommendations on Publication Ethics Policies for Medical Journals issued by the World Association of Medical Editors (WAME) which can be accessed <a href="https://wame.org/recommendations-on-publication-ethics-policies-for-medical-journals">here</a>.</p>
          
          <hr className="divider" />
          
          <h2>Digital Preservation</h2>
          <p>All the contents published in the Journal of Applied Pharmaceutical Science are preserved in Portico, an E-Journal Preservation Service. Portico provides permanent digital archiving for electronic scholarly journals, ensuring that these materials remain accessible to future scholars, researchers, and students.</p>
          
          <hr className="divider" />
          
          <h2>Waiver and Discounts</h2>
          <p>OSP is an open-access journal and requires Article Processing Charges (APCs) to be paid after acceptance. To support the researchers who are unable to meet some or all of the costs associated with publishing, the journal has adopted a transparent waiver policy:</p>
          <ul>
            <li>Group A: The journal provides a complete waiver in article processing charges to authors from low-income countries.</li>
            <li>Group B: In addition, the journal provides a 30% reduction in article processing charges if the author(s) do not have the funding required to cover these charges. Authors should provide appropriate documents (such as a signed letter from the institutional Head) in support of their claim of insufficient funding. The decision to approve or decline the waiver request is based on the authenticity of the evidence provided.</li>
            <li>Group C: Editors and reviewers who handle at least 5 manuscripts in a calendar year can apply for a 20% discount in APC.</li>
          </ul>
          <p>Please request your waiver or discount at the point of submission. Requests made during the review process or after acceptance will not be considered. Editors of individual journals are empowered to provide appropriate waivers, and authors can send waiver requests directly to the editors.</p>
          
          <hr className="divider" />
          
          <h2>Complaints and Appeals</h2>
          <p>Authors and readers can submit their complaints or appeals to the editors or the publisher through the complaint form provided on the contact us page of individual journals. All complaints will be assigned a unique complaint number by the publisher. Authors/readers can use complaint numbers for further follow-up.</p>
          <p>If you do not receive a response to your complaint within 48 hours, or if you are not satisfied with the response, please write to the publisher at <a href="mailto:opensciencepublishersllp@gmail.com">opensciencepublishersllp@gmail.com</a>. Please mention your unique complaint number in follow-up emails.</p>
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

export default PoliciesPage;

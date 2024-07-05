import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import image1 from './images/image1.jpg'; 
import image3 from './images/image3.jpg'; 
import './publishinginfo.css'; 

const PublishingInfoPage = () => {
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
          <li><Link to="/guidelines">Ethical Guidelines</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="document-section">
        <div className="document-content">
          <h1>Book Publishing Information</h1> 
          <h3> Book publishing Information</h3>

        
          <p>We partner with individual Authors, Editors and Societies to publish books in digital and print formats addressing the latest scientific advancements. The authors should submit the following details to get the book publishing proposal:</p>
          <ol>
            <li>Title of the Book and list of proposed chapters.</li>
            <li>Book Summary along with a statement of the novelty of the concept and the necessity of this book.</li>
            <li>A brief resume of authors and editors, including their research experience.</li>
          </ol>

          <h2>Manuscript Submission Checklist</h2>
          <p>The authors need to submit a soft copy (MS Word version) of their manuscript after the title approval. The authors need to comply with the following guidelines:</p>
          <ol>
            <li>The manuscript should be submitted in a Soft (electronic format) copy of the original manuscript with the final table of contents (TOC) should be sent.</li>
            <li>All the chapters should be properly numbered and labelled with; the chapter title, and author/contributor's name and each chapter should be saved in a separate folder containing all figures, flowcharts, tables, and references.</li>
            <li>All figures, flowcharts, tables, and references should be cited in the text. Also, include a list explaining where each image should go in your manuscript.</li>
            <li>If you decide to scan your photos/figures/illustrations then kindly ensure to scan the same in 300dpi resolution and these should be saved in jpg/tiff files.</li>
            <li>Please check the copyright status of each image if taken from some other sources. Please provide clear details of permission to use or copyright clearance in figure captions. For self-made images/diagrams, please write the same in the figure caption.</li>
            <li>All figures should have captions and should be properly labelled (if required).</li>
            <li>A list of all abbreviations used in the books should also be enclosed.</li>
            <li>Do keep one copy of the manuscript with you.</li>
          </ol>
        </div>
      </div>
      <p class="eq">For any enquiry, please write to <a href="mailto:opensciencepublishersllp@gmail.com">opensciencepublishersllp@gmail.com</a>.</p>

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

export default PublishingInfoPage;

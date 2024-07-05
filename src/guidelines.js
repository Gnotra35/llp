import React from 'react';
import { Link } from 'react-router-dom';
import './guidelines.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faPrint, faLayerGroup, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import image1 from './images/image1.jpg';
import image3 from './images/image3.jpg';


const GuidelinesPage = () => {
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
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="document-section">
        <div className="document-content">
          <h1>Guidelines</h1>
          
          <h2>Ethical Guidelines</h2>
          <p>Please check individual journals for publication ethics and policies.</p>

          <h3>Journal of Applied Pharmaceutical Science</h3>
          <ul>
            <li>Link to publication ethics guidelines: <a href="https://japsonline.com/publicationethics.php">https://japsonline.com/publicationethics.php</a></li>
            <li>Link to publishing policies: <a href="https://japsonline.com/aboutus.php#journal-policies">https://japsonline.com/aboutus.php#journal-policies</a></li>
            <li>Author guidelines: <a href="https://japsonline.com/authorsguideline.php">https://japsonline.com/authorsguideline.php</a></li>
            <li>Submission instructions: <a href="https://japsonline.com/submitmanuscript.php">https://japsonline.com/submitmanuscript.php</a></li>
            <li>Article processing charges: <a href="https://japsonline.com/authorsguideline.php#ARTICLE-PROCESSING-CHARGES">https://japsonline.com/authorsguideline.php#ARTICLE-PROCESSING-CHARGES</a></li>
          </ul>

          <h3>Journal of Applied Biology and Biotechnology</h3>
          <ul>
            <li>Link to publication ethics guidelines: <a href="https://jabonline.in/publicationethics.php">https://jabonline.in/publicationethics.php</a></li>
            <li>Link to publishing policies: <a href="https://jabonline.in/aboutus.php#Policies">https://jabonline.in/aboutus.php#Policies</a></li>
            <li>Author guidelines: <a href="https://jabonline.in/authorsguideline.php">https://jabonline.in/authorsguideline.php</a></li>
            <li>Submission instructions: <a href="https://jabonline.in/submitmanuscript.php">https://jabonline.in/submitmanuscript.php</a></li>
            <li>Article processing charges: <a href="https://jabonline.in/authorsguideline.php#APC">https://jabonline.in/authorsguideline.php#APC</a></li>
          </ul>

          <h2>Open Access Statement</h2>
          <p>
            All the articles published in our journals are freely available without any registration, subscription, or payment. Users are allowed to read, download, copy, distribute, print, search, or link to the full texts of the articles in this journal without asking prior permission from the publisher or the author, as long as the original authors are properly cited.
          </p>
          <p>
            Furthermore, the publisher also allows the authors to self-archive the final accepted version of the articles on any OAI-compliant institutional/subject-based repository.
          </p>
          <p>
            This is in accordance with the Budapest Open Access Initiative definition, which states:
          </p>
          <blockquote>
            "By 'open access to this literature, we mean its free availability on the public internet, permitting any users to read, download, copy, distribute, print, search, or link to the full texts of these articles, crawl them for indexing, pass them as data to software, or use them for any other lawful purpose, without financial, legal, or technical barriers other than those inseparable from gaining access to the internet itself."
          </blockquote>
          <p>
            We have adopted a gold open-access model, which means that the published articles are funded by article processing charges paid at the time of acceptance, and this information is clearly mentioned in author guidelines and also on the journal homepage.
          </p>
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

export default GuidelinesPage;

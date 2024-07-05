import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from './images/image1.jpg';
import image3 from './images/image3.jpg';

const ContactPage = () => {
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
          <h1>Contact Us</h1>
          <div className="contact-content">
            <div className="contact-info">
              <h3>For production, reprints, and payment related queries:</h3>
              <p>john doe</p>
              <p>Email: <a href="mailto:john@gmail.com">john@gmail.com</a>, <a href="mailto:name@openscipub.com">name@openscipub.com</a></p>

              <h3>For print subscription and delivery related issues:</h3>
              <p>name </p>
              <p>Email: <a href="mailto:ospsubscription@gmail.com">ospsubscription@gmail.com</a></p>

              <h3>For editorial software, publishing platform or any other technical queries:</h3>
              <p>name</p>
              <p>Email: <a href="mailto:mj@jabonline.com">mj@jabonline.com</a></p>

              <h3>Postal Address (Publisher Office):</h3>
              <p>Open Science Publishers LLP,</p>
              <p>305, GTB Business Plaza, University Road, Near Silver Estate,</p>
              <p>Saraswati Nagar, Gwalior-474002, Madhya Pradesh, India.</p>
              <p>Email: <a href="mailto:opensciencepublishersllp@gmail.com">opensciencepublishersllp@gmail.com</a></p>
              <p>Phone: +91-1236540987</p>
            </div>

            <div className="contact-form document-section">
              <div className="document-content">
                
                <form>
                  <input type="text" name="name" placeholder="Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="tel" name="phone" placeholder="Phone"  required/>
                  <textarea name="comment" placeholder="COMMENT" required></textarea>

                  

                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
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

export default ContactPage;

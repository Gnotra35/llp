import React, { useState, useEffect } from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import image1 from './images/image1.jpg';
import image3 from './images/image3.jpg';
import journalImage from './images/journal-image.jpg';

const HomePage = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      const response = await fetch('http://localhost/sci/opensciece/src/api.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJournals(data);
    } catch (error) {
      console.error('Error fetching journals:', error);
    }
  };

  const handleJournalsButtonClick = () => {
    const journalsSection = document.getElementById('journals-section');
    if (journalsSection) {
      journalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      <div className="new-section">
        <div className="new-section-left">
          <h1>OPEN SCIENCE<br />PUBLISHERS LLP</h1>
          <p>We publish peer-reviewed journals in Pharmaceutical and Life Sciences</p>
        </div>
        <div className="new-section-right">
          <button onClick={handleJournalsButtonClick}><FontAwesomeIcon icon={faArrowRight} /> Our Journals</button>
          <Link to="/publishinginfo">
            <button><FontAwesomeIcon icon={faBookOpen} /> Book Publishing Information</button>
          </Link>
        </div>
      </div>

      <div className="flex">
        {/* Recent Publications Section */}
        <div className="recent-publications-section scrollable">
          <h1>Recent Publications</h1>
          <div className="publications-container">
            <div className="publication">
              <div className="publication-image">
                <img src={journalImage} alt="Publication Image" />
              </div>
              <div className="publication-info">
                <button type="submit">Research article</button>
                <h3>Prediction of HIV drug resistance through in silico approach</h3>
                <p>Tammanna Bhajantri, S. Pushkala</p>
                <p><em>Journal of Applied Biology & Biotechnology</em></p>
              </div>
            </div>
            <div className="publication">
              <div className="publication-image">
                <img src={journalImage} alt="Publication Image" />
              </div>
              <div className="publication-info">
                <button type="submit">Research article</button>
                <h3>Optimization for nutritional fortification of wheat–millet composite flour mixture by response surface methodology</h3>
                <p>Gaurav Chaudhary, Monu Kumar, Anita Rani Sehrawat</p>
                <p><em>Journal of Applied Biology & Biotechnology</em></p>
              </div>
            </div>
            <div className="publication">
              <div className="publication-image">
                <img src={journalImage} alt="Publication Image" />
              </div>
              <div className="publication-info">
                <button type="submit">Research article</button>
                <h3>Optimization for nutritional fortification of wheat–millet composite flour mixture by response surface methodology</h3>
                <p>Gaurav Chaudhary, Monu Kumar, Anita Rani Sehrawat</p>
                <p><em>Journal of Applied Biology & Biotechnology</em></p>
              </div>
            </div>
            {/* Add more publications as needed */}
          </div>
        </div>

        {/* News & Release Section */}
        <div className="news-release-section">
          <h1>News & Release</h1>
          <div className="news-container scrollable">
            <div className="news-item">
              <p><strong>March 24, 2024</strong></p>
              <p>'<a href="#">Journal of Applied Pharmaceutical Science</a>' is now available at ScienceOpen</p>
            </div>
            <div className="news-item">
              <p><strong>July 03, 2023</strong></p>
              <p>The reference style of the Journal of Applied Pharmaceutical Science is now changed to NLM/Vancouver. Please consult <a href="http://www.nlm.nih.gov/bsd/uniform_requirements.html">here</a> for the exact style of citing references.</p>
            </div>
            <div className="news-item">
              <p><strong>May 08, 2023</strong></p>
              <p><a href="#">Read COPE Ethical guidelines for peer reviewers</a></p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            <div className="news-item">
              <p><strong>April 15, 2023</strong></p>
              <p>More updates coming soon.</p>
            </div>
            {/* Add more news items as needed */}
          </div>
        </div>
      </div>

      <div id="journals-section" className="journals-section">
        <h1>Our Journals</h1>
        <div className="journals-container">
          {journals.map(journal => (
            <div className="journal" key={journal.id}>
              <img src={journal.image} alt={journal.name} />
              <div className="journal-info">
                <h3>{journal.name}</h3>
                <p><strong>Indexing:</strong> {journal.indexing}</p>
                <p><strong>Editor in Chief:</strong> {journal.editor}</p>
                <p><strong>The journal’s webpage is available at:</strong> <a href={journal.webpage} target="_blank" rel="noopener noreferrer">{journal.webpage}</a></p>
                <p><strong>New Manuscripts can be submitted from:</strong> <a href={journal.submit_link} target="_blank" rel="noopener noreferrer">{journal.submit_link}</a></p>
                <p><strong>{journal.other_info}</strong></p>
                <p><strong>Write to the editor:</strong> <a href={`mailto:${journal.editor_email}`}>{journal.editor_email}</a></p>
              </div>
            </div>
          ))}
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

export default HomePage;

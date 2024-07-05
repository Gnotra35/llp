// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import AboutPage from './about';
import PoliciesPage from './policies';
import GuidelinesPage from './guidelines';
import ContactPage from './contact';
import PublishingInfo from './publishinginfo'; // Import the PublishingInfo component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/publishinginfo" element={<PublishingInfo />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

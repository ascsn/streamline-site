import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>STREAMLINE</h3>
          <p>SmarT Reduction and Emulation Applying Machine Learning In Nuclear Environments</p>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/publications">Publications</Link></li>
          </ul>
        </div>
        
        {/* <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@streamline-project.org</p>
          <p>Twitter: @StreamlineML</p>
          <p>GitHub: StreamlineProject</p>
        </div> */}
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} STREAMLINE Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

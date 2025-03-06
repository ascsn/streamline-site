import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          STREAMLINE
        </Link>
        
        <button 
          className={`mobile-nav-toggle ${isNavOpen ? 'active' : ''}`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`main-nav ${isNavOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
            <li><Link to="/research" onClick={() => setIsNavOpen(false)}>Research</Link></li>
            <li><Link to="/team" onClick={() => setIsNavOpen(false)}>Team</Link></li>
            <li><Link to="/publications" onClick={() => setIsNavOpen(false)}>Publications</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

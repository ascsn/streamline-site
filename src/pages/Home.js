import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>STREAMLINE</h1>
            <p className="subtitle">SmarT Reduction and Emulation Applying Machine Learning In Nuclear Environments</p>
            <p className="description">
              Building a diverse, collaborative community of scientists accelerating nuclear physics research through cutting-edge machine learning techniques, connecting theory, computation, experiments, and nuclear data.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn">Our Mission</Link>
              <Link to="/research" className="btn btn-outline">Research Areas</Link>
            </div>
          </div>
          <div className="hero-image">
            {/* This would be an actual image in production */}
            <div className="placeholder-image">Nuclear Physics + ML</div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Our Research Focus</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Scientific Emulators</h3>
              <p>Developing fast and accurate machine learning emulators for computationally intensive nuclear physics simulations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Smart Model Extrapolations</h3>
              <p>Training ML models using empirical data and high-fidelity calculations to intelligently extrapolate beyond available data.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Nuclear Correlations</h3>
              <p>Applying machine learning to understand nuclear correlations in wave functions and operators.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚛️</div>
              <h3>Nuclear Dynamics</h3>
              <p>Advanced modeling and prediction of nuclear dynamics, fission, and fusion processes using machine learning techniques.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Research Section */}
      <section className="section research-highlight-section">
        <div className="container">
          <h2 className="section-title">Building the AI/ML Workforce</h2>
          
          <div className="research-highlight">
            <div className="research-content">
              <h3>Pilot Model for Scientific AI/ML</h3>
              <p>
                STREAMLINE serves as a pilot model for building intellectual infrastructure and developing a workforce 
                in artificial intelligence and machine learning for scientific applications. Our collaborative approach 
                brings together diverse expertise across theory, computation, and experiments.
              </p>
              <Link to="/research" className="btn">Read More</Link>
            </div>
            <div className="research-image">
              {/* This would be an actual image in production */}
              <div className="placeholder-image">Research Visual</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
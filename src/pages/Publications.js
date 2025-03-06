import React from 'react';
import './Publications.css';

function Publications() {
  return (
    <div className="publications-page">
      <section className="page-header">
        <div className="container">
          <h1>Publications</h1>
          <p>Research outputs from the STREAMLINE collaboration</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Journal Articles</h2>
          
          <div className="publication-list">
            {/* These would be actual publications in production */}
            <div className="publication-item">
              <h3>Neural Network Emulation of Nuclear Reactions</h3>
              <p className="authors">
                Smith, J., Johnson, M., Chen, S., Rodriguez, E., Lee, R.
              </p>
              <p className="journal">
                <span className="journal-name">Physical Review Letters</span>,
                <span className="publication-date">2025</span>
              </p>
              <p className="publication-description">
                We present a neural network approach to emulate complex nuclear reaction calculations,
                achieving speed-ups of over 1000x while maintaining high accuracy.
              </p>
              <div className="publication-links">
                <a href="#" className="publication-link">DOI</a>
                <a href="#" className="publication-link">arXiv</a>
                <a href="#" className="publication-link">PDF</a>
              </div>
            </div>
            
            <div className="publication-item">
              <h3>Uncertainty Quantification in Nuclear Structure Using Bayesian Neural Networks</h3>
              <p className="authors">
                Kim, D., Wang, L., Smith, J., Thompson, A.
              </p>
              <p className="journal">
                <span className="journal-name">Nuclear Physics A</span>,
                <span className="publication-date">2024</span>
              </p>
              <p className="publication-description">
                This paper introduces a Bayesian neural network framework for quantifying uncertainties
                in nuclear structure predictions, with applications to binding energies and radii.
              </p>
              <div className="publication-links">
                <a href="#" className="publication-link">DOI</a>
                <a href="#" className="publication-link">arXiv</a>
                <a href="#" className="publication-link">PDF</a>
              </div>
            </div>
            
            <div className="publication-item">
              <h3>Machine Learning Extrapolation of Nuclear Mass Models</h3>
              <p className="authors">
                Rodriguez, E., Garcia, M., Johnson, M., Wilson, J.
              </p>
              <p className="journal">
                <span className="journal-name">Physical Review C</span>,
                <span className="publication-date">2024</span>
              </p>
              <p className="publication-description">
                We develop a machine learning approach to extrapolate nuclear mass models beyond the
                regions of known nuclei, with improved accuracy for exotic isotopes.
              </p>
              <div className="publication-links">
                <a href="#" className="publication-link">DOI</a>
                <a href="#" className="publication-link">arXiv</a>
                <a href="#" className="publication-link">PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2>Conference Proceedings</h2>
          
          <div className="publication-list">
            <div className="publication-item">
              <h3>Physics-Informed Neural Networks for Nuclear Fission Modeling</h3>
              <p className="authors">
                Chen, S., Lee, R., Thompson, A.
              </p>
              <p className="journal">
                <span className="journal-name">International Conference on Nuclear Data for Science and Technology</span>,
                <span className="publication-date">2024</span>
              </p>
              <div className="publication-links">
                <a href="#" className="publication-link">DOI</a>
                <a href="#" className="publication-link">PDF</a>
              </div>
            </div>
            
            <div className="publication-item">
              <h3>Transformer-Based Models for Nuclear Data Evaluation</h3>
              <p className="authors">
                Johnson, M., Wang, L., Wilson, J.
              </p>
              <p className="journal">
                <span className="journal-name">Machine Learning for Physics Workshop</span>,
                <span className="publication-date">2024</span>
              </p>
              <div className="publication-links">
                <a href="#" className="publication-link">DOI</a>
                <a href="#" className="publication-link">PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Publications;
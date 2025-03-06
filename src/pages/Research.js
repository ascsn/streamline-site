import React from 'react';
import './Research.css';

function Research() {
  return (
    <div className="research-page">
      <section className="page-header">
        <div className="container">
          <h1>Research Areas</h1>
          <p>Exploring the intersection of machine learning and nuclear physics</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Fast Scientific Emulators</h2>
          <div className="research-area">
            <div className="research-content">
              <p>
                We develop fast and accurate machine learning emulators for computationally intensive 
                nuclear physics simulations. These emulators can reduce calculation times from days 
                or weeks to seconds or minutes, enabling rapid exploration of parameter spaces and 
                accelerating scientific discovery.
              </p>
              <p>
                Our approaches include neural networks, Gaussian processes, and other advanced ML 
                techniques that preserve physical constraints and symmetries while delivering 
                accurate results.
              </p>
            </div>
            <div className="research-image">
              <div className="placeholder-image">Emulator Diagram</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2>Smart Model Extrapolations</h2>
          <div className="research-area">
            <div className="research-image">
              <div className="placeholder-image">Extrapolation Visual</div>
            </div>
            <div className="research-content">
              <p>
                We train machine learning models using empirical data and computationally expensive 
                high-fidelity calculations to produce smart model extrapolations. This allows us to 
                make predictions beyond the range of available training data with quantified uncertainties.
              </p>
              <p>
                By incorporating physics constraints and prior knowledge into our models, we improve 
                their generalization capabilities and reliability in regimes where data is sparse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Nuclear Correlations</h2>
          <div className="research-area">
            <div className="research-content">
              <p>
                We apply machine learning tools to learn nuclear correlations in wave functions and 
                operators for uncertainty quantification. These methods help us understand complex 
                many-body effects in nuclear systems and improve our predictions of nuclear properties.
              </p>
              <p>
                Our research in this area contributes to fundamental understanding of nuclear structure 
                and provides insights that can guide future experimental and theoretical work.
              </p>
            </div>
            <div className="research-image">
              <div className="placeholder-image">Correlation Analysis</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2>Nuclear Dynamics</h2>
          <div className="research-area">
            <div className="research-image">
              <div className="placeholder-image">Nuclear Dynamics Simulation</div>
            </div>
            <div className="research-content">
              <p>
                We focus on the modeling and prediction of nuclear dynamics, fission, and fusion processes 
                using machine learning techniques. Our approaches enable more accurate simulations of 
                time-dependent nuclear phenomena and reactions.
              </p>
              <p>
                By combining ML with physics-based models, we can capture complex dynamics across multiple 
                time and length scales, providing new insights into nuclear processes that are difficult to 
                study experimentally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
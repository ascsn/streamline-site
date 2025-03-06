import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About STREAMLINE</h1>
          <p>SmarT Reduction and Emulation Applying Machine Learning In Nuclear Environments</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            STREAMLINE aims to develop a diverse, cohesive group of scientists working to accelerate 
            scientific progress in nuclear physics using machine learning (ML). Our collaboration 
            emphasizes the close connections between theory, computation, experiments, and nuclear data.
          </p>
          
          <p>
            As a pilot model, we're building intellectual infrastructure and developing the workforce in 
            artificial intelligence and machine learning for scientific applications, particularly in 
            nuclear physics and related fields.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            We envision a future where machine learning techniques significantly accelerate scientific 
            discovery in nuclear physics, enabling researchers to solve previously intractable problems 
            and gain deeper insights into nuclear phenomena.
          </p>
          
          <p>
            By building bridges between different disciplines and fostering collaboration, STREAMLINE 
            aims to create a sustainable ecosystem of AI/ML expertise in the nuclear physics community.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
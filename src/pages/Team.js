import React from 'react';
import './Team.css';

function Team() {
  return (
    <div className="team-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p>A diverse community of scientists advancing nuclear physics with machine learning</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Leadership</h2>
          
          <div className="team-grid">
            {/* These would be actual team members in production */}
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Dr. Jane Smith</h3>
              <p className="member-role">Principal Investigator</p>
              <p>Nuclear Theory, University of Science</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Dr. Michael Johnson</h3>
              <p className="member-role">Co-Principal Investigator</p>
              <p>Machine Learning, Tech Institute</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Dr. Sarah Chen</h3>
              <p className="member-role">Co-Principal Investigator</p>
              <p>Experimental Nuclear Physics, National Lab</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2>Research Scientists</h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Dr. Robert Lee</h3>
              <p className="member-role">Senior Researcher</p>
              <p>Nuclear Data, University of Science</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Dr. Elena Rodriguez</h3>
              <p className="member-role">Senior Researcher</p>
              <p>Nuclear Theory, National Lab</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Dr. David Kim</h3>
              <p className="member-role">Senior Researcher</p>
              <p>Machine Learning, Tech Institute</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Dr. Lisa Wang</h3>
              <p className="member-role">Researcher</p>
              <p>Computational Physics, University of Science</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Graduate Students</h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Alex Thompson</h3>
              <p className="member-role">PhD Candidate</p>
              <p>Machine Learning for Nuclear Physics</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>Maria Garcia</h3>
              <p className="member-role">PhD Candidate</p>
              <p>Computational Nuclear Theory</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image">Photo</div>
              </div>
              <h3>James Wilson</h3>
              <p className="member-role">PhD Student</p>
              <p>Nuclear Data Analysis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
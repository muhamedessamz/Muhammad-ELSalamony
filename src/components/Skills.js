import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4 text-primary">Professional Skills</h2>
          <p className="lead text-muted">Expertise that drives my success in banking operations and training delivery</p>
        </div>
        
        <div className="row g-4">
          {/* Languages */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-translate me-2"></i>
                  Languages
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h6 className="fw-bold mb-2">English</h6>
                  <p className="text-muted small mb-2">Professional Proficiency</p>
                  <div className="progress" style={{height: '20px'}}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{width: '95%'}}
                      aria-valuenow="95" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      95%
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark border">Native Arabic</span>
                  <span className="badge bg-light text-dark border">Professional English</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">
                  <i className="bi bi-gear me-2"></i>
                  Technical Skills
                </h5>
              </div>
              <div className="card-body">
                <div className="row g-2 mb-4">
                  <div className="col-6">
                    <small className="text-muted">Microsoft Office Suite</small>
                    <div className="progress mb-2" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-info" 
                        style={{width: '90%'}}
                      ></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <small className="text-muted">E-learning Platforms</small>
                    <div className="progress mb-2" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-info" 
                        style={{width: '85%'}}
                      ></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <small className="text-muted">Learning Management Systems (LMS)</small>
                    <div className="progress mb-2" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-info" 
                        style={{width: '80%'}}
                      ></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <small className="text-muted">Presentation Software</small>
                    <div className="progress mb-2" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-info" 
                        style={{width: '88%'}}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-primary">MS Excel Advanced</span>
                  <span className="badge bg-primary">PowerPoint Expert</span>
                  <span className="badge bg-primary">Zoom & Teams</span>
                  <span className="badge bg-primary">LMS Administration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Training & Soft Skills */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">
                  <i className="bi bi-person-badge me-2"></i>
                  Training & Soft Skills
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Training Delivery</h6>
                  <div className="progress" style={{height: '20px'}}>
                    <div 
                      className="progress-bar bg-warning" 
                      role="progressbar" 
                      style={{width: '92%'}}
                      aria-valuenow="92" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      92%
                    </div>
                  </div>
                  <small className="text-muted">11+ Years Experience</small>
                </div>
                
                <div className="row g-2">
                  <div className="col-12 mb-2">
                    <small className="text-muted">Delivery Methods:</small>
                  </div>
                  <div className="col-6">
                    <span className="badge bg-warning text-dark small w-100 text-start d-block mb-1">
                      <i className="bi bi-easel me-1"></i>Classroom Training
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="badge bg-warning text-dark small w-100 text-start d-block mb-1">
                      <i className="bi bi-camera-video me-1"></i>Webinars
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="badge bg-warning text-dark small w-100 text-start d-block mb-1">
                      <i className="bi bi-laptop me-1"></i>E-learning
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="badge bg-warning text-dark small w-100 text-start d-block mb-1">
                      <i className="bi bi-people me-1"></i>Group Workshops
                    </span>
                  </div>
                </div>

                <hr className="my-3" />

                <h6 className="fw-bold mb-3">Core Competencies</h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-secondary">Leadership</span>
                  <span className="badge bg-secondary">Mentoring</span>
                  <span className="badge bg-secondary">Public Speaking</span>
                  <span className="badge bg-secondary">Financial Literacy</span>
                  <span className="badge bg-secondary">Communication</span>
                  <span className="badge bg-secondary">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

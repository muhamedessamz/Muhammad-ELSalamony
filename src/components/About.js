import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{color: '#495057'}}>
            About Muhammad ELSalamony
          </h2>
          <p className="lead text-muted mb-0">
            Banking Professional & Certified Trainer with 15+ Years Experience
          </p>
        </div>

        {/* Professional Journey */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-light rounded-4 p-5 shadow-sm">
              <h3 className="h3 fw-bold mb-4" style={{color: '#495057'}}>
                Professional Journey
              </h3>
              
              <p className="lead text-dark mb-4">
                With over <strong>10+ years in banking</strong> across 4 specialized departments and <strong>11+ years as a Certified Professional Trainer</strong>, I have dedicated my career to bridging the gap between complex financial concepts and practical, actionable knowledge.
              </p>
              
              <p className="text-muted fs-6">
                My mission is to empower individuals and organizations through comprehensive training programs that deliver measurable results. From banking operations to personal financial mastery, I create learning experiences that transform knowledge into real-world success.
              </p>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{color: '#495057'}}>
              Key Professional Achievements
            </h3>
            
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center">
                  <div className="h1 mb-3" style={{color: '#6c757d'}}>20,000+</div>
                  <h5 className="fw-bold mb-2" style={{color: '#495057'}}>Training Hours</h5>
                  <p className="text-muted small mb-0">Delivered comprehensive programs across diverse topics</p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center">
                  <div className="h1 mb-3" style={{color: '#6c757d'}}>20,000+</div>
                  <h5 className="fw-bold mb-2" style={{color: '#495057'}}>Learners</h5>
                  <p className="text-muted small mb-0">Global impact through online and in-person training</p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center">
                  <div className="h1 mb-3" style={{color: '#6c757d'}}>5+</div>
                  <h5 className="fw-bold mb-2" style={{color: '#495057'}}>EduTech Platforms</h5>
                  <p className="text-muted small mb-0">Almentor, Yanfaa, Eyouth, Career180, Learnakhna</p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center">
                  <div className="h1 mb-3" style={{color: '#6c757d'}}>15+</div>
                  <h5 className="fw-bold mb-2" style={{color: '#495057'}}>Courses Developed</h5>
                  <p className="text-muted small mb-0">Specialized training programs in finance and professional development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light rounded-4 p-5 shadow-sm">
              <h3 className="h3 fw-bold mb-4 text-center" style={{color: '#495057'}}>
                Core Expertise
              </h3>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-building" style={{color: '#6c757d', fontSize: '1rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{color: '#495057'}}>Banking Operations</h6>
                      <p className="text-muted small mb-0">4 Departments Experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-mortarboard" style={{color: '#6c757d', fontSize: '1rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{color: '#495057'}}>Financial Training</h6>
                      <p className="text-muted small mb-0">Personal & Corporate Programs</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-briefcase" style={{color: '#6c757d', fontSize: '1rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{color: '#495057'}}>Career Development</h6>
                      <p className="text-muted small mb-0">Resume, Interview, LinkedIn</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-laptop" style={{color: '#6c757d', fontSize: '1rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{color: '#495057'}}>EduTech Specialist</h6>
                      <p className="text-muted small mb-0">Online Learning Platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

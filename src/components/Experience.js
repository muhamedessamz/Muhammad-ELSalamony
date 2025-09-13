import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4 text-primary">Professional Experience</h2>
          <p className="lead text-muted">Over 15 years of dedicated service in banking and training, empowering thousands through knowledge and expertise</p>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="bi bi-building fs-5"></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-1 fw-bold">Commercial International Bank (CIB), Egypt</h5>
                    <p className="text-muted mb-0">2015 – Present</p>
                  </div>
                </div>
                <p className="card-text text-muted">
                  Provided operational support, conducted internal training programs, and optimized banking processes to enhance efficiency and customer service delivery.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>Operational Excellence & Process Optimization</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>Internal Training & Development</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>Cross-Departmental Banking Operations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="bi bi-person-check fs-5"></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-1 fw-bold">Freelance Professional Trainer</h5>
                    <p className="text-muted mb-0">2014 – Present</p>
                  </div>
                </div>
                <p className="card-text text-muted">
                  Delivered over 10,000 training hours across diverse topics, supporting more than 20,000 learners in achieving their professional and personal development goals.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>10,000+ Training Hours Delivered</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>20,000+ Learners Impacted</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>Diverse Training Topics & Methodologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="bi bi-laptop fs-5"></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-1 fw-bold">EduTech Platform Instructor</h5>
                    <p className="text-muted mb-0">2021 – Present</p>
                  </div>
                </div>
                <p className="card-text text-muted">
                  Designed and delivered 15+ online courses across multiple EduTech platforms, impacting over 5,000 learners with accessible, high-quality educational content.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>15+ Online Courses Developed</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>5,000+ Online Learners</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>Multiple Platform Expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

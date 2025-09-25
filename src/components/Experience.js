import React from 'react';
import ColorPalette from './ColorPalette';

const Experience = () => {
  return (
    <section id="experience" className="py-5" style={{ background: ColorPalette.offWhite }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{ color: ColorPalette.primaryBlue }}>Professional Experience</h2>
          <p className="lead" style={{ color: ColorPalette.secondaryBlue, maxWidth: '600px', margin: '0 auto' }}>
            Over 15 years of dedicated service in banking and training, empowering thousands through knowledge and expertise
          </p>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0" style={{ 
              background: 'white',
              borderRadius: '15px',
              border: `1px solid ${ColorPalette.accentBeige}20`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 30px ${ColorPalette.blueShadow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '50px', 
                    height: '50px',
                    background: ColorPalette.primaryBlue
                  }}>
                    <i className="bi bi-building fs-5" style={{ color: 'white' }}></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-1 fw-bold" style={{ color: ColorPalette.primaryBlue }}>Commercial International Bank (CIB), Egypt</h5>
                    <p className="mb-0" style={{ color: ColorPalette.secondaryBlue }}>2015 – Present</p>
                  </div>
                </div>
                <p className="card-text" style={{ color: ColorPalette.secondaryBlue }}>
                  Provided operational support, conducted internal training programs, and optimized banking processes to enhance efficiency and customer service delivery.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>Operational Excellence & Process Optimization</span>
                  </li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>Internal Training & Development</span>
                  </li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>Cross-Departmental Banking Operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0" style={{ 
              background: 'white',
              borderRadius: '15px',
              border: `1px solid ${ColorPalette.accentBeige}20`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 30px ${ColorPalette.blueShadow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '50px', 
                    height: '50px',
                    background: ColorPalette.secondaryBlue
                  }}>
                    <i className="bi bi-person-check fs-5" style={{ color: 'white' }}></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-1 fw-bold" style={{ color: ColorPalette.primaryBlue }}>Freelance Professional Trainer</h5>
                    <p className="mb-0" style={{ color: ColorPalette.secondaryBlue }}>2014 – Present</p>
                  </div>
                </div>
                <p className="card-text" style={{ color: ColorPalette.secondaryBlue }}>
                  Delivered over 10,000 training hours across diverse topics, supporting more than 20,000 learners in achieving their professional and personal development goals.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>10,000+ Training Hours Delivered</span>
                  </li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>20,000+ Learners Impacted</span>
                  </li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>Diverse Training Topics & Methodologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0" style={{ 
              background: 'white',
              borderRadius: '15px',
              border: `1px solid ${ColorPalette.accentBeige}20`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 30px ${ColorPalette.blueShadow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '50px', 
                    height: '50px',
                    background: ColorPalette.accentBeige
                  }}>
                    <i className="bi bi-laptop fs-5" style={{ color: ColorPalette.primaryBlue }}></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-1 fw-bold" style={{ color: ColorPalette.primaryBlue }}>EduTech Platform Instructor</h5>
                    <p className="mb-0" style={{ color: ColorPalette.secondaryBlue }}>2021 – Present</p>
                  </div>
                </div>
                <p className="card-text" style={{ color: ColorPalette.secondaryBlue }}>
                  Designed and delivered 15+ online courses across multiple EduTech platforms, impacting over 5,000 learners with accessible, high-quality educational content.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>15+ Online Courses Developed</span>
                  </li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>5,000+ Online Learners</span>
                  </li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill me-2" style={{ color: ColorPalette.secondaryBlue }}></i>
                    <span style={{ color: ColorPalette.secondaryBlue }}>Multiple Platform Expertise</span>
                  </li>
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
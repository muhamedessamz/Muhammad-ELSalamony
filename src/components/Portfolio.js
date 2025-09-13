import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const stats = [
    {
      icon: 'bi bi-people-fill',
      value: '20,000+',
      label: 'Learners Impacted',
      description: 'Professionals trained worldwide through online and in-person programs'
    },
    {
      icon: 'bi bi-clock-history',
      value: '10,000+',
      label: 'Training Hours',
      description: 'Comprehensive learning delivered across diverse financial topics'
    },
    {
      icon: 'bi bi-calendar3',
      value: '10+',
      label: 'Years Experience',
      description: 'Banking operations and professional training expertise'
    },
    {
      icon: 'bi bi-laptop',
      value: '15+',
      label: 'Online Courses',
      description: 'Specialized programs on leading educational platforms'
    }
  ];

  const initiatives = [
    {
      icon: 'bi bi-globe',
      title: 'Digital Egypt Pioneers Initiative',
      description: 'Contributed to national digital transformation by training professionals in digital financial literacy and banking operations.',
    },
    {
      icon: 'bi bi-people',
      title: 'NGO Collaborations',
      description: 'Partnered with non-profit organizations to deliver financial literacy programs to underserved communities and youth groups.',
    },
    {
      icon: 'bi bi-person-badge',
      title: 'Resume Branding & Career Coaching',
      description: 'Developed comprehensive career development programs focusing on personal branding, resume optimization, and job search strategies.',
    },
    {
      icon: 'bi bi-linkedin',
      title: 'LinkedIn Profile Optimization',
      description: 'Specialized coaching sessions helping professionals enhance their LinkedIn presence and professional networking capabilities.',
    }
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{color: '#495057'}}>Achievements & Impact</h2>
          <p className="lead text-muted">Measuring success through lives transformed and knowledge shared</p>
        </div>
        
        {/* Stats Grid */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="text-center p-4 bg-white rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center">
                <div className="mb-3">
                  <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center mx-auto" 
                       style={{width: '60px', height: '60px'}}>
                    <i className={`${stat.icon}`} style={{color: '#6c757d', fontSize: '1.5rem'}}></i>
                  </div>
                </div>
                <div className="h2 fw-bold mb-2" style={{color: '#495057'}}>{stat.value}</div>
                <h5 className="fw-semibold mb-2" style={{color: '#495057'}}>{stat.label}</h5>
                <p className="text-muted small mb-0">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Major Initiatives */}
        <div className="row g-4">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{color: '#495057'}}>
              Key Initiatives & Contributions
            </h3>
          </div>
          {initiatives.map((initiative, index) => (
            <div key={index} className="col-lg-6 col-md-12">
              <div className="card h-100 shadow-sm border-0 bg-white">
                <div className="card-body p-4 d-flex align-items-start">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-4 flex-shrink-0" 
                       style={{width: '50px', height: '50px', border: '1px solid #dee2e6'}}>
                    <i className={`${initiative.icon} fs-6`} style={{color: '#6c757d'}}></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title fw-bold mb-2" style={{color: '#495057'}}>{initiative.title}</h5>
                    <p className="card-text text-muted mb-0" style={{lineHeight: '1.6'}}>{initiative.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

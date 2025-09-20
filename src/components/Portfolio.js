import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const stats = [
    {
      icon: 'bi bi-clock-history',
      value: '+20,000',
      label: 'Training Hours Delivered',
      description: 'Online & Offline'
    },
    {
      icon: 'bi bi-people-fill',
      value: '+20,000',
      label: 'Trainees Attendance',
      description: 'Professionals trained worldwide through comprehensive programs'
    },
    {
      icon: 'bi bi-calendar3',
      value: '+11',
      label: 'Years',
      description: 'in the field'
    },
    {
      icon: 'bi bi-play-circle-fill',
      value: '+20,000',
      label: 'Watching Hours',
      description: 'on my recorded courses'
    }
  ];

  return (
    <section id="portfolio" className="py-5" style={{
      background: 'linear-gradient(240deg, #0b1a61 0%, #1f2a89 45%, #d89a2d 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-3%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(45deg, rgba(255,215,0,0.2), rgba(255,215,0,0.1))',
        borderRadius: '50%',
        filter: 'blur(2px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08))',
        borderRadius: '50%',
        filter: 'blur(3px)'
      }}></div>

      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{ color: '#FFFFFF' }}>Figures about my training Journey</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.9)' }}>Measuring success through lives transformed and knowledge shared</p>
        </div>

        {/* Stats Grid */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="text-center p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center position-relative" style={{
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255,215,0,0.3)',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
                  e.currentTarget.style.borderColor = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)';
                }}>
                <div className="mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(45deg, #3498db, #2980b9)',
                      color: 'white'
                    }}>
                    <i className={`${stat.icon}`} style={{ fontSize: '1.8rem' }}></i>
                  </div>
                </div>
                <div className="h1 fw-bold mb-2" style={{
                  color: '#2c3e50',
                  fontSize: '2.5rem',
                  fontWeight: '700'
                }}>{stat.value}</div>
                <h5 className="fw-semibold mb-3" style={{
                  color: '#34495e',
                  fontSize: '1.1rem'
                }}>{stat.label}</h5>
                <p className="text-muted small mb-0" style={{
                  lineHeight: '1.5',
                  fontSize: '0.9rem'
                }}>{stat.description}</p>

                {/* Separator line after each card except the last one */}
                {index < stats.length - 1 && (
                  <div className="position-absolute" style={{
                    right: '-2px',
                    top: '20%',
                    height: '60%',
                    width: '2px',
                    background: 'linear-gradient(to bottom, transparent, #e0e0e0, transparent)'
                  }}></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

/* Add some responsive styles */
const styles = `
  @media (max-width: 768px) {
    .h1 {
      font-size: 2rem !important;
    }
    
    .display-5 {
      font-size: 2.2rem !important;
    }
    
    .position-absolute {
      display: none !important;
    }
    
    .col-lg-3 {
      margin-bottom: 2rem;
    }
  }
  
  @media (max-width: 576px) {
    .h1 {
      font-size: 1.8rem !important;
    }
    
    .display-5 {
      font-size: 1.8rem !important;
    }
  }
`;

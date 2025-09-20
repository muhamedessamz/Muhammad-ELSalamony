import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfessionalProfile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set document title
    document.title = 'Professional Profile - Muhammad ELSalamony | Banking Expert & Trainer';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('#professional-profile .achievements-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      document.title = 'Muhammad ELSalamony - Professional Trainer & Banking Expert';
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const Counter = ({ target, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isVisible, target, duration]);

    return (
      <div className="h1 mb-3 animated-counter" style={{
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 'bold',
        fontSize: '3rem',
        transition: 'all 0.3s ease'
      }}>
        {count.toLocaleString()}{suffix}
      </div>
    );
  };

  const achievements = [
    {
      target: 20000,
      label: 'Training Hours Delivered',
      description: 'Comprehensive programs across diverse topics',
      icon: 'bi-clock-history',
      color: '#007bff'
    },
    {
      target: 20000,
      label: 'Trainees Impacted',
      description: 'Individuals empowered through professional training',
      icon: 'bi-people-fill',
      color: '#28a745'
    },
    {
      target: 11,
      label: 'Years in the Field',
      description: 'Proven expertise in banking and training',
      icon: 'bi-calendar3',
      color: '#ffc107'
    },
    {
      target: 20000,
      label: 'Online Watching Hours',
      description: 'Global reach through digital learning platforms',
      icon: 'bi-play-circle-fill',
      color: '#17a2b8'
    }
  ];

  const professionalTitles = [
    'Professional Certified Trainer',
    'Professional Instructional Designer',
    'Experienced Banking Professional',
    'Mentor & Financial Literacy Trainer'
  ];

  const trainingTitles = [
    'Coach/Consultant',
    'Trainer/Instructor'
  ];

  const trainingSetups = [
    { name: 'Corporate Training', icon: 'bi-building' },
    { name: 'Training Camps', icon: 'bi-people' },
    { name: 'Training Centres', icon: 'bi-geo-alt' },
    { name: 'Conference Talks & Panels', icon: 'bi-mic' },
    { name: 'University Courses', icon: 'bi-mortarboard' }
  ];

  return (
    <div id="professional-profile" className="min-vh-100" style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#FFFFFF',
      padding: '40px 0'
    }}>
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3" style={{
              color: '#FFFFFF',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              Professional Profile
            </h1>
            <p className="lead mb-4" style={{ color: '#B0B3B8' }}>
              Discover my professional journey, achievements, and training expertise
            </p>
            <Link
              to="/full-courses"
              className="btn me-3"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                borderRadius: '25px',
                fontWeight: '600',
                padding: '12px 24px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Courses
            </Link>
            <Link
              to="/"
              className="btn btn-outline-light"
              style={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#FFFFFF',
                borderRadius: '25px',
                padding: '12px 24px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              <i className="bi bi-house me-2"></i>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="component" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '2.5rem',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
            >
              <h3 className="h3 fw-bold mb-4 text-center" style={{ color: 'white' }}>
                Professional Journey
              </h3>

              <p className="lead text-center mb-4" style={{ color: 'white' }}>
                Muhammad ELSalamony is a banking professional and certified trainer with over 11 years of experience in banking and professional training.
              </p>

              <div className="row g-4">
                <div className="col-md-6">
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Collaborates with leading learning platforms in the Arab world such as Almentor, Yanfaa, Career180, EYouth, and Learnkhana, as well as the global platform Udemy.
                  </p>
                </div>
                <div className="col-md-6">
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Passionate about empowering youth and simplifying banking & financial concepts, has trained over 20,000 individuals, helping them advance their careers.
                  </p>
                </div>
                <div className="col-12">
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Recognized as an influencer on LinkedIn in financial literacy, banking services, and financial freedom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Titles I Had */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{ color: 'white' }}>
              Professional Titles I Had
            </h3>

            <div className="row g-4">
              {professionalTitles.map((title, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center component" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div className="mb-3">
                      <i className="bi bi-award-fill" style={{
                        fontSize: '3rem',
                        color: '#FFD700',
                        marginBottom: '1rem'
                      }}></i>
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: 'white' }}>
                      {title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Titles in Training Field */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{ color: 'white' }}>
              Titles I Had in The Training Field
            </h3>

            <div className="row g-4">
              {trainingTitles.map((title, index) => (
                <div key={index} className="col-md-6">
                  <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center component" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div className="mb-3">
                      <i className="bi bi-person-badge-fill" style={{
                        fontSize: '3rem',
                        color: '#28a745',
                        marginBottom: '1rem'
                      }}></i>
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: 'white' }}>
                      {title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Figures / Achievements with Animated Counters */}
        <div className="row justify-content-center mb-5 achievements-section">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-5 text-center" style={{ color: 'white' }}>
              Professional Figures & Achievements
            </h3>

            <div className="row g-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center component" style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,255,255,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                    }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                      background: `linear-gradient(135deg, ${achievement.color}20, transparent)`,
                      opacity: 0.5
                    }}></div>

                    <div className="mb-4 position-relative z-2">
                      <i className={`bi ${achievement.icon}`} style={{
                        fontSize: '3.5rem',
                        color: achievement.color,
                        marginBottom: '1rem'
                      }}></i>
                      <Counter
                        target={achievement.target}
                        duration={2500}
                        suffix={achievement.label.includes('Hours') ? '+' :
                          achievement.label.includes('Years') ? '' :
                            achievement.label.includes('Watching') ? '+' : '+'}
                      />
                    </div>

                    <div className="position-relative z-2">
                      <h5 className="fw-bold mb-2" style={{ color: 'white' }}>
                        {achievement.label}
                      </h5>
                      <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training & Lecturing Setups */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{ color: 'white' }}>
              Training & Lecturing Setups
            </h3>

            <div className="row g-4">
              {trainingSetups.map((setup, index) => (
                <div key={index} className="col-md-6 col-lg-2 col-sm-6">
                  <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center component" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    minHeight: '150px'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div className="mb-3">
                      <i className={`bi ${setup.icon}`} style={{
                        fontSize: '2.5rem',
                        color: '#FFD700',
                        marginBottom: '1rem'
                      }}></i>
                    </div>
                    <h6 className="fw-bold mb-0" style={{ color: 'white' }}>
                      {setup.name}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animated-counter {
          animation: countUp 0.6s ease-out forwards;
        }
        
        .achievements-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        .achievements-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .component {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .component:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        @media (max-width: 768px) {
          .h1 {
            font-size: 2.5rem !important;
          }
          
          .component {
            padding: 1.5rem;
          }
          
          .display-4 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfessionalProfile;

import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('#about .achievements-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
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
      icon: 'bi-clock-history'
    },
    {
      target: 20000,
      label: 'Trainees Impacted',
      description: 'Individuals empowered through professional training',
      icon: 'bi-people-fill'
    },
    {
      target: 11,
      label: 'Years in the Field',
      description: 'Proven expertise in banking and training',
      icon: 'bi-calendar3'
    },
    {
      target: 20000,
      label: 'Online Watching Hours',
      description: 'Global reach through digital learning platforms',
      icon: 'bi-play-circle-fill'
    }
  ];

  return (
    <section id="about" className="py-5" style={{
      background: 'linear-gradient(195deg, #0b1a61 0%, #1f2a89 40%, #d89a2d 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      color: '#FFFFFF'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(3px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(5px)'
      }}></div>

      <div className="container position-relative">
        {/* Section Header */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="display-5 fw-bold mb-3 about-title" style={{
            color: '#FFFFFF',
            textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            About Muhammad ELSalamony
          </h2>
          <p className="lead about-subtitle" style={{
            color: '#FFFFFF',
            fontSize: '1.2rem',
            fontWeight: '400',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}>
            Banking Professional & Certified Trainer with 11+ Years Experience
          </p>
        </div>

        {/* Professional Journey */}
        <div className="row justify-content-center mb-4 mb-md-5">
          <div className="col-lg-10">
            <div className="component about-card" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}>
              <h3 className="h3 fw-bold mb-3 mb-md-4 about-section-title" style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontSize: '2rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                fontWeight: '700'
              }}>
                Professional Journey
              </h3>

              <div className="row g-4">
                <div className="col-12">
                  <p className="lead text-center about-intro-text" style={{
                    color: '#FFFFFF',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    marginBottom: '2rem',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                    fontWeight: '400'
                  }}>
                    Muhammad ELSalamony is a banking professional and certified trainer with over 11 years of experience in banking and professional training.
                  </p>
                </div>

                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="d-flex align-items-start mb-3 about-point">
                    <i className="bi bi-globe me-3" style={{
                      color: '#d89a2d',
                      fontSize: '1.5rem',
                      marginTop: '4px',
                      flexShrink: 0
                    }}></i>
                    <p className="about-point-text" style={{
                      color: '#FFFFFF',
                      lineHeight: '1.7',
                      margin: 0,
                      textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                      fontWeight: '400'
                    }}>
                      Collaborates with leading learning platforms in the Arab world such as Almentor, Yanfaa, Career180, EYouth, and Learnkhana, as well as the global platform Udemy.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3 about-point">
                    <i className="bi bi-people-fill me-3" style={{
                      color: '#d89a2d',
                      fontSize: '1.5rem',
                      marginTop: '4px',
                      flexShrink: 0
                    }}></i>
                    <p className="about-point-text" style={{
                      color: '#FFFFFF',
                      lineHeight: '1.7',
                      margin: 0,
                      textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                      fontWeight: '400'
                    }}>
                      Passionate about empowering youth and simplifying banking & financial concepts, has trained over 20,000 individuals, helping them advance their careers.
                    </p>
                  </div>
                </div>

                <div className="col-12 mt-2 mt-md-0">
                  <div className="d-flex align-items-start justify-content-center about-point about-highlight">
                    <i className="bi bi-linkedin me-3" style={{
                      color: '#d89a2d',
                      fontSize: '1.5rem',
                      marginTop: '4px',
                      flexShrink: 0
                    }}></i>
                    <p className="about-highlight-text" style={{
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: '1.7',
                      margin: 0,
                      textAlign: 'center',
                      maxWidth: '600px',
                      fontWeight: '500'
                    }}>
                      Recognized as an influencer on LinkedIn in financial literacy, banking services, and financial freedom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .component {
          background: transparent !important;
        }
        
        .component:hover {
          transform: none;
          background: transparent !important;
        }
        
        @media (max-width: 768px) {
          .about-title {
            font-size: 1.8rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.8rem !important;
          }
          
          .about-subtitle {
            font-size: 1rem !important;
            line-height: 1.4 !important;
            padding: 0 1rem;
          }
          
          .about-card {
            padding: 1.5rem !important;
            margin: 0 0.5rem;
          }
          
          .about-section-title {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
            margin-bottom: 1rem !important;
          }
          
          .about-intro-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1.5rem !important;
            padding: 0 0.5rem;
          }
          
          .about-point {
            margin-bottom: 1.5rem !important;
          }
          
          .about-point-text {
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
          
          .about-highlight-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            text-align: left !important;
          }
          
          .about-icon {
            width: 35px !important;
            height: 35px !important;
            margin-right: 0.75rem !important;
          }
          
          .about-highlight {
            justify-content: flex-start !important;
          }
        }
        
        @media (max-width: 576px) {
          .about-title {
            font-size: 1.6rem !important;
          }
          
          .about-card {
            padding: 1.2rem !important;
            margin: 0 0.25rem;
          }
          
          .about-section-title {
            font-size: 1.3rem !important;
          }
          
          .about-intro-text {
            font-size: 0.9rem !important;
            padding: 0;
          }
          
          .about-point-text {
            font-size: 0.85rem !important;
          }
          
          .about-highlight-text {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

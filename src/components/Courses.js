import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ColorPalette from './ColorPalette';

const platforms = [
  {
    name: 'Almentor',
    coursesCount: 4,
    logo: require('../assets/images/main Courses/almentor.png'),
    description: '4 Courses',
    link: '/full-courses?platform=mentor'
  },
  {
    name: 'Yanfaa',
    coursesCount: 12,
    logo: require('../assets/images/main Courses/Yanfaa.jpeg'),
    description: '12 Courses',
    link: '/full-courses?platform=yanfaa'
  },
  {
    name: 'Career 180',
    coursesCount: 2,
    logo: require('../assets/images/main Courses/Career180.jpg'),
    description: '2 Courses',
    link: '/full-courses?platform=career'
  },
  {
    name: 'EYouth',
    coursesCount: 2,
    logo: require('../assets/images/main Courses/eyouth.png'),
    description: '2 Courses',
    link: '/full-courses?platform=eyouth'
  },
  {
    name: 'Udemy',
    coursesCount: 3,
    logo: require('../assets/images/main Courses/udemy.png'),
    description: '3 Courses',
    link: '/full-courses?platform=udemy'
  }
];

const Courses = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-5" style={{
      background: `linear-gradient(45deg, ${ColorPalette.primaryBlue} 0%, ${ColorPalette.secondaryBlue} 35%, ${ColorPalette.accentBeige} 100%)`,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-10%',
        width: '250px',
        height: '250px',
        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}20, ${ColorPalette.accentBeige}10)`,
        borderRadius: '50%',
        filter: 'blur(3px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-8%',
        width: '350px',
        height: '350px',
        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}15, ${ColorPalette.accentBeige}08)`,
        borderRadius: '50%',
        filter: 'blur(5px)'
      }}></div>
      {/* Horizontal Divider */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <hr className="my-5" style={{
              border: 'none',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${ColorPalette.accentBeige}, transparent)`,
              margin: '60px 0'
            }} />
          </div>
        </div>
      </div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{
              color: ColorPalette.lightText,
              textShadow: `2px 2px 4px ${ColorPalette.blueShadow}`
            }}>
              My Courses
            </h2>
            <p className="lead mb-0" style={{ 
              fontSize: '1.2em', 
              color: 'rgba(249, 243, 239, 0.9)' 
            }}>
              Explore my training programs across leading platforms
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="position-relative">
              {/* Scroll Arrows */}
              <button
                className="scroll-arrow left-arrow d-none d-lg-block"
                onClick={scrollLeft}
                aria-label="Scroll left"
                style={{
                  position: 'absolute',
                  left: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: 'none',
                  background: ColorPalette.accentBeige,
                  boxShadow: `0 4px 12px ${ColorPalette.beigeShadow}`,
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: ColorPalette.primaryBlue,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = ColorPalette.secondaryBlue;
                  e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  e.target.style.boxShadow = `0 6px 20px ${ColorPalette.beigeShadow}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = ColorPalette.accentBeige;
                  e.target.style.transform = 'translateY(-50%) scale(1)';
                  e.target.style.boxShadow = `0 4px 12px ${ColorPalette.beigeShadow}`;
                }}
              >
                ‹
              </button>

              <div
                ref={scrollRef}
                className="platform-scroll-container"
                style={{
                  display: 'flex',
                  overflowX: 'auto',
                  gap: '40px',
                  padding: '30px 0',
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth'
                }}
                role="region"
                aria-label="Platform courses carousel"
              >
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="platform-card flex-shrink-0 text-center"
                    style={{
                      scrollSnapAlign: 'start',
                      minWidth: '380px',
                      maxWidth: '400px',
                      height: '500px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '25px',
                      border: `2px solid ${ColorPalette.accentBeige}20`,
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      boxShadow: '0 15px 45px rgba(0,0,0,0.1)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.2)';
                      e.currentTarget.style.borderColor = `${ColorPalette.accentBeige}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 15px 45px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = `${ColorPalette.accentBeige}20`;
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.location.href = platform.link;
                      }
                    }}
                    aria-label={`View ${platform.name} courses`}
                  >
                    {/* Platform Image */}
                    <div className="platform-image-container" style={{
                      width: '100%',
                      height: '280px',
                      overflow: 'hidden',
                      borderRadius: '20px 20px 0 0',
                      position: 'relative'
                    }}>
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transition: 'all 0.4s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '80px',
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.3))'
                      }}></div>
                    </div>

                    {/* Platform Content */}
                    <div className="platform-content" style={{
                      padding: '25px 20px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>

                      {/* Platform Info */}
                      <div className="text-center mb-3">
                        <h4 className="fw-bold mb-3" style={{
                          color: ColorPalette.primaryBlue,
                          fontSize: '1.5em',
                          letterSpacing: '0.5px'
                        }}>
                          {platform.name}
                        </h4>
                        <span className="badge" style={{
                          background: ColorPalette.beigeGradient,
                          color: ColorPalette.primaryBlue,
                          fontSize: '1em',
                          fontWeight: '700',
                          padding: '12px 24px',
                          borderRadius: '25px',
                          boxShadow: `0 4px 15px ${ColorPalette.beigeShadow}`
                        }}>
                          <i className="bi bi-play-circle-fill me-2"></i>
                          {platform.description}
                        </span>
                      </div>

                      {/* View Button */}
                      <Link
                        to={platform.link}
                        className="btn w-100"
                        style={{
                          background: ColorPalette.blueGradient,
                          border: 'none',
                          borderRadius: '30px',
                          color: ColorPalette.lightText,
                          fontWeight: 'bold',
                          padding: '15px 25px',
                          fontSize: '1.1em',
                          transition: 'all 0.3s ease',
                          boxShadow: `0 6px 20px ${ColorPalette.blueShadow}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          marginTop: 'auto'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-3px)';
                          e.target.style.boxShadow = `0 10px 30px ${ColorPalette.beigeShadow}`;
                          e.target.style.background = ColorPalette.secondaryBlue;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = `0 6px 20px ${ColorPalette.blueShadow}`;
                          e.target.style.background = ColorPalette.blueGradient;
                        }}
                      >
                        <i className="bi bi-arrow-right me-2"></i>
                        View Courses
                      </Link>
                    </div>

                    {/* Premium Accent Border */}
                    <div className="position-absolute" style={{
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '6px',
                      background: ColorPalette.beigeGradient,
                      borderRadius: '20px 20px 0 0'
                    }}></div>
                  </div>
                ))}

                {/* Hide scrollbar for webkit browsers */}
                <style jsx>{`
                  .platform-scroll-container::-webkit-scrollbar {
                    display: none;
                  }
                  .platform-scroll-container {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  
                  @media (max-width: 768px) {
                    .platform-card {
                      min-width: 320px !important;
                      max-width: 340px !important;
                      height: 420px !important;
                    }
                    
                    .platform-image-container {
                      height: 220px !important;
                    }
                    
                    .platform-content {
                      padding: 20px 15px !important;
                    }
                  }
                  
                  @media (max-width: 480px) {
                    .platform-card {
                      min-width: 280px !important;
                      max-width: 300px !important;
                      height: 380px !important;
                    }
                    
                    .platform-image-container {
                      height: 180px !important;
                    }
                    
                    .platform-content {
                      padding: 15px 12px !important;
                    }
                  }
                `}</style>
              </div>

              <button
                className="scroll-arrow right-arrow d-none d-lg-block"
                onClick={scrollRight}
                aria-label="Scroll right"
                style={{
                  position: 'absolute',
                  right: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: 'none',
                  background: ColorPalette.accentBeige,
                  boxShadow: `0 4px 12px ${ColorPalette.beigeShadow}`,
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: ColorPalette.primaryBlue,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = ColorPalette.secondaryBlue;
                  e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  e.target.style.boxShadow = `0 6px 20px ${ColorPalette.beigeShadow}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = ColorPalette.accentBeige;
                  e.target.style.transform = 'translateY(-50%) scale(1)';
                  e.target.style.boxShadow = `0 4px 12px ${ColorPalette.beigeShadow}`;
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link
              to="/full-courses"
              className="btn btn-lg"
              style={{
                background: ColorPalette.beigeGradient,
                border: 'none',
                borderRadius: '35px',
                color: ColorPalette.primaryBlue,
                fontWeight: 'bold',
                padding: '15px 40px',
                fontSize: '1.1em',
                transition: 'all 0.3s ease',
                boxShadow: `0 8px 25px ${ColorPalette.beigeShadow}`,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = `0 12px 35px ${ColorPalette.beigeShadow}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = `0 8px 25px ${ColorPalette.beigeShadow}`;
              }}
            >
              <i className="bi bi-collection me-2"></i>
              View All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
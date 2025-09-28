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
      background: ColorPalette.blueGradient, // Changed to use the unified blue gradient
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
                className="scroll-arrow left-arrow d-none d-md-block" // Changed from d-lg-block to d-md-block
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
                  color: ColorPalette.primaryText,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = ColorPalette.secondaryBlue;
                  e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  e.target.style.boxShadow = `0 6px 20px ${ColorPalette.blueShadow}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = ColorPalette.accentBeige;
                  e.target.style.transform = 'translateY(-50%) scale(1)';
                  e.target.style.boxShadow = `0 4px 12px ${ColorPalette.beigeShadow}`;
                }}
              >
                ‹
              </button>

              {/* Visual indicator for mobile users */}
              <div className="d-md-none text-center mb-2">
                <small style={{ color: ColorPalette.lightText, opacity: 0.8 }}>
                  ← Swipe horizontally to see all platforms →
                </small>
              </div>
              
              <div
                ref={scrollRef}
                className="platform-scroll-container position-relative"
                style={{
                  display: 'flex',
                  overflowX: 'auto',
                  gap: '20px', // Reduced gap for better mobile view
                  padding: '30px 10px', // Added horizontal padding
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth'
                }}
                role="region"
                aria-label="Platform courses carousel"
                onTouchStart={(e) => {
                  // Prevent default only on horizontal swipe
                  if (Math.abs(e.touches[0].clientX - e.touches[0].clientY) > 10) {
                    e.stopPropagation();
                  }
                }}
              >
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="platform-card flex-shrink-0 text-center"
                    style={{
                      scrollSnapAlign: 'start',
                      minWidth: '300px',
                      maxWidth: '320px',
                      height: '400px',
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
                      e.currentTarget.style.boxShadow = `0 25px 60px ${ColorPalette.blueShadow}`; // Changed to blueShadow
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
                          color: ColorPalette.primaryText, // Changed to primaryText
                          fontSize: '1.5em',
                          letterSpacing: '0.5px'
                        }}>
                          {platform.name}
                        </h4>
                        <span className="badge" style={{
                          background: ColorPalette.beigeGradient,
                          color: ColorPalette.primaryText, // Changed to primaryText
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
                          background: ColorPalette.blueGradient, // Changed to blueGradient
                          border: 'none',
                          borderRadius: '30px',
                          color: ColorPalette.lightText,
                          fontWeight: 'bold',
                          padding: '15px 25px',
                          fontSize: '1.1em',
                          transition: 'all 0.3s ease',
                          boxShadow: `0 6px 20px ${ColorPalette.blueShadow}`, // Changed to blueShadow
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          marginTop: 'auto'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-3px)';
                          e.target.style.boxShadow = `0 10px 30px ${ColorPalette.blueShadow}`; // Changed to blueShadow
                          e.target.style.background = ColorPalette.secondaryBlue; // Changed to secondaryBlue
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = `0 6px 20px ${ColorPalette.blueShadow}`; // Changed to blueShadow
                          e.target.style.background = ColorPalette.blueGradient; // Changed to blueGradient
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

                {/* Show scrollbar on mobile for better UX */}
                <style jsx>{`
                  .platform-scroll-container::-webkit-scrollbar {
                    display: none;
                  }
                  .platform-scroll-container {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  
                  /* Add visual indicators for mobile users */
                  @media (max-width: 768px) {
                    .platform-scroll-container {
                      padding-bottom: 20px; /* Space for scrollbar */
                    }
                    
                    .platform-scroll-container::before {
                      content: '← Swipe →';
                      position: absolute;
                      top: -30px;
                      left: 50%;
                      transform: translateX(-50%);
                      color: ${ColorPalette.lightText};
                      font-size: 14px;
                      font-weight: 500;
                      opacity: 0.7;
                      animation: pulse 2s infinite;
                    }
                    
                    .platform-card {
                      min-width: 300px !important;
                      max-width: 320px !important;
                      height: 400px !important;
                    }
                    
                    .platform-image-container {
                      height: 200px !important;
                    }
                    
                    .platform-content {
                      padding: 20px 15px !important;
                    }
                  }
                  
                  @media (max-width: 576px) {
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
                  
                  @media (max-width: 400px) {
                    .platform-card {
                      min-width: 260px !important;
                      max-width: 280px !important;
                      height: 360px !important;
                    }
                    
                    .platform-image-container {
                      height: 160px !important;
                    }
                    
                    .platform-content {
                      padding: 12px 10px !important;
                    }
                  }
                  
                  @keyframes pulse {
                    0% { opacity: 0.7; }
                    50% { opacity: 1; }
                    100% { opacity: 0.7; }
                  }
                `}</style>
              </div>

              <button
                className="scroll-arrow right-arrow d-none d-md-block"
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
                  color: ColorPalette.primaryText, // Changed to primaryText for better contrast
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onTouchEnd={scrollRight} // Added touch support
                onMouseEnter={(e) => {
                  e.target.style.background = ColorPalette.secondaryBlue;
                  e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  e.target.style.boxShadow = `0 6px 20px ${ColorPalette.blueShadow}`; // Changed to blueShadow
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
                color: ColorPalette.primaryText, // Changed to primaryText
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
                e.target.style.boxShadow = `0 12px 35px ${ColorPalette.blueShadow}`; // Changed to blueShadow
                e.target.style.background = ColorPalette.secondaryBlue; // Changed to secondaryBlue
                e.target.style.color = ColorPalette.lightText; // Changed to lightText for better contrast
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = `0 8px 25px ${ColorPalette.beigeShadow}`;
                e.target.style.background = ColorPalette.beigeGradient;
                e.target.style.color = ColorPalette.primaryText; // Reset to primaryText
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
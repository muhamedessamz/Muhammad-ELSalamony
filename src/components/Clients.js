import React, { useRef } from 'react';
import ColorPalette from './ColorPalette';

const offlineImages = [
  '1754075310217.jpg',
  '1754158242135.jpg',
  '1754158262220.jpg',
  '1754158264391.jpg',
  '1756272437760.jpg',
  '2.png',
  'Screenshot (943).png',
  'Screenshot (95).png',
  'Screenshot1.png'
];

const onlineImages = [
  '1756066457804.jpg',
  '1756066458189.jpg',
  '1756066459655.jpg',
  '1757179710786.jpg',
  '1757179712177.jpg',
  '1757179712193.jpg'
];

const clientImages = [
  '101-2.jpg',
  '1631359406417.jpeg',
  'IEEE-Logo.jpg',
  'image (1).png',
  'images (2).jpeg',
  'images (2).png',
  'Resala.jpg',
  'tadrebk.com (2).webp',
  'unfpa.png',
  'Yanfaa.jpg'
];

const Clients = () => {
  const offlineScrollRef = useRef(null);
  const onlineScrollRef = useRef(null);

  return (
    <section id="clients" className="py-5" style={{
      background: `linear-gradient(135deg, ${ColorPalette.primaryBlue} 0%, ${ColorPalette.secondaryBlue} 40%, ${ColorPalette.accentBeige} 100%)`,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '200px',
        height: '200px',
        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}20, ${ColorPalette.accentBeige}10)`,
        borderRadius: '50%',
        filter: 'blur(3px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}15, ${ColorPalette.accentBeige}08)`,
        borderRadius: '50%',
        filter: 'blur(5px)'
      }}></div>

      <div className="container position-relative">

        {/* Offline Sessions Section */}
        <div className="row mb-5 pb-5" style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '40px 20px',
          margin: '20px 10px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div className="col-12 text-center mb-4">
            <h2 className="display-4 fw-bold mb-3" style={{
              color: ColorPalette.lightText,
              textShadow: '2px 2px 4px rgba(27, 60, 83, 0.3)'
            }}>
              Offline Sessions
            </h2>
            <h3 className="h4 fw-normal" style={{
              color: 'rgba(249, 243, 239, 0.9)',
              fontWeight: '500'
            }}>
              Training Sessions
            </h3>
          </div>
          <div className="col-12">
            <div className="position-relative">
              <div
                ref={offlineScrollRef}
                className="session-scroll-container"
                style={{
                  display: 'flex',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  gap: '25px',
                  padding: '25px 15px',
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(210, 193, 182, 0.3) transparent',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {offlineImages.map((image, index) => (
                  <div key={index} className="session-image-container flex-shrink-0" style={{
                    textAlign: 'center',
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '15px',
                    boxShadow: '0 10px 30px rgba(44, 62, 80, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid rgba(210, 193, 182, 0.1)',
                    minWidth: '280px',
                    maxWidth: '320px',
                    scrollSnapAlign: 'start'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '15px',
                      background: ColorPalette.secondaryBlue,
                      color: ColorPalette.lightText,
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      zIndex: 2
                    }}>
                      #{index + 1}
                    </div>
                    <img
                      src={require(`../assets/images/off On/off/${image}`)}
                      alt={`Offline Session ${index + 1}`}
                      className="img-fluid session-image"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '15px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.parentElement.style.transform = 'translateY(-8px)';
                        e.target.parentElement.style.boxShadow = '0 20px 40px rgba(44, 62, 80, 0.25)';
                        e.target.parentElement.style.borderColor = 'rgba(210, 193, 182, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.parentElement.style.transform = 'translateY(0)';
                        e.target.parentElement.style.boxShadow = '0 10px 30px rgba(44, 62, 80, 0.15)';
                        e.target.parentElement.style.borderColor = 'rgba(210, 193, 182, 0.1)';
                      }}
                    />
                    <div style={{
                      marginTop: '12px',
                      padding: '8px 0',
                      borderTop: '1px solid rgba(210, 193, 182, 0.1)'
                    }}>
                      <p style={{
                        margin: 0,
                        color: ColorPalette.primaryText,
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                      }}>
                        Offline Session {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div style={{
              height: '2px',
              background: `linear-gradient(to right, transparent, ${ColorPalette.accentBeige}, transparent)`,
              margin: '50px 0',
              borderRadius: '1px'
            }}></div>
          </div>
        </div>

        {/* Online Sessions Section */}
        <div className="row mb-5 pb-5" style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '40px 20px',
          margin: '20px 10px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div className="col-12 text-center mb-4">
            <h2 className="display-4 fw-bold mb-3" style={{
              color: ColorPalette.lightText,
              textShadow: '2px 2px 4px rgba(27, 60, 83, 0.3)'
            }}>
              Online Sessions
            </h2>
            <h3 className="h4 fw-normal" style={{
              color: 'rgba(249, 243, 239, 0.9)',
              fontWeight: '500'
            }}>
              Training Sessions
            </h3>
          </div>
          <div className="col-12">
            <div className="position-relative">
              <div
                ref={onlineScrollRef}
                className="session-scroll-container"
                style={{
                  display: 'flex',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  gap: '25px',
                  padding: '25px 15px',
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(69, 104, 130, 0.3) transparent',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {onlineImages.map((image, index) => (
                  <div key={index} className="session-image-container flex-shrink-0" style={{
                    textAlign: 'center',
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '15px',
                    boxShadow: '0 10px 30px rgba(44, 62, 80, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid rgba(69, 104, 130, 0.1)',
                    minWidth: '280px',
                    maxWidth: '320px',
                    scrollSnapAlign: 'start'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '15px',
                      background: ColorPalette.secondaryBlue,
                      color: ColorPalette.lightText,
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      zIndex: 2
                    }}>
                      #{index + 1}
                    </div>
                    <img
                      src={require(`../assets/images/off On/on/${image}`)}
                      alt={`Online Session ${index + 1}`}
                      className="img-fluid session-image"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '15px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.parentElement.style.transform = 'translateY(-8px)';
                        e.target.parentElement.style.boxShadow = '0 20px 40px rgba(44, 62, 80, 0.25)';
                        e.target.parentElement.style.borderColor = 'rgba(69, 104, 130, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.parentElement.style.transform = 'translateY(0)';
                        e.target.parentElement.style.boxShadow = '0 10px 30px rgba(44, 62, 80, 0.15)';
                        e.target.parentElement.style.borderColor = 'rgba(69, 104, 130, 0.1)';
                      }}
                    />
                    <div style={{
                      marginTop: '12px',
                      padding: '8px 0',
                      borderTop: '1px solid rgba(69, 104, 130, 0.1)'
                    }}>
                      <p style={{
                        margin: 0,
                        color: ColorPalette.primaryText,
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                      }}>
                        Online Session {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div style={{
              height: '2px',
              background: `linear-gradient(to right, transparent, ${ColorPalette.accentBeige}, transparent)`,
              margin: '50px 0',
              borderRadius: '1px'
            }}></div>
          </div>
        </div>

        {/* Some of The Clients Section */}
        <div className="row mb-5 pb-5" style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '40px 20px',
          margin: '20px 10px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div className="col-12 text-center mb-4">
            <h2 className="display-4 fw-bold mb-3" style={{
              color: ColorPalette.lightText,
              textShadow: '2px 2px 4px rgba(27, 60, 83, 0.3)'
            }}>
              Some of The Clients
            </h2>
            <h3 className="h4 fw-normal" style={{
              color: 'rgba(249, 243, 239, 0.9)',
              fontWeight: '500'
            }}>
              Delivered Trainings To
            </h3>
          </div>
          <div className="col-12">
            <div className="row g-4">
              {clientImages.map((image, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="client-logo-container text-center">
                    <img
                      src={require(`../assets/images/clients/${image}`)}
                      alt={`Client ${index + 1}`}
                      className="img-fluid client-logo"
                      style={{
                        maxWidth: '150px',
                        maxHeight: '120px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '12px',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 5px 15px rgba(44, 62, 80, 0.1)',
                        transition: 'all 0.3s ease',
                        display: 'block',
                        margin: '0 auto',
                        padding: '8px',
                        background: 'rgba(255, 255, 255, 0.9)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.08) translateY(-5px)';
                        e.target.style.boxShadow = '0 10px 25px rgba(44, 62, 80, 0.2)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1) translateY(0)';
                        e.target.style.boxShadow = '0 5px 15px rgba(44, 62, 80, 0.1)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .session-scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        
        .session-scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .session-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, ${ColorPalette.secondaryBlue}, ${ColorPalette.primaryBlue});
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .session-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, ${ColorPalette.primaryBlue}, #152a42);
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .session-scroll-container {
            gap: 15px !important;
            padding: 15px 10px !important;
          }
          
          .session-image-container {
            min-width: 240px !important;
            max-width: 260px !important;
          }
          
          .session-image {
            height: 160px !important;
          }
          
          .display-4 {
            font-size: 1.8rem !important;
          }
          
          .h4 {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .session-scroll-container {
            gap: 12px !important;
            padding: 12px 8px !important;
          }
          
          .session-image-container {
            min-width: 200px !important;
            max-width: 220px !important;
            padding: 12px !important;
          }
          
          .session-image {
            height: 140px !important;
          }
          
          .display-4 {
            font-size: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .h4 {
            font-size: 1rem !important;
          }
          
          .row {
            margin: 15px 0 !important;
          }
          
          .pb-5 {
            padding-bottom: 2rem !important;
          }
          
          .mb-5 {
            margin-bottom: 2rem !important;
          }
        }
        
        /* Smooth scrolling for touch devices */
        .session-scroll-container {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
        
        /* Add scroll indicators on mobile */
        @media (max-width: 768px) {
          .session-scroll-container::after {
            content: '→ Scroll for more';
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.7rem;
            pointer-events: none;
            opacity: 0.8;
            animation: fadeInOut 3s infinite;
          }
          
          .row {
            margin-left: 5px !important;
            margin-right: 5px !important;
          }
          
          .container {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Clients;
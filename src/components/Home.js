import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/images/main profile/main.png';
import ColorPalette from './ColorPalette';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section
        id="home"
        className={`hero-section d-flex align-items-center justify-content-center position-relative overflow-hidden ${isVisible ? 'visible' : ''}`}
        style={{
          backgroundImage: `linear-gradient(rgba(27, 60, 83, 0.4), rgba(27, 60, 83, 0.2)), url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          color: ColorPalette.lightText,
          position: 'relative',
          transition: 'all 0.5s ease-in-out'
        }}
      >
        <div className="container position-relative">
          <div className="row align-items-center" style={{ paddingTop: '100px' }}>
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-3" style={{ lineHeight: '1.2' }}>
                  <span className="gradient-text">Muhammad ELSalamony</span>
                </h1>
                <h2 className="h4 mb-4" style={{ fontWeight: 300, color: 'rgba(249, 243, 239, 0.9)' }}>
                  Professional Trainer & Banking Expert
                </h2>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="#about"
                    className="btn btn-primary btn-lg px-4 py-2"
                    style={{
                      background: ColorPalette.blueGradient,
                      borderRadius: '50px',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: '1',
                      border: 'none',
                      fontSize: '0.9rem',
                      padding: '0.5rem 1.8rem'
                    }}
                  >
                    Explore More
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-outline-light btn-lg px-4 py-2"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                      border: `2px solid ${ColorPalette.lightText}`,
                      fontSize: '0.9rem',
                      padding: '0.5rem 1.8rem',
                      color: ColorPalette.lightText,
                      background: 'transparent'
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="scroll-down">
          <a href="#about" className="text-decoration-none">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </a>
        </div>

        <style jsx global>{`
          .hero-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          
          .hero-section.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .gradient-text {
            background: ${ColorPalette.beigeGradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          
          /* Scroll down animation */
          .scroll-down {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            text-align: center;
          }
          
          .mouse {
            width: 24px;
            height: 40px;
            border: 2px solid ${ColorPalette.lightText}4d;
            border-radius: 16px;
            display: flex;
            margin: 0 auto;
            position: relative;
          }
          
          .wheel {
            display: block;
            width: 4px;
            height: 8px;
            background: ${ColorPalette.accentBeige};
            border-radius: 50%;
            margin: 5px auto;
            animation: scroll 2s infinite;
          }
          
          @keyframes scroll {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(10px); opacity: 0; }
          }
          
          @media (max-width: 768px) {
            .display-4 {
              font-size: 2.5rem !important;
            }
            
            .h4 {
              font-size: 1.2rem !important;
            }
            
            .btn {
              padding: 0.5rem 1.5rem !important;
              font-size: 0.85rem !important;
            }
            
            .mouse {
              width: 20px;
              height: 36px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Home;
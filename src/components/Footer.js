import React from 'react';
import ColorPalette from './ColorPalette';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="position-relative overflow-hidden py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-4 mb-3">
              <a 
                href="#" 
                className="text-decoration-none hover-gradient"
                aria-label="Facebook"
                style={{ color: 'rgba(249, 243, 239, 0.7)' }}
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a 
                href="#" 
                className="text-decoration-none hover-gradient"
                aria-label="LinkedIn"
                style={{ color: 'rgba(249, 243, 239, 0.7)' }}
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a 
                href="#" 
                className="text-decoration-none hover-gradient"
                aria-label="Twitter"
                style={{ color: 'rgba(249, 243, 239, 0.7)' }}
              >
                <i className="bi bi-twitter-x fs-4"></i>
              </a>
              <a 
                href="#" 
                className="text-decoration-none hover-gradient"
                aria-label="Instagram"
                style={{ color: 'rgba(249, 243, 239, 0.7)' }}
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
            
            <p className="mb-0" style={{ color: 'rgba(249, 243, 239, 0.7)' }}>
              &copy; {currentYear} Muhammad ELSalamony. All rights reserved.
            </p>
            
            {/* Developed by Zakaria section */}
            <div className="mt-3">
              <p className="mb-0" style={{ color: 'rgba(249, 243, 239, 0.7)', fontSize: '0.9rem' }}>
                Developed by{' '}
                <a 
                  href="https://www.linkedin.com/in/mohamedessamz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none hover-gradient"
                  style={{ color: ColorPalette.accentBeige }}
                >
                  Zakaria
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        footer {
          background: ${ColorPalette.primaryBlue};
          border-top: 1px solid ${ColorPalette.primaryBorder};
          position: relative;
        }
        
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: ${ColorPalette.beigeGradient};
          opacity: 0.5;
        }
        
        .hover-gradient {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .hover-gradient:hover {
          color: ${ColorPalette.accentBeige} !important;
          transform: translateY(-2px);
        }
        
        .btn-outline-light:hover {
          background: ${ColorPalette.beigeGradient} !important;
          border-color: transparent !important;
          color: ${ColorPalette.primaryBlue} !important;
          box-shadow: 0 5px 15px ${ColorPalette.beigeShadow};
        }
        
        @media (max-width: 768px) {
          footer {
            padding: 2rem 0;
          }
          
          .btn-outline-light {
            padding: 0.4rem 1.2rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
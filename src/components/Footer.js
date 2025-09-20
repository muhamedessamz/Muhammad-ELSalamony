import React from 'react';

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
                className="text-decoration-none text-white-50 hover-gradient"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a 
                href="#" 
                className="text-decoration-none text-white-50 hover-gradient"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a 
                href="#" 
                className="text-decoration-none text-white-50 hover-gradient"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x fs-4"></i>
              </a>
              <a 
                href="#" 
                className="text-decoration-none text-white-50 hover-gradient"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
            
            <p className="text-white-50 mb-0">
              &copy; {currentYear} Muhammad ELSalamony. All rights reserved.
            </p>
            
            <div className="mt-3">
              <a 
                href="#" 
                className="btn btn-sm btn-outline-light rounded-pill px-3 py-1"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        footer {
          background: linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(8, 21, 40, 0.98));
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FFD700, #FFA500, transparent);
          opacity: 0.5;
        }
        
        .hover-gradient {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .hover-gradient:hover {
          color: #FFD700 !important;
          transform: translateY(-2px);
        }
        
        .btn-outline-light:hover {
          background: linear-gradient(135deg, #FFD700, #FFA500) !important;
          border-color: transparent !important;
          color: #0a192f !important;
          box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
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

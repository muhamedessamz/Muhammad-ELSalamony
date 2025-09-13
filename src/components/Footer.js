import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-white-50 mb-0 small">
              <i className="fas fa-copyright me-2"></i>
              Copyright © 2025 Muhammad ELSalamony – All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-white-50 mb-0 small">
              Developed by <a href="https://www.linkedin.com/in/mohamedessamz/" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none fw-semibold">
                Zakaria
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer-link:hover {
          color: #0d6efd !important;
          transition: color 0.3s ease-in-out;
        }
        .footer-link:hover i {
          transform: translateX(2px);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          transition: 'all 0.3s ease-in-out',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          backgroundColor: isHomePage
            ? (scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent')
            : 'rgba(10, 25, 47, 0.95)',
          padding: scrolled ? '0.5rem 0' : '1rem 0',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold gradient-text"
            to="/"
            style={{
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            onClick={closeMobileMenu}
          >
            Muhammad ELSalamony
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={{
              border: 'none',
              boxShadow: 'none',
              padding: '0.5rem'
            }}
          >
            <span className={`navbar-toggler-icon ${isOpen ? 'active' : ''}`}></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className="nav-link"
                    href="#home"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className="nav-link"
                    href="#about"
                    onClick={closeMobileMenu}
                  >
                    About
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to="/#about"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className="nav-link"
                    href="#clients"
                    onClick={closeMobileMenu}
                  >
                    Clients
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to="/#clients"
                    onClick={closeMobileMenu}
                  >
                    Clients
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/full-courses"
                  onClick={closeMobileMenu}
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className="nav-link"
                    href="#portfolio"
                    onClick={closeMobileMenu}
                  >
                    Portfolio
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to="/#portfolio"
                    onClick={closeMobileMenu}
                  >
                    Portfolio
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className="nav-link"
                    href="#contact"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to="/#contact"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                )}
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                {isHomePage ? (
                  <a
                    href="#contact"
                    className="btn btn-primary btn-sm"
                    onClick={closeMobileMenu}
                    style={{
                      padding: '0.5rem 1.5rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontSize: '0.8rem'
                    }}
                  >
                    Get In Touch
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="btn btn-primary btn-sm"
                    onClick={closeMobileMenu}
                    style={{
                      padding: '0.5rem 1.5rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontSize: '0.8rem',
                      textDecoration: 'none'
                    }}
                  >
                    Get In Touch
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .navbar {
          z-index: 1000;
        }
        
        .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          transition: all 0.3s ease;
        }
        
        .navbar-scrolled .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }
        
        .navbar-toggler-icon.active {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23FFD700' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500;
          margin: 0 0.5rem;
          padding: 0.5rem 1rem !important;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .navbar:not(.navbar-scrolled) .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        
        .navbar-scrolled .nav-link {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover,
        .nav-link:focus,
        .nav-link.active {
          color: #FFD700 !important;
        }
        
        .navbar-scrolled .nav-link:hover,
        .navbar-scrolled .nav-link:focus,
        .navbar-scrolled .nav-link.active {
          color: #FFD700 !important;
        }
        
        .nav-link:hover::after,
        .nav-link:focus::after,
        .nav-link.active::after {
          width: 60%;
        }
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            padding: 1.5rem;
            background: rgba(10, 25, 47, 0.98);
            border-radius: 10px;
            margin-top: 1rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .nav-link {
            padding: 0.75rem 0 !important;
            margin: 0.25rem 0;
          }
          
          .nav-link::after {
            display: none;
          }
          
          .btn-primary {
            margin-top: 1rem;
            width: 100%;
          }
        }
        
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Navbar;

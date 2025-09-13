import React from 'react';
import profileImg from '../assets/images/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center min-vh-100" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      color: '#333',
      position: 'relative'
    }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image Column */}
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <img 
              src={profileImg} 
              alt="Muhammad ELSalamony" 
              className="rounded-circle mx-auto d-block mb-3"
              style={{width: '300px', height: '300px', objectFit: 'cover', border: '4px solid #dee2e6'}}
            />
          </div>
          
          {/* Hero Content Column */}
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold mb-3" style={{color: '#495057'}}>
              Muhammad ELSalamony
            </h1>
            <h2 className="h4 fw-normal mb-0" style={{color: '#6c757d', textDecoration: 'none', textUnderlineOffset: '0', borderBottom: 'none'}}>
              Banking Professional & Certified Trainer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

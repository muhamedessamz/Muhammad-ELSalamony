import React from 'react';

const ProfessionalTitleCard = ({ title }) => {
  return (
    <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center component" style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    }}
    >
      <div className="mb-3">
        <i className="bi bi-award-fill" style={{ 
          fontSize: '3rem', 
          color: '#FFD700',
          marginBottom: '1rem' 
        }}></i>
      </div>
      <h5 className="fw-bold mb-2" style={{color: 'white'}}>
        {title}
      </h5>
    </div>
  );
};

const ProfessionalTitles = () => {
  const professionalTitles = [
    'Professional Certified Trainer',
    'Professional Instructional Designer',
    'Experienced Banking Professional',
    'Mentor & Financial Literacy Trainer'
  ];

  return (
    <section id="professional-titles" className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{color: 'white'}}>
              Professional Titles I Had
            </h3>
            
            <div className="row g-4">
              {professionalTitles.map((title, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <ProfessionalTitleCard title={title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTitles;

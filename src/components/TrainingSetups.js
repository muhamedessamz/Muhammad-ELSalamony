import React from 'react';

const TrainingSetup = ({ setup }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center component" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        minHeight: '200px'
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
          <i className={`bi ${setup.icon}`} style={{ 
            fontSize: '2.5rem', 
            color: '#FFD700',
            marginBottom: '1rem' 
          }}></i>
        </div>
        <h5 className="fw-bold mb-0" style={{color: 'white'}}>
          {setup.name}
        </h5>
      </div>
    </div>
  );
};

const TrainingSetups = () => {
  const trainingSetups = [
    { name: 'Conference Talks & Panels', icon: 'bi-mic' },
    { name: 'University Courses', icon: 'bi-mortarboard' },
    { name: 'Corporate Training', icon: 'bi-building' },
    { name: 'Online Webinars', icon: 'bi-laptop' },
    { name: 'Workshops', icon: 'bi-people' },
    { name: 'One-on-One Coaching', icon: 'bi-person' }
  ];

  return (
    <section id="training-setups" className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{color: 'white'}}>
              Training & Lecturing Setups
            </h3>
            
            <div className="row g-4">
              {trainingSetups.map((setup, index) => (
                <TrainingSetup key={index} setup={setup} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSetups;

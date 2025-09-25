import React from 'react';
import { FaAward, FaChalkboardTeacher, FaLaptopCode, FaUniversity, FaUserFriends } from 'react-icons/fa';
import ColorPalette from './ColorPalette';

const ProfessionalTitleCard = ({ title, icon }) => {
  return (
    <div className="text-center p-4 border rounded-3 h-100 d-flex flex-column justify-content-center component" style={{
      background: ColorPalette.darkBlueBackground,
      backdropFilter: 'blur(10px)',
      border: `1px solid ${ColorPalette.primaryBorder}`,
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = `0 10px 30px ${ColorPalette.beigeShadow}`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `0 5px 15px ${ColorPalette.blueShadow}`;
    }}
    >
      <div className="mb-3">
        <div style={{ 
          fontSize: '3rem', 
          color: ColorPalette.accentBeige,
          marginBottom: '1rem' 
        }}>
          {icon}
        </div>
      </div>
      <h5 className="fw-bold mb-2" style={{color: ColorPalette.lightText}}>
        {title}
      </h5>
    </div>
  );
};

const ProfessionalTitles = () => {
  const professionalTitles = [
    {
      title: 'Professional Certified Trainer',
      icon: <FaChalkboardTeacher />
    },
    {
      title: 'Professional Instructional Designer',
      icon: <FaLaptopCode />
    },
    {
      title: 'Experienced Banking Professional',
      icon: <FaUniversity />
    },
    {
      title: 'Mentor & Financial Literacy Trainer',
      icon: <FaUserFriends />
    }
  ];

  return (
    <section id="professional-titles" className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-center" style={{color: ColorPalette.lightText}}>
              Professional Titles I Had
            </h3>
            
            <div className="row g-4">
              {professionalTitles.map((item, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <ProfessionalTitleCard title={item.title} icon={item.icon} />
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
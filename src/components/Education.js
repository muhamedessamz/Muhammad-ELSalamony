import React from 'react';
import ColorPalette from './ColorPalette';

const Education = () => {
  const education = {
    icon: "bi-mortarboard-cap",
    title: "Bachelor of Commerce (Accounting, English Section)",
    institution: "Zagazig University",
    duration: "2009 - 2013",
    grade: "Very Good with Honors",
    description: "Comprehensive academic foundation in accounting principles, financial management, business operations, and economic analysis. Developed strong analytical skills and understanding of financial systems that form the cornerstone of my banking and training career."
  };

  return (
    <section id="education" className="py-5" style={{ background: ColorPalette.offWhite }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{ color: ColorPalette.primaryBlue }}>
            <i className="bi bi-mortarboard-fill me-3" style={{ color: ColorPalette.secondaryBlue }}></i>
            Academic Education
          </h2>
          <p className="lead" style={{ 
            color: ColorPalette.secondaryBlue, 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            My formal academic foundation in commerce and accounting that provides the theoretical base for my professional expertise in banking and financial training
          </p>
        </div>

        {/* Education Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0" style={{ 
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{
                         width: '80px', 
                         height: '80px',
                         background: `${ColorPalette.accentBeige}20`
                       }}>
                    <i className={`bi ${education.icon}`} style={{ 
                      color: ColorPalette.primaryBlue, 
                      fontSize: '2rem' 
                    }}></i>
                  </div>
                </div>
                
                <h3 className="display-6 fw-bold mb-3" style={{ color: ColorPalette.primaryBlue }}>
                  {education.title}
                </h3>
                
                <h5 className="mb-3" style={{ 
                  color: ColorPalette.secondaryBlue, 
                  fontSize: '1.25rem' 
                }}>
                  {education.institution}
                </h5>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                      <span className="px-3 py-2 fs-6" style={{ 
                        background: `${ColorPalette.accentBeige}30`,
                        color: ColorPalette.primaryBlue,
                        borderRadius: '30px',
                        border: `1px solid ${ColorPalette.accentBeige}50`
                      }}>
                        <i className="bi bi-calendar3 me-1"></i>
                        {education.duration}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                      <span className="px-3 py-2 fs-6" style={{
                        background: ColorPalette.secondaryBlue,
                        color: ColorPalette.lightText,
                        borderRadius: '30px'
                      }}>
                        <i className="bi bi-star-fill me-1"></i>
                        {education.grade}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="lead mb-0" style={{ 
                  color: ColorPalette.secondaryBlue, 
                  lineHeight: '1.6' 
                }}>
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
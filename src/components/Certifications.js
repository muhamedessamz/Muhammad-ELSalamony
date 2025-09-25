import React from 'react';
import ColorPalette from './ColorPalette';

const Certifications = () => {
  const certifications = [
    {
      icon: "bi-lightbulb",
      title: "EFE Cairo Program",
      institution: "Entrepreneurship & Business Development",
      duration: "2012",
      grade: "Certificate of Completion",
      description: "Intensive entrepreneurship training focusing on business development, startup strategies, market analysis, and financial planning for emerging business leaders and professionals.",
    },
    {
      icon: "bi-briefcase",
      title: "EDU Egypt Program",
      institution: "Professional Development Initiative",
      duration: "2013",
      grade: "Professional Certificate",
      description: "Professional development program emphasizing leadership skills, communication, team management, and strategic thinking for career advancement in corporate environments.",
    },
    {
      icon: "bi-people",
      title: "Training of Trainers (TOT)",
      institution: "MEHRAT Training Center",
      duration: "2017",
      grade: "Certified Trainer",
      description: "Advanced training methodology certification focusing on adult learning principles, instructional design, presentation skills, and effective training delivery techniques.",
    },
    {
      icon: "bi-heart-pulse",
      title: "Emotional Intelligence at Workplace",
      institution: "Professional Development Certification",
      duration: "2024",
      grade: "Certificate",
      description: "Comprehensive training on emotional intelligence, workplace psychology, team dynamics, conflict resolution, and leadership through emotional awareness and management.",
    },
    {
      icon: "bi-pencil-square",
      title: "Instructional Design Diploma",
      institution: "Professional Training Certification",
      duration: "2024",
      grade: "Diploma",
      description: "Advanced instructional design principles including curriculum development, learning objectives creation, assessment design, and e-learning platform integration.",
    },
    {
      icon: "bi-trophy",
      title: "Training of Trainers (TOT)",
      institution: "Arab Academy for Science, Technology & Maritime Transport (AASTMT)",
      duration: "2023",
      grade: "Advanced Certification",
      description: "Graduate-level trainer certification program covering advanced training techniques, program evaluation, blended learning approaches, and organizational training strategy development.",
    }
  ];

  return (
    <section id="certifications" className="py-5" style={{ background: ColorPalette.offWhite }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{ color: ColorPalette.primaryBlue }}>
            <i className="bi bi-award me-3" style={{ color: ColorPalette.secondaryBlue }}></i>
            Professional Certifications
          </h2>
          <p className="lead" style={{ color: ColorPalette.secondaryBlue, maxWidth: '600px', margin: '0 auto' }}>
            Continuous professional development through specialized certifications that enhance my expertise in training and financial education
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-lg-6 col-xl-4">
              <div className="card h-100 shadow-sm border-0" style={{ 
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                border: `1px solid ${ColorPalette.accentBeige}20`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${ColorPalette.blueShadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}>
                <div className="card-body d-flex flex-column p-4">
                  <div className="text-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                         style={{
                           width: '60px', 
                           height: '60px',
                           background: `${ColorPalette.accentBeige}20`
                         }}>
                      <i className={`bi ${cert.icon}`} style={{ color: ColorPalette.secondaryBlue, fontSize: '1.25rem' }}></i>
                    </div>
                  </div>
                  
                  <div className="flex-grow-1">
                    <h5 className="card-title fw-bold mb-2" style={{ color: ColorPalette.primaryBlue }}>
                      {cert.title}
                    </h5>
                    <h6 className="mb-2" style={{ color: ColorPalette.secondaryBlue, fontSize: '0.95rem' }}>
                      {cert.institution}
                    </h6>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="px-2 py-1 small" style={{ 
                        background: `${ColorPalette.accentBeige}30`,
                        color: ColorPalette.primaryBlue,
                        borderRadius: '20px',
                        border: `1px solid ${ColorPalette.accentBeige}50`
                      }}>
                        {cert.duration}
                      </span>
                      <span className="px-2 py-1 small" style={{
                        background: ColorPalette.secondaryBlue,
                        color: 'white',
                        borderRadius: '20px'
                      }}>
                        {cert.grade}
                      </span>
                    </div>
                    <p className="card-text" style={{ 
                      color: ColorPalette.secondaryBlue, 
                      lineHeight: '1.5',
                      fontSize: '0.9rem'
                    }}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
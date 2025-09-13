import React from 'react';

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
    <section id="certifications" className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{color: '#495057'}}>
            <i className="bi bi-award me-3" style={{color: '#6c757d'}}></i>
            Professional Certifications
          </h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Continuous professional development through specialized certifications that enhance my expertise in training and financial education
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-lg-6 col-xl-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column p-4">
                  <div className="text-center mb-3">
                    <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center mx-auto mb-3" 
                         style={{width: '60px', height: '60px'}}>
                      <i className={`bi ${cert.icon}`} style={{color: '#6c757d', fontSize: '1.25rem'}}></i>
                    </div>
                  </div>
                  
                  <div className="flex-grow-1">
                    <h5 className="card-title fw-bold mb-2" style={{color: '#495057'}}>
                      {cert.title}
                    </h5>
                    <h6 className="text-muted mb-2" style={{fontSize: '0.95rem'}}>
                      {cert.institution}
                    </h6>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-light text-dark px-2 py-1 small" style={{border: '1px solid #dee2e6'}}>
                        {cert.duration}
                      </span>
                      <span className="badge bg-success text-white px-2 py-1 small">
                        {cert.grade}
                      </span>
                    </div>
                    <p className="card-text text-muted small" style={{lineHeight: '1.5'}}>
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

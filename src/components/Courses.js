import React from 'react';

const Courses = () => {
  return (
    <section id="courses" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{color: '#495057'}}>My Online Courses</h2>
          <p className="lead text-muted">Explore my comprehensive training programs designed to empower individuals with essential financial and professional skills</p>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <div className="text-center mb-3">
                  <img 
                    src="/src/assets/images/courses/banking-course.jpg" 
                    alt="Banking for Non-bankers" 
                    className="rounded mx-auto d-block mb-2"
                    style={{width: '80px', height: '80px', objectFit: 'cover'}}
                  />
                </div>
                <h5 className="card-title text-center mb-3 fw-bold" style={{color: '#495057'}}>Banking for Non-bankers</h5>
                <p className="card-text flex-grow-1 text-muted">
                  Comprehensive course designed for professionals from all backgrounds to understand banking operations, financial products, and services in simple terms.
                </p>
                <div className="text-center mt-auto">
                  <a 
                    href="https://www.almentor.net/courses/Banking-for-Non-Bankers" 
                    className="btn btn-outline-secondary w-100"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{borderColor: '#6c757d', color: '#495057'}}
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    View Course
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <div className="text-center mb-3">
                  <img 
                    src="/src/assets/images/courses/finance-course.jpg" 
                    alt="Master Personal Financial Planning" 
                    className="rounded mx-auto d-block mb-2"
                    style={{width: '80px', height: '80px', objectFit: 'cover'}}
                  />
                </div>
                <h5 className="card-title text-center mb-3 fw-bold" style={{color: '#495057'}}>Master Personal Financial Planning</h5>
                <p className="card-text flex-grow-1 text-muted">
                  Advanced course teaching individuals how to create comprehensive financial plans, manage budgets, invest wisely, and achieve long-term financial goals.
                </p>
                <div className="text-center mt-auto">
                  <a 
                    href="https://eyouthlearning.com/details/course-v1:Finance_and_Accounting+FWCTIEJ2024+FWGFDZA2024" 
                    className="btn btn-outline-secondary w-100"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{borderColor: '#6c757d', color: '#495057'}}
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    View Course
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <div className="text-center mb-3">
                  <img 
                    src="/src/assets/images/courses/all-courses.jpg" 
                    alt="All Courses" 
                    className="rounded mx-auto d-block mb-2"
                    style={{width: '80px', height: '80px', objectFit: 'cover'}}
                  />
                </div>
                <h5 className="card-title text-center mb-3 fw-bold" style={{color: '#495057'}}>More Courses</h5>
                <p className="card-text flex-grow-1 text-muted">
                  Explore my complete collection of training programs covering banking, personal finance, career development, and professional skills training.
                </p>
                <div className="text-center mt-auto">
                  <a 
                    href="https://yanfaa.com/eg/search?q=%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D9%88%D9%86%D9%8A" 
                    className="btn btn-outline-secondary w-100"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{borderColor: '#6c757d', color: '#495057'}}
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    View All Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

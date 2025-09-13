import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: 'fab fa-linkedin-in',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/muhammadelsalamony'
    },
    {
      icon: 'fab fa-whatsapp',
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=201270141874'
    },
    {
      icon: 'fab fa-telegram-plane',
      name: 'Telegram',
      url: 'https://t.me/+fFFMro8MyaswZTY0'
    },
    {
      icon: 'fab fa-youtube',
      name: 'YouTube',
      url: 'https://youtube.com/user/AboSalamony'
    },
    {
      icon: 'fab fa-tiktok',
      name: 'TikTok',
      url: 'https://tiktok.com/@muhammadelsalamony'
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com/Muhammadelsalamony'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: 'https://x.com/Moalsalamony'
    },
    {
      icon: 'fab fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/mo7amedelsalamony'
    }
  ];

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4" style={{color: '#495057'}}>Get In Touch</h2>
          <p className="lead text-muted">Ready to discuss your training needs or career development goals? Let's connect!</p>
        </div>
        
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-sm border-0 bg-light">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-4" style={{color: '#495057'}}>
                  <i className="bi bi-telephone-fill me-2" style={{color: '#6c757d'}}></i>
                  Contact Information
                </h5>
                
                <div className="mb-4">
                  <h6 className="fw-bold mb-2" style={{color: '#495057'}}>Email</h6>
                  <a href="mailto:mo7amedelsalamony@gmail.com" className="text-decoration-none d-flex align-items-center mb-2" style={{color: '#495057'}}>
                    <i className="bi bi-envelope-fill me-2" style={{color: '#6c757d', fontSize: '1.1rem'}}></i>
                    <span>mo7amedelsalamony@gmail.com</span>
                  </a>
                </div>
                
                <div className="mb-4">
                  <h6 className="fw-bold mb-2" style={{color: '#495057'}}>Phone</h6>
                  <div>
                    <a href="tel:+201270141874" className="text-decoration-none d-flex align-items-center mb-2" style={{color: '#495057'}}>
                      <i className="bi bi-telephone me-2" style={{color: '#6c757d', fontSize: '1.1rem'}}></i>
                      <span>+201270141874</span>
                    </a>
                    <a href="tel:+201021642220" className="text-decoration-none d-flex align-items-center" style={{color: '#495057'}}>
                      <i className="bi bi-telephone me-2" style={{color: '#6c757d', fontSize: '1.1rem'}}></i>
                      <span>+201021642220</span>
                    </a>
                  </div>
                </div>
                
                {/* CV Download */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3" style={{color: '#495057'}}>
                    <i className="bi bi-file-earmark-person-fill me-2" style={{color: '#6c757d'}}></i>
                    Download CV
                  </h6>
                  <a 
                    href="/Muhammad_ELSalamony_CV.pdf" 
                    className="btn w-100 mb-2"
                    download
                    style={{
                      backgroundColor: '#495057',
                      borderColor: '#495057',
                      color: 'white',
                      borderRadius: '0.375rem'
                    }}
                  >
                    <i className="bi bi-download me-2"></i>
                    Download CV (PDF)
                  </a>
                  <p className="text-muted small mb-0">
                    Updated: 2025 • English Version
                  </p>
                </div>
                
                <hr className="my-4" style={{borderColor: '#dee2e6'}} />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 bg-light">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-4" style={{color: '#495057'}}>
                  <i className="bi bi-chat-fill me-2" style={{color: '#6c757d'}}></i>
                  Send Me a Message
                </h5>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-bold" style={{color: '#495057'}}>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        style={{borderColor: '#dee2e6', borderRadius: '0.375rem'}}
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-bold" style={{color: '#495057'}}>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        style={{borderColor: '#dee2e6', borderRadius: '0.375rem'}}
                      />
                    </div>
                    
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-bold" style={{color: '#495057'}}>Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your training needs or how I can help you..."
                        style={{borderColor: '#dee2e6', borderRadius: '0.375rem'}}
                      ></textarea>
                    </div>
                    
                    <div className="col-12">
                      <button type="submit" className="btn btn-lg px-5" style={{
                        backgroundColor: '#495057',
                        borderColor: '#495057',
                        color: 'white',
                        borderRadius: '0.5rem'
                      }}>
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Single Row Below Both Cards */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h6 className="fw-bold mb-4" style={{color: '#495057'}}>Connect With Me</h6>
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="p-3"
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    border: '1px solid #dee2e6',
                    backgroundColor: '#f8f9fa',
                    color: '#495057',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#e9ecef';
                    e.target.style.borderColor = '#6c757d';
                    e.target.style.color = '#495057';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f8f9fa';
                    e.target.style.borderColor = '#dee2e6';
                    e.target.style.color = '#495057';
                    e.target.style.transform = 'scale(1)';
                  }}
                  title={social.name}
                >
                  <i className={`${social.icon}`} style={{fontSize: '1.4rem'}}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

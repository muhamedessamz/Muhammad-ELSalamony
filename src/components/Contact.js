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
      url: 'https://linkedin.com/in/muhammadelsalamony',
      color: '#0A66C2'
    },
    {
      icon: 'fab fa-whatsapp',
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=201270141874',
      color: '#25D366'
    },
    {
      icon: 'fab fa-telegram-plane',
      name: 'Telegram',
      url: 'https://t.me/+fFFMro8MyaswZTY0',
      color: '#26A5E4'
    },
    {
      icon: 'fab fa-youtube',
      name: 'YouTube',
      url: 'https://youtube.com/user/AboSalamony',
      color: '#FF0000'
    },
    {
      icon: 'fab fa-tiktok',
      name: 'TikTok',
      url: 'https://tiktok.com/@muhammadelsalamony',
      color: '#000000'
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com/Muhammadelsalamony',
      color: '#E1306C'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: 'https://x.com/Moalsalamony',
      color: '#1DA1F2'
    },
    {
      icon: 'fab fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/mo7amedelsalamony',
      color: '#1877F2'
    }
  ];

  return (
    <section id="contact" className="py-4 position-relative" style={{
      background: 'linear-gradient(135deg, #0b1a61 0%, #1f2a89 50%, #d89a2d 100%)',
      overflow: 'hidden',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,123,255,0.1) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)'
      }}></div>

      <div className="container position-relative" style={{ zIndex: 1, padding: '2rem 0' }}>
        <div className="text-center mb-4">
          <h2 className="display-4 fw-bold mb-3" style={{
            color: '#fff',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            fontSize: '2.25rem'
          }}>Get In Touch</h2>
          <p className="lead" style={{
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.1rem',
            textShadow: '0 1px 3px rgba(0,0,0,0.3)'
          }}>Let's discuss your career goals and training needs</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row g-4">
              {/* Contact Form */}
              <div className="col-lg-7">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  height: '100%',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}>
                  <h3 className="h4 mb-4" style={{ 
                    color: '#2c3e50',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="bi bi-send-fill" style={{ color: '#007bff' }}></i>
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text" style={{
                          background: '#f8f9fa',
                          border: '1px solid #dee2e6',
                          color: '#6c757d',
                          borderRight: 'none',
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px'
                        }}>
                          <i className="bi bi-person-fill"></i>
                        </span>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          style={{
                            border: '1px solid #dee2e6',
                            borderLeft: 'none',
                            padding: '0.75rem 1rem',
                            height: 'auto',
                            borderRadius: '0 10px 10px 0'
                          }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text" style={{
                          background: '#f8f9fa',
                          border: '1px solid #dee2e6',
                          color: '#6c757d',
                          borderRight: 'none',
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px'
                        }}>
                          <i className="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your email"
                          style={{
                            border: '1px solid #dee2e6',
                            borderLeft: 'none',
                            padding: '0.75rem 1rem',
                            height: 'auto',
                            borderRadius: '0 10px 10px 0'
                          }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <textarea
                        name="message"
                        rows="5"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message..."
                        style={{
                          border: '1px solid #dee2e6',
                          padding: '0.75rem 1rem',
                          resize: 'vertical',
                          minHeight: '150px',
                          borderRadius: '10px'
                        }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 py-3 fw-bold"
                      style={{
                        background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)';
                      }}
                    >
                      <i className="bi bi-send-fill me-2"></i> Send Message
                    </button>
                  </form>

                  <div style={{ 
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(0,0,0,0.1)'
                  }}>
                    <h6 style={{
                      color: '#6c757d',
                      fontSize: '0.9rem',
                      marginBottom: '1rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>Connect With Me</h6>
                    <div className="d-flex justify-content-center flex-wrap gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: '#f8f9fa',
                            color: social.color,
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                            border: '1px solid #e9ecef',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.background = social.color;
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = `0 5px 15px ${social.color}80`;
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = '#f8f9fa';
                            e.target.style.color = social.color;
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
                          }}
                          title={social.name}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-5">
                <div className="h-100 d-flex flex-column">
                  {/* Contact Information Card */}
                  <div className="mb-4" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '1.25rem',
                    flex: 1,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>
                    <h3 className="h4 mb-3" style={{ 
                      color: '#2c3e50',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '1.25rem',
                      textAlign: 'center'
                    }}>
                      <i className="bi bi-info-circle-fill" style={{ color: '#007bff' }}></i>
                      Contact Information
                    </h3>
                    
                    <div className="mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: '#e9f5ff',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#007bff',
                          marginBottom: '0.5rem'
                        }}>
                          <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <h6 style={{
                            color: '#6c757d',
                            fontSize: '0.8rem',
                            marginBottom: '0.25rem',
                            fontWeight: '600',
                            letterSpacing: '0.3px'
                          }}>Email</h6>
                          <a 
                            href="mailto:mo7amedelsalamony@gmail.com" 
                            style={{
                              color: '#2c3e50',
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              fontWeight: '500',
                              display: 'block',
                              fontSize: '0.85rem',
                              lineHeight: '1.3'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#007bff'}
                            onMouseOut={(e) => e.target.style.color = '#2c3e50'}
                          >
                            mo7amedelsalamony@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: '#e9f5ff',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#007bff',
                          marginBottom: '0.5rem'
                        }}>
                          <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <h6 style={{
                            color: '#6c757d',
                            fontSize: '0.8rem',
                            marginBottom: '0.25rem',
                            fontWeight: '600',
                            letterSpacing: '0.3px'
                          }}>Phone</h6>
                          <a 
                            href="tel:+201021642220"
                            style={{
                              color: '#2c3e50',
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              fontWeight: '500',
                              display: 'block',
                              fontSize: '0.85rem',
                              lineHeight: '1.3'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#007bff'}
                            onMouseOut={(e) => e.target.style.color = '#2c3e50'}
                          >
                            +20 102 164 2220
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: '#e9f5ff',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#007bff',
                          marginBottom: '0.5rem'
                        }}>
                          <i className="bi bi-whatsapp"></i>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <h6 style={{
                            color: '#6c757d',
                            fontSize: '0.8rem',
                            marginBottom: '0.25rem',
                            fontWeight: '600',
                            letterSpacing: '0.3px'
                          }}>WhatsApp</h6>
                          <a 
                            href="https://wa.me/201270141874"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: '#2c3e50',
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              fontWeight: '500',
                              display: 'block',
                              fontSize: '0.85rem',
                              lineHeight: '1.3'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#007bff'}
                            onMouseOut={(e) => e.target.style.color = '#2c3e50'}
                          >
                            +20 127 014 1874
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Consultation Card */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>
                    <div className="text-center">
                      <i className="bi bi-calendar-check" style={{
                        fontSize: '2.5rem',
                        color: '#28a745',
                        marginBottom: '1rem',
                        display: 'inline-block'
                      }}></i>
                      <h4 style={{
                        color: '#2c3e50',
                        fontSize: '1.25rem',
                        marginBottom: '0.75rem',
                        fontWeight: '700'
                      }}>Professional Consultation</h4>
                      <p style={{
                        color: '#6c757d',
                        fontSize: '0.95rem',
                        marginBottom: '1.5rem'
                      }}>Book a session for career guidance and training</p>
                      <a
                        href="https://icancoachyou.online/en/coaches/muhammad-elsalamony?tab=services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100"
                        style={{
                          background: 'linear-gradient(135deg, #28a745 0%, #218838 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '0.75rem',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
                        }}
                      >
                        <i className="bi bi-calendar-check me-2"></i> Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
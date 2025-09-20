import React from 'react';
import { FaChalkboardTeacher, FaUserTie, FaChartLine, FaCertificate } from 'react-icons/fa';

const TrainingPortfolio = () => {
    const trainingStats = [
        { value: '11+', label: 'Years Experience', icon: <FaChalkboardTeacher className="me-2" /> },
        { value: '1000+', label: 'Trainees', icon: <FaUserTie className="me-2" /> },
        { value: '50+', label: 'Training Programs', icon: <FaCertificate className="me-2" /> },
        { value: '95%', label: 'Success Rate', icon: <FaChartLine className="me-2" /> }
    ];

    const trainingAreas = [
        'Banking', 
        'Financial Literacy', 
        'Customer Rights', 
        'Personal Finance', 
        'Career Development', 
        'Personal Branding'
    ];

    return (
        <section id="training-portfolio" className="py-5 position-relative" style={{
            background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
            color: '#f8f9fa',
            minHeight: '100vh',
            padding: '5rem 0',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Decorative Elements */}
            <div className="position-absolute w-100 h-100" style={{
                backgroundImage: 'radial-gradient(rgba(255, 215, 0, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.7,
                zIndex: 1
            }}></div>
            
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '16px',
                            border: '1px solid rgba(216, 154, 45, 0.2)',
                            backdropFilter: 'blur(10px)',
                            padding: '3.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                        }}>
                            {/* Main Title */}
                            <h2 className="display-5 fw-bold mb-4 text-center" style={{
                                background: 'linear-gradient(90deg, #ffffff, #d89a2d)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                position: 'relative',
                                paddingBottom: '1.5rem',
                                marginTop: '1rem',
                                fontSize: '2.5rem'
                            }}>
                                Training Portfolio
                                <span style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '100px',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #d89a2d, #f0b64f)',
                                    borderRadius: '2px'
                                }}></span>
                            </h2>

                            {/* Program Samples Subtitle */}
                            <h3 className="h3 fw-bold mb-4 text-center" style={{
                                color: '#d89a2d',
                                fontSize: '1.8rem',
                                margin: '2rem 0 1.5rem',
                                position: 'relative',
                                display: 'inline-block',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '0 1.5rem'
                            }}>
                                Program Samples
                            </h3>

                            {/* Main Content */}
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <p style={{
                                        color: '#f8f9fa',
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        marginBottom: '2rem',
                                        textAlign: 'justify',
                                        opacity: 0.9
                                    }}>
                                        With over <span style={{ color: '#d89a2d', fontWeight: '600' }}>11 years of experience</span> in the banking industry and a strong background in professional training and development, I specialize in designing and delivering impactful learning solutions that empower individuals and organizations.
                                    </p>
                                    
                                    <div className="mt-4">
                                        <p style={{
                                            color: '#f8f9fa',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            marginBottom: '1.5rem',
                                            textAlign: 'justify',
                                            opacity: 0.9
                                        }}>
                                            My training portfolio covers a wide range of areas including:
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                                        {trainingAreas.map((area, index) => (
                                            <div key={index} style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                borderRadius: '50px',
                                                padding: '12px 24px',
                                                border: '1px solid rgba(216, 154, 45, 0.2)',
                                                color: '#f8f9fa',
                                                fontWeight: '500',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                minWidth: '150px',
                                                margin: '0.5rem 0'
                                            }}>
                                                {area}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="row mt-5 pt-4" style={{
                                borderTop: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {trainingStats.map((stat, index) => (
                                    <div key={index} className="col-md-3 col-6 mb-3">
                                        <div className="text-center">
                                            <div style={{
                                                fontSize: '2.2rem',
                                                fontWeight: '700',
                                                color: '#d89a2d',
                                                marginBottom: '0.5rem',
                                                lineHeight: '1.2'
                                            }}>
                                                {stat.value}
                                            </div>
                                            <div style={{
                                                fontSize: '0.95rem',
                                                opacity: 0.9,
                                                color: '#f8f9fa'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="position-absolute" style={{
                top: '15%',
                left: '10%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(216,154,45,0.1) 0%, rgba(216,154,45,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(15px)',
                zIndex: 1
            }}></div>
            
            <div className="position-absolute" style={{
                bottom: '15%',
                right: '10%',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0) 70%)',
                borderRadius: '50%',
                filter: 'blur(20px)',
                zIndex: 1
            }}></div>
        </section>
    );
};

export default TrainingPortfolio;
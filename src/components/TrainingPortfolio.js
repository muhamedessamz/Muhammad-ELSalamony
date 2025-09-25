import React from 'react';
import { FaChalkboardTeacher, FaUserTie, FaChartLine, FaCertificate } from 'react-icons/fa';
import ColorPalette from './ColorPalette';

const TrainingPortfolio = () => {
    const trainingStats = [
        { value: '11+', label: 'Years Experience', icon: <FaChalkboardTeacher className="me-2" /> },
        { value: '1000+', label: 'Trainees', icon: <FaUserTie className="me-2" /> },
        { value: '50+', label: 'Training Programs', icon: <FaCertificate className="me-2" /> }
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
        <section id="training-portfolio" className="py-4" style={{
            background: ColorPalette.blueGradient,
            color: ColorPalette.lightText,
            position: 'relative',
            overflow: 'hidden',
            width: '100%'
        }}>
            {/* Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '5%',
                width: '150px',
                height: '150px',
                background: `radial-gradient(circle, ${ColorPalette.accentBeige}26 0%, ${ColorPalette.accentBeige}00 70%)`,
                borderRadius: '50%',
                filter: 'blur(15px)',
                zIndex: 1
            }}></div>
            
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '200px',
                height: '200px',
                background: `radial-gradient(circle, ${ColorPalette.primaryBlue}26 0%, ${ColorPalette.primaryBlue}00 70%)`,
                borderRadius: '50%',
                filter: 'blur(20px)',
                zIndex: 1
            }}></div>

            <div className="container-fluid position-relative" style={{ zIndex: 2, padding: '0 1rem' }}>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div style={{
                            background: ColorPalette.darkBlueBackground,
                            borderRadius: '15px',
                            border: `1px solid ${ColorPalette.primaryBorder}`,
                            backdropFilter: 'blur(10px)',
                            padding: '1.25rem',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: `0 15px 30px ${ColorPalette.blueShadow}`
                        }}>
                            {/* Main Title */}
                            <div className="text-center mb-4">
                                <h2 className="display-5 fw-bold mb-3" style={{
                                    color: ColorPalette.lightText,
                                    position: 'relative',
                                    paddingBottom: '0.75rem',
                                    fontSize: '1.8rem'
                                }}>
                                    Training Portfolio
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '80px',
                                        height: '3px',
                                        background: ColorPalette.accentBeige,
                                        borderRadius: '2px'
                                    }}></span>
                                </h2>
                            </div>

                            {/* Program Samples Subtitle */}
                            <div className="text-center mb-4">
                                <h3 className="h3 fw-bold" style={{
                                    color: ColorPalette.accentBeige,
                                    fontSize: '1.5rem',
                                    margin: '1rem 0',
                                    position: 'relative',
                                    display: 'inline-block',
                                    padding: '0 1rem'
                                }}>
                                    Program Samples
                                </h3>
                            </div>

                            {/* Main Content */}
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <p style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            marginBottom: '1.25rem',
                                            textAlign: 'justify'
                                        }}>
                                            With over <span style={{ color: ColorPalette.accentBeige, fontWeight: '700' }}>11 years of experience</span> in the banking industry and a strong background in professional training and development, I specialize in designing and delivering impactful learning solutions that empower individuals and organizations.
                                        </p>
                                        
                                        <p style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            textAlign: 'justify'
                                        }}>
                                            My training portfolio covers a wide range of areas including:
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                                        {trainingAreas.map((area, index) => (
                                            <div key={index} style={{
                                                background: `linear-gradient(135deg, ${ColorPalette.accentBeige}33, ${ColorPalette.accentBeige}1a)`,
                                                borderRadius: '50px',
                                                padding: '6px 12px',
                                                border: `1px solid ${ColorPalette.primaryBorder}`,
                                                color: ColorPalette.lightText,
                                                fontWeight: '600',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                minWidth: '120px',
                                                margin: '0.2rem 0',
                                                boxShadow: `0 3px 10px ${ColorPalette.blueShadow}`,
                                                fontSize: '0.85rem'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.boxShadow = `0 5px 15px ${ColorPalette.beigeShadow}`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = `0 3px 10px ${ColorPalette.blueShadow}`;
                                            }}
                                            >
                                                {area}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="row mt-4 pt-4" style={{
                                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                {trainingStats.map((stat, index) => (
                                    <div key={index} className="col-md-4 col-6 mb-3">
                                        <div className="text-center p-2" style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '12px',
                                            border: `1px solid ${ColorPalette.primaryBorder}`,
                                            transition: 'all 0.3s ease',
                                            height: '100%'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.background = `${ColorPalette.accentBeige}1a`;
                                            e.currentTarget.style.border = `1px solid ${ColorPalette.accentBorder}`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                            e.currentTarget.style.border = `1px solid ${ColorPalette.primaryBorder}`;
                                        }}
                                        >
                                            <div style={{
                                                fontSize: '2rem',
                                                fontWeight: '800',
                                                color: ColorPalette.accentBeige,
                                                marginBottom: '0.25rem',
                                                lineHeight: '1.2'
                                            }}>
                                                {stat.icon}
                                                <div className="mt-1">{stat.value}</div>
                                            </div>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                color: ColorPalette.lightText,
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
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
            
            <style jsx>{`
                @media (max-width: 768px) {
                    #training-portfolio {
                        padding: 20px 0 !important;
                    }
                    
                    .container-fluid {
                        padding: 0 0.75rem !important;
                    }
                    
                    .display-5 {
                        font-size: 1.6rem !important;
                    }
                    
                    .h3 {
                        font-size: 1.3rem !important;
                    }
                    
                    .gap-2 {
                        gap: 0.5rem !important;
                    }
                    
                    .p-2 {
                        padding: 0.75rem !important;
                    }
                    
                    .mb-3 {
                        margin-bottom: 1rem !important;
                    }
                    
                    .mt-4 {
                        margin-top: 1.5rem !important;
                    }
                    
                    .pt-4 {
                        padding-top: 1.5rem !important;
                    }
                }
                
                @media (max-width: 576px) {
                    #training-portfolio {
                        padding: 15px 0 !important;
                    }
                    
                    .container-fluid {
                        padding: 0 0.5rem !important;
                    }
                    
                    .display-5 {
                        font-size: 1.4rem !important;
                    }
                    
                    .h3 {
                        font-size: 1.2rem !important;
                    }
                    
                    .gap-2 {
                        gap: 0.4rem !important;
                    }
                    
                    .p-2 {
                        padding: 0.5rem !important;
                    }
                    
                    .mb-3 {
                        margin-bottom: 0.75rem !important;
                    }
                    
                    .mt-4 {
                        margin-top: 1rem !important;
                    }
                    
                    .pt-4 {
                        padding-top: 1rem !important;
                    }
                    
                    .col-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }
            `}</style>
        </section>
    );
};

export default TrainingPortfolio;
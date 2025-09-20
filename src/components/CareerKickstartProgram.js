import React from 'react';

const CareerKickstartProgram = () => {
    const programFeatures = [
        {
            icon: 'bi-compass',
            title: 'Career Planning',
            color: '#3498db'
        },
        {
            icon: 'bi-file-earmark-text',
            title: 'CV Writing',
            color: '#e74c3c'
        },
        {
            icon: 'bi-person-check',
            title: 'Interview Preparation',
            color: '#28a745'
        },
        {
            icon: 'bi-people',
            title: 'Networking',
            color: '#f39c12'
        },
        {
            icon: 'bi-linkedin',
            title: 'LinkedIn Optimization',
            color: '#9b59b6'
        }
    ];

    const targetAudience = [
        'University students (all disciplines)',
        'Fresh graduates (up to 3 years post-graduation)'
    ];

    return (
        <section id="career-kickstart-program" className="py-5" style={{
            background: 'linear-gradient(300deg, #0b1a61 0%, #1f2a89 35%, #d89a2d 100%)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '8%',
                right: '-4%',
                width: '250px',
                height: '250px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08))',
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '12%',
                left: '-6%',
                width: '350px',
                height: '350px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))',
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(15px)',
                            border: '2px solid rgba(255,215,0,0.4)',
                            borderRadius: '25px',
                            padding: '3rem',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                        }}>
                            {/* Main Title */}
                            <div className="text-center mb-4">
                                <h2 className="h2 fw-bold mb-4" style={{
                                    color: '#2c3e50',
                                    fontSize: '2.2rem',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                    borderBottom: '4px solid #FFD700',
                                    paddingBottom: '15px',
                                    display: 'inline-block'
                                }}>
                                    Career Kickstart Program
                                </h2>
                            </div>

                            {/* Description Section */}
                            <div className="row mb-5">
                                <div className="col-12">
                                    <div style={{
                                        background: 'rgba(52, 152, 219, 0.05)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        border: '1px solid rgba(52, 152, 219, 0.1)',
                                        boxShadow: '0 8px 20px rgba(52,152,219,0.1)'
                                    }}>
                                        <h4 className="h5 fw-bold mb-3" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.3rem',
                                            borderBottom: '2px solid #3498db',
                                            paddingBottom: '8px',
                                            display: 'inline-block'
                                        }}>
                                            Description
                                        </h4>
                                        <p style={{
                                            color: '#2c3e50',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            margin: '0',
                                            textAlign: 'justify'
                                        }}>
                                            Career Kickstart Program is designed to give students and fresh graduates a powerful launch into the professional world. The program focuses on equipping participants with <strong style={{ color: '#3498db' }}>essential workplace skills, practical job-hunting strategies, and the confidence needed to stand out</strong> in today's competitive market. Through interactive training on Career Planning, CV writing, interview preparation, networking, and LinkedIn optimization, participants will gain the tools to accelerate their career journey and secure better opportunities from day one.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Areas Covered */}
                            <div className="row mb-5">
                                <div className="col-12">
                                    <h4 className="h5 fw-bold mb-4 text-center" style={{
                                        color: '#2c3e50',
                                        fontSize: '1.3rem'
                                    }}>
                                        Key Areas Covered
                                    </h4>
                                    <div className="row g-3">
                                        {programFeatures.map((feature, index) => (
                                            <div key={index} className={`${programFeatures.length === 5 ? 'col-lg-4 col-md-6' : 'col-md-3 col-sm-6'}`} style={{
                                                ...(programFeatures.length === 5 && index === 4 ? {
                                                    gridColumn: 'span 2',
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                } : {})
                                            }}>
                                                <div style={{
                                                    background: 'rgba(255, 255, 255, 0.9)',
                                                    border: `2px solid ${feature.color}30`,
                                                    borderRadius: '15px',
                                                    padding: '1.5rem',
                                                    textAlign: 'center',
                                                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                                                    transition: 'all 0.3s ease',
                                                    height: '100%',
                                                    width: programFeatures.length === 5 && index === 4 ? '300px' : '100%'
                                                }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                                        e.currentTarget.style.borderColor = feature.color;
                                                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.borderColor = `${feature.color}30`;
                                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                                                    }}>
                                                    <div style={{
                                                        background: feature.color,
                                                        borderRadius: '50%',
                                                        width: '50px',
                                                        height: '50px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                                    }}>
                                                        <i className={feature.icon} style={{
                                                            fontSize: '1.4rem',
                                                            color: 'white'
                                                        }}></i>
                                                    </div>
                                                    <h6 style={{
                                                        color: '#2c3e50',
                                                        fontSize: '1rem',
                                                        fontWeight: '600',
                                                        margin: '0',
                                                        lineHeight: '1.3'
                                                    }}>
                                                        {feature.title}
                                                    </h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Program Details */}
                            <div className="row">
                                {/* Target Audience */}
                                <div className="col-lg-6 mb-4">
                                    <div style={{
                                        background: 'rgba(52, 152, 219, 0.05)',
                                        borderRadius: '15px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(52, 152, 219, 0.1)',
                                        height: '100%'
                                    }}>
                                        <h5 className="h6 fw-bold mb-3" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <i className="bi bi-people-fill me-2" style={{ color: '#3498db' }}></i>
                                            Target Audience
                                        </h5>
                                        {targetAudience.map((audience, index) => (
                                            <div key={index} className="d-flex align-items-start mb-2">
                                                <div style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    background: '#3498db',
                                                    borderRadius: '50%',
                                                    marginTop: '8px',
                                                    marginRight: '12px',
                                                    flexShrink: 0
                                                }}></div>
                                                <p style={{
                                                    color: '#2c3e50',
                                                    fontSize: '0.95rem',
                                                    lineHeight: '1.5',
                                                    margin: '0'
                                                }}>
                                                    {audience}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Program Information */}
                                <div className="col-lg-6 mb-4">
                                    <div style={{
                                        background: 'rgba(52, 152, 219, 0.05)',
                                        borderRadius: '15px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(52, 152, 219, 0.1)',
                                        height: '100%'
                                    }}>
                                        <h5 className="h6 fw-bold mb-3" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <i className="bi bi-info-circle-fill me-2" style={{ color: '#3498db' }}></i>
                                            Program Information
                                        </h5>

                                        <div className="mb-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="bi bi-clock-fill me-2" style={{ color: '#e74c3c', fontSize: '0.9rem' }}></i>
                                                <strong style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Duration:</strong>
                                                <span style={{ color: '#5a6c7d', fontSize: '0.9rem', marginLeft: '8px' }}>16 hrs</span>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="bi bi-translate me-2" style={{ color: '#28a745', fontSize: '0.9rem' }}></i>
                                                <strong style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Language:</strong>
                                                <span style={{ color: '#5a6c7d', fontSize: '0.9rem', marginLeft: '8px' }}>Bilingual</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-laptop me-2" style={{ color: '#f39c12', fontSize: '0.9rem' }}></i>
                                                <strong style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Delivery Method:</strong>
                                                <span style={{ color: '#5a6c7d', fontSize: '0.9rem', marginLeft: '8px' }}>Live training (online/offline)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-4">
                                <div style={{
                                    background: 'linear-gradient(45deg, #3498db, #2980b9)',
                                    borderRadius: '15px',
                                    padding: '1.5rem',
                                    color: 'white'
                                }}>
                                    <h5 style={{ margin: '0', fontSize: '1.1rem', fontWeight: '600' }}>
                                        Launch Your Career with Confidence
                                    </h5>
                                    <p style={{ margin: '10px 0 0', fontSize: '0.9rem', opacity: '0.9' }}>
                                        Join the Career Kickstart Program and accelerate your professional journey
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerKickstartProgram;
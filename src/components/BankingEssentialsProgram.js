import React from 'react';

const BankingEssentialsProgram = () => {
    const programFeatures = [
        {
            icon: 'bi-bank2',
            title: 'Banking Products & Services',
            color: '#3498db'
        },
        {
            icon: 'bi-shield-check',
            title: 'Customer Rights',
            color: '#e74c3c'
        },
        {
            icon: 'bi-credit-card-2-front',
            title: 'Accounts & Cards Management',
            color: '#28a745'
        },
        {
            icon: 'bi-shield-lock',
            title: 'Fraud Protection',
            color: '#f39c12'
        }
    ];

    const targetAudience = [
        'Banking beginners seeking to understand the basics',
        'Individuals planning to open or currently holding accounts'
    ];

    return (
        <section id="banking-essentials-program" className="py-4" style={{
            background: 'linear-gradient(120deg, #0b1a61 0%, #1f2a89 50%, #d89a2d 100%)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '8%',
                right: '-4%',
                width: '250px',
                height: '250px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))',
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '12%',
                left: '-6%',
                width: '350px',
                height: '350px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.08), rgba(255,215,0,0.03))',
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(216, 154, 45, 0.2)',
                            borderRadius: '25px',
                            padding: '2.5rem',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                        }}>
                            {/* Main Title */}
                            <div className="text-center mb-3">
                                <h2 className="h2 fw-bold mb-4" style={{
                                    color: '#FFFFFF',
                                    fontSize: '2rem',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                    borderBottom: '4px solid #d89a2d',
                                    paddingBottom: '15px',
                                    display: 'inline-block'
                                }}>
                                    <i className="bi bi-bank2 me-3"></i>
                                    Banking Essentials for Everyone Program
                                </h2>
                            </div>

                            {/* Description Section */}
                            <div className="row mb-4">
                                <div className="col-12">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '20px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(216, 154, 45, 0.2)',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                                    }}>
                                        <h4 className="h5 fw-bold mb-3" style={{
                                            color: '#FFD700',
                                            fontSize: '1.3rem',
                                            borderBottom: '2px solid #FFD700',
                                            paddingBottom: '8px',
                                            display: 'inline-block'
                                        }}>
                                            Description
                                        </h4>
                                        <p style={{
                                            color: '#FFFFFF',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            margin: '0',
                                            textAlign: 'justify'
                                        }}>
                                            The Banking Essentials for Everyone Program is designed to simplify the world of banking for individuals from non-banking backgrounds. The program provides a clear and practical understanding of <strong style={{ color: '#FFD700' }}>key banking products, services, and customer rights</strong>. Participants will learn how to choose and use different types of bank accounts and cards effectively, avoid common mistakes in daily banking, and protect themselves from fraud and online scams.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Areas Covered */}
                            <div className="row mb-5">
                                <div className="col-12">
                                    <h4 className="h5 fw-bold mb-4 text-center" style={{
                                        color: '#FFD700',
                                        fontSize: '1.3rem'
                                    }}>
                                        Key Areas Covered
                                    </h4>
                                    <div className="row g-3">
                                        {programFeatures.map((feature, index) => (
                                            <div key={index} className="col-md-3 col-sm-6">
                                                <div style={{
                                                    background: 'rgba(255, 255, 255, 0.95)',
                                                    border: `2px solid ${feature.color}30`,
                                                    borderRadius: '15px',
                                                    padding: '1.5rem',
                                                    textAlign: 'center',
                                                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                                                    transition: 'all 0.3s ease',
                                                    height: '100%'
                                                }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                                        e.currentTarget.style.borderColor = feature.color;
                                                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,215,0,0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.borderColor = `${feature.color}30`;
                                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
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
                                                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
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
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '15px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(255, 215, 0, 0.2)',
                                        height: '100%'
                                    }}>
                                        <h5 className="h6 fw-bold mb-3" style={{
                                            color: '#FFD700',
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <i className="bi bi-people-fill me-2" style={{ color: '#FFD700' }}></i>
                                            Target Audience
                                        </h5>
                                        {targetAudience.map((audience, index) => (
                                            <div key={index} className="d-flex align-items-start mb-2">
                                                <div style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    background: '#FFD700',
                                                    borderRadius: '50%',
                                                    marginTop: '8px',
                                                    marginRight: '12px',
                                                    flexShrink: 0
                                                }}></div>
                                                <p style={{
                                                    color: '#FFFFFF',
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
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '15px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(255, 215, 0, 0.2)',
                                        height: '100%'
                                    }}>
                                        <h5 className="h6 fw-bold mb-3" style={{
                                            color: '#FFD700',
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <i className="bi bi-info-circle-fill me-2" style={{ color: '#FFD700' }}></i>
                                            Program Information
                                        </h5>

                                        <div className="mb-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="bi bi-clock-fill me-2" style={{ color: '#e74c3c', fontSize: '0.9rem' }}></i>
                                                <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>Duration:</strong>
                                                <span style={{ color: '#FFD700', fontSize: '0.9rem', marginLeft: '8px' }}>8 hrs</span>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="bi bi-translate me-2" style={{ color: '#28a745', fontSize: '0.9rem' }}></i>
                                                <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>Language:</strong>
                                                <span style={{ color: '#FFD700', fontSize: '0.9rem', marginLeft: '8px' }}>Bilingual</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-laptop me-2" style={{ color: '#f39c12', fontSize: '0.9rem' }}></i>
                                                <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>Delivery Method:</strong>
                                                <span style={{ color: '#FFD700', fontSize: '0.9rem', marginLeft: '8px' }}>Live training (online/offline)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-4">
                                <div style={{
                                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                    borderRadius: '15px',
                                    padding: '1.5rem',
                                    color: '#2c3e50',
                                    boxShadow: '0 8px 25px rgba(255,215,0,0.3)'
                                }}>
                                    <h5 style={{ margin: '0', fontSize: '1.1rem', fontWeight: '600' }}>
                                        Master Banking Basics with Confidence
                                    </h5>
                                    <p style={{ margin: '10px 0 0', fontSize: '0.9rem', opacity: '0.9' }}>
                                        Join the Banking Essentials Program and navigate banking with ease
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

export default BankingEssentialsProgram;
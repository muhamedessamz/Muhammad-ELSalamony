import React from 'react';
import { FaCompass, FaFileAlt, FaUserCheck, FaUsers, FaLinkedin, FaUserShield, FaInfoCircle } from 'react-icons/fa';
import ColorPalette from './ColorPalette';

const CareerKickstartProgram = () => {
    const programFeatures = [
        {
            icon: <FaCompass />,
            title: 'Career Planning',
            color: ColorPalette.primaryBlue
        },
        {
            icon: <FaFileAlt />,
            title: 'CV Writing',
            color: ColorPalette.secondaryBlue
        },
        {
            icon: <FaUserCheck />,
            title: 'Interview Preparation',
            color: ColorPalette.accentBeige
        },
        {
            icon: <FaUsers />,
            title: 'Networking',
            color: ColorPalette.primaryBlue
        },
        {
            icon: <FaLinkedin />,
            title: 'LinkedIn Optimization',
            color: ColorPalette.secondaryBlue
        }
    ];

    const targetAudience = [
        'University students (all disciplines)',
        'Fresh graduates (up to 3 years post-graduation)'
    ];

    return (
        <section id="career-kickstart-program" className="py-4" style={{
            background: `linear-gradient(300deg, ${ColorPalette.primaryBlue} 0%, ${ColorPalette.secondaryBlue} 35%, ${ColorPalette.accentBeige} 100%)`,
            color: ColorPalette.lightText,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '-3%',
                width: '200px',
                height: '200px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}26, ${ColorPalette.accentBeige}14)`,
                borderRadius: '50%',
                filter: 'blur(1.5px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '8%',
                left: '-4%',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}1a, ${ColorPalette.accentBeige}0d)`,
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>

            <div className="container-fluid position-relative px-3 px-md-4" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="row">
                    <div className="col-12">
                        <div style={{
                            background: ColorPalette.darkBlueBackground,
                            backdropFilter: 'blur(12px)',
                            border: `2px solid ${ColorPalette.primaryBorder}`,
                            borderRadius: '20px',
                            padding: '2.5rem',
                            boxShadow: `0 20px 40px ${ColorPalette.blueShadow}`,
                            margin: '0 auto'
                        }}>
                            {/* Main Title */}
                            <div className="text-center mb-3">
                                <h2 className="h3 fw-bold mb-3" style={{
                                    color: ColorPalette.lightText,
                                    fontSize: '1.6rem',
                                    textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`,
                                    borderBottom: `3px solid ${ColorPalette.accentBeige}`,
                                    paddingBottom: '10px',
                                    display: 'inline-block'
                                }}>
                                    <div style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.8rem' }}>
                                        <FaCompass style={{ color: ColorPalette.accentBeige, fontSize: '1.2rem' }} />
                                    </div>
                                    Career Kickstart Program
                                </h2>
                            </div>

                            {/* Description Section */}
                            <div className="row mb-3">
                                <div className="col-12">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '15px',
                                        padding: '1.2rem',
                                        border: `1px solid ${ColorPalette.primaryBorder}`,
                                        boxShadow: `0 6px 15px ${ColorPalette.blueShadow}`
                                    }}>
                                        <h4 className="h5 fw-bold mb-3" style={{
                                            color: ColorPalette.accentBeige,
                                            fontSize: '1.2rem',
                                            borderBottom: `2px solid ${ColorPalette.accentBeige}`,
                                            paddingBottom: '6px',
                                            display: 'inline-block'
                                        }}>
                                            Description
                                        </h4>
                                        <p style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6',
                                            margin: '0',
                                            textAlign: 'center'
                                        }}>
                                            Career Kickstart Program is designed to give students and fresh graduates a powerful launch into the professional world. The program focuses on equipping participants with <strong style={{ color: ColorPalette.accentBeige }}>essential workplace skills, practical job-hunting strategies, and the confidence needed to stand out</strong> in today's competitive market. Through interactive training on Career Planning, CV writing, interview preparation, networking, and LinkedIn optimization, participants will gain the tools to accelerate their career journey and secure better opportunities from day one.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Areas Covered */}
                            <div className="row mb-4">
                                <div className="col-12">
                                    <h4 className="h5 fw-bold mb-3 text-center" style={{
                                        color: ColorPalette.accentBeige,
                                        fontSize: '1.2rem'
                                    }}>
                                        Key Areas Covered
                                    </h4>
                                    <div className="row g-2">
                                        {programFeatures.map((feature, index) => (
                                            <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-6">
                                                <div style={{
                                                    background: 'rgba(255, 255, 255, 0.9)',
                                                    border: `2px solid ${feature.color}30`,
                                                    borderRadius: '12px',
                                                    padding: '1rem',
                                                    textAlign: 'center',
                                                    boxShadow: `0 6px 15px ${ColorPalette.blueShadow}`,
                                                    transition: 'all 0.3s ease',
                                                    height: '100%'
                                                }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                                        e.currentTarget.style.borderColor = feature.color;
                                                        e.currentTarget.style.boxShadow = `0 8px 20px ${ColorPalette.beigeShadow}`;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.borderColor = `${feature.color}30`;
                                                        e.currentTarget.style.boxShadow = `0 6px 15px ${ColorPalette.blueShadow}`;
                                                    }}>
                                                    <div style={{
                                                        background: feature.color,
                                                        borderRadius: '50%',
                                                        width: '40px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 10px',
                                                        boxShadow: `0 3px 8px ${ColorPalette.blueShadow}`
                                                    }}>
                                                        <div style={{
                                                            fontSize: '1.1rem',
                                                            color: 'white'
                                                        }}>
                                                            {feature.icon}
                                                        </div>
                                                    </div>
                                                    <h6 style={{
                                                        color: ColorPalette.primaryText,
                                                        fontSize: '0.85rem',
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
                                <div className="col-lg-6 mb-3">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        padding: '1.2rem',
                                        border: `1px solid ${ColorPalette.primaryBorder}`,
                                        height: '100%'
                                    }}>
                                        <h5 className="h6 fw-bold mb-3" style={{
                                            color: ColorPalette.accentBeige,
                                            fontSize: '1rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{ marginRight: '0.4rem' }}>
                                                <FaUserShield />
                                            </div>
                                            Target Audience
                                        </h5>
                                        {targetAudience.map((audience, index) => (
                                            <div key={index} className="d-flex align-items-start mb-2">
                                                <div style={{
                                                    width: '5px',
                                                    height: '5px',
                                                    background: ColorPalette.accentBeige,
                                                    borderRadius: '50%',
                                                    marginTop: '6px',
                                                    marginRight: '10px',
                                                    flexShrink: 0
                                                }}></div>
                                                <p style={{
                                                    color: ColorPalette.lightText,
                                                    fontSize: '0.85rem',
                                                    lineHeight: '1.4',
                                                    margin: '0',
                                                    textAlign: 'left' // Ensure left alignment for better readability
                                                }}>
                                                    {audience}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Program Information */}
                                <div className="col-lg-6 mb-3">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        padding: '1.2rem',
                                        border: `1px solid ${ColorPalette.primaryBorder}`,
                                        height: '100%'
                                    }}>
                                        <h5 className="h6 fw-bold mb-3" style={{
                                            color: ColorPalette.accentBeige,
                                            fontSize: '1rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{ marginRight: '0.4rem' }}>
                                                <FaInfoCircle />
                                            </div>
                                            Program Information
                                        </h5>
                                        <div className="d-flex align-items-center mb-2">
                                            <div style={{
                                                width: '5px',
                                                height: '5px',
                                                background: ColorPalette.accentBeige,
                                                borderRadius: '50%',
                                                marginTop: '6px',
                                                marginRight: '10px',
                                                flexShrink: 0
                                            }}></div>
                                            <p style={{
                                                color: ColorPalette.lightText,
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4',
                                                margin: '0',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                Duration: 
                                                <span style={{ color: ColorPalette.accentBeige, fontSize: '0.8rem', marginLeft: '6px' }}>12 hrs</span>
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div style={{
                                                width: '5px',
                                                height: '5px',
                                                background: ColorPalette.accentBeige,
                                                borderRadius: '50%',
                                                marginTop: '6px',
                                                marginRight: '10px',
                                                flexShrink: 0
                                            }}></div>
                                            <p style={{
                                                color: ColorPalette.lightText,
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4',
                                                margin: '0',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                Language: 
                                                <span style={{ color: ColorPalette.accentBeige, fontSize: '0.8rem', marginLeft: '6px' }}>Bilingual</span>
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div style={{
                                                width: '5px',
                                                height: '5px',
                                                background: ColorPalette.accentBeige,
                                                borderRadius: '50%',
                                                marginTop: '6px',
                                                marginRight: '10px',
                                                flexShrink: 0
                                            }}></div>
                                            <p style={{
                                                color: ColorPalette.lightText,
                                                fontSize: '0.85rem',
                                                lineHeight: '1.4',
                                                margin: '0',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                Delivery: 
                                                <span style={{ color: ColorPalette.accentBeige, fontSize: '0.8rem', marginLeft: '6px' }}>Live training (online/offline)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-3">
                                <div style={{
                                    background: ColorPalette.blueGradient,
                                    borderRadius: '12px',
                                    padding: '1.2rem',
                                    color: ColorPalette.lightText
                                }}>
                                    <h5 style={{ margin: '0', fontSize: '1rem', fontWeight: '600' }}>
                                        Launch Your Career with Confidence
                                    </h5>
                                    <p style={{ margin: '8px 0 0', fontSize: '0.85rem', opacity: '0.9' }}>
                                        Join the Career Kickstart Program and accelerate your professional journey
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @media (max-width: 768px) {
                    #career-kickstart-program {
                        padding: 15px 0 !important;
                    }
                    
                    .container-fluid {
                        padding: 0 1rem !important;
                    }
                    
                    .h3 {
                        font-size: 1.4rem !important;
                    }
                    
                    .h5 {
                        font-size: 1.1rem !important;
                    }
                    
                    .h6 {
                        font-size: 0.95rem !important;
                    }
                    
                    .mb-3 {
                        margin-bottom: 1rem !important;
                    }
                    
                    .mb-4 {
                        margin-bottom: 1.5rem !important;
                    }
                    
                    .mb-5 {
                        margin-bottom: 2rem !important;
                    }
                    
                    .p-3 {
                        padding: 1rem !important;
                    }
                    
                    .g-2 {
                    
                    /* Ensure proper text alignment on mobile */
                    div[style*="textAlign: 'left'"] {
                        text-align: left !important;
                        word-wrap: break-word;
                        hyphens: auto;
                    }
                }
                
                @media (max-width: 576px) {
                        --bs-gutter-x: 0.5rem;
                    }
                }
                
                @media (max-width: 576px) {
                    #career-kickstart-program {
                        padding: 10px 0 !important;
                    }
                    
                    .container-fluid {
                        padding: 0 0.75rem !important;
                    }
                    
                    .h3 {
                        font-size: 1.3rem !important;
                    }
                    
                    .h5 {
                        font-size: 1rem !important;
                    }
                    
                    .h6 {
                        font-size: 0.9rem !important;
                    }
                    
                    .mb-3 {
                        margin-bottom: 0.75rem !important;
                    }
                    
                    .mb-4 {
                        margin-bottom: 1rem !important;
                    }
                    
                    .mb-5 {
                        margin-bottom: 1.5rem !important;
                    }
                    
                    .p-3 {
                        padding: 0.75rem !important;
                    }
                    
                    .col-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    
                    .g-2 {
                        --bs-gutter-x: 0.4rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CareerKickstartProgram;
import React from 'react';
import { FaAward, FaGraduationCap, FaBrain } from 'react-icons/fa';
import ColorPalette from './ColorPalette';

const Credentials = () => {
    const credentials = [
        {
            id: 1,
            title: 'Training of Trainers (TOT) Professional Certificate',
            institution: 'Arab Academy for Science, Technology & Maritime Transport',
            icon: <FaAward />,
            color: ColorPalette.primaryBlue
        },
        {
            id: 2,
            title: 'Instructional design certification diploma',
            institution: 'EYouth',
            icon: <FaGraduationCap />,
            color: ColorPalette.secondaryBlue
        },
        {
            id: 3,
            title: 'Emotional Intelligence at Workplace',
            institution: 'Proactive Development Solutions',
            icon: <FaBrain />,
            color: ColorPalette.accentBeige
        }
    ];

    return (
        <section id="credentials" className="py-5" style={{
            background: `linear-gradient(315deg, ${ColorPalette.primaryBlue} 0%, ${ColorPalette.secondaryBlue} 35%, ${ColorPalette.accentBeige} 100%)`,
            color: ColorPalette.lightText,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '-4%',
                width: '250px',
                height: '250px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}26, ${ColorPalette.accentBeige}14)`,
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '-6%',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}1a, ${ColorPalette.accentBeige}0d)`,
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-5">
                            <h2 className="h2 fw-bold mb-4" style={{
                                color: ColorPalette.lightText,
                                fontSize: '2.5rem',
                                textShadow: `2px 2px 4px ${ColorPalette.blueShadow}`,
                                position: 'relative',
                                display: 'inline-block'
                            }}>
                                Part Of My Credentials
                                <div style={{
                                    content: '',
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '4px',
                                    background: ColorPalette.beigeGradient,
                                    borderRadius: '2px'
                                }}></div>
                            </h2>
                            <p className="lead" style={{
                                color: 'rgba(249, 243, 239, 0.85)',
                                fontSize: '1.2rem',
                                maxWidth: '700px',
                                margin: '0 auto'
                            }}>
                                Professional certifications and achievements that validate my expertise
                            </p>
                        </div>

                        <div className="row g-4">
                            {credentials.map((credential, index) => (
                                <div key={credential.id} className="col-md-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '2.5rem',
                                        textAlign: 'center',
                                        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        border: 'none'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-15px)';
                                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                                        }}>

                                        {/* Icon container with gradient background */}
                                        <div className="mb-4">
                                            <div style={{
                                                width: '90px',
                                                height: '90px',
                                                borderRadius: '50%',
                                                background: `linear-gradient(135deg, ${credential.color}, ${credential.color}80)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}>
                                                <div style={{
                                                    fontSize: '2.5rem',
                                                    color: 'white'
                                                }}>
                                                    {credential.icon}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="h5 fw-bold mb-3" style={{
                                            color: ColorPalette.primaryBlue,
                                            fontSize: '1.3rem',
                                            lineHeight: '1.4',
                                            marginTop: '1.5rem'
                                        }}>
                                            {credential.title}
                                        </h3>

                                        {/* Institution */}
                                        <p className="mb-4" style={{
                                            color: ColorPalette.secondaryBlue,
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            fontWeight: '500'
                                        }}>
                                            {credential.institution}
                                        </p>

                                        {/* Decorative line */}
                                        <div style={{
                                            width: '50px',
                                            height: '3px',
                                            background: `linear-gradient(90deg, ${credential.color}, ${credential.color}80)`,
                                            margin: '0 auto',
                                            borderRadius: '2px'
                                        }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Credentials;
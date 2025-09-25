import React from 'react';
import { FaGraduationCap, FaPencilAlt, FaUniversity, FaHeart } from 'react-icons/fa';
import ColorPalette from './ColorPalette';

const ProfessionalTitlesWithImage = () => {
    return (
        <section id="professional-titles-with-image" className="py-5" style={{
            background: ColorPalette.blueGradient,
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '-5%',
                width: '200px',
                height: '200px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}33, ${ColorPalette.accentBeige}1a)`,
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '25%',
                left: '-8%',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}26, ${ColorPalette.accentBeige}14)`,
                borderRadius: '50%',
                filter: 'blur(5px)'
            }}></div>

            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="position-relative" style={{
                            maxWidth: '80%',
                            margin: '0 auto',
                            overflow: 'hidden',
                            borderRadius: '20px',
                            boxShadow: `0 25px 50px ${ColorPalette.blueShadow}`,
                            background: `${ColorPalette.accentBeige}26`,
                            backdropFilter: 'blur(15px)',
                            border: `2px solid ${ColorPalette.accentBorder}`,
                            padding: '10px'
                        }}>
                            <img
                                src={require('../assets/images/main profile/tittle.png')}
                                alt="Professional Title"
                                className="img-fluid w-100"
                                style={{
                                    display: 'block',
                                    borderRadius: '15px'
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{
                            background: ColorPalette.lightBlueBackground,
                            backdropFilter: 'blur(20px)',
                            border: `2px solid ${ColorPalette.accentBorder}`,
                            borderRadius: '20px',
                            padding: '2.5rem',
                            boxShadow: `0 25px 50px ${ColorPalette.blueShadow}`
                        }}>
                            <h2 className="h3 fw-bold mb-4" style={{
                                color: ColorPalette.lightText,
                                fontSize: '2.2rem',
                                textShadow: `2px 2px 4px ${ColorPalette.blueShadow}`,
                                textAlign: 'center',
                                marginBottom: '2rem',
                                borderBottom: `3px solid ${ColorPalette.accentBeige}`,
                                paddingBottom: '15px',
                                display: 'inline-block',
                                width: '100%'
                            }}>
                                Professional Titles I Had
                            </h2>
                            <div className="titles-list" style={{ lineHeight: '1.8' }}>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3" style={{
                                        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}, ${ColorPalette.offWhite})`,
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <div style={{ color: ColorPalette.primaryText, fontSize: '1.1rem' }}>
                                            <FaGraduationCap />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '1.1rem',
                                            textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`
                                        }}>Professional Certified Trainer</h3>
                                        <p className="mb-0" style={{
                                            color: ColorPalette.accentText,
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}></p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3" style={{
                                        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}, ${ColorPalette.offWhite})`,
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <div style={{ color: ColorPalette.primaryText, fontSize: '1.1rem' }}>
                                            <FaPencilAlt />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '1.1rem',
                                            textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`
                                        }}>Professional Instructional Designer</h3>
                                        <p className="mb-0" style={{
                                            color: ColorPalette.accentText,
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}></p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3" style={{
                                        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}, ${ColorPalette.offWhite})`,
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <div style={{ color: ColorPalette.primaryText, fontSize: '1.1rem' }}>
                                            <FaUniversity />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '1.1rem',
                                            textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`
                                        }}>Experienced Banking Professional</h3>
                                        <p className="mb-0" style={{
                                            color: ColorPalette.accentText,
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}></p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="me-3" style={{
                                        background: `linear-gradient(45deg, ${ColorPalette.accentBeige}, ${ColorPalette.offWhite})`,
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <div style={{ color: ColorPalette.primaryText, fontSize: '1.1rem' }}>
                                            <FaHeart />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '1.1rem',
                                            textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`
                                        }}>Mentor & Financial literacy Trainer</h3>
                                        <p className="mb-0" style={{
                                            color: ColorPalette.accentText,
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}></p>
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

export default ProfessionalTitlesWithImage;
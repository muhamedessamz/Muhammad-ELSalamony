import React from 'react';
import ColorPalette from './ColorPalette';

const TrainingFieldTitles = () => {
    return (
        <section id="training-field-titles" className="py-5" style={{
            background: ColorPalette.blueGradient,
            color: ColorPalette.lightText,
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-3%',
                width: '200px',
                height: '200px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}20, ${ColorPalette.accentBeige}10)`,
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}15, ${ColorPalette.accentBeige}08)`,
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div style={{
                            background: ColorPalette.lightBlueBackground,
                            backdropFilter: 'blur(15px)',
                            border: `2px solid ${ColorPalette.accentBorder}`,
                            borderRadius: '25px',
                            padding: '3rem',
                            boxShadow: `0 25px 50px ${ColorPalette.blueShadow}`,
                            textAlign: 'center'
                        }}>
                            <h2 className="h2 fw-bold mb-5" style={{
                                color: ColorPalette.lightText,
                                fontSize: '2.2rem',
                                textShadow: `2px 2px 4px ${ColorPalette.blueShadow}`,
                                borderBottom: `4px solid ${ColorPalette.accentBeige}`,
                                paddingBottom: '15px',
                                marginBottom: '3rem'
                            }}>
                                Titles I had in The Training Field
                            </h2>

                            <div className="row g-4">
                                {/* Trainer/Instructor */}
                                <div className="col-md-6">
                                    <div style={{
                                        background: `linear-gradient(135deg, ${ColorPalette.primaryBlue} 0%, ${ColorPalette.secondaryBlue} 100%)`,
                                        borderRadius: '20px',
                                        padding: '2.5rem',
                                        color: ColorPalette.lightText,
                                        boxShadow: `0 15px 30px ${ColorPalette.blueShadow}60`,
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `0 20px 40px ${ColorPalette.blueShadow}80`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `0 15px 30px ${ColorPalette.blueShadow}60`;
                                        }}>
                                        <div className="mb-3">
                                            <i className="bi bi-mortarboard-fill" style={{
                                                fontSize: '3.5rem',
                                                color: ColorPalette.accentBeige,
                                                marginBottom: '1rem'
                                            }}></i>
                                        </div>
                                        <h3 className="h4 fw-bold mb-3" style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '1.5rem',
                                            textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`
                                        }}>Trainer/Instructor</h3>
                                        <p className="mb-0" style={{
                                            color: ColorPalette.accentText,
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6',
                                            fontWeight: '500'
                                        }}>
                                            With corporates, training centres, NGOs
                                        </p>
                                    </div>
                                </div>

                                {/* Coach/Consultant */}
                                <div className="col-md-6">
                                    <div style={{
                                        background: `linear-gradient(135deg, ${ColorPalette.accentBeige} 0%, ${ColorPalette.offWhite} 100%)`,
                                        borderRadius: '20px',
                                        padding: '2.5rem',
                                        color: ColorPalette.primaryText,
                                        boxShadow: `0 15px 30px ${ColorPalette.beigeShadow}`,
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `0 20px 40px ${ColorPalette.beigeShadow}80`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `0 15px 30px ${ColorPalette.beigeShadow}`;
                                        }}>
                                        <div className="mb-3">
                                            <i className="bi bi-person-badge-fill" style={{
                                                fontSize: '3.5rem',
                                                color: ColorPalette.primaryBlue,
                                                marginBottom: '1rem'
                                            }}></i>
                                        </div>
                                        <h3 className="h4 fw-bold mb-3" style={{
                                            color: ColorPalette.primaryText,
                                            fontSize: '1.5rem',
                                            textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`
                                        }}>Coach/Consultant</h3>
                                        <p className="mb-0" style={{
                                            color: ColorPalette.secondaryText,
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6',
                                            fontWeight: '500'
                                        }}>
                                            To students and fresh graduates to help them stand out in the marketplace, & Employees to stay focused and manage their time efficiently.
                                        </p>
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

export default TrainingFieldTitles;
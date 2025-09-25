import React from 'react';
import ColorPalette from './ColorPalette';

const TrainingSetupsSection = () => {
    const trainingSetups = [
        {
            id: 1,
            title: 'Corporate training',
            icon: 'bi-geo-alt-fill',
            color: ColorPalette.primaryBlue
        },
        {
            id: 2,
            title: 'Training camps',
            icon: 'bi-people-fill',
            color: ColorPalette.accentBeige
        },
        {
            id: 3,
            title: 'Training centres',
            icon: 'bi-building',
            color: ColorPalette.secondaryBlue
        },
        {
            id: 4,
            title: 'Conference talks & panel discussions',
            icon: 'bi-mic-fill',
            color: ColorPalette.offWhite
        },
        {
            id: 5,
            title: 'University courses',
            icon: 'bi-mortarboard-fill',
            color: ColorPalette.accentText
        }
    ];

    return (
        <section id="training-setups-section" className="py-4" style={{
            background: ColorPalette.blueGradient,
            color: ColorPalette.lightText,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-3%',
                width: '200px',
                height: '200px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}26, ${ColorPalette.accentBeige}14)`,
                borderRadius: '50%',
                filter: 'blur(1.5px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '-4%',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}1a, ${ColorPalette.accentBeige}0d)`,
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-4">
                            <h2 className="h3 fw-bold mb-3" style={{
                                color: ColorPalette.lightText,
                                fontSize: '1.8rem',
                                textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`,
                                borderBottom: `3px solid ${ColorPalette.accentBeige}`,
                                paddingBottom: '10px',
                                display: 'inline-block'
                            }}>
                                Training & Lecturing Setups
                            </h2>
                        </div>

                        <div className="row g-3">
                            {trainingSetups.map((setup, index) => (
                                <div key={setup.id} className="col-lg-4 col-md-6 col-sm-6 col-6">
                                    <div style={{
                                        background: `${ColorPalette.lightBlueBackground}`,
                                        backdropFilter: 'blur(12px)',
                                        border: `2px solid ${ColorPalette.accentBorder}`,
                                        borderRadius: '15px',
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                        boxShadow: `0 10px 20px ${ColorPalette.blueShadow}`,
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = `0 15px 30px ${ColorPalette.blueShadow}80`;
                                            e.currentTarget.style.borderColor = ColorPalette.accentBeige;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `0 10px 20px ${ColorPalette.blueShadow}`;
                                            e.currentTarget.style.borderColor = ColorPalette.accentBorder;
                                        }}>
                                        {/* Icon */}
                                        <div className="mb-2">
                                            <i className={setup.icon} style={{
                                                fontSize: '2.5rem',
                                                color: setup.color,
                                                marginBottom: '0.75rem',
                                                filter: `drop-shadow(0 2px 4px ${ColorPalette.blueShadow})`
                                            }}></i>
                                        </div>

                                        {/* Title */}
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: ColorPalette.lightText,
                                            fontSize: '0.95rem',
                                            textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`,
                                            lineHeight: '1.3',
                                            textTransform: 'capitalize'
                                        }}>
                                            {setup.title}
                                        </h3>

                                        {/* Decorative line */}
                                        <div style={{
                                            width: '40px',
                                            height: '2px',
                                            background: setup.color,
                                            margin: '0 auto',
                                            borderRadius: '1px'
                                        }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @media (max-width: 768px) {
                    #training-setups-section {
                        padding: 20px 0 !important;
                    }
                    
                    .h3 {
                        font-size: 1.6rem !important;
                    }
                    
                    .col-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    
                    /* Keep original padding and font sizes for desktop */
                    div[style*="padding: '1.5rem'"] {
                        padding: 1rem !important;
                    }
                    
                    div[style*="fontSize: '2.5rem'"] {
                        font-size: 2rem !important;
                    }
                    
                    div[style*="fontSize: '0.95rem'"] {
                        font-size: 0.9rem !important;
                    }
                    
                    .g-3 {
                        --bs-gutter-x: 1rem;
                    }
                }
                
                @media (max-width: 576px) {
                    #training-setups-section {
                        padding: 15px 0 !important;
                    }
                    
                    .h3 {
                        font-size: 1.4rem !important;
                    }
                    
                    .col-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    
                    /* Keep original padding and font sizes for desktop */
                    div[style*="padding: '1.5rem'"] {
                        padding: 1rem !important;
                    }
                    
                    div[style*="fontSize: '2.5rem'"] {
                        font-size: 2rem !important;
                    }
                    
                    div[style*="fontSize: '0.95rem'"] {
                        font-size: 0.9rem !important;
                    }
                    
                    .g-3 {
                        --bs-gutter-x: 0.75rem;
                    }
                    
                    .p-4 {
                        padding: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default TrainingSetupsSection;
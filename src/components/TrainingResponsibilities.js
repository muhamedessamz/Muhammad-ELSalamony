import React from 'react';
import { FaPencilAlt, FaClipboardCheck, FaVideo } from 'react-icons/fa';
import ColorPalette from './ColorPalette';

const TrainingResponsibilities = () => {
    const responsibilities = [
        {
            id: 1,
            title: 'TRAINING MATERIALS DESIGN',
            icon: <FaPencilAlt />,
            color: ColorPalette.accentBeige,
            items: ['Presentations', 'Worksheets', 'etc.'],
            description: 'Creating comprehensive educational materials and resources'
        },
        {
            id: 2,
            title: 'ASSESSMENT ACTIVITIES',
            icon: <FaClipboardCheck />,
            color: ColorPalette.secondaryBlue,
            items: ['Case studies', 'Quizzes', 'Exams'],
            description: 'Developing evaluation methods and learning assessments'
        },
        {
            id: 3,
            title: 'ONLINE & OFFLINE SESSIONS DELIVERY',
            icon: <FaVideo />,
            color: ColorPalette.primaryBlue,
            items: ['Script writing for recorded videos (Autocue)'],
            description: 'Delivering engaging training sessions across multiple platforms'
        }
    ];

    return (
        <section id="training-responsibilities" className="py-5" style={{
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
                width: '250px',
                height: '250px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}10, ${ColorPalette.accentBeige}05)`,
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '30%',
                left: '-8%',
                width: '350px',
                height: '350px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}08, ${ColorPalette.accentBeige}03)`,
                borderRadius: '50%',
                filter: 'blur(5px)'
            }}></div>

            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div style={{
                            background: `${ColorPalette.accentBeige}26`,
                            backdropFilter: 'blur(20px)',
                            border: `1px solid ${ColorPalette.accentBorder}`,
                            borderRadius: '20px',
                            padding: '2.5rem',
                            boxShadow: `0 20px 40px ${ColorPalette.blueShadow}`
                        }}>
                            <h2 className="h3 fw-bold mb-4" style={{
                                color: ColorPalette.accentBeige,
                                fontSize: '2rem',
                                textShadow: `2px 2px 4px ${ColorPalette.blueShadow}`,
                                textAlign: 'center',
                                marginBottom: '2rem',
                                textDecoration: 'underline',
                                textDecorationColor: ColorPalette.accentBeige
                            }}>
                                Training Responsibilities
                            </h2>

                            {responsibilities.map((responsibility, index) => (
                                <div key={responsibility.id} className="mb-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3" style={{
                                            background: `linear-gradient(45deg, ${ColorPalette.accentBeige}, ${ColorPalette.offWhite})`,
                                            borderRadius: '50%',
                                            width: '45px',
                                            height: '45px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <div style={{ color: ColorPalette.primaryText, fontSize: '1.3rem' }}>
                                                {responsibility.icon}
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 className="h5 fw-bold mb-2" style={{
                                                color: ColorPalette.lightText,
                                                fontSize: '1.2rem',
                                                textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>
                                                {responsibility.title}
                                            </h3>

                                            {/* Items as tags */}
                                            <div className="mb-2">
                                                {responsibility.items.map((item, itemIndex) => (
                                                    <span key={itemIndex} style={{
                                                        display: 'inline-block',
                                                        background: ColorPalette.lightText,
                                                        color: ColorPalette.primaryText,
                                                        padding: '6px 12px',
                                                        borderRadius: '15px',
                                                        margin: '2px 4px 2px 0',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        border: `2px solid ${ColorPalette.primaryBorder}`,
                                                        transition: 'all 0.2s ease'
                                                    }}>
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Separator line except for last item */}
                                    {index < responsibilities.length - 1 && (
                                        <div style={{
                                            width: '100%',
                                            height: '2px',
                                            background: `linear-gradient(90deg, transparent, ${ColorPalette.accentBorder}, transparent)`,
                                            margin: '1.5rem 0'
                                        }}></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative" style={{
                            maxWidth: '85%',
                            margin: '0 auto',
                            overflow: 'hidden',
                            borderRadius: '20px',
                            boxShadow: `0 25px 50px ${ColorPalette.blueShadow}`,
                            background: `${ColorPalette.accentBeige}1a`,
                            backdropFilter: 'blur(10px)',
                            border: `2px solid ${ColorPalette.accentBorder}`,
                            padding: '15px'
                        }}>
                            <img
                                src={require('../assets/images/main profile/Training .jpg')}
                                alt="Training Responsibilities"
                                className="img-fluid w-100"
                                style={{
                                    display: 'block',
                                    borderRadius: '15px',
                                    filter: 'brightness(1.1) contrast(1.05)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingResponsibilities;
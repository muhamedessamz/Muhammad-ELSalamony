import React from 'react';

const TrainingResponsibilities = () => {
    const responsibilities = [
        {
            id: 1,
            title: 'TRAINING MATERIALS DESIGN',
            icon: 'bi-pencil-square',
            color: '#f39c12',
            items: ['Presentations', 'Worksheets', 'etc.'],
            description: 'Creating comprehensive educational materials and resources'
        },
        {
            id: 2,
            title: 'ASSESSMENT ACTIVITIES',
            icon: 'bi-clipboard-check',
            color: '#e74c3c',
            items: ['Case studies', 'Quizzes', 'Exams'],
            description: 'Developing evaluation methods and learning assessments'
        },
        {
            id: 3,
            title: 'ONLINE & OFFLINE SESSIONS DELIVERY',
            icon: 'bi-camera-video',
            color: '#3498db',
            items: ['Script writing for recorded videos (Autocue)'],
            description: 'Delivering engaging training sessions across multiple platforms'
        }
    ];

    return (
        <section id="training-responsibilities" className="py-5" style={{
            background: 'linear-gradient(45deg, #0b1a61 0%, #1f2a89 60%, #d89a2d 100%)',
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
                background: 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,165,0,0.05))',
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '30%',
                left: '-8%',
                width: '350px',
                height: '350px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.08), rgba(255,165,0,0.03))',
                borderRadius: '50%',
                filter: 'blur(5px)'
            }}></div>

            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div style={{
                            background: 'rgba(255, 215, 0, 0.15)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            borderRadius: '20px',
                            padding: '2.5rem',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}>
                            <h2 className="h3 fw-bold mb-4" style={{
                                color: '#FFD700',
                                fontSize: '2rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                textAlign: 'center',
                                marginBottom: '2rem',
                                textDecoration: 'underline',
                                textDecorationColor: '#FFD700'
                            }}>
                                Training Responsibilities
                            </h2>

                            {responsibilities.map((responsibility, index) => (
                                <div key={responsibility.id} className="mb-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3" style={{
                                            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                            borderRadius: '50%',
                                            width: '45px',
                                            height: '45px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <i className={responsibility.icon} style={{ color: 'white', fontSize: '1.3rem' }}></i>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 className="h5 fw-bold mb-2" style={{
                                                color: '#FFFFFF',
                                                fontSize: '1.2rem',
                                                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
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
                                                        background: 'rgba(255, 255, 255, 0.9)',
                                                        color: '#2c3e50',
                                                        padding: '6px 12px',
                                                        borderRadius: '15px',
                                                        margin: '2px 4px 2px 0',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        border: '2px solid rgba(255, 215, 0, 0.3)',
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
                                            background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
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
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                            background: 'rgba(255, 215, 0, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255, 215, 0, 0.3)',
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
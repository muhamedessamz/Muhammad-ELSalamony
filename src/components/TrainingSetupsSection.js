import React from 'react';

const TrainingSetupsSection = () => {
    const trainingSetups = [
        {
            id: 1,
            title: 'Corporate training',
            icon: 'bi-building',
            color: '#3498db'
        },
        {
            id: 2,
            title: 'Training camps',
            icon: 'bi-people-fill',
            color: '#e74c3c'
        },
        {
            id: 3,
            title: 'Training centres',
            icon: 'bi-geo-alt-fill',
            color: '#28a745'
        },
        {
            id: 4,
            title: 'Conference talks & panel discussions',
            icon: 'bi-mic-fill',
            color: '#f39c12'
        },
        {
            id: 5,
            title: 'University courses',
            icon: 'bi-mortarboard-fill',
            color: '#9b59b6'
        }
    ];

    return (
        <section id="training-setups-section" className="py-5" style={{
            background: 'linear-gradient(180deg, #0b1a61 0%, #1f2a89 40%, #d89a2d 100%)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '-4%',
                width: '250px',
                height: '250px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08))',
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
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
                        <div className="text-center mb-5">
                            <h2 className="h2 fw-bold mb-4" style={{
                                color: '#FFFFFF',
                                fontSize: '2.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                borderBottom: '4px solid #FFD700',
                                paddingBottom: '15px',
                                display: 'inline-block'
                            }}>
                                Training & lecturing Setups I join
                            </h2>
                        </div>

                        <div className="row g-4">
                            {trainingSetups.map((setup, index) => (
                                <div key={setup.id} className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        backdropFilter: 'blur(15px)',
                                        border: `2px solid rgba(255,215,0,0.3)`,
                                        borderRadius: '20px',
                                        padding: '2.5rem',
                                        textAlign: 'center',
                                        boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
                                            e.currentTarget.style.borderColor = '#FFD700';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                                            e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)';
                                        }}>
                                        {/* Number badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            right: '15px',
                                            background: setup.color,
                                            color: 'white',
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '1.2rem',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                        }}>
                                            {setup.id}
                                        </div>

                                        {/* Icon */}
                                        <div className="mb-3">
                                            <i className={setup.icon} style={{
                                                fontSize: '3.5rem',
                                                color: setup.color,
                                                marginBottom: '1rem',
                                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                                            }}></i>
                                        </div>

                                        {/* Title */}
                                        <h3 className="h5 fw-bold mb-2" style={{
                                            color: '#FFFFFF',
                                            fontSize: '1.3rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                            lineHeight: '1.4',
                                            textTransform: 'capitalize'
                                        }}>
                                            {setup.title}
                                        </h3>

                                        {/* Decorative line */}
                                        <div style={{
                                            width: '50px',
                                            height: '3px',
                                            background: setup.color,
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

export default TrainingSetupsSection;
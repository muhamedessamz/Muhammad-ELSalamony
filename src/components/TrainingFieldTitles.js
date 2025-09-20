import React from 'react';

const TrainingFieldTitles = () => {
    return (
        <section id="training-field-titles" className="py-5" style={{
            background: 'linear-gradient(90deg, #0b1a61 0%, #1f2a89 50%, #d89a2d 100%)',
            color: '#FFFFFF',
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
                background: 'linear-gradient(45deg, rgba(255,215,0,0.2), rgba(255,215,0,0.1))',
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08))',
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(15px)',
                            border: '2px solid rgba(255,215,0,0.4)',
                            borderRadius: '25px',
                            padding: '3rem',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                            textAlign: 'center'
                        }}>
                            <h2 className="h2 fw-bold mb-5" style={{
                                color: '#2c3e50',
                                fontSize: '2.2rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                borderBottom: '4px solid #FFD700',
                                paddingBottom: '15px',
                                marginBottom: '3rem'
                            }}>
                                Titles I had in The Training Field
                            </h2>

                            <div className="row g-4">
                                {/* Trainer/Instructor */}
                                <div className="col-md-6">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #0b1a61 0%, #1f2a89 100%)',
                                        borderRadius: '20px',
                                        padding: '2.5rem',
                                        color: 'white',
                                        boxShadow: '0 15px 30px rgba(11,26,97,0.3)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(11,26,97,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(11,26,97,0.3)';
                                        }}>
                                        <div className="mb-3">
                                            <i className="bi bi-mortarboard-fill" style={{
                                                fontSize: '3.5rem',
                                                color: '#d89a2d',
                                                marginBottom: '1rem'
                                            }}></i>
                                        </div>
                                        <h3 className="h4 fw-bold mb-3" style={{
                                            color: '#FFFFFF',
                                            fontSize: '1.5rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                                        }}>Trainer/Instructor</h3>
                                        <p className="mb-0" style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
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
                                        background: 'linear-gradient(135deg, #d89a2d 0%, #b8841f 100%)',
                                        borderRadius: '20px',
                                        padding: '2.5rem',
                                        color: 'white',
                                        boxShadow: '0 15px 30px rgba(216,154,45,0.3)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(216,154,45,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(216,154,45,0.3)';
                                        }}>
                                        <div className="mb-3">
                                            <i className="bi bi-person-badge-fill" style={{
                                                fontSize: '3.5rem',
                                                color: '#1f2a89',
                                                marginBottom: '1rem'
                                            }}></i>
                                        </div>
                                        <h3 className="h4 fw-bold mb-3" style={{
                                            color: '#FFFFFF',
                                            fontSize: '1.5rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                                        }}>Coach/Consultant</h3>
                                        <p className="mb-0" style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
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
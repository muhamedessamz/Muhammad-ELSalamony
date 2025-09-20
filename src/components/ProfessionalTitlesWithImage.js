import React from 'react';

const ProfessionalTitlesWithImage = () => {
    return (
        <section id="professional-titles-with-image" className="py-5" style={{
            background: 'linear-gradient(135deg, #0b1a61 0%, #1f2a89 25%, #d89a2d 100%)',
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
                background: 'linear-gradient(45deg, rgba(255,215,0,0.2), rgba(255,215,0,0.1))',
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '25%',
                left: '-8%',
                width: '300px',
                height: '300px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08))',
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
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                            background: 'rgba(255, 215, 0, 0.15)',
                            backdropFilter: 'blur(15px)',
                            border: '2px solid rgba(255, 215, 0, 0.3)',
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
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '2px solid rgba(255, 215, 0, 0.4)',
                            borderRadius: '20px',
                            padding: '2.5rem',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                        }}>
                            <h2 className="h3 fw-bold mb-4" style={{
                                color: '#2c3e50',
                                fontSize: '2.2rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                marginBottom: '2rem',
                                borderBottom: '3px solid #FFD700',
                                paddingBottom: '15px',
                                display: 'inline-block',
                                width: '100%'
                            }}>
                                Professional Titles I Had
                            </h2>
                            <div className="titles-list" style={{ lineHeight: '1.8' }}>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3" style={{
                                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <i className="bi bi-check" style={{ color: 'white', fontSize: '1.1rem' }}></i>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.1rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                                        }}>Senior Credit Analyst</h3>
                                        <p className="mb-0" style={{
                                            color: '#5a6c7d',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}>Analyzing financial statements and creditworthiness of corporate clients</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3" style={{
                                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <i className="bi bi-check" style={{ color: 'white', fontSize: '1.1rem' }}></i>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.1rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                                        }}>Branch Manager</h3>
                                        <p className="mb-0" style={{
                                            color: '#5a6c7d',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}>Leading branch operations and managing a team of banking professionals</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3" style={{
                                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <i className="bi bi-check" style={{ color: 'white', fontSize: '1.1rem' }}></i>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.1rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                                        }}>Relationship Manager</h3>
                                        <p className="mb-0" style={{
                                            color: '#5a6c7d',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}>Building and maintaining relationships with high-net-worth clients</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="me-3" style={{
                                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <i className="bi bi-check" style={{ color: 'white', fontSize: '1.1rem' }}></i>
                                    </div>
                                    <div>
                                        <h3 className="h6 fw-bold mb-2" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.1rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                                        }}>Corporate Banking Specialist</h3>
                                        <p className="mb-0" style={{
                                            color: '#5a6c7d',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}>Structuring complex financial solutions for corporate clients</p>
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
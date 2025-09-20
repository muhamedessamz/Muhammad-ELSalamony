import React from 'react';

const Credentials = () => {
    const credentials = [
        {
            id: 1,
            title: 'Training of Trainers (TOT) Professional Certificate',
            institution: 'Arab Academy for Science, Technology & Maritime Transport',
            icon: 'bi-award',
            color: '#3498db'
        },
        {
            id: 2,
            title: 'Instructional design certification diploma',
            institution: 'EYouth',
            icon: 'bi-mortarboard',
            color: '#e74c3c'
        },
        {
            id: 3,
            title: 'Emotional Intelligence at Workplace',
            institution: 'Proactive Development Solutions',
            icon: 'bi-brain',
            color: '#28a745'
        }
    ];

    return (
        <section id="credentials" className="py-4" style={{
            background: 'linear-gradient(315deg, #0b1a61 0%, #1f2a89 35%, #d89a2d 100%)',
            color: '#FFFFFF',
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
                background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.08))',
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '-6%',
                width: '300px',
                height: '300px',
                background: 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))',
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-4">
                            <h2 className="h2 fw-bold mb-4" style={{
                                color: '#FFFFFF',
                                fontSize: '2rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                borderBottom: '4px solid #FFD700',
                                paddingBottom: '15px',
                                display: 'inline-block'
                            }}>
                                Part Of My Credentials
                            </h2>
                        </div>

                        <div className="row g-4">
                            {credentials.map((credential, index) => (
                                <div key={credential.id} className="col-md-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(15px)',
                                        border: `2px solid ${credential.color}30`,
                                        borderRadius: '20px',
                                        padding: '2.5rem',
                                        textAlign: 'center',
                                        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                                            e.currentTarget.style.borderColor = credential.color;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                                            e.currentTarget.style.borderColor = `${credential.color}30`;
                                        }}>

                                        {/* Number badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            right: '15px',
                                            background: credential.color,
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
                                            {credential.id}
                                        </div>

                                        {/* Icon */}
                                        <div className="mb-4">
                                            <i className={credential.icon} style={{
                                                fontSize: '3.5rem',
                                                color: credential.color,
                                                marginBottom: '1rem',
                                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                                            }}></i>
                                        </div>

                                        {/* Title */}
                                        <h3 className="h5 fw-bold mb-3" style={{
                                            color: '#2c3e50',
                                            fontSize: '1.2rem',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                                            lineHeight: '1.4'
                                        }}>
                                            {credential.title}
                                        </h3>

                                        {/* Institution */}
                                        <p className="mb-3" style={{
                                            color: '#5a6c7d',
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            fontWeight: '500'
                                        }}>
                                            {credential.institution}
                                        </p>

                                        {/* Decorative line */}
                                        <div style={{
                                            width: '50px',
                                            height: '3px',
                                            background: credential.color,
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
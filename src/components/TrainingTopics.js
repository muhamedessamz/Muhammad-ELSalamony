import React from 'react';
import { FaPalette, FaRocket, FaTachometerAlt, FaDollarSign, FaCode, FaHandsHelping } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';
import ColorPalette from './ColorPalette';

const TrainingTopics = () => {
    const trainingTopics = [
        {
            id: 1,
            category: 'PERSONAL BRANDING',
            icon: <FaPalette />,
            topics: [
                'Self-Marketing & Personal Branding',
                'Personal branding inside workplace'
            ]
        },
        {
            id: 2,
            category: 'CAREER DEVELOPMENT',
            icon: <FaRocket />,
            topics: [
                'Career Planning',
                'Resume Branding',
                'Interview Skills',
                'Job Hunting'
            ]
        },
        {
            id: 3,
            category: 'PRODUCTIVITY TOPIC',
            icon: <FaTachometerAlt />,
            topics: [
                'Time Management and increase productivity',
                'Google tools and Gmail tips and tricks'
            ]
        },
        {
            id: 4,
            category: 'BANKING AND PERSONAL FINANCE',
            icon: <FaDollarSign />,
            topics: [
                'Personal Financial Planning',
                'Banking for Non Bankers',
                'Empowering Financial inclusion',
                'Customer Rights in the Banking Industry'
            ]
        },
        {
            id: 5,
            category: 'CAREER DEVELOPMENT',
            icon: <FaCode />,
            topics: [
                'Freelancing Skills',
                'Portfolio Building'
            ]
        },
        {
            id: 6,
            category: 'VOLUNTARY SKILLS',
            icon: <FaHandsHelping />,
            topics: [
                'How to Inbound your charity organization?',
                'How to be a super volunteer?'
            ]
        }
    ];

    return (
        <section id="training-topics" className="py-5" style={{
            background: `linear-gradient(225deg, ${ColorPalette.primaryBlue} 0%, ${ColorPalette.secondaryBlue} 45%, ${ColorPalette.accentBeige} 100%)`,
            color: ColorPalette.lightText,
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}1a, ${ColorPalette.accentBeige}0d)`,
                borderRadius: '50%',
                filter: 'blur(3px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '-7%',
                width: '400px',
                height: '400px',
                background: `linear-gradient(45deg, ${ColorPalette.accentBeige}14, ${ColorPalette.accentBeige}08)`,
                borderRadius: '50%',
                filter: 'blur(4px)'
            }}></div>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-5">
                            <h2 className="h2 fw-bold mb-4" style={{
                                color: ColorPalette.accentBeige,
                                fontSize: '2.2rem',
                                textShadow: `2px 2px 4px ${ColorPalette.blueShadow}`,
                                borderBottom: `4px solid ${ColorPalette.accentBeige}`,
                                paddingBottom: '15px',
                                display: 'inline-block'
                            }}>
                                Training Topics Include
                            </h2>
                        </div>

                        <div className="row g-4">
                            {trainingTopics.map((topic, index) => (
                                <div key={topic.id} className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(15px)',
                                        border: '2px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        textAlign: 'left',
                                        boxShadow: `0 15px 30px ${ColorPalette.blueShadow}`,
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `0 25px 50px ${ColorPalette.blueShadow}`;
                                            e.currentTarget.style.border = `2px solid ${ColorPalette.accentBeige}`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `0 15px 30px ${ColorPalette.blueShadow}`;
                                            e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.1)';
                                        }}>

                                        {/* Icon */}
                                        <div className="d-flex align-items-center mb-3">
                                            <div style={{
                                                background: ColorPalette.beigeGradient,
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '15px',
                                                boxShadow: `0 4px 15px ${ColorPalette.blueShadow}`
                                            }}>
                                                <div style={{
                                                    fontSize: '1.5rem',
                                                    color: ColorPalette.primaryBlue
                                                }}>
                                                    {topic.icon}
                                                </div>
                                            </div>

                                            {/* Category Title */}
                                            <h3 className="h6 fw-bold mb-0" style={{
                                                color: ColorPalette.accentBeige,
                                                fontSize: '1.1rem',
                                                textShadow: `1px 1px 2px ${ColorPalette.blueShadow}`,
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase'
                                            }}>
                                                {topic.category}
                                            </h3>
                                        </div>

                                        {/* Topics List */}
                                        <div className="topics-list">
                                            {topic.topics.map((topicItem, topicIndex) => (
                                                <div key={topicIndex} className="d-flex align-items-start mb-2" style={{
                                                    paddingLeft: '10px'
                                                }}>
                                                    <div style={{
                                                        color: ColorPalette.accentBeige,
                                                        fontSize: '1rem',
                                                        marginTop: '4px',
                                                        marginRight: '12px',
                                                        flexShrink: 0
                                                    }}>
                                                        <IoCheckmarkCircle />
                                                    </div>
                                                    <p style={{
                                                        color: ColorPalette.lightText,
                                                        fontSize: '0.95rem',
                                                        lineHeight: '1.5',
                                                        margin: '0',
                                                        fontWeight: '400'
                                                    }}>
                                                        {topicItem}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Decorative line */}
                                        <div style={{
                                            width: '50px',
                                            height: '3px',
                                            background: ColorPalette.beigeGradient,
                                            marginTop: '1.5rem',
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

export default TrainingTopics;
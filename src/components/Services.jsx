import React, { useState } from 'react'
import './Services.css'
import servicesTeam from '../assets/services-team.png'

const servicesData = [
    {
        id: 'overview',
        title: 'OVERVIEW',
        header: 'Services Overview',
        description: 'Our treatments always utilize a patient-focused approach to develop the most effective and least disruptive option for each individual.'
    },
    {
        id: 'allergy-testing',
        title: 'ALLERGY TESTING',
        header: 'Expert Allergy Testing',
        description: 'We offer comprehensive testing for food, environmental, and drug allergies using state-of-the-art methodology.'
    },
    {
        id: 'allergy-treatment',
        title: 'ALLERGY TREATMENT',
        header: 'Advanced Treatments',
        description: 'From immunotherapy to biologics, our physicians provide the latest evidence-based treatments for all allergic conditions.'
    },
    {
        id: 'other-services',
        title: 'OTHER SERVICES',
        header: 'Comprehensive Care',
        description: 'We also specialize in asthma management, sinus issues, and other related immunology services to ensure your total well-being.'
    }
]

function Services() {
    const [activeService, setActiveService] = useState(servicesData[0])

    return (
        <section className="services-section">
            <div className="container services-grid">
                {/* Left Content */}
                <div className="services-content-left">
                    <h2 className="services-title">Our Services</h2>
                    <p className="services-intro">
                        Everyone's experience with allergies and asthma is unique. That's why we offer a variety of different services to help each of our patients live more fulfilling lives.
                    </p>
                    <div className="services-menu">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                className={`service-link ${activeService.id === service.id ? 'active' : ''}`}
                                onClick={() => setActiveService(service)}
                            >
                                {activeService.id === service.id && (
                                    <svg className="wave-icon" width="40" height="8" viewBox="0 0 40 8">
                                        <path d="M0 4 Q10 0, 20 4 T40 4" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                )}
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Featured Image */}
                <div className="services-featured-right">
                    <div className="curved-image-container">
                        <div className="curved-wrapper">
                            <img src={servicesTeam} alt="Medical Team" className="featured-img" />
                            <div className="image-overlay">
                                <h3 className="overlay-header">{activeService.header}</h3>
                                <p className="overlay-text">{activeService.description}</p>
                                <button className="learn-more-btn">
                                    LEARN MORE <span className="arrow">▶</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services

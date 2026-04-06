import React from 'react'
import './WhyUs.css'

const reasons = [
    {
        id: 1,
        title: 'PIONEERS IN ALLERGY AND ASTHMA TREATMENT',
        description: 'We created breakthrough desensitization treatments for multiple nuts, shellfish, and other foods.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5cb85c" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="5" />
            </svg>
        )
    },
    {
        id: 2,
        title: 'PRACTICAL, COMMON-SENSE APPROACHES',
        description: 'We know patients want to live full lives, so we emphasize practical solutions.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4dc2cc" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    },
    {
        id: 3,
        title: 'PERSONALIZED TREATMENTS, ALWAYS',
        description: 'We believe every patient deserves a fully customized treatment plan for their needs.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0ad4e" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        )
    },
    {
        id: 4,
        title: 'DIVERSE EXPERTS, DIVERSE TEAM',
        description: 'We pride ourselves on bringing a diverse perspective to patient needs.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9534f" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    }
]

function WhyUs() {
    return (
        <section className="why-us-section">
            <div className="container why-inner">
                <div className="why-left">
                    <div className="title-wrapper">
                        <svg className="accent-wave" width="60" height="12" viewBox="0 0 60 12">
                            <path d="M0 6 Q15 0, 30 6 T60 6" fill="none" stroke="#1a5f7a" strokeWidth="2" />
                        </svg>
                        <h2 className="why-title">Why Columbia Allergy and Asthma clinic?</h2>
                    </div>
                    <p className="why-desc">
                        Patients choose Columbia Allergy for our clinical and scientific approach combined with our commitment to meet their individual needs.
                    </p>
                </div>
                <div className="why-right">
                    <div className="reasons-list">
                        {reasons.map(reason => (
                            <div key={reason.id} className="reason-item">
                                <div className="reason-icon">{reason.icon}</div>
                                <div className="reason-text">
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs

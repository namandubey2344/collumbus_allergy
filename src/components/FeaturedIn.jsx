import React from 'react'
import './FeaturedIn.css'

const logos = [
    { id: 1, name: 'Bustle', type: 'text' },
    { id: 2, name: 'MSN', type: 'text' },
    { id: 3, name: 'Lifestyle', type: 'text' },
    { id: 4, name: 'Living', type: 'text' },
    { id: 5, name: 'KPVI', type: 'text' }
]

function FeaturedIn() {
    return (
        <section className="featured-in-section">
            <div className="container">
                <h2 className="featured-title">Columbia Allergy Featured in</h2>
                <div className="logos-grid">
                    {logos.map(logo => (
                        <div key={logo.id} className="logo-item">
                            <span className="logo-text">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedIn

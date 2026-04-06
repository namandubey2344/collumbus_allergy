import React, { useState } from 'react'
import './Conditions.css'

// Importing images (assuming they are in src/assets)
import anaphylaxisImg from '../assets/anaphylaxis.png'
import foodAllergyImg from '../assets/food-allergy.png'
import dustAllergyImg from '../assets/dust-allergy.png'
import seasonalAllergyImg from '../assets/seasonal-allergy.png'

const categories = ['ALLERGIES', 'ASTHMA', 'OTHER / GI', 'RASHES']

const conditionsData = [
    { id: 1, name: 'Anaphylaxis', category: 'ALLERGIES', image: anaphylaxisImg },
    { id: 2, name: 'Dust Allergies', category: 'ALLERGIES', image: dustAllergyImg },
    { id: 3, name: 'Food Allergies', category: 'ALLERGIES', image: foodAllergyImg },
    { id: 4, name: 'Seasonal Allergies', category: 'ALLERGIES', image: seasonalAllergyImg },
    { id: 5, name: 'Eye Allergies', category: 'ALLERGIES', image: dustAllergyImg },
    { id: 6, name: 'Latex Allergies', category: 'ALLERGIES', image: anaphylaxisImg },
    { id: 7, name: 'Medication Allergies', category: 'ALLERGIES', image: foodAllergyImg },
    { id: 8, name: 'Mold Allergies', category: 'ALLERGIES', image: dustAllergyImg },
    { id: 9, name: 'Pet Allergies', category: 'ALLERGIES', image: seasonalAllergyImg },
]

function Conditions() {
    const [activeCategory, setActiveCategory] = useState('ALLERGIES')

    const filteredConditions = conditionsData.filter(c => c.category === activeCategory)

    return (
        <section className="conditions-section">
            <div className="container">
                <div className="conditions-header">
                    <h2 className="conditions-title">Conditions We Treat</h2>
                    <p className="conditions-description">
                        We treat a wide variety of allergy and asthma-related conditions, including food allergy, seasonal allergy, hives, eczema, and more.
                    </p>
                </div>

                <div className="conditions-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {activeCategory === cat && (
                                <svg className="tab-wave" width="40" height="8" viewBox="0 0 40 8">
                                    <path d="M0 4 Q10 0, 20 4 T40 4" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            )}
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="conditions-grid">
                    {filteredConditions.map(condition => (
                        <div key={condition.id} className="condition-card">
                            <div className="card-image-wrapper">
                                <img src={condition.image} alt={condition.name} className="condition-img" />
                                <div className="card-wave-overlay">
                                    <span className="condition-name">{condition.name} <span className="arrow">▶</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="conditions-footer">
                    <button className="see-all-btn">SEE ALL</button>
                </div>
            </div>
        </section>
    )
}

export default Conditions

import React, { useState } from 'react'

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
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-4xl text-[#1a5f7a] mb-5 font-bold">Conditions We Treat</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We treat a wide variety of allergy and asthma-related conditions, including food allergy, seasonal allergy, hives, eczema, and more.
                    </p>
                </div>

                <div className="flex justify-center flex-wrap md:flex-nowrap gap-5 md:gap-10 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`bg-transparent border-none text-xl font-medium cursor-pointer uppercase tracking-wide flex items-center gap-2 transition-all duration-300 relative pb-1 hover:text-[#3f7b9c] ${activeCategory === cat ? 'text-[#4dc2cc] font-bold' : 'text-gray-500'}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {activeCategory === cat && (
                                <svg className="text-[#4dc2cc]" width="40" height="8" viewBox="0 0 40 8">
                                    <path d="M0 4 Q10 0, 20 4 T40 4" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            )}
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {filteredConditions.map(condition => (
                        <div key={condition.id} className="relative rounded-xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 group">
                            <div className="relative h-64">
                                <img src={condition.image} alt={condition.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute bottom-0 left-0 w-full pt-16 pb-5 px-5 bg-gradient-to-t from-[rgba(77,194,204,0.95)] to-[rgba(77,194,204,0)] [clip-path:ellipse(100%_100%_at_50%_100%)] text-left flex items-end">
                                    <span className="text-white text-xl font-semibold relative z-10 flex items-center justify-between w-full">{condition.name} <span className="text-sm ml-1">▶</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <button className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white border-none py-3 px-8 text-base font-bold rounded cursor-pointer transition-colors duration-300">SEE ALL</button>
                </div>
            </div>
        </section>
    )
}

export default Conditions

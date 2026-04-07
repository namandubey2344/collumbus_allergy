import React, { useState } from 'react'
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
        <section className="relative py-[100px] bg-white overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] items-center">
                {/* Left Content */}
                <div className="lg:pr-5">
                    <h2 className="text-[3rem] text-[#1a5f7a] mb-[25px] font-bold">Our Services</h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#555] mb-[40px]">
                        Everyone's experience with allergies and asthma is unique. That's why we offer a variety of different services to help each of our patients live more fulfilling lives.
                    </p>
                    <div className="flex flex-col gap-[15px] items-start">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                className={`bg-transparent border-none text-[1.2rem] font-semibold cursor-pointer py-1.5 transition-all duration-300 uppercase tracking-[1px] flex items-center gap-[15px] hover:text-[#3f7b9c] ${activeService.id === service.id ? 'text-[#4dc2cc]' : 'text-[#888]'}`}
                                onClick={() => setActiveService(service)}
                            >
                                {activeService.id === service.id && (
                                    <svg className="text-[#4dc2cc] animate-[wavePulse_2s_infinite_ease-in-out]" width="40" height="8" viewBox="0 0 40 8">
                                        <path d="M0 4 Q10 0, 20 4 T40 4" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                )}
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Featured Image */}
                <div className="relative lg:perspective-[1500px]">
                    <div className="relative lg:-rotate-y-10 lg:-skew-y-2 transition-transform duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hover:-rotate-y-5 lg:hover:-skew-y-1 group">
                        <div className="relative rounded-[40px] overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.15)] bg-[#f0f4f8]">
                            <img src={servicesTeam} alt="Medical Team" className="w-full h-[600px] object-cover block transition-transform duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-[40px] bg-gradient-to-t from-[rgba(26,95,122,0.9)] to-transparent text-white flex flex-col gap-[15px] items-start">
                                <h3 className="text-[2.2rem] font-bold m-0 leading-tight">{activeService.header}</h3>
                                <p className="text-[1rem] leading-[1.5] max-w-[400px] m-0 opacity-90">{activeService.description}</p>
                                <button className="bg-transparent border-2 border-white text-white py-3 px-[25px] text-[1rem] font-semibold cursor-pointer transition-all duration-300 mt-[10px] hover:bg-white hover:text-[#1a5f7a] group">
                                    LEARN MORE <span className="ml-2 text-[0.8rem]">▶</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Adding the custom keyframes inline or we can rely on Tailwind arbitrary variants, let's use global standard or rely on it failing gracefully if wavePulse is missing. 
            Tailwind supports arbitrary keyframes if written in css, but since we are removing css, we should add it either in index.css later or just ignore the custom animation. 
            Wait, I can use animate-pulse for now to avoid breaking it or use a style tag. 
            I'll use `animate-pulse` or just stick with the arbitrary class and if it needs animation I can add a `<style>` block. */}
            <style jsx>{`
                @keyframes wavePulse {
                    0% { transform: scaleX(0.9); opacity: 0.8; }
                    50% { transform: scaleX(1.1); opacity: 1; }
                    100% { transform: scaleX(0.9); opacity: 0.8; }
                }
            `}</style>
        </section>
    )
}

export default Services

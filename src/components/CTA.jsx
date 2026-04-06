import React, { useState } from 'react'
import './CTA.css'

const testimonials = [
    {
        id: 1,
        author: 'GRACIELA R.',
        text: '"Dr. Jain and Melissa Hutton PA-C are the best allergy providers I have ever had the pleasure of meeting. The entire staff is kind and helpful. My allergy care is comprehensive and I never feel rushed through an appointment."'
    },
    {
        id: 2,
        author: 'MIKE',
        text: '"Best decision we have made in my son\'s life so far!"'
    },
    {
        id: 3,
        author: 'SARAH L.',
        text: '"The care and attention given to my family was exceptional. We finally have a plan that works for our allergies."'
    }
]

function CTA() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="cta-section">
            <div className="container">
                {/* Main CTA Content */}
                <div className="cta-content">
                    <h2 className="cta-heading">Do You Suffer From Allergies and Asthma?</h2>
                    <p className="cta-subheading">Don't let allergies run your life. Talk to a Columbia Allergy clinic today to find relief.</p>

                    <button className="book-btn">
                        <span className="btn-arrow">❯</span> BOOK AN APPOINTMENT
                    </button>

                    <a href="#referral" className="referral-link">Click here to make a professional referral</a>
                </div>

                {/* Testimonials Slider */}
                <div className="testimonials-section">
                    <div className="testimonials-divider"></div>
                    <div className="slider-container">
                        <button className="nav-btn prev" onClick={prevTestimonial}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <div className="testimonial-display">
                            <div className="author-side">
                                <span className="author-name">{testimonials[currentIndex].author}</span>
                            </div>
                            <div className="text-side">
                                <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                            </div>
                        </div>

                        <button className="nav-btn next" onClick={nextTestimonial}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA

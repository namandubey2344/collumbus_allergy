import React, { useState } from 'react'

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
        <section className="pt-[100px] pb-[80px] bg-[#5cb85c] text-white text-center relative">
            <div className="container mx-auto px-4">
                {/* Main CTA Content */}
                <div className="mb-[100px]">
                    <h2 className="text-[2rem] md:text-[2.8rem] font-bold mb-[15px] tracking-[-0.5px]">Do You Suffer From Allergies and Asthma?</h2>
                    <p className="text-[1.2rem] opacity-95 mb-[45px] font-normal">Don't let allergies run your life. Talk to a Columbia Allergy clinic today to find relief.</p>

                    <button className="bg-white text-[#5cb85c] border-none py-5 px-[45px] text-xl font-bold cursor-pointer rounded inline-flex items-center gap-[15px] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)] uppercase hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:bg-[#f8f9fa] group">
                        <span className="text-[1.1rem] transition-transform duration-300 group-hover:translate-x-[5px]">❯</span> BOOK AN APPOINTMENT
                    </button>

                    <a href="#referral" className="block mt-[30px] text-[#ffeb3b] text-base underline font-semibold transition-opacity duration-300 hover:opacity-85">Click here to make a professional referral</a>
                </div>

                {/* Testimonials Slider */}
                <div className="max-w-[1000px] mx-auto">
                    <div className="w-full h-px bg-[rgba(255,255,255,0.3)] mb-10"></div>
                    <div className="flex items-center justify-between gap-[15px] md:gap-10">
                        <button className="bg-transparent border-none text-white cursor-pointer p-[10px] rounded-full transition-all duration-300 flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-[rgba(255,255,255,0.15)]" onClick={prevTestimonial}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <div className="flex flex-col md:flex-row flex-1 text-center md:text-left items-center md:items-start gap-[15px] md:gap-10 min-h-[120px]">
                            <div className="shrink-0 md:self-center">
                                <span className="text-[0.9rem] font-bold tracking-[1.5px] block mt-[5px]">{testimonials[currentIndex].author}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-[1.1rem] leading-[1.6] italic font-light m-0">{testimonials[currentIndex].text}</p>
                            </div>
                        </div>

                        <button className="bg-transparent border-none text-white cursor-pointer p-[10px] rounded-full transition-all duration-300 flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-[rgba(255,255,255,0.15)]" onClick={nextTestimonial}>
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

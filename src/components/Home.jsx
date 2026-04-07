import React, { useState, useEffect } from 'react'
import Features from './Features'
import Services from './Services'
import Conditions from './Conditions'
import WhyUs from './WhyUs'
import VideoFeature from './VideoFeature'
import CTA from './CTA'
import FeaturedIn from './FeaturedIn'
import Footer from './Footer'
import heroBg from '../assets/hero-pioneers.png'
import doctorImg from '../assets/doctor.png'
import doctorImg2 from '../assets/doctor1.png'
import doctorImg3 from '../assets/doctor2.png'
import doctorImg4 from '../assets/doctor3.jpg'
import doctorImg5 from '../assets/doctor4.png'
import logo from '../assets/logo.svg'


const heroSlides = [
    {
        id: 1,
        highlight: "Pioneers",
        titleMain: "in\nFood Allergy\nTreatment.",
        description: "We were the earliest pioneers of food allergy desensitization treatment for multiple nuts, shellfish, and other foods, and we continue to break new ground today.",
        btnText: "LEARN MORE about our treatments...",
        gradient: "from-[rgba(0,80,150,0.85)] via-[rgba(0,60,120,0.7)] to-[rgba(0,40,80,0.9)]",
        image: doctorImg
    },
    {
        id: 2,
        highlight: "Advanced",
        titleMain: "Asthma\nCare &\nManagement.",
        description: "Our comprehensive asthma treatment protocols are designed to help you and your family breathe easier, focusing on long-term respiratory health and crisis prevention.",
        btnText: "DISCOVER our specialized asthma programs...",
        gradient: "from-[rgba(141,198,63,0.85)] via-[rgba(100,150,40,0.7)] to-[rgba(50,80,20,0.9)]",
        image: doctorImg2
    },
    {
        id: 3,
        highlight: "Personalized",
        titleMain: "Treatment\nPlans for\nEveryone.",
        description: "No two patients are alike. We develop highly customized sublingual and oral immunotherapy plans tailored specifically to your unique immune profile and lifestyle.",
        btnText: "EXPLORE personalized treatment options...",
        gradient: "from-[rgba(0,80,150,0.85)] via-[rgba(0,60,120,0.7)] to-[rgba(0,40,80,0.9)]",
        image: doctorImg3
    },
    {
        id: 4,
        highlight: "Expert",
        titleMain: "Pediatric\nAllergy\nSpecialists.",
        description: "We provide compassionate, state-of-the-art care for children suffering from severe allergies, helping them live normal, restriction-free lives through proven therapies.",
        btnText: "MEET our pediatric care specialists...",
        gradient: "from-[rgba(141,198,63,0.85)] via-[rgba(100,150,40,0.7)] to-[rgba(50,80,20,0.9)]",
        image: doctorImg4
    },
    {
        id: 5,
        highlight: "Trusted",
        titleMain: "by Families\nAcross the\nNation.",
        description: "With clinics located throughout the West Coast and beyond, our world-class allergy experts are ready to provide the relief and cutting-edge care you deserve.",
        btnText: "FIND a clinic near you today...",
        gradient: "from-[rgba(0,80,150,0.85)] via-[rgba(0,60,120,0.7)] to-[rgba(0,40,80,0.9)]",
        image: doctorImg5
    }
];

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-['Inter',sans-serif]">
            {/* Header Section */}
            <header className="bg-white sticky top-0 z-[1000] shadow-md">
                <div className="bg-[#1a5f7a] text-white text-[11px] font-semibold py-2.5">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-center md:text-left">
                            <span>Cutting Edge Personalized Medicine for Asthma & Allergies</span>
                            <div className="flex flex-wrap justify-center gap-3 md:gap-5 items-center mt-1 md:mt-0">
                                <a href="#stories" className="hidden lg:block opacity-80 hover:opacity-100 hover:text-[#8dc63f] transition-all">Patient Stories</a>
                                <a href="#providers" className="hidden lg:block opacity-80 hover:opacity-100 hover:text-[#8dc63f] transition-all">For Providers</a>
                                <a href="#portal" className="hidden sm:block opacity-80 hover:opacity-100 hover:text-[#8dc63f] transition-all">Patient Portal</a>
                                <a href="#pay" className="hidden sm:block opacity-80 hover:opacity-100 hover:text-[#8dc63f] transition-all">Pay Online</a>
                                <a href="#appointments" className="bg-[#8dc63f] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-md font-bold hover:bg-[#7ab033] transition-colors shadow-md ml-0 md:ml-2 drop-shadow">Appointments</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="bg-white py-4 md:py-5 relative">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-[10px]">
                                <div className="text-xl md:text-2xl font-black border-[3px] border-[#8dc63f] text-[#8dc63f] w-[40px] h-8 md:w-[50px] md:h-10 flex items-center justify-center rounded">CA</div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[16px] md:text-[18px] font-extrabold tracking-[1px] text-[#1a5f7a]">COLUMBIA</span>
                                    <span className="text-[16px] md:text-[18px] font-extrabold text-[#8dc63f] tracking-[1px]">ALLERGY</span>
                                </div>
                            </div>
                            <div className="hidden lg:flex gap-[30px] items-center">
                                <a href="#about" className="text-[13px] font-bold tracking-[0.5px] flex items-center gap-[5px] text-[#1a5f7a] hover:text-[#8dc63f] transition-all">ABOUT <span className="text-[8px] opacity-70">▼</span></a>
                                <a href="#services" className="text-[13px] font-bold tracking-[0.5px] flex items-center gap-[5px] text-[#1a5f7a] hover:text-[#8dc63f] transition-all">SERVICES <span className="text-[8px] opacity-70">▼</span></a>
                                <a href="#conditions" className="text-[13px] font-bold tracking-[0.5px] flex items-center gap-[5px] text-[#1a5f7a] hover:text-[#8dc63f] transition-all">CONDITIONS <span className="text-[8px] opacity-70">▼</span></a>
                                <a href="#resources" className="text-[13px] font-bold tracking-[0.5px] flex items-center gap-[5px] text-[#1a5f7a] hover:text-[#8dc63f] transition-all">RESOURCES <span className="text-[8px] opacity-70">▼</span></a>
                                <a href="#contact" className="text-[13px] font-bold tracking-[0.5px] flex items-center gap-[5px] text-[#1a5f7a] hover:text-[#8dc63f] transition-all">CONTACT <span className="text-[8px] opacity-70">▼</span></a>
                                <a href="#blog" className="text-[13px] font-bold tracking-[0.5px] flex items-center gap-[5px] text-[#1a5f7a] hover:text-[#8dc63f] transition-all">BLOG</a>
                                <a href="#locations" className="text-[13px] font-bold tracking-[0.5px] flex items-center gap-[5px] text-[#1a5f7a] hover:text-[#8dc63f] transition-all">LOCATIONS <span className="text-[8px] opacity-70">▼</span></a>
                            </div>
                            <button
                                className="lg:hidden text-[#1a5f7a] hover:text-[#8dc63f] focus:outline-none"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden absolute top-[100%] left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 z-[1001] max-h-[80vh] overflow-y-auto">
                            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-[#1a5f7a] border-b border-gray-50 pb-2">ABOUT</a>
                            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-[#1a5f7a] border-b border-gray-50 pb-2">SERVICES</a>
                            <a href="#conditions" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-[#1a5f7a] border-b border-gray-50 pb-2">CONDITIONS</a>
                            <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-[#1a5f7a] border-b border-gray-50 pb-2">RESOURCES</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-[#1a5f7a] border-b border-gray-50 pb-2">CONTACT</a>
                            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-[#1a5f7a] border-b border-gray-50 pb-2">BLOG</a>
                            <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-[#1a5f7a] pb-2">LOCATIONS</a>

                            <div className="h-px bg-gray-200 my-1"></div>

                            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-gray-600 block lg:hidden">Patient Stories</a>
                            <a href="#providers" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-gray-600 block lg:hidden">For Providers</a>
                            <a href="#portal" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-gray-600 block sm:hidden">Patient Portal</a>
                            <a href="#pay" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-gray-600 block sm:hidden">Pay Online</a>
                        </div>
                    )}
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="relative w-full min-h-[650px] lg:min-h-[750px]">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ease-in-out flex items-center pt-[40px] pb-[100px] lg:pt-[60px] ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px] text-center lg:text-left">
                                <div className="shrink-0 lg:basis-[350px] mx-auto lg:mx-0 w-[250px] lg:max-w-[350px] w-full">
                                    <div className={`relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden transition-all duration-1000 transform h-[350px] lg:h-[450px] w-full ${index === currentSlide ? 'translate-y-0 opacity-100 hover:scale-105' : 'translate-y-10 opacity-0'}`}>
                                        <img src={slide.image} alt={`Doctor ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-white">
                                    <h1 className="font-serif text-[48px] lg:text-[82px] font-bold leading-[0.95] mb-[30px] whitespace-pre-wrap drop-shadow-md">
                                        <span className="text-[#8dc63f]">{slide.highlight}</span> {slide.titleMain}
                                    </h1>
                                    <p className="text-[20px] max-w-[600px] leading-[1.4] mb-[30px] lg:mb-[40px] opacity-90 mx-auto lg:mx-0 drop-shadow-sm">
                                        {slide.description}
                                    </p>
                                    <button className="bg-transparent border-[2px] border-white text-white py-[15px] px-[30px] text-[16px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#00559b] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                        {slide.btnText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Dots */}
                    <div className="absolute bottom-10 left-0 right-0 z-20">
                        <div className="container mx-auto px-4 flex justify-center lg:justify-end lg:pr-10">
                            <div className="flex items-center">
                                <div className="flex gap-[12px] bg-[rgba(0,0,0,0.2)] px-4 py-3 rounded-full backdrop-blur-sm">
                                    {heroSlides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border-[1px] border-[rgba(255,255,255,0.3)] ${idx === currentSlide ? 'bg-white scale-125 border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.8)]'}`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <Features />
            <Services />
            <Conditions />
            <WhyUs />
            <VideoFeature />
            <CTA />
            <FeaturedIn />
            <Footer />

            {/* Persistent Floating Elements */}
            <div className="fixed bottom-10 left-4 right-4 md:left-10 md:right-10 flex justify-between items-center pointer-events-none z-[2000]">
                <button className="bg-[#8dc63f] text-white py-2.5 px-5 rounded font-extrabold text-[14px] cursor-pointer pointer-events-auto shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105">Translate »</button>
                <div className="bg-[#00adef] w-[65px] h-[65px] rounded-full flex items-center justify-center cursor-pointer pointer-events-auto shadow-[0_8px_25px_rgba(0,173,239,0.4)] transition-all duration-300 hover:scale-110 hover:bg-[#009ad5]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Home

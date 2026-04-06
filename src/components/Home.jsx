import './Home.css'
import Features from './Features'
import Services from './Services'
import Conditions from './Conditions'
import WhyUs from './WhyUs'
import VideoFeature from './VideoFeature'
import CTA from './CTA'
import FeaturedIn from './FeaturedIn'
import Footer from './Footer'
import bookCover from '../assets/book-cover.png'
import heroBg from '../assets/hero-pioneers.png'

function Home() {
    return (
        <div className="home-container">
            {/* Header Section */}
            <header className="pioneers-header">
                <div className="header-top">
                    <div className="container">
                        <div className="utility-links">
                            <span>Cutting Edge Personalized Medicine for Asthma & Allergies</span>
                            <div className="links">
                                <a href="#stories">Patient Stories</a>
                                <a href="#providers">For Providers</a>
                                <a href="#portal">Patient Portal</a>
                                <a href="#pay">Pay Online</a>
                                <a href="#appointments">Appointments</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="header-main">
                    <div className="container">
                        <div className="nav-wrapper">
                            <div className="logo-section">
                                <div className="logo-icon">CA</div>
                                <div className="logo-text">
                                    <span className="brand">COLUMBIA</span>
                                    <span className="accent">ALLERGY</span>
                                </div>
                            </div>
                            <div className="nav-links">
                                <a href="#about">ABOUT <span className="arrow">▼</span></a>
                                <a href="#services">SERVICES <span className="arrow">▼</span></a>
                                <a href="#conditions">CONDITIONS <span className="arrow">▼</span></a>
                                <a href="#resources">RESOURCES <span className="arrow">▼</span></a>
                                <a href="#contact">CONTACT <span className="arrow">▼</span></a>
                                <a href="#blog">BLOG</a>
                                <a href="#locations">LOCATIONS <span className="arrow">▼</span></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pioneers-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay">
                    <div className="container hero-inner">
                        <div className="hero-left">
                            <div className="book-feature">
                                <img src={bookCover} alt="Treating Food Allergies Book Cover" className="book-img" />
                            </div>
                        </div>
                        <div className="hero-right">
                            <h1 className="hero-title">
                                <span className="highlight">Pioneers</span> in<br />
                                Food Allergy<br />
                                Treatment.
                            </h1>
                            <p className="hero-description">
                                We were the earliest pioneers of food allergy desensitization treatment for multiple nuts, shellfish, and other foods, and we continue to break new ground today.
                            </p>
                            <button className="cta-button">
                                LEARN MORE about our newly published book...
                            </button>
                        </div>
                    </div>
                    <div className="hero-footer">
                        <div className="container flex-footer">
                            <div className="controls">
                                <div className="pagination">
                                    <span className="dot active"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
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
            <div className="fixed-ui-elements">
                <button className="translate-btn-sticky">Translate »</button>
                <div className="chat-bubble-sticky">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Home

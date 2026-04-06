import './Features.css'

function Features() {
    return (
        <section className="features-section">
            <div className="container">
                {/* Search Header */}
                <div className="search-header-box">
                    <h2 className="section-title">How can we help you?</h2>
                    <div className="premium-search-bar">
                        <div className="search-group">
                            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search by Condition, Service or Location" />
                        </div>
                        <button className="search-action-btn">SEARCH</button>
                    </div>
                </div>

                {/* Action Cards */}
                <div className="action-grid">
                    <div className="action-card">
                        <div className="card-top lime"></div>
                        <div className="card-content">
                            <h3>Patient Stories</h3>
                            <p>Hear from individuals who have found relief through our specialized treatments.</p>
                            <a href="#stories" className="read-more">Learn more »</a>
                        </div>
                    </div>
                    <div className="action-card">
                        <div className="card-top blue"></div>
                        <div className="card-content">
                            <h3>Find a Location</h3>
                            <p>Visit one of our many convenient clinics across the West Coast.</p>
                            <a href="#locations" className="read-more">Find us »</a>
                        </div>
                    </div>
                    <div className="action-card">
                        <div className="card-top orange"></div>
                        <div className="card-content">
                            <h3>Book Appointment</h3>
                            <p>Schedule your visit today and take the first step towards better health.</p>
                            <a href="#appointments" className="read-more">Book now »</a>
                        </div>
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="announcements-panel">
                    <div className="panel-header">
                        <h3>ANNOUNCEMENTS</h3>
                    </div>
                    <div className="panel-body">
                        <p>
                            We are committed to providing the highest quality patient care. Please tell us how we are doing:
                            <a href="mailto:feedback@aa-clinic.com" className="contact-link"> feedback@aa-clinic.com</a>. Thank you!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features

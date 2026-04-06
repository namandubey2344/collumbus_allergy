import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="main-footer">
            <div className="container footer-grid">
                {/* Column 1: About */}
                <div className="footer-col col-about">
                    <div className="footer-logo">
                        <div className="logo-icon-small">CA</div>
                        <div className="logo-text-small">
                            <span className="brand-small">COLUMBIA</span>
                            <span className="accent-small">ALLERGY</span>
                        </div>
                    </div>
                    <p className="footer-about-text">
                        Columbia Allergy is a trusted provider of allergy and asthma solutions across the West Coast.
                        Our care is always focused on our patients first and incorporates leading clinical approaches led by a multidisciplinary team.
                    </p>
                    <div className="footer-contact">
                        <svg className="mail-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffeb3b" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <a href="mailto:contact@aa-clinic.com" className="footer-email">contact@aa-clinic.com</a>
                    </div>
                </div>

                {/* Column 2: Careers */}
                <div className="footer-col col-careers">
                    <h3 className="footer-col-title">CAREERS AT COLUMBIA</h3>
                    <div className="divider"></div>
                    <p className="no-posts">No career posts to display.</p>
                </div>

                {/* Column 3: Newsletter */}
                <div className="footer-col col-newsletter">
                    <h3 className="footer-col-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <div className="divider"></div>
                    <form className="newsletter-form">
                        <div className="input-group">
                            <input type="text" placeholder="Name" className="footer-input" />
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="Email" className="footer-input" />
                        </div>
                        <button type="submit" className="subscribe-btn">SUBSCRIBE NOW</button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container bottom-inner">
                    <p className="copyright">Copyright 2026 Columbia Allergy. All Rights Reserved.</p>
                    <a href="#sitemap" className="sitemap-link">Site Map</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import logo from '../assets/logo.svg'
function Footer() {
    return (
        <footer className="bg-[#1a5f7a] text-white pt-20 font-['Inter',sans-serif]">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-[50px] md:gap-[60px] pb-20 text-center md:text-left">
                {/* Column 1: About */}
                <div className="flex flex-col relative md:after:content-[''] md:after:absolute md:after:-right-[30px] md:after:top-0 md:after:bottom-0 md:after:w-px md:after:bg-[rgba(255,255,255,0.1)]">
                    <div className="flex items-center gap-3 mb-[25px] justify-center md:justify-start">
                        <img src={logo} alt="" />
                    </div>
                    <p className="text-[0.95rem] leading-[1.6] opacity-90 mb-[30px]">
                        Columbia Allergy is a trusted provider of allergy and asthma solutions across the West Coast.
                        Our care is always focused on our patients first and incorporates leading clinical approaches led by a multidisciplinary team.
                    </p>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffeb3b" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <a href="mailto:contact@aa-clinic.com" className="text-[#ffeb3b] no-underline font-semibold text-base hover:underline">contact@aa-clinic.com</a>
                    </div>
                </div>

                {/* Column 2: Careers */}
                <div className="flex flex-col relative md:after:content-[''] md:after:absolute md:after:-right-[30px] md:after:top-0 md:after:bottom-0 md:after:w-px md:after:bg-[rgba(255,255,255,0.1)]">
                    <h3 className="text-[1.1rem] font-bold mb-5 tracking-[0.5px] mt-5 md:mt-0">CAREERS AT COLUMBIA</h3>
                    <div className="w-full h-px bg-[rgba(255,255,255,0.2)] mb-[30px] relative"></div>
                    <p className="text-base opacity-70">No career posts to display.</p>
                </div>

                {/* Column 3: Newsletter */}
                <div className="flex flex-col relative">
                    <h3 className="text-[1.1rem] font-bold mb-5 tracking-[0.5px] mt-5 md:mt-0">SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <div className="w-full h-px bg-[rgba(255,255,255,0.2)] mb-[30px] relative"></div>
                    <form className="flex flex-col gap-[15px]">
                        <div>
                            <input type="text" placeholder="Name" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] p-3 text-white text-base rounded outline-none transition-colors duration-300 focus:border-[#4dc2cc] placeholder:text-[rgba(255,255,255,0.6)]" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] p-3 text-white text-base rounded outline-none transition-colors duration-300 focus:border-[#4dc2cc] placeholder:text-[rgba(255,255,255,0.6)]" />
                        </div>
                        <button type="submit" className="bg-[#4dc2cc] text-white border-none p-3 text-base font-bold rounded cursor-pointer transition-all duration-300 mt-[10px] hover:bg-[#3eb1bb] hover:-translate-y-[2px]">SUBSCRIBE NOW</button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.1)] py-[25px]">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-[15px] md:gap-0">
                    <p className="m-0 text-[0.9rem] opacity-70">Copyright 2026 Columbia Allergy. All Rights Reserved.</p>
                    <a href="#sitemap" className="text-[#ffeb3b] no-underline text-[0.9rem] font-semibold hover:underline">Site Map</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

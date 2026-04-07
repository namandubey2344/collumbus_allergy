function Features() {
    return (
        <section className="py-20 bg-[#f9fbfc]">
            <div className="container mx-auto px-4">
                {/* Search Header */}
                <div className="max-w-[900px] mx-auto mb-20">
                    <h2 className="text-center text-3xl font-bold text-[#1a5f7a] mb-8">How can we help you?</h2>
                    <div className="flex bg-white rounded border border-[#eee] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
                        <div className="flex-1 flex items-center px-6 gap-4 text-[#999]">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search by Condition, Service or Location" className="flex-1 border-none outline-none h-[70px] text-base text-[#333] bg-transparent" />
                        </div>
                        <button className="bg-[#facc15] hover:bg-[#eab308] text-[#1a5f7a] font-extrabold text-base px-12 transition-colors duration-300">SEARCH</button>
                    </div>
                </div>

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                        <div className="h-2 bg-[#84cc16]"></div>
                        <div className="p-9">
                            <h3 className="text-2xl mb-4 text-[#333] font-semibold">Patient Stories</h3>
                            <p className="text-[15px] text-[#666] leading-relaxed mb-6">Hear from individuals who have found relief through our specialized treatments.</p>
                            <a href="#stories" className="text-[#84cc16] font-extrabold text-sm">Learn more »</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                        <div className="h-2 bg-[#1a5f7a]"></div>
                        <div className="p-9">
                            <h3 className="text-2xl mb-4 text-[#333] font-semibold">Find a Location</h3>
                            <p className="text-[15px] text-[#666] leading-relaxed mb-6">Visit one of our many convenient clinics across the West Coast.</p>
                            <a href="#locations" className="text-[#1a5f7a] font-extrabold text-sm">Find us »</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                        <div className="h-2 bg-[#f39c12]"></div>
                        <div className="p-9">
                            <h3 className="text-2xl mb-4 text-[#333] font-semibold">Book Appointment</h3>
                            <p className="text-[15px] text-[#666] leading-relaxed mb-6">Schedule your visit today and take the first step towards better health.</p>
                            <a href="#appointments" className="text-[#f39c12] font-extrabold text-sm">Book now »</a>
                        </div>
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="bg-[#fff8e1] border-l-[5px] border-[#facc15] flex flex-col md:flex-row items-stretch rounded overflow-hidden">
                    <div className="bg-[#facc15] py-5 px-10 flex items-center justify-center md:justify-start text-[#1a5f7a] font-extrabold text-sm">
                        <h3>ANNOUNCEMENTS</h3>
                    </div>
                    <div className="py-5 px-10 flex-1">
                        <p className="text-[15px] text-[#555]">
                            We are committed to providing the highest quality patient care. Please tell us how we are doing:
                            <a href="mailto:feedback@aa-clinic.com" className="text-[#1a5f7a] font-bold underline ml-1">feedback@aa-clinic.com</a>. Thank you!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features

import React from 'react'

const logos = [
    { id: 1, name: 'Bustle', type: 'text', className: 'font-serif font-black' },
    { id: 2, name: 'MSN', type: 'text', className: 'text-[#0078d4]' },
    { id: 3, name: 'Lifestyle', type: 'text', className: 'italic text-[#e91e63]' },
    { id: 4, name: 'Living', type: 'text', className: '' },
    { id: 5, name: 'KPVI', type: 'text', className: 'text-[#d32f2f]' }
]

function FeaturedIn() {
    return (
        <section className="py-[60px] bg-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-[1.5rem] text-[#666] mb-10 font-medium">Columbia Allergy Featured in</h2>
                <div className="flex justify-center items-center gap-10 md:gap-20 flex-wrap opacity-70">
                    {logos.map(logo => (
                        <div key={logo.id} className="cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110">
                            <span className={`text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#333] tracking-[-1px] font-['Inter',sans-serif] ${logo.className}`}>{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedIn

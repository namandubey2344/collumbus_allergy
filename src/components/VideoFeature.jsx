import React, { useState } from 'react'
import drJainThumb from '../assets/dr-jain-video.png'

function VideoFeature() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-[80px] bg-[#1a5f7a] text-white">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center text-center lg:text-left">
                <div>
                    {!isPlaying ? (
                        <div 
                            className="relative rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer group aspect-video"
                            onClick={() => setIsPlaying(true)}
                        >
                            <img src={drJainThumb} alt="Dr. Jain on Child Food Allergies" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[rgba(255,0,0,0.9)] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ff0000]">
                                <div>
                                    <svg className="w-[40px] h-[40px] fill-white ml-[5px]" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="relative rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] aspect-video">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/93eCm6JqKl0?autoplay=1" 
                                title="Dr. Jain on Child Food Allergies" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
                <div>
                    <div className="max-w-[500px] mx-auto lg:mx-0">
                        <svg className="mx-auto lg:mx-0 w-[60px] h-[12px]" viewBox="0 0 60 12">
                            <path d="M0 6 Q15 0, 30 6 T60 6" fill="none" stroke="#fff" strokeWidth="2" />
                        </svg>
                        <h2 className="text-[2.5rem] font-bold my-5 leading-[1.2]">Dr. Jain on Child Food Allergies</h2>
                        <p className="text-[1.1rem] leading-[1.6] opacity-90 mb-[30px]">
                            Check out Dr. Jain's interview with Portland Mom's collective about signs and symptoms of food allergies in children, how to test for allergies, and options for treatment.
                        </p>
                        <button className="bg-white text-[#1a5f7a] border-none py-[15px] px-[30px] text-[1rem] font-bold rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-[#4dc2cc] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            WATCH ON YouTube
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoFeature

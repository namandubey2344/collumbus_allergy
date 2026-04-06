import React from 'react'
import './VideoFeature.css'
import drJainThumb from '../assets/dr-jain-video.png'

function VideoFeature() {
    return (
        <section className="video-feature-section">
            <div className="container video-inner">
                <div className="video-left">
                    <div className="video-container">
                        <img src={drJainThumb} alt="Dr. Jain on Child Food Allergies" className="video-thumb" />
                        <div className="play-btn-overlay">
                            <div className="play-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-right">
                    <div className="video-content">
                        <svg className="accent-wave-white" width="60" height="12" viewBox="0 0 60 12">
                            <path d="M0 6 Q15 0, 30 6 T60 6" fill="none" stroke="#fff" strokeWidth="2" />
                        </svg>
                        <h2 className="video-title">Dr. Jain on Child Food Allergies</h2>
                        <p className="video-description">
                            Check out Dr. Jain's interview with Portland Mom's collective about signs and symptoms of food allergies in children, how to test for allergies, and options for treatment.
                        </p>
                        <button className="watch-btn">
                            WATCH ON YouTube
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoFeature

import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <h1 className="hero-title fade-in">
                    A Name, <br />
                    <span className="highlight">Not a Claim</span>
                </h1>

                <div className="hero-content fade-in" style={{ animationDelay: '0.2s' }}>
                    <p className="hero-subtitle">
                        Ettisai (எத்திசை) means <span className="text-white">all directions</span>.
                    </p>

                    <div className="hero-quote">
                        <p className="tamil-text">“எத்திசையும் புகழ்மணக்க இருந்தபெருந் தமிழணங்கே!”</p>
                        <p className="quote-translation">
                            Oh, Goddess Tamil — let your fervour spread in all directions.
                        </p>
                    </div>

                    <div className="hero-description">
                        <p>
                            ETTISAI is named not to advertise scope, but to assert orientation.
                        </p>
                        <p>
                            We look outward without forgetting where we stand.<br />
                            We move globally without diluting identity.<br />
                            We build forward without severing continuity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

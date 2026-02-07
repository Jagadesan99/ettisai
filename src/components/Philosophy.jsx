import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    return (
        <section id="philosophy" className="philosophy-section">
            <div className="container">
                <div className="beliefs-block fade-in-on-scroll">
                    <h2 className="section-title">What We Believe a Company Is</h2>
                    <div className="beliefs-content">
                        <p>
                            We declare that a company is not merely a vehicle for profit, but a <span className="highlight-text">voluntary association of sovereign individuals</span> united by a chosen purpose.
                        </p>
                        <p className="emphasis-text">
                            A company exists to transform intelligence into systems, effort into value, and cooperation into outcomes that no individual could achieve alone.
                        </p>
                        <p>
                            Profit is essential. But profit without meaning is short-lived. The highest aim of enterprise is <span className="highlight-text">human flourishing</span>: of those who build it, of those who rely on it, and of the society that enables it.
                        </p>
                        <div className="callout-box">
                            <p>
                                This belief is not moral ornamentation. It is operational realism. History is clear: organizations that forget the human dimension rot internally long before they fail financially.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="philosophy-block fade-in-on-scroll">
                    <h2 className="section-title">The ETTISAI Philosophy</h2>
                    <p className="philosophy-intro">ETTISAI operates at the intersection of:</p>

                    <ul className="pillars-grid">
                        <li className="pillar-item">
                            <span className="pillar-title">Rational self-interest</span>
                            <span className="pillar-source">(Ayn Rand)</span>
                        </li>
                        <li className="pillar-item">
                            <span className="pillar-title">Unconditioned clarity</span>
                            <span className="pillar-source">(U.G. Krishnamurti)</span>
                        </li>
                        <li className="pillar-item">
                            <span className="pillar-title">Constitutional responsibility</span>
                            <span className="pillar-source">(Article 51A(h), India)</span>
                        </li>
                        <li className="pillar-item">
                            <span className="pillar-title">Scientific temper and skepticism</span>
                        </li>
                        <li className="pillar-item">
                            <span className="pillar-title">Tamil ethical tradition</span>
                            <span className="pillar-source">rooted in reason, restraint, and dignity</span>
                        </li>
                    </ul>

                    <div className="rejection-statement">
                        <p>We reject borrowed dogma—political, ideological, or fashionable. We accept only what survives contact with reality.</p>
                        <div className="core-values">
                            <span>Truth is not negotiated.</span>
                            <span>Competence is not optional.</span>
                            <span>Responsibility is not outsourced.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;

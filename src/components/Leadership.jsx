import React from 'react';
import './Leadership.css';

const Leadership = () => {
    return (
        <section id="leadership" className="leadership-section">
            <div className="container">

                {/* Leadership Standard */}
                <div className="leadership-block fade-in-on-scroll">
                    <h2 className="section-title">Leadership: The Standard We Hold</h2>
                    <p className="intro-text">
                        The greatest founders in history were not defined by charisma, noise, or moral posturing. They shared something rarer: <span className="highlight">intellectual sovereignty</span>.
                    </p>

                    <div className="standard-list">
                        <h3 className="subsection-title">The ETTISAI Standard</h3>
                        <ul className="standard-items">
                            <li>Think independently under uncertainty</li>
                            <li>Act decisively without cruelty</li>
                            <li>Accept dissent without insecurity</li>
                            <li>Take responsibility without theatrics</li>
                            <li>Measure success by durability, not applause</li>
                        </ul>
                    </div>

                    <div className="leadership-philosophy">
                        <p>
                            Leadership here is not about control or benevolence. It is about alignment between truth, action, and consequence.
                        </p>
                        <div className="alignment-box">
                            <span>Authority is earned through clarity.</span>
                            <span>Trust is earned through consistency.</span>
                            <span>Nothing else scales.</span>
                        </div>
                    </div>
                </div>

                {/* Activities / What We Do */}
                <div className="activities-block fade-in-on-scroll">
                    <h2 className="section-title">What We Do — Without Exhibition</h2>
                    <p className="intro-text">
                        ETTISAI is a serial entrepreneurial venture. We enter domains only where intelligence compounds, value is real, and long-term trust can be earned.
                    </p>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <h3>Domains</h3>
                            <ul>
                                <li>Software Systems</li>
                                <li>Exports & Global Trade</li>
                                <li>Financial & Educational Consultation</li>
                                <li>Emerging Sectors</li>
                            </ul>
                        </div>

                        <div className="activity-card">
                            <h3>The Essence</h3>
                            <p>
                                We build systems that are <span className="highlight">logically sound, ethically clean, and structurally durable</span>.
                            </p>
                            <div className="anti-patterns">
                                <span className="strike">We do not chase trends.</span>
                                <span className="strike">We do not sell narratives.</span>
                                <span className="strike">We do not confuse motion with progress.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Leadership;

import React from 'react';
import './Civilization.css';

const Civilization = () => {
    return (
        <section id="civilization" className="civilization-section">
            <div className="container">
                <h2 className="section-title fade-in-on-scroll">Civilizational Confidence, Quietly Held</h2>

                <div className="civilization-grid">
                    <div className="left-column fade-in-on-scroll">
                        <p className="intro-text">
                            ETTISAI does not exist to perform identity. It exists to exercise it <span className="highlight">competently</span>.
                        </p>
                        <p>
                            Tamil civilization carries over five millennia of language, literature, trade, science, and ethical inquiry. Its global underrepresentation is not due to lack of depth—but lack of modern institutional expression.
                        </p>
                        <p className="emphasis-quote">
                            ETTISAI is one such expression—not born of spectacle, but of <span className="tamil-term">நிலைமை உணர்தல்</span> (clear perception of circumstance).
                        </p>
                    </div>

                    <div className="right-column fade-in-on-scroll">
                        <div className="concept-list">
                            <div className="concept-item">
                                <span className="concept-term">அறத்துடன் கூடிய ஆட்சி</span>
                                <span className="concept-def">Authority bound by reason</span>
                                <p className="concept-desc">It does not reject power; it insists on ethical grounding.</p>
                            </div>

                            <div className="concept-item">
                                <span className="concept-term">தொடர்ச்சி</span>
                                <span className="concept-def">Continuity</span>
                                <p className="concept-desc">It does not deny memory; it treats tradition as foundation, not ornament.</p>
                            </div>

                            <div className="concept-item">
                                <span className="concept-term">விளைவறிந்து செயல்</span>
                                <span className="concept-def">Action is justified only by consequence</span>
                                <p className="concept-desc">As the Kural implies.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="closing-thought fade-in-on-scroll">
                    <p>
                        Grounded in its origin, precise in its language, and legible beyond borders—ETTISAI moves forward without disowning where it stands.
                    </p>
                    <p>
                        Just as Jewish identity found modern strength through institutions built on competence—not grievance.
                    </p>
                    <div className="final-statement">
                        <p>
                            Tamil identity, with its ancient legacy of <span className="term">Aram</span> (righteousness) and <span className="term">Veeram</span> (valour), now charts its future through <span className="highlight-large">Thiran</span> (sovereign competence) and creation.
                        </p>
                        <p className="tamil-final">எத்திசையும் (In all directions), we build.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Civilization;

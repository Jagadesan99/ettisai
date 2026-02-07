import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container contact-container">

                <div className="contact-grid">
                    <div className="contact-column">
                        <h3 className="contact-title">Ettisai Enterprises Private Limited</h3>
                        <p className="contact-cin">CIN: U82199TN2025PTC185731</p>

                        <div className="address-block">
                            <p>Registered Address:</p>
                            <p>3/520 M.M.D.A, Mogappair East, Chennai,</p>
                            <p>Tamil Nadu, India – 600037</p>
                        </div>

                        <a href="mailto:info@ettisai.com" className="contact-email">info@ettisai.com</a>
                    </div>

                    <div className="contact-column right-align">
                        <p className="footer-tagline">Ettisai — A Name, Not a Claim</p>
                        <nav className="footer-nav">
                            <a href="#philosophy">Philosophy</a>
                            <a href="#leadership">Leadership</a>
                            <a href="#civilization">Civilization</a>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ettisai Enterprises Private Limited. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Contact;

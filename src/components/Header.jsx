import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="/" className="logo">ETTISAI</a>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#philosophy" className="nav-link">Philosophy</a></li>
                        <li className="nav-item"><a href="#leadership" className="nav-link">Leadership</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './Navbar.css';

function Navbar() {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div className="navbar-container">

            <div className="navbar-title">

                <Link to="/home">
                    <div 
                        className={`navbar-menu navbar-center ${location.pathname === '/home' ? 'active' : ''}`}
                    >
                        <i className="bi bi-house-door navicon"></i>
                        <span className="navbar-name">{t('home')}</span>
                    </div>
                </Link>
                
                <Link to="/select">
                    <div 
                        className={`navbar-menu navbar-center ${location.pathname === '/select' ? 'active' : ''}`}
                    >
                        <i className="bi bi-car-front navicon"></i>
                        <span className="navbar-name">{t('navbarStatus')}</span>
                    </div>
                </Link>
                
                <Link to="/qrcode">
                    <div 
                        className={`navbar-menu navbar-center ${location.pathname === '/qrcode' ? 'active' : ''}`}
                    >
                        <i className="bi bi-qr-code-scan navicon navbarqr"></i>
                    </div>
                </Link>

                <Link to="/history">
                    <div 
                        className={`navbar-menu navbar-center ${location.pathname === '/history' ? 'active' : ''}`}
                    >
                        <i className="bi bi-clock navicon"></i>
                        <span className="navbar-name">{t('history')}</span>
                    </div>
                </Link>

                <Link to="/profile">
                    <div 
                        className={`navbar-menu navbar-center ${location.pathname === '/profile' ? 'active' : ''}`}
                    >
                        <i className="bi bi-person navicon"></i>
                        <span className="navbar-name">{t('profile')}</span>
                    </div>
                </Link>

            </div>

        </div>
    );
}

export default Navbar;
import React from 'react'
import NewsletterManager from './NewsletterManager'
import './App.css'

function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="app-wrapper">
            {/* Header mirip jadwaldokter */}
            <header className="app-header">
                <div className="header-top">
                    <div className="header-container">
                        {/* Hamburger menu button */}
                        <button
                            className="hamburger-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>

                        {/* Logo kiri */}
                        <div className="logo-container">
                            <img src="/asset/logo/logo.png" alt="Logo RSU Siloam Ambon" className="logo" />
                        </div>

                        {/* Text kanan */}
                        <div className="header-title">
                            <div className="title-text">
                                <span className="title-main">E-Newsletter</span>
                                <span className="title-sub">Archive Management System</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="main-content">
                <NewsletterManager />
            </main>

            <footer className="app-footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <p>&copy; {new Date().getFullYear()} <b>RSU Siloam Ambon</b>. All Rights Reserved.</p>
                    </div>
                    <div className="footer-right">
                        <span>Designed & Developed by <b>Marcomm SHAB</b></span>
                        <a href="https://www.linkedin.com/in/raditya-putra-titapasanea-a250a616a/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App

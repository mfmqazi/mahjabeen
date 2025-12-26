import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    Mahjabeen Qazi<span className="logo-suffix">, MC, LPC</span>
                </Link>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="nav-link">
                            {link.name}
                        </Link>
                    ))}
                    <div className="nav-actions">
                        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Book Appointment
                        </a>
                        {onLogout && (
                            <button onClick={onLogout} className="btn-logout" aria-label="Logout">
                                <LogOut size={20} />
                            </button>
                        )}
                    </div>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mobile-menu"
                        >
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className="mobile-link">
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mobile-actions">
                                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-btn">
                                    Book Appointment
                                </a>
                                {onLogout && (
                                    <button onClick={onLogout} className="btn-logout-mobile">
                                        Logout
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;

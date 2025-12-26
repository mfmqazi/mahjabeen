import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">Mahjabeen Qazi</h3>
                    <p className="footer-text">
                        Compassionate, evidence-based psychology consultation helping you navigate life's challenges with resilience and clarity.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul className="footer-contact">
                        <li>
                            <Mail size={18} />
                            <span>contact@mahjabeenqazi.com</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>(555) 123-4567</span>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span>Phoenix & Scottsdale, AZ (Telehealth Available)</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Follow</h4>
                    <div className="social-links">
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Mahjabeen Qazi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

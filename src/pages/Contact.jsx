import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact & Booking</h1>
                    <p>Reach out to schedule an appointment or ask any questions.</p>
                </div>
            </div>

            <div className="container section contact-wrapper">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p className="mb-md">
                        I am currently accepting new clients. Please use the booking link to schedule a consultation
                        or fill out the form for general inquiries.
                    </p>

                    <div className="contact-methods">
                        <div className="method-item">
                            <div className="icon-circle"><Mail size={20} /></div>
                            <div>
                                <h3>Email</h3>
                                <p>contact@mahjabeenqazi.com</p>
                            </div>
                        </div>

                        <div className="method-item">
                            <div className="icon-circle"><Phone size={20} /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>(555) 123-4567</p>
                            </div>
                        </div>

                        <div className="method-item">
                            <div className="icon-circle"><MapPin size={20} /></div>
                            <div>
                                <h3>Locations</h3>
                                <p>Phoenix, AZ</p>
                                <p>Scottsdale, AZ</p>
                                <p>Telehealth (Arizona)</p>
                            </div>
                        </div>
                    </div>

                    <div className="booking-cta">
                        <h3>Ready to schedule?</h3>
                        <p>The fastest way to book an appointment is through my online calendar.</p>
                        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                            <Calendar size={18} style={{ marginRight: '8px' }} /> Book Online
                        </a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2>Send a Message</h2>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="your@email.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number (Optional)</label>
                            <input type="tel" id="phone" placeholder="(555) 123-4567" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

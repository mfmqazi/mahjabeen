import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Sparkles, Shield } from 'lucide-react';
import './Home.css';
import profileImage from '../assets/mahjabeen-real.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container hero-content">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="hero-text"
                    >
                        <span className="hero-subtitle">Compassionate Psychology Consultation</span>
                        <h1>Find Clarity, Healing, & Resilience</h1>
                        <p>
                            Professional support for navigating life's complexities.
                            Specializing in trauma, anxiety, and personal growth.
                        </p>
                        <div className="hero-btns">
                            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Book Appointment
                            </a>
                            <Link to="/services" className="btn btn-outline">
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section intro-section">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="intro-grid"
                    >
                        <div className="intro-image-wrapper">
                            <img
                                src={profileImage}
                                alt="Mahjabeen Qazi, MC, LPC - Licensed Professional Counselor"
                                className="intro-image"
                            />
                        </div>
                        <div className="intro-content">
                            <h2>Meet Mahjabeen Qazi</h2>
                            <h3>MC, LPC | Clinical Supervisor & Therapist</h3>
                            <p>
                                Welcome. I am a dedicated Licensed Professional Counselor with a passion for helping individuals
                                overcome obstacles and find their path to emotional well-being.
                            </p>
                            <p>
                                My approach is rooted in empathy and evidence-based practices. Whether you are dealing with
                                complex trauma, anxiety, depression, or navigating life transitions, I am here to provide
                                a safe, non-judgmental space for your healing journey.
                            </p>
                            <div className="credentials">
                                <span className="badge">LPC Licensed</span>
                                <span className="badge">Clinical Supervisor</span>
                                <span className="badge">Trauma Informed</span>
                            </div>
                            <Link to="/about" className="link-arrow">
                                Read Full Profile <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header text-center mb-lg">
                        <h2>How I Can Help</h2>
                        <p>Comprehensive support tailored to your unique needs.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="services-grid"
                    >
                        <motion.div variants={fadeInUp} className="service-card">
                            <div className="icon-box"><Brain size={32} /></div>
                            <h3>Mental Health</h3>
                            <p>Support for Depression, Anxiety, Bipolar Disorder, and ADHD.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="service-card">
                            <div className="icon-box"><Shield size={32} /></div>
                            <h3>Trauma Recovery</h3>
                            <p>Specialized care for Complex Trauma using safe, effective modalities.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="service-card">
                            <div className="icon-box"><Heart size={32} /></div>
                            <h3>Relationships</h3>
                            <p>Guidance for Couples, Families, and navigating interpersonal dynamics.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="service-card">
                            <div className="icon-box"><Sparkles size={32} /></div>
                            <h3>Personal Growth</h3>
                            <p>Empowerment for Life Transitions, Self-Esteem, and Identity.</p>
                        </motion.div>
                    </motion.div>

                    <div className="text-center mt-md">
                        <Link to="/services" className="btn btn-outline">View All Specializations</Link>
                    </div>
                </div>
            </section>

            {/* Approach/Insurance Strip */}
            <section className="section info-strip">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-item">
                            <h4>Therapeutic Approaches</h4>
                            <p>CBT, DBT, ACT, IFS-based, ART</p>
                        </div>
                        <div className="info-item">
                            <h4>Insurance Accepted</h4>
                            <p>Aetna, BCBS, Cigna, UnitedHealthcare, & more</p>
                        </div>
                        <div className="info-item">
                            <h4>Locations</h4>
                            <p>Phoenix, Scottsdale & Telehealth</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2>Ready to Start Your Journey?</h2>
                    <p className="mb-md">Take the first step towards a healthier, more balanced life today.</p>
                    <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                        Schedule Your Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;

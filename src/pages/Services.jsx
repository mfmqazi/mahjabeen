import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Individual Therapy",
            description: "One-on-one sessions tailored to your specific needs. We work together to explore your thoughts, feelings, and behaviors in a safe, confidential setting.",
            topics: ["Anxiety & Depression", "Trauma & PTSD", "Self-Esteem", "Life Transitions"]
        },
        {
            title: "Couples Counseling",
            description: "Helping partners improve communication, resolve conflict, and deepen their connection. Suitable for all stages of a relationship.",
            topics: ["Communication Issues", "Trust & Infidelity", "Pre-marital Counseling", "Conflict Resolution"]
        },
        {
            title: "Clinical Supervision",
            description: "Professional guidance and mentorship for Associate Counselors (LAC) working towards their independent licensure.",
            topics: ["Case Consultation", "Professional Development", "Ethics & Standards", "Skill Building"]
        }
    ];

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <h1>Services & Specialties</h1>
                    <p>Comprehensive mental health care designed for your well-being.</p>
                </div>
            </div>

            <div className="container section">
                <div className="services-list">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="service-item"
                        >
                            <div className="service-content">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <ul className="service-topics">
                                    {service.topics.map((topic, i) => (
                                        <li key={i}><CheckCircle size={16} className="check-icon" /> {topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <section className="insurance-section section">
                <div className="container text-center">
                    <h2>Insurance & Payment</h2>
                    <p className="mb-md">I am committed to making therapy accessible. I accept various insurance plans and offer self-pay options.</p>

                    <div className="insurance-grid">
                        <div className="insurance-card">
                            <h3>Accepted Insurance</h3>
                            <ul className="insurance-list">
                                <li>Aetna</li>
                                <li>Blue Cross Blue Shield (BCBS)</li>
                                <li>Cigna</li>
                                <li>UnitedHealthcare</li>
                                <li>Oscar Health</li>
                                <li>Oxford</li>
                                <li>Lyra Health</li>
                                <li>PSCS</li>
                            </ul>
                        </div>

                        <div className="insurance-card">
                            <h3>Payment Options</h3>
                            <ul className="payment-list">
                                <li>Credit / Debit Cards</li>
                                <li>HSA / FSA Cards</li>
                                <li>Online Payments via Secure Portal</li>
                            </ul>
                            <p className="note">* Please contact for current self-pay rates.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

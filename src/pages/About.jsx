import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1>About Mahjabeen</h1>
                    <p>A dedicated partner in your journey towards mental wellness.</p>
                </div>
            </div>

            <div className="container about-content-wrapper">
                <div className="about-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>My Philosophy</h2>
                        <p>
                            I believe that every individual possesses the innate capacity for healing and growth.
                            My role as a therapist is to provide the tools, support, and safe environment necessary
                            to unlock that potential. I approach therapy with a deep sense of empathy, respect, and
                            cultural sensitivity, recognizing that each person's journey is unique.
                        </p>

                        <h2>Professional Background</h2>
                        <p>
                            As a Licensed Professional Counselor (LPC) and Clinical Supervisor, I have dedicated my career
                            to supporting individuals through their most challenging moments. My experience spans a wide range
                            of mental health concerns, with a particular focus on complex trauma, anxiety, and mood disorders.
                        </p>
                        <p>
                            I integrate various evidence-based therapeutic modalities to create a personalized treatment plan
                            for each client. This includes Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT),
                            Acceptance and Commitment Therapy (ACT), and Internal Family Systems (IFS) informed approaches.
                        </p>

                        <h2>Specializations</h2>
                        <ul className="specializations-list">
                            <li>Complex Trauma & PTSD</li>
                            <li>Depression & Anxiety Disorders</li>
                            <li>Bipolar Disorder</li>
                            <li>ADHD & Neurodivergence (Autism)</li>
                            <li>Life Transitions & Personal Growth</li>
                            <li>Relationship Issues & Couples Therapy</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="about-sidebar">
                    <div className="sidebar-card">
                        <h3>Credentials</h3>
                        <ul className="credentials-list">
                            <li><strong>LPC</strong> - Licensed Professional Counselor</li>
                            <li><strong>MC</strong> - Master of Counseling</li>
                            <li>Clinical Supervisor</li>
                        </ul>
                    </div>

                    <div className="sidebar-card">
                        <h3>Education & Training</h3>
                        <p>
                            Extensive training in trauma-informed care, ART (Accelerated Resolution Therapy), and
                            culturally responsive counseling practices.
                        </p>
                    </div>

                    <div className="sidebar-card">
                        <h3>Client Focus</h3>
                        <ul className="focus-list">
                            <li>Adults</li>
                            <li>Young Adults</li>
                            <li>Couples</li>
                            <li>LGBTQ+ Allied</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

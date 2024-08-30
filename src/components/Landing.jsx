import React from 'react';
import './css/Landing.css'; // Import the CSS file

const Landing = ({ onNext, onCartUpdate }) => {
    return (
        <div className="landing-container">
            <h1 className="landing-title">Create Your Custom Mobile Case with Luxy Studio</h1>
            <p className="landing-subtitle">Design it your way, and make your phone case as unique as you are.</p>
            <button
                className="landing-button"
                onClick={() => {
                    onNext();
                    onCartUpdate();
                }}
            >
                Get Started
            </button>
        </div>
    );
};

export default Landing;

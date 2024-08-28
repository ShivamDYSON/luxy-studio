import React from 'react';

const Landing = ({ onNext, onCartUpdate }) => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white mb-4">Create Your Custom Mobile Case with Luxy Studio</h1>
            <p className="text-lg text-white mb-8">Design it your way, and make your phone case as unique as you are.</p>
            <button
                className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
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

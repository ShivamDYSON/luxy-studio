import React from 'react';

const Step2 = ({ designData, onBack, onProceed }) => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-400 to-orange-500 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-white mb-6">Preview Your Design</h2>

            {/* Placeholder for 3D or interactive preview */}
            <div className="w-64 h-64 bg-gray-300 rounded-lg flex justify-center items-center mb-6">
                <p className="text-gray-700">3D Preview Here</p>
            </div>

            <div className="flex space-x-4">
                <button className="px-4 py-2 bg-white text-pink-500 rounded-full font-semibold shadow-lg hover:bg-pink-500 hover:text-white transition duration-300" onClick={onBack}>
                    Modify Design
                </button>
                <button className="px-4 py-2 bg-white text-pink-500 rounded-full font-semibold shadow-lg hover:bg-pink-500 hover:text-white transition duration-300" onClick={onProceed}>
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default Step2;

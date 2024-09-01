import React, { useState } from 'react';
import './css/Step1.css';

const Step1 = ({ onNext }) => {
    const [mobileModel, setMobileModel] = useState('');
    const [caseType, setCaseType] = useState('');
    const [image, setImage] = useState(null);
    const [aiPrompt, setAiPrompt] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleImageUpload = (e) => setImage(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ mobileModel, caseType, image, aiPrompt, instructions });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-500 p-4">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4">
                {/* Card Section */}
                <div
                    className="border-of-div-wrapper w-full max-w-md md:max-w-xl lg:max-w-2xl mb-4 md:mb-0"
                >
                    <div className="border-of-div h-full">
                        <div className="content p-4">
                            <p>Your Card Content Here</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <form
                    className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Design Your Case</h2>

                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
                        <select
                            className="w-full p-1 sm:p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base"
                            value={mobileModel}
                            onChange={(e) => setMobileModel(e.target.value)}
                        >
                            <option value="">Select Model</option>
                            <option value="iphone-13">iPhone 13</option>
                            <option value="samsung-s21">Samsung S21</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Case Type</label>
                        <select
                            className="w-full p-1 sm:p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base"
                            value={caseType}
                            onChange={(e) => setCaseType(e.target.value)}
                        >
                            <option value="">Select Case Type</option>
                            <option value="transparent">Transparent</option>
                            <option value="leather">Leather</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Upload Image</label>
                        <input
                            type="file"
                            className="w-full p-1 sm:p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base"
                            onChange={handleImageUpload}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">AI Image Generation (Optional)</label>
                        <input
                            type="text"
                            className="w-full p-1 sm:p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base"
                            value={aiPrompt}
                            onChange={(e) => setAiPrompt(e.target.value)}
                            placeholder="Enter a description..."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Design Instructions</label>
                        <textarea
                            className="w-full p-1 sm:p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Any special instructions for your design..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 sm:py-3 md:py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
                    >
                        Next: Preview Your Design
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Step1;

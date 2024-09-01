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
                    className="border-of-div-wrapper"
                    style={{ width: '100%', maxWidth: '700px', height: '600px', marginBottom: '150px' }}
                >
                    <div className="border-of-div">
                        <div className="content">
                            <p>Your Card Content Here</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <form
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                    onSubmit={handleSubmit}
                    style={{ height: '620px', width: '600px', marginBottom: '180px' }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Design Your Case</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Mobile Model</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            value={mobileModel}
                            onChange={(e) => setMobileModel(e.target.value)}
                        >
                            <option value="">Select Model</option>
                            <option value="iphone-13">iPhone 13</option>
                            <option value="samsung-s21">Samsung S21</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Case Type</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            value={caseType}
                            onChange={(e) => setCaseType(e.target.value)}
                        >
                            <option value="">Select Case Type</option>
                            <option value="transparent">Transparent</option>
                            <option value="leather">Leather</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Upload Image</label>
                        <input
                            type="file"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={handleImageUpload}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">AI Image Generation (Optional)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={aiPrompt}
                            onChange={(e) => setAiPrompt(e.target.value)}
                            placeholder="Enter a description..."
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Design Instructions</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Any special instructions for your design..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    >
                        Next: Preview Your Design
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Step1;

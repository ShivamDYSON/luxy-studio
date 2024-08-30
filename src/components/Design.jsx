import React, { useState } from 'react';

const Step1 = ({ onNext }) => {
    const [mobileModel, setMobileModel] = useState('');
    const [caseType, setCaseType] = useState('');
    const [image, setImage] = useState(null);
    const [aiPrompt, setAiPrompt] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleImageUpload = (e) => setImage(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the collected data
        onNext({ mobileModel, caseType, image, aiPrompt, instructions });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
            <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Design Your Case</h2>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Mobile Model</label>
                    <select className="w-full p-2 border border-gray-300 rounded" value={mobileModel} onChange={(e) => setMobileModel(e.target.value)}>
                        <option value="">Select Model</option>
                        <option value="iphone-13">iPhone 13</option>
                        <option value="samsung-s21">Samsung S21</option>
                        {/* Add more options */}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Case Type</label>
                    <select className="w-full p-2 border border-gray-300 rounded" value={caseType} onChange={(e) => setCaseType(e.target.value)}>
                        <option value="">Select Case Type</option>
                        <option value="transparent">Transparent</option>
                        <option value="leather">Leather</option>
                        {/* Add more options */}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Upload Image</label>
                    <input type="file" className="w-full p-2 border border-gray-300 rounded" onChange={handleImageUpload} />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">AI Image Generation (Optional)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)} placeholder="Enter a description..." />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Design Instructions</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded" value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Any special instructions for your design..."></textarea>
                </div>

                <button className="w-full py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300">Next: Preview Your Design</button>
            </form>
        </div>
    );
};

export default Step1;

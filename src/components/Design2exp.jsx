import React, { useState } from 'react';
import './css/Step1.css';

const Step1 = ({ onNext }) => {
    const [mobileBrand, setMobileBrand] = useState('');
    const [mobileModel, setMobileModel] = useState('');
    const [caseType, setCaseType] = useState('');
    const [image, setImage] = useState(null);
    const [aiPrompt, setAiPrompt] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleImageUpload = (e) => setImage(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ mobileBrand, mobileModel, caseType, image, aiPrompt, instructions });
    };

    const renderModelOptions = () => {
        switch (mobileBrand) {
            case 'iphone':
                return (
                    <>
                        <option value="iphone-15-pro-max">iPhone 15 Pro Max</option>
                        <option value="iphone-14-pro-max">iPhone 14 Pro Max</option>
                    </>
                );
            case 'samsung':
                return (
                    <>
                        <option value="samsung-s24-ultra">Samsung S24 Ultra</option>
                        <option value="samsung-s23-ultra">Samsung S23 Ultra</option>
                    </>
                );
            case 'pixel':
                return (
                    <>
                        <option value="google-pixel-8-pro">Google Pixel 8 Pro</option>
                        <option value="google-pixel-7-pro">Google Pixel 7 Pro</option>
                    </>
                );
            default:
                return <option value="">Select a model</option>;
        }
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
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Brand</label>
                        <select
                            className="w-full p-1 sm:p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base"
                            value={mobileBrand}
                            onChange={(e) => {
                                setMobileBrand(e.target.value);
                                setMobileModel(''); // Reset the model when brand changes
                            }}
                        >
                            <option value="">Select Brand</option>
                            <option value="iphone">iPhone</option>
                            <option value="samsung">Samsung</option>
                            <option value="pixel">Google Pixel</option>
                        </select>
                    </div>

                    {mobileBrand && (
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
                            <select
                                className="w-full p-1 sm:p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base"
                                value={mobileModel}
                                onChange={(e) => setMobileModel(e.target.value)}
                            >
                                <option value="">Select Model</option>
                                {renderModelOptions()}
                            </select>
                        </div>
                    )}

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




import React, { useState } from 'react';
import './css/Step1.css';

const Step1 = ({ onNext }) => {
    const [mobileBrand, setMobileBrand] = useState('');
    const [image, setImage] = useState(null);
    const [aiPrompt, setAiPrompt] = useState('');
    const [instructions, setInstructions] = useState('');

    // New state variables for toggling text sections
    const [showPlainText, setShowPlainText] = useState(false);
    const [showTextArt, setShowTextArt] = useState(false);

    // Plain Text States
    const [plainText, setPlainText] = useState('');
    const [plainTextFont, setPlainTextFont] = useState('');
    const [plainTextStyle, setPlainTextStyle] = useState('');
    const [plainTextColor, setPlainTextColor] = useState('');
    const [plainTextSize, setPlainTextSize] = useState('');
    const [plainTextAlign, setPlainTextAlign] = useState('');

    // Text Art States
    const [textArt, setTextArt] = useState('');
    const [textArtStyle, setTextArtStyle] = useState('');
    const [textArtColor, setTextArtColor] = useState('');
    const [textArtStroke, setTextArtStroke] = useState('');
    const [textArtType, setTextArtType] = useState('');

    const handleImageUpload = (e) => setImage(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({
            mobileBrand,
            image,
            aiPrompt,
            instructions,
            plainText,
            plainTextFont,
            plainTextStyle,
            plainTextColor,
            plainTextSize,
            plainTextAlign,
            textArt,
            textArtStyle,
            textArtColor,
            textArtStroke,
            textArtType
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-500 p-4">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4">
                {/* Card Section */}
                <div className="border-of-div-wrapper w-full max-w-md md:max-w-xl lg:max-w-2xl mb-4 md:mb-0">
                    <div className="border-of-div h-full">
                        <div className="content p-4">
                            <p>Your Card Content Here</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <form className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg" onSubmit={handleSubmit}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Design Your Case</h2>

                    {/* Mobile Brand Selection */}
                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Brand</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                            value={mobileBrand}
                            onChange={(e) => setMobileBrand(e.target.value)}
                        >
                            <option value="">Select Brand</option>
                            <option value="iphone">iPhone</option>
                            <option value="samsung">Samsung</option>
                            <option value="google-pixel">Google Pixel</option>
                        </select>
                    </div>

                    {/* Mobile Models Display */}
                    {mobileBrand === 'iphone' && (
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
                            <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
                                <option value="iphone-15-pro-max">iPhone 15 Pro Max</option>
                                <option value="iphone-14-pro-max">iPhone 14 Pro Max</option>
                            </select>
                        </div>
                    )}
                    {mobileBrand === 'samsung' && (
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
                            <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
                                <option value="samsung-s24-ultra">Samsung S24 Ultra</option>
                                <option value="samsung-s23-ultra">Samsung S23 Ultra</option>
                            </select>
                        </div>
                    )}
                    {mobileBrand === 'google-pixel' && (
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
                            <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
                                <option value="google-pixel-8-pro">Google Pixel 8 Pro</option>
                                <option value="google-pixel-7-pro">Google Pixel 7 Pro</option>
                            </select>
                        </div>
                    )}

                    {/* Upload Image Field */}
                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Upload Image</label>
                        <input
                            type="file"
                            className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                            onChange={handleImageUpload}
                        />
                    </div>

                    {/* Add Text Toggles */}
                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Add Text</label>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={showPlainText}
                                    onChange={() => setShowPlainText(!showPlainText)}
                                    className="form-checkbox h-4 w-4 text-purple-600"
                                />
                                <span className="text-xs sm:text-sm md:text-base">Plain Text</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={showTextArt}
                                    onChange={() => setShowTextArt(!showTextArt)}
                                    className="form-checkbox h-4 w-4 text-purple-600"
                                />
                                <span className="text-xs sm:text-sm md:text-base">Text Art</span>
                            </label>
                        </div>
                    </div>

                    {/* Plain Text Section */}
                    {showPlainText && (
                        <div className="space-y-4 mb-4">
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={plainText}
                                    onChange={(e) => setPlainText(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={plainTextFont}
                                    onChange={(e) => setPlainTextFont(e.target.value)}
                                >
                                    <option value="">Select Font</option>
                                    <option value="Arial">Arial</option>
                                    <option value="Verdana">Verdana</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Style</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={plainTextStyle}
                                    onChange={(e) => setPlainTextStyle(e.target.value)}
                                >
                                    <option value="">Select Style</option>
                                    <option value="Bold">Bold</option>
                                    <option value="Italic">Italic</option>
                                    <option value="Curved">Curved</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
                                <input
                                    type="color"
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={plainTextColor}
                                    onChange={(e) => setPlainTextColor(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Size</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={plainTextSize}
                                    onChange={(e) => setPlainTextSize(e.target.value)}
                                    placeholder="Font Size"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Horizontal Alignment</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={plainTextAlign}
                                    onChange={(e) => setPlainTextAlign(e.target.value)}
                                >
                                    <option value="">Select Alignment</option>
                                    <option value="left">Left</option>
                                    <option value="center">Center</option>
                                    <option value="right">Right</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Text Art Section */}
                    {showTextArt && (
                        <div className="space-y-4 mb-4">
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={textArt}
                                    onChange={(e) => setTextArt(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Style</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={textArtStyle}
                                    onChange={(e) => setTextArtStyle(e.target.value)}
                                >
                                    <option value="">Select Font Style</option>
                                    <option value="Graffiti">Graffiti</option>
                                    <option value="Elegant">Elegant</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
                                <input
                                    type="color"
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={textArtColor}
                                    onChange={(e) => setTextArtColor(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Stroke</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={textArtStroke}
                                    onChange={(e) => setTextArtStroke(e.target.value)}
                                    placeholder="Stroke Width"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Type of Text Art</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                    value={textArtType}
                                    onChange={(e) => setTextArtType(e.target.value)}
                                >
                                    <option value="">Select Type</option>
                                    <option value="Angled">Angled</option>
                                    <option value="Curve">Curve</option>
                                    <option value="Top Level">Top Level</option>
                                    <option value="Bottom Level">Bottom Level</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* AI Image Field */}
                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">AI Image Generation (Optional)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                            value={aiPrompt}
                            onChange={(e) => setAiPrompt(e.target.value)}
                            placeholder="Enter a description..."
                        />
                    </div>

                    {/* Design Instructions Field */}
                    <div className="mb-4">
                        <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Design Instructions</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Any special instructions for your design..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
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



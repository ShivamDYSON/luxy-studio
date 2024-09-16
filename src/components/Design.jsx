// import React, { useState } from 'react';
// import './css/Step1.css';
// import './css/ManipulationBox.css'

// const Step1 = ({ onNext }) => {
//     const [mobileBrand, setMobileBrand] = useState('');
//     const [image, setImage] = useState(null);
//     const [aiPrompt, setAiPrompt] = useState('');
//     const [instructions, setInstructions] = useState('');

//     // New state variables for toggling text sections
//     const [showPlainText, setShowPlainText] = useState(false);
//     const [showTextArt, setShowTextArt] = useState(false);

//     // Plain Text States
//     const [plainText, setPlainText] = useState('');
//     const [plainTextFont, setPlainTextFont] = useState('');
//     const [plainTextStyle, setPlainTextStyle] = useState('');
//     const [plainTextColor, setPlainTextColor] = useState('');
//     const [plainTextSize, setPlainTextSize] = useState('');
//     const [plainTextAlign, setPlainTextAlign] = useState('');

//     // Text Art States
//     const [textArt, setTextArt] = useState('');
//     const [textArtStyle, setTextArtStyle] = useState('');
//     const [textArtColor, setTextArtColor] = useState('');
//     const [textArtStroke, setTextArtStroke] = useState('');
//     const [textArtType, setTextArtType] = useState('');

//     const handleImageUpload = (e) => setImage(URL.createObjectURL(e.target.files[0]));

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onNext({
//             mobileBrand,
//             image,
//             aiPrompt,
//             instructions,
//             plainText,
//             plainTextFont,
//             plainTextStyle,
//             plainTextColor,
//             plainTextSize,
//             plainTextAlign,
//             textArt,
//             textArtStyle,
//             textArtColor,
//             textArtStroke,
//             textArtType
//         });
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-500 p-4">
//             <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4">
//                 {/* Card Section */}
//                 <div className="border-of-div-wrapper w-full max-w-md md:max-w-xl lg:max-w-2xl mb-4 md:mb-0">
//                     <div className="border-of-div h-full">
//                         <div className="content p-4">
//                             <p>Your Card Content Preview</p>

//                             {/* Mobile Brand Display */}
//                             {mobileBrand && (
//                                 <p className="text-white">
//                                     <strong>Brand: </strong>{mobileBrand}
//                                 </p>
//                             )}

//                             {/* Image Preview */}
//                             {image && (
//                                 <img src={image} alt="Uploaded" className="w-full h-48 object-cover mt-2" />
//                             )}

//                             {/* Plain Text Preview */}
//                             {plainText && (
//                                 <p
//                                     style={{
//                                         fontFamily: plainTextFont,
//                                         fontSize: `${plainTextSize}px`,
//                                         color: plainTextColor,
//                                         textAlign: plainTextAlign,
//                                         fontStyle: plainTextStyle === 'Italic' ? 'italic' : 'normal',
//                                         fontWeight: plainTextStyle === 'Bold' ? 'bold' : 'normal',
//                                     }}
//                                 >
//                                     {plainText}
//                                 </p>
//                             )}

//                             {/* Text Art Preview */}
//                             {textArt && (
//                                 <p
//                                     style={{
//                                         fontFamily: textArtStyle,
//                                         color: textArtColor,
//                                         WebkitTextStrokeWidth: `${textArtStroke}px`,
//                                         WebkitTextStrokeColor: 'black', // Assuming stroke is black
//                                     }}
//                                 >
//                                     {textArt} ({textArtType})
//                                 </p>
//                             )}

//                             {/* AI Prompt Preview */}
//                             {aiPrompt && (
//                                 <p className="text-white">
//                                     <strong>AI Prompt: </strong>{aiPrompt}
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Form Section */}
//                 <form className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg" onSubmit={handleSubmit}>
//                     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Design Your Case</h2>

//                     {/* Mobile Brand Selection */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Brand</label>
//                         <select
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={mobileBrand}
//                             onChange={(e) => setMobileBrand(e.target.value)}
//                         >
//                             <option value="">Select Brand</option>
//                             <option value="iphone">iPhone</option>
//                             <option value="samsung">Samsung</option>
//                             <option value="google-pixel">Google Pixel</option>
//                         </select>
//                     </div>

//                     {/* Mobile Models Display */}
//                     {mobileBrand === 'iphone' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="iphone-15-pro-max">iPhone 15 Pro Max</option>
//                                 <option value="iphone-14-pro-max">iPhone 14 Pro Max</option>
//                             </select>
//                         </div>
//                     )}
//                     {mobileBrand === 'samsung' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="samsung-s24-ultra">Samsung S24 Ultra</option>
//                                 <option value="samsung-s23-ultra">Samsung S23 Ultra</option>
//                             </select>
//                         </div>
//                     )}
//                     {mobileBrand === 'google-pixel' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="google-pixel-8-pro">Google Pixel 8 Pro</option>
//                                 <option value="google-pixel-7-pro">Google Pixel 7 Pro</option>
//                             </select>
//                         </div>
//                     )}

//                     {/* Upload Image Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Upload Image</label>
//                         <input
//                             type="file"
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             onChange={handleImageUpload}
//                         />
//                     </div>

//                     {/* Add Text Toggles */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Add Text</label>
//                         <div className="flex items-center gap-4">
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     checked={showPlainText}
//                                     onChange={() => setShowPlainText(!showPlainText)}
//                                     className="form-checkbox h-4 w-4 text-purple-600"
//                                 />
//                                 <span className="text-xs sm:text-sm md:text-base">Plain Text</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     checked={showTextArt}
//                                     onChange={() => setShowTextArt(!showTextArt)}
//                                     className="form-checkbox h-4 w-4 text-purple-600"
//                                 />
//                                 <span className="text-xs sm:text-sm md:text-base">Text Art</span>
//                             </label>
//                         </div>
//                     </div>

//                     {/* Plain Text Section */}
//                     {showPlainText && (
//                         <div className="space-y-4 mb-4">
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainText}
//                                     onChange={(e) => setPlainText(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextFont}
//                                     onChange={(e) => setPlainTextFont(e.target.value)}
//                                 >
//                                     <option value="">Select Font</option>
//                                     <option value="Arial">Arial</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Style</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextStyle}
//                                     onChange={(e) => setPlainTextStyle(e.target.value)}
//                                 >
//                                     <option value="">Select Style</option>
//                                     <option value="Bold">Bold</option>
//                                     <option value="Italic">Italic</option>
//                                     <option value="Curved">Curved</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
//                                 <input
//                                     type="color"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextColor}
//                                     onChange={(e) => setPlainTextColor(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Size</label>
//                                 <input
//                                     type="number"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextSize}
//                                     onChange={(e) => setPlainTextSize(e.target.value)}
//                                     placeholder="Font Size"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Horizontal Alignment</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextAlign}
//                                     onChange={(e) => setPlainTextAlign(e.target.value)}
//                                 >
//                                     <option value="">Select Alignment</option>
//                                     <option value="left">Left</option>
//                                     <option value="center">Center</option>
//                                     <option value="right">Right</option>
//                                 </select>
//                             </div>
//                         </div>
//                     )}

//                     {/* Text Art Section */}
//                     {showTextArt && (
//                         <div className="space-y-4 mb-4">
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArt}
//                                     onChange={(e) => setTextArt(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Style</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtStyle}
//                                     onChange={(e) => setTextArtStyle(e.target.value)}
//                                 >
//                                     <option value="">Select Font Style</option>
//                                     <option value="Graffiti">Graffiti</option>
//                                     <option value="Elegant">Elegant</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
//                                 <input
//                                     type="color"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtColor}
//                                     onChange={(e) => setTextArtColor(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Stroke</label>
//                                 <input
//                                     type="number"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtStroke}
//                                     onChange={(e) => setTextArtStroke(e.target.value)}
//                                     placeholder="Stroke Width"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Type of Text Art</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtType}
//                                     onChange={(e) => setTextArtType(e.target.value)}
//                                 >
//                                     <option value="">Select Type</option>
//                                     <option value="Angled">Angled</option>
//                                     <option value="Curve">Curve</option>
//                                     <option value="Top Level">Top Level</option>
//                                     <option value="Bottom Level">Bottom Level</option>
//                                 </select>
//                             </div>
//                         </div>
//                     )}

//                     {/* AI Image Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">AI Image Generation (Optional)</label>
//                         <input
//                             type="text"
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={aiPrompt}
//                             onChange={(e) => setAiPrompt(e.target.value)}
//                             placeholder="Enter a description..."
//                         />
//                     </div>

//                     {/* Design Instructions Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Design Instructions</label>
//                         <textarea
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={instructions}
//                             onChange={(e) => setInstructions(e.target.value)}
//                             placeholder="Any special instructions for your design..."
//                         ></textarea>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full py-2 sm:py-3 md:py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
//                     >
//                         Next: Preview Your Design
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Step1;


// Step1.jsx

// import React, { useState } from 'react';
// import ManipulationBox from './ManipulationBox'; // Import ManipulationBox
// import './css/Step1.css';

// const Step1 = ({ onNext }) => {
//     const [mobileBrand, setMobileBrand] = useState('');
//     const [aiPrompt, setAiPrompt] = useState('');
//     const [instructions, setInstructions] = useState('');

//     // Toggle text sections
//     const [showPlainText, setShowPlainText] = useState(false);
//     const [showTextArt, setShowTextArt] = useState(false);

//     // Plain Text States
//     const [plainText, setPlainText] = useState('');
//     const [plainTextFont, setPlainTextFont] = useState('');
//     const [plainTextStyle, setPlainTextStyle] = useState('');
//     const [plainTextColor, setPlainTextColor] = useState('');
//     const [plainTextSize, setPlainTextSize] = useState('');
//     const [plainTextAlign, setPlainTextAlign] = useState('');

//     // Text Art States
//     const [textArt, setTextArt] = useState('');
//     const [textArtStyle, setTextArtStyle] = useState('');
//     const [textArtColor, setTextArtColor] = useState('');
//     const [textArtStroke, setTextArtStroke] = useState('');
//     const [textArtType, setTextArtType] = useState('');

//     // Manage elements
//     const [elements, setElements] = useState([]);

//     // Add image to manipulation box
//     const handleImageUpload = (e) => {
//         const imgURL = URL.createObjectURL(e.target.files[0]);
//         setElements([...elements, {
//             type: 'image',
//             src: imgURL,
//             rotation: 0,
//             scale: 1,
//             id: Date.now(),
//             position: { x: 0, y: 0 }
//         }]);
//     };

//     // Add plain text to manipulation box
//     const handleAddText = () => {
//         if (plainText) {
//             setElements([...elements, {
//                 type: 'text',
//                 content: plainText,
//                 font: plainTextFont,
//                 color: plainTextColor,
//                 size: plainTextSize || 16,
//                 rotation: 0,
//                 scale: 1,
//                 id: Date.now(),
//                 position: { x: 0, y: 0 },
//                 align: plainTextAlign,
//                 fontStyle: plainTextStyle === 'Italic' ? 'italic' : 'normal',
//                 fontWeight: plainTextStyle === 'Bold' ? 'bold' : 'normal'
//             }]);
//             setPlainText(''); // Reset input
//         }
//     };

//     // Add text art to manipulation box
//     const handleAddTextArt = () => {
//         if (textArt) {
//             setElements([...elements, {
//                 type: 'textArt',
//                 content: textArt,
//                 font: textArtStyle,
//                 color: textArtColor,
//                 stroke: textArtStroke || 1,
//                 rotation: 0,
//                 scale: 1,
//                 id: Date.now(),
//                 position: { x: 0, y: 0 }
//             }]);
//             setTextArt(''); // Reset input
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onNext({
//             mobileBrand,
//             aiPrompt,
//             instructions,
//             plainText,
//             plainTextFont,
//             plainTextStyle,
//             plainTextColor,
//             plainTextSize,
//             plainTextAlign,
//             textArt,
//             textArtStyle,
//             textArtColor,
//             textArtStroke,
//             textArtType,
//             elements,
//         });
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-500 p-4">
//             <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4">

//                 {/* ManipulationBox for handling added elements */}
//                 <div className="border-of-div-wrapper w-full max-w-md md:max-w-xl lg:max-w-2xl mb-4 md:mb-0">
//                     <div className="border-of-div h-full">
//                         <div className="content p-4">
//                             <ManipulationBox elements={elements} setElements={setElements} />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Form Section for adding text/images */}
//                 <form className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg" onSubmit={handleSubmit}>
//                     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Design Your Case</h2>

//                     {/* Mobile Brand Selection */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Brand</label>
//                         <select
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={mobileBrand}
//                             onChange={(e) => setMobileBrand(e.target.value)}
//                         >
//                             <option value="">Select Brand</option>
//                             <option value="iphone">iPhone</option>
//                             <option value="samsung">Samsung</option>
//                             <option value="google-pixel">Google Pixel</option>
//                         </select>
//                     </div>

//                     {/* Mobile Models Display */}
//                     {mobileBrand === 'iphone' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="iphone-15-pro-max">iPhone 15 Pro Max</option>
//                                 <option value="iphone-14-pro-max">iPhone 14 Pro Max</option>
//                             </select>
//                         </div>
//                     )}
//                     {mobileBrand === 'samsung' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="samsung-s24-ultra">Samsung S24 Ultra</option>
//                                 <option value="samsung-s23-ultra">Samsung S23 Ultra</option>
//                             </select>
//                         </div>
//                     )}
//                     {mobileBrand === 'google-pixel' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="google-pixel-8-pro">Google Pixel 8 Pro</option>
//                                 <option value="google-pixel-7-pro">Google Pixel 7 Pro</option>
//                             </select>
//                         </div>
//                     )}

//                     {/* Upload Image Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Upload Image</label>
//                         <input
//                             type="file"
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             onChange={handleImageUpload}
//                         />
//                     </div>

//                     {/* Add Text Toggles */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Add Text</label>
//                         <div className="flex items-center gap-4">
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     checked={showPlainText}
//                                     onChange={() => setShowPlainText(!showPlainText)}
//                                     className="form-checkbox h-4 w-4 text-purple-600"
//                                 />
//                                 <span className="text-xs sm:text-sm md:text-base">Plain Text</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     checked={showTextArt}
//                                     onChange={() => setShowTextArt(!showTextArt)}
//                                     className="form-checkbox h-4 w-4 text-purple-600"
//                                 />
//                                 <span className="text-xs sm:text-sm md:text-base">Text Art</span>
//                             </label>
//                         </div>
//                     </div>

//                     {/* Plain Text Section */}
//                     {showPlainText && (
//                         <div className="space-y-4 mb-4">
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainText}
//                                     onChange={(e) => setPlainText(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextFont}
//                                     onChange={(e) => setPlainTextFont(e.target.value)}
//                                 >
//                                     <option value="">Select Font</option>
//                                     <option value="Arial">Arial</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Style</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextStyle}
//                                     onChange={(e) => setPlainTextStyle(e.target.value)}
//                                 >
//                                     <option value="">Select Style</option>
//                                     <option value="Bold">Bold</option>
//                                     <option value="Italic">Italic</option>
//                                     <option value="Curved">Curved</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
//                                 <input
//                                     type="color"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextColor}
//                                     onChange={(e) => setPlainTextColor(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Size</label>
//                                 <input
//                                     type="number"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextSize}
//                                     onChange={(e) => setPlainTextSize(e.target.value)}
//                                     placeholder="Font Size"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Horizontal Alignment</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextAlign}
//                                     onChange={(e) => setPlainTextAlign(e.target.value)}
//                                 >
//                                     <option value="">Select Alignment</option>
//                                     <option value="left">Left</option>
//                                     <option value="center">Center</option>
//                                     <option value="right">Right</option>
//                                 </select>
//                             </div>
//                         </div>
//                     )}

//                     {/* Text Art Section */}
//                     {showTextArt && (
//                         <div className="space-y-4 mb-4">
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArt}
//                                     onChange={(e) => setTextArt(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Style</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtStyle}
//                                     onChange={(e) => setTextArtStyle(e.target.value)}
//                                 >
//                                     <option value="">Select Font Style</option>
//                                     <option value="Graffiti">Graffiti</option>
//                                     <option value="Elegant">Elegant</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
//                                 <input
//                                     type="color"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtColor}
//                                     onChange={(e) => setTextArtColor(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Stroke</label>
//                                 <input
//                                     type="number"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtStroke}
//                                     onChange={(e) => setTextArtStroke(e.target.value)}
//                                     placeholder="Stroke Width"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Type of Text Art</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtType}
//                                     onChange={(e) => setTextArtType(e.target.value)}
//                                 >
//                                     <option value="">Select Type</option>
//                                     <option value="Angled">Angled</option>
//                                     <option value="Curve">Curve</option>
//                                     <option value="Top Level">Top Level</option>
//                                     <option value="Bottom Level">Bottom Level</option>
//                                 </select>
//                             </div>
//                         </div>
//                     )}

//                     {/* AI Image Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">AI Image Generation (Optional)</label>
//                         <input
//                             type="text"
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={aiPrompt}
//                             onChange={(e) => setAiPrompt(e.target.value)}
//                             placeholder="Enter a description..."
//                         />
//                     </div>

//                     {/* Design Instructions Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Design Instructions</label>
//                         <textarea
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={instructions}
//                             onChange={(e) => setInstructions(e.target.value)}
//                             placeholder="Any special instructions for your design..."
//                         ></textarea>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full py-2 sm:py-3 md:py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
//                     >
//                         Next: Preview Your Design
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Step1;




// File path: src/components/Step1.jsx
// import React, { useState } from 'react';
// import ManipulationBox from './ManipulationBox.jsx'; // Import ManipulationBox
// import './css/Step1.css';

// const Step1 = ({ onNext }) => {
//     const [mobileBrand, setMobileBrand] = useState('');
//     const [aiPrompt, setAiPrompt] = useState('');
//     const [instructions, setInstructions] = useState('');

//     // Toggle text sections
//     const [showPlainText, setShowPlainText] = useState(false);
//     const [showTextArt, setShowTextArt] = useState(false);

//     // Plain Text States
//     const [plainText, setPlainText] = useState('');
//     const [plainTextFont, setPlainTextFont] = useState('');
//     const [plainTextStyle, setPlainTextStyle] = useState('');
//     const [plainTextColor, setPlainTextColor] = useState('#000000'); // Default color
//     const [plainTextSize, setPlainTextSize] = useState(16); // Default size
//     const [plainTextAlign, setPlainTextAlign] = useState('left');

//     // Text Art States
//     const [textArt, setTextArt] = useState('');
//     const [textArtStyle, setTextArtStyle] = useState('');
//     const [textArtColor, setTextArtColor] = useState('#000000'); // Default color
//     const [textArtStroke, setTextArtStroke] = useState(1); // Default stroke width
//     const [textArtType, setTextArtType] = useState('');

//     // Manage elements
//     const [elements, setElements] = useState([]);

//     // Add image to manipulation box
//     const handleImageUpload = (e) => {
//         const imgURL = URL.createObjectURL(e.target.files[0]);
//         setElements([...elements, {
//             type: 'image',
//             src: imgURL,
//             rotation: 0,
//             scale: 1,
//             id: Date.now(),
//             position: { x: 0, y: 0 }
//         }]);
//     };

//     // Add plain text to manipulation box
//     const handleAddText = () => {
//         if (plainText) {
//             setElements([...elements, {
//                 type: 'text',
//                 content: plainText,
//                 font: plainTextFont || 'Arial', // Default font if not selected
//                 color: plainTextColor || '#000000', // Default color if not selected
//                 size: plainTextSize || 16, // Default size if not provided
//                 rotation: 0,
//                 scale: 1,
//                 id: Date.now(),
//                 position: { x: 0, y: 0 },
//                 align: plainTextAlign || 'left', // Default alignment if not selected
//                 fontStyle: plainTextStyle === 'Italic' ? 'italic' : 'normal',
//                 fontWeight: plainTextStyle === 'Bold' ? 'bold' : 'normal'
//             }]);
//             setPlainText(''); // Reset input
//         }
//     };

//     // Add text art to manipulation box
//     const handleAddTextArt = () => {
//         if (textArt) {
//             setElements([...elements, {
//                 type: 'textArt',
//                 content: textArt,
//                 font: textArtStyle || 'Arial', // Default font if not selected
//                 color: textArtColor || '#000000', // Default color if not selected
//                 stroke: textArtStroke || 1, // Default stroke width if not provided
//                 rotation: 0,
//                 scale: 1,
//                 id: Date.now(),
//                 position: { x: 0, y: 0 }
//             }]);
//             setTextArt(''); // Reset input
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onNext({
//             mobileBrand,
//             aiPrompt,
//             instructions,
//             plainText,
//             plainTextFont,
//             plainTextStyle,
//             plainTextColor,
//             plainTextSize,
//             plainTextAlign,
//             textArt,
//             textArtStyle,
//             textArtColor,
//             textArtStroke,
//             textArtType,
//             elements,
//         });
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-500 p-4">
//             <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4">

//                 {/* ManipulationBox for handling added elements */}
//                 <div className="border-of-div-wrapper w-full max-w-md md:max-w-xl lg:max-w-2xl mb-4 md:mb-0">
//                     <div className="border-of-div h-full">
//                         <div className="content p-4">
//                             <ManipulationBox elements={elements} setElements={setElements} />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Form Section for adding text/images */}
//                 <form className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg" onSubmit={handleSubmit}>
//                     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Design Your Case</h2>

//                     {/* Mobile Brand Selection */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Brand</label>
//                         <select
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={mobileBrand}
//                             onChange={(e) => setMobileBrand(e.target.value)}
//                         >
//                             <option value="">Select Brand</option>
//                             <option value="iphone">iPhone</option>
//                             <option value="samsung">Samsung</option>
//                             <option value="google-pixel">Google Pixel</option>
//                         </select>
//                     </div>

//                     {/* Mobile Models Display */}
//                     {mobileBrand === 'iphone' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="iphone-15-pro-max">iPhone 15 Pro Max</option>
//                                 <option value="iphone-14-pro-max">iPhone 14 Pro Max</option>
//                             </select>
//                         </div>
//                     )}
//                     {mobileBrand === 'samsung' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="samsung-s24-ultra">Samsung S24 Ultra</option>
//                                 <option value="samsung-s23-ultra">Samsung S23 Ultra</option>
//                             </select>
//                         </div>
//                     )}
//                     {mobileBrand === 'google-pixel' && (
//                         <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Mobile Model</label>
//                             <select className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200">
//                                 <option value="google-pixel-8-pro">Google Pixel 8 Pro</option>
//                                 <option value="google-pixel-7-pro">Google Pixel 7 Pro</option>
//                             </select>
//                         </div>
//                     )}

//                     {/* Upload Image Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Upload Image</label>
//                         <input
//                             type="file"
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             onChange={handleImageUpload}
//                         />
//                     </div>

//                     {/* Add Text Toggles */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Add Text</label>
//                         <div className="flex items-center gap-4">
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     checked={showPlainText}
//                                     onChange={() => setShowPlainText(!showPlainText)}
//                                     className="form-checkbox h-4 w-4 text-purple-600"
//                                 />
//                                 <span className="text-xs sm:text-sm md:text-base">Plain Text</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     checked={showTextArt}
//                                     onChange={() => setShowTextArt(!showTextArt)}
//                                     className="form-checkbox h-4 w-4 text-purple-600"
//                                 />
//                                 <span className="text-xs sm:text-sm md:text-base">Text Art</span>
//                             </label>
//                         </div>
//                     </div>

//                     {/* Plain Text Section */}
//                     {showPlainText && (
//                         <div className="space-y-4 mb-4">
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainText}
//                                     onChange={(e) => setPlainText(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextFont}
//                                     onChange={(e) => setPlainTextFont(e.target.value)}
//                                 >
//                                     <option value="">Select Font</option>
//                                     <option value="Arial">Arial</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Style</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextStyle}
//                                     onChange={(e) => setPlainTextStyle(e.target.value)}
//                                 >
//                                     <option value="">Select Style</option>
//                                     <option value="Bold">Bold</option>
//                                     <option value="Italic">Italic</option>
//                                     <option value="Curved">Curved</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
//                                 <input
//                                     type="color"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextColor}
//                                     onChange={(e) => setPlainTextColor(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Size</label>
//                                 <input
//                                     type="number"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextSize}
//                                     onChange={(e) => setPlainTextSize(e.target.value)}
//                                     placeholder="Font Size"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Horizontal Alignment</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={plainTextAlign}
//                                     onChange={(e) => setPlainTextAlign(e.target.value)}
//                                 >
//                                     <option value="">Select Alignment</option>
//                                     <option value="left">Left</option>
//                                     <option value="center">Center</option>
//                                     <option value="right">Right</option>
//                                 </select>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//                                 onClick={handleAddText}
//                             >
//                                 Add Plain Text
//                             </button>
//                         </div>
//                     )}

//                     {/* Text Art Section */}
//                     {showTextArt && (
//                         <div className="space-y-4 mb-4">
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Text</label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArt}
//                                     onChange={(e) => setTextArt(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Font Style</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtStyle}
//                                     onChange={(e) => setTextArtStyle(e.target.value)}
//                                 >
//                                     <option value="">Select Font Style</option>
//                                     <option value="Graffiti">Graffiti</option>
//                                     <option value="Elegant">Elegant</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                             <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Color</label>
//                                 <input
//                                     type="color"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtColor}
//                                     onChange={(e) => setTextArtColor(e.target.value)}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Stroke</label>
//                                 <input
//                                     type="number"
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtStroke}
//                                     onChange={(e) => setTextArtStroke(e.target.value)}
//                                     placeholder="Stroke Width"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Type of Text Art</label>
//                                 <select
//                                     className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                                     value={textArtType}
//                                     onChange={(e) => setTextArtType(e.target.value)}
//                                 >
//                                     <option value="">Select Type</option>
//                                     <option value="Angled">Angled</option>
//                                     <option value="Curve">Curve</option>
//                                     <option value="Top Level">Top Level</option>
//                                     <option value="Bottom Level">Bottom Level</option>
//                                 </select>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//                                 onClick={handleAddTextArt}
//                             >
//                                 Add Text Art
//                             </button>
//                         </div>
//                     )}

//                     {/* AI Image Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">AI Image Generation (Optional)</label>
//                         <input
//                             type="text"
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={aiPrompt}
//                             onChange={(e) => setAiPrompt(e.target.value)}
//                             placeholder="Enter a description..."
//                         />
//                     </div>

//                     {/* Design Instructions Field */}
//                     <div className="mb-4">
//                         <label className="block text-xs sm:text-sm md:text-base font-semibold mb-2">Design Instructions</label>
//                         <textarea
//                             className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
//                             value={instructions}
//                             onChange={(e) => setInstructions(e.target.value)}
//                             placeholder="Any special instructions for your design..."
//                         ></textarea>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full py-2 sm:py-3 md:py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
//                     >
//                         Next: Preview Your Design
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Step1;

import React, { useState } from 'react';
import ManipulationBox from './ManipulationBox.jsx'; // Import ManipulationBox
import './css/Step1.css';

const Step1 = ({ onNext }) => {
    const [mobileBrand, setMobileBrand] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');
    const [instructions, setInstructions] = useState('');

    // Toggle text sections
    const [showPlainText, setShowPlainText] = useState(false);
    const [showTextArt, setShowTextArt] = useState(false);

    // Plain Text States
    const [plainText, setPlainText] = useState('');
    const [plainTextFont, setPlainTextFont] = useState('');
    const [plainTextStyle, setPlainTextStyle] = useState('');
    const [plainTextColor, setPlainTextColor] = useState('#000000'); // Default color
    const [plainTextSize, setPlainTextSize] = useState(16); // Default size
    const [plainTextAlign, setPlainTextAlign] = useState('left');

    // Text Art States
    const [textArt, setTextArt] = useState('');
    const [textArtStyle, setTextArtStyle] = useState('');
    const [textArtColor, setTextArtColor] = useState('#000000'); // Default color
    const [textArtStroke, setTextArtStroke] = useState(1); // Default stroke width
    const [textArtType, setTextArtType] = useState('');

    // Manage elements
    const [elements, setElements] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null); // Track uploaded image details

    // Add image to manipulation box
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imgURL = URL.createObjectURL(file);
            const newImageElement = {
                type: 'image',
                src: imgURL,
                rotation: 0,
                scale: 1,
                id: Date.now(),
                position: { x: 0, y: 0 }
            };
            setElements([...elements, newImageElement]);
            setUploadedImage(file); // Store the uploaded image details
        }
    };

    // Remove uploaded image from both the manipulation box and upload section
    const handleRemoveImage = () => {
        const imageElement = elements.find((el) => el.type === 'image');
        if (imageElement) {
            setElements(elements.filter((el) => el.id !== imageElement.id));
        }
        setUploadedImage(null); // Clear the uploaded image details
    };

    // Add plain text to manipulation box
    const handleAddText = () => {
        if (plainText) {
            setElements([...elements, {
                type: 'text',
                content: plainText,
                font: plainTextFont || 'Arial', // Default font if not selected
                color: plainTextColor || '#000000', // Default color if not selected
                size: plainTextSize || 16, // Default size if not provided
                rotation: 0,
                scale: 1,
                id: Date.now(),
                position: { x: 0, y: 0 },
                align: plainTextAlign || 'left', // Default alignment if not selected
                fontStyle: plainTextStyle === 'Italic' ? 'italic' : 'normal',
                fontWeight: plainTextStyle === 'Bold' ? 'bold' : 'normal'
            }]);
            setPlainText(''); // Reset input
        }
    };

    // Add text art to manipulation box
    const handleAddTextArt = () => {
        if (textArt) {
            setElements([...elements, {
                type: 'textArt',
                content: textArt,
                font: textArtStyle || 'Arial', // Default font if not selected
                color: textArtColor || '#000000', // Default color if not selected
                stroke: textArtStroke || 1, // Default stroke width if not provided
                rotation: 0,
                scale: 1,
                id: Date.now(),
                position: { x: 0, y: 0 }
            }]);
            setTextArt(''); // Reset input
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({
            mobileBrand,
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
            textArtType,
            elements,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-500 p-4">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4">

                {/* ManipulationBox for handling added elements */}
                <div className="border-of-div-wrapper w-full max-w-md md:max-w-xl lg:max-w-2xl mb-4 md:mb-0">
                    <div className="border-of-div h-full">
                        <div className="content p-4">
                            <ManipulationBox elements={elements} setElements={setElements} />
                        </div>
                    </div>
                </div>

                {/* Form Section for adding text/images */}
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

                    {/* Mobile Model Selection */}
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

                        {!uploadedImage ? (
                            // Show file input when no image is uploaded
                            <input
                                type="file"
                                className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm md:text-base bg-gray-200"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        ) : (
                            // Show uploaded image details with "X" button to remove image
                            <div className="flex justify-between items-center border p-2 rounded bg-gray-100">
                                <span className="text-xs sm:text-sm md:text-base">{uploadedImage.name}</span>
                                <button
                                    type="button"
                                    className="text-red-500 text-xs sm:text-sm md:text-base"
                                    onClick={handleRemoveImage}
                                >
                                    ❌
                                </button>
                            </div>
                        )}
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
                                    <option value="left">Left</option>
                                    <option value="center">Center</option>
                                    <option value="right">Right</option>
                                </select>
                            </div>
                            <button
                                type="button"
                                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                                onClick={handleAddText}
                            >
                                Add Plain Text
                            </button>
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
                                    <option value="Angled">Angled</option>
                                    <option value="Curve">Curve</option>
                                    <option value="Top Level">Top Level</option>
                                    <option value="Bottom Level">Bottom Level</option>
                                </select>
                            </div>
                            <button
                                type="button"
                                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                                onClick={handleAddTextArt}
                            >
                                Add Text Art
                            </button>
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









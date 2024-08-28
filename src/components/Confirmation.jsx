import React from 'react';

const Confirmation = ({ orderDetails }) => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-white mb-6">Thank You for Your Purchase!</h2>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold mb-4">Order Number: {orderDetails.orderNumber}</p>
                <p className="text-md text-gray-600 mb-4">
                    Your custom case for the {orderDetails.mobileModel} ({orderDetails.caseType}) has been ordered successfully!
                </p>
                <p className="text-md text-gray-600">Estimated Delivery: {orderDetails.deliveryDate}</p>
            </div>

            <button className="mt-6 px-6 py-3 bg-white text-indigo-500 rounded-full font-semibold shadow-lg hover:bg-indigo-500 hover:text-white transition duration-300">
                Share Your Design
            </button>
        </div>
    );
};

export default Confirmation;

import React, { useState } from 'react';

const Step3 = ({ designData, onFinalize, cartCount, onCartUpdate }) => {
    const [billingInfo, setBillingInfo] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFinalize({ billingInfo, shippingAddress, paymentMethod });
        onCartUpdate(); // Update the cart count when placing the order
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 to-cyan-500 flex justify-center items-center">
            <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Billing Information</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={billingInfo}
                        onChange={(e) => setBillingInfo(e.target.value)}
                        placeholder="Enter billing info..."
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Shipping Address</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        placeholder="Enter shipping address..."
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Payment Method</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="">Select Payment Method</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Step3;

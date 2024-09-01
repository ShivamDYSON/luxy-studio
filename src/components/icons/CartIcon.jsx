// src/icons/CartIcon.js
import React from 'react';

const CartIcon = ({ count }) => {
    return (
        <div className="relative flex items-center">
            {/* Cart Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-gray-800 md:h-6 md:w-6 sm:h-5 sm:w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

            {/* Cart count badge */}
            {count > 0 && (
                <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full sm:w-4 sm:h-4 sm:text-[10px] md:w-4 md:h-4">
                    {count}
                </span>
            )}
        </div>
    );
};

export default CartIcon;

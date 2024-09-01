import React, { useState, useEffect } from 'react';
import CartIcon from './icons/CartIcon';
import { useSpring, animated, config } from 'react-spring';
import Dropdown from './UI_Elemets/dropdown.jsx';

const Navbar = ({ cartCount }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [hoveredSubDropdown, setHoveredSubDropdown] = useState(null);
    // Toggle the sidebar
    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    // Close sidebar on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640 && isSidebarOpen) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSidebarOpen]);

    // Sidebar animation for sliding in and out
    const sidebarAnimation = useSpring({
        transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        config: { tension: 200, friction: 15 }, // Faster animation
        immediate: !isSidebarOpen, // Instantly close sidebar without animation when closing
    });

    // Overlay animation for the transparent shade
    const overlayAnimation = useSpring({
        opacity: isSidebarOpen ? 1 : 0,
        config: { duration: 100 }, // Show overlay instantly
        pointerEvents: isSidebarOpen ? 'auto' : 'none', // Disable pointer events when overlay is hidden
    });

    // Handle the dropdown toggle on button hover only
    const handleDropdownButtonHover = () => {
        setDropdownOpen(true);
    };

    // Close the dropdown after leaving both button and dropdown area
    const handleDropdownLeave = () => {
        setDropdownOpen(false);
    };

    // Handle hovering over a specific mobile brand to show the sub-dropdown
    const handleSubDropdownHover = (brand) => {
        setHoveredSubDropdown(brand);
    };

    // Close sub-dropdown when hovering away
    const closeSubDropdown = () => {
        setHoveredSubDropdown(null);
    };

    // Animation for dropdown
    const dropdownAnimation = useSpring({
        opacity: isDropdownOpen ? 1 : 0,
        transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
        config: { duration: 300 },
    });

    return (
        <header className="bg-white shadow-md varela-round-regular">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Hamburger menu for mobile */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 text-gray-700 relative group"
                        style={{ border: 'none', background: 'transparent' }}
                    >
                        <div className="relative w-6 h-4 flex flex-col justify-between items-start">
                            {/* First Line */}
                            <span
                                className="block h-1 bg-gray-700 w-4 transition-all duration-300 ease-in-out group-hover:w-6"
                                style={{ transitionProperty: 'width' }} // Only transition width
                            />
                            {/* Middle Line */}
                            <span className="block h-1 bg-gray-700 w-6" />
                            {/* Third Line */}
                            <span
                                className="block h-1 bg-gray-700 w-4 transition-all duration-300 ease-in-out group-hover:w-6"
                                style={{ transitionProperty: 'width' }} // Only transition width
                            />
                        </div>
                    </button>
                </div>

                {/* Luxy Store */}
                <div className="flex justify-center sm:justify-start">
                    <a href="/" className="text-xl font-bold">
                        Luxy Store
                    </a>
                </div>

                {/* Navbar Links */}
                <div className="hidden sm:flex items-center space-x-6">
                    <div className="relative" onMouseLeave={handleDropdownLeave}>
                        <button
                            className="relative text-gray-700 font-semibold  hover:text-green-900 hover:underline hover:decoration-indigo-800 transition-all duration-300 ease-in-out p-3 flex items-center space-x-1"
                            onMouseEnter={handleDropdownButtonHover} // Trigger on button hover
                            style={{ border: 'none', background: 'transparent' }}
                        >
                            <span>Mobile Skins</span>
                            <svg
                                className={`ml-2 w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Brahmastra  */}
                        <div className="absolute left-0 top-full h-2 w-full" />

                        {/* Dropdown */}
                        {isDropdownOpen && (
                            <animated.div
                                className="absolute left-0 mt-2 p-4 w-64 bg-white shadow-lg border border-gray-200 rounded-md z-10"
                                style={dropdownAnimation}
                                onMouseEnter={handleDropdownButtonHover} // Keep dropdown open on hover
                                onMouseLeave={handleDropdownLeave} // Close on leaving dropdown
                            >
                                {/* iPhone */}
                                <div
                                    className="p-3 relative"
                                    onMouseEnter={() => handleSubDropdownHover('iPhone')}
                                    onMouseLeave={closeSubDropdown}
                                >
                                    <p className="font-semibold justify-center text-gray-800 hover:decoration-blue-400">iPhone</p>
                                    {hoveredSubDropdown === 'iPhone' && (
                                        <div style={dropdownAnimation} className="absolute left-full top-0 p-3 w-48 bg-white shadow-lg border border-gray-200 rounded-xl z-20">
                                            <ul className="pl-4 py-5 ">
                                                <li className="py-1  hover:text-indigo-600">iPhone 15 Pro Max</li>
                                                <div className="my-3"></div>
                                                <li className="py-1 hover:text-indigo-600">iPhone 14 Pro Max</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Samsung */}
                                <div
                                    className="p-3 relative"
                                    onMouseEnter={() => handleSubDropdownHover('Samsung')}
                                    onMouseLeave={closeSubDropdown}
                                >
                                    <p className="font-semibold justify-center text-gray-800">Samsung</p>
                                    {hoveredSubDropdown === 'Samsung' && (
                                        <div style={dropdownAnimation} className="absolute left-full top-0 p-3 w-48 bg-white shadow-lg border border-gray-200 rounded-xl z-20">
                                            <ul className="pl-4 py-5">
                                                <li className="py-1 hover:text-indigo-600">Samsung S24 Ultra</li>
                                                <div className="my-3"></div>
                                                <li className="py-1 hover:text-indigo-600">Samsung S24</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Google Pixel */}
                                <div
                                    onMouseEnter={() => handleSubDropdownHover('Pixel')}
                                    onMouseLeave={closeSubDropdown}
                                    className="p-3 relative"
                                >
                                    <p className="font-semibold  text-gray-800">Google Pixel</p>
                                    {hoveredSubDropdown === 'Pixel' && (
                                        <div style={dropdownAnimation} className="absolute left-full top-0 p-3 w-48 bg-white shadow-lg border border-gray-200 rounded-xl z-20">
                                            <ul className="pl-4 py-5">
                                                <li className="py-1 hover:text-indigo-600">Google Pixel 8</li>
                                                <div className="my-3"></div>

                                                <li className="py-1 hover:text-indigo-600">Google Pixel 7</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </animated.div>
                        )}

                    </div>
                    <a href="/find-your-device" className="text-gray-700 hover:text-gray-900 font-semibold">
                        Find Your Device
                    </a>
                    <a href="/how-to-apply" className="text-gray-700 hover:text-gray-900 font-semibold">
                        How to Apply
                    </a>
                    <a href="/login" className="text-gray-700 hover:text-gray-900 font-semibold">
                        Login
                    </a>
                </div>

                {/* Cart Icon */}
                <div className="flex items-center justify-end">
                    <div className="relative">
                        <CartIcon count={cartCount} />
                    </div>
                </div>
            </nav>

            {/* Overlay for the transparent shade */}
            <animated.div
                style={overlayAnimation}
                className="fixed inset-0 bg-black bg-opacity-50 z-40" // Overlay immediately appears/disappears
                onClick={toggleSidebar} // Clicking outside closes the sidebar
            />

            {/* Sidebar for Mobile */}
            <animated.div
                style={sidebarAnimation}
                className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50"
            >
                <div className="flex items-center justify-between p-4">
                    <a href="/" className="text-xl font-bold">
                        Luxy Store
                    </a>
                    <button
                        onClick={toggleSidebar} // Close instantly when clicking X
                        className="text-gray-700"
                    >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <nav className="mt-8 px-4 ">
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="block py-2 text-gray-700 font-semibold"
                    >
                        Mobile Skins
                    </button>

                    {isDropdownOpen && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Dropdown label="iPhone" >
                                <div className="p-2">
                                    <ul className="pl-4">
                                        <li className="py-1 hover:text-indigo-600">iPhone 15 Pro Max</li>
                                        <li className="py-1 hover:text-indigo-600">iPhone 14 Pro Max</li>
                                    </ul>
                                </div>
                            </Dropdown>

                            <Dropdown label="Samsung" className="z-50 ">
                                <div className="p-2">
                                    <ul className="pl-4">
                                        <li className="py-1 hover:text-indigo-600">Samsung S24 Ultra</li>
                                        <li className="py-1 hover:text-indigo-600">Samsung S24</li>
                                    </ul>
                                </div>
                            </Dropdown>

                            <Dropdown label="Google Pixel" className="z-50">
                                <div className="p-2">
                                    <ul className="pl-4">
                                        <li className="py-1 hover:text-indigo-600">Google Pixel 8</li>
                                        <li className="py-1 hover:text-indigo-600">Google Pixel 7</li>
                                    </ul>
                                </div>
                            </Dropdown>
                        </div>
                    )}
                    <a href="/find-your-device" className="block py-2 text-gray-700 font-semibold">
                        Find Your Device
                    </a>
                    <a href="/how-to-apply" className="block py-2 text-gray-700 font-semibold">
                        How to Apply
                    </a>
                    <a href="/login" className="block py-2 text-gray-700 font-semibold">
                        Login
                    </a>
                </nav>

            </animated.div>
        </header>
    );
};

export default Navbar;

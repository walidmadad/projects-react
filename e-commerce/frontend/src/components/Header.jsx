// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-lg">
            <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-3xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300">
                    E-Shop
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">Home</Link>
                    <Link to="/shop" className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">Shop</Link>
                    <Link to="/about" className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">About</Link>
                    <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">Contact</Link>
                </nav>

                {/* Actions (Search, Cart, Profile) */}
                <div className="flex items-center space-x-6">
                    {/* Search Icon */}
                    <button className="text-gray-700 hover:text-blue-600">
                        <i className="fas fa-search text-xl"></i>
                    </button>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
                        <i className="fas fa-shopping-cart text-xl"></i>
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    </Link>

                    {/* Profile (Login) */}
                    <Link to="/login" className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">
                        Login
                    </Link>

                    {/* Sign Up Link */}
                    <Link to="/signup" className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 p-4 space-y-4">
                    <Link to="/" className="block text-lg text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/shop" className="block text-lg text-gray-700 hover:text-blue-600">Shop</Link>
                    <Link to="/about" className="block text-lg text-gray-700 hover:text-blue-600">About</Link>
                    <Link to="/contact" className="block text-lg text-gray-700 hover:text-blue-600">Contact</Link>
                    <Link to="/login" className="block text-lg text-gray-700 hover:text-blue-600">Login</Link>
                    <Link to="/signup" className="block text-lg text-gray-700 hover:text-blue-600">Sign Up</Link>
                </div>
            )}
        </header>
    );
};

export default Header;

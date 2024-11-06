// src/components/Home.js
import React, { useContext } from 'react';
import { useAuth } from '../Context/AuthContext';  // Import useAuth here
import Shop from './Shop';
import Cart from './Cart';

const Home = () => {
    const { isAuthenticated, login, logout, user } = useAuth();  // Use useAuth to access the authentication state

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Website</h1>

            {isAuthenticated ? (
                <div className="text-center">
                    <p className="text-lg">Welcome, {user?.name}!</p>
                    <button onClick={logout} className="text-red-600 underline mt-4">Logout</button>
                </div>
            ) : (
                <div className="text-center">
                    <button
                        onClick={() => login({ name: 'User' })}
                        className="text-blue-600 underline"
                    >
                        Login
                    </button>
                </div>
            )}

            <div className="mt-8">
                <Shop />
            </div>

            {isAuthenticated && (
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
                    <Cart />
                </div>
            )}
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login({ email, password });
            alert("Login successful!");
        } catch (error) {
            alert("Login error");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
            </form>
            <div className="text-center mt-4">
                <p>Don’t have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;

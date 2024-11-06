import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';  // Importez useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Initialisez le hook de navigation

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('/auth/login', { email, password })
            .then(response => {
                // Si la connexion est réussie, vous pouvez rediriger l'utilisateur
                console.log('Connexion réussie');

                // Si vous avez un token ou une donnée à stocker dans le localStorage
                // localStorage.setItem('token', response.data.token);

                // Rediriger l'utilisateur vers la page d'accueil ou une autre page
                navigate('/home');  // Redirection vers la page d'accueil, ou la page que vous souhaitez
            })
            .catch(error => {
                console.error('Erreur de connexion', error);
            });
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <label className="block text-lg text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label className="block text-lg text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Your Password"
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

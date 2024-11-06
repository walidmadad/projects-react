import React, { useState } from 'react';
import authService from '../../services/authService';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // Vérification des mots de passe
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas !");
            return;
        }

        // Données d'inscription
        const userData = {
            name,
            email,
            password
        };

        try {
            await authService.register(userData);
            setSuccess("Inscription réussie !");
            setError('');
        } catch (error) {
            setError("Erreur lors de l'inscription. Veuillez réessayer.");
            setSuccess('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Inscription</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom complet"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirmer le mot de passe"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Inscription
                </button>
            </form>
        </div>
    );
};

export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');  // State pour le message de succès

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Vérifier si les mots de passe correspondent
        if (password !== confirmPassword) {
            setErrorMessage("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                firstName, lastName, email, password, dateOfBirth
            });
            // Si l'utilisateur est créé avec succès, on met à jour le message de succès
            setSuccessMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            setErrorMessage('');  // Réinitialiser le message d'erreur si l'inscription a réussi
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage(error.response.data.message);  // Message d'erreur pour email existant
            } else {
                setErrorMessage('Une erreur s\'est produite. Veuillez réessayer plus tard.');
            }
            setSuccessMessage('');  // Réinitialiser le message de succès en cas d'erreur
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/3 w-full">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Créer un Compte</h2>

                {/* Affichage du message de succès */}
                {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

                {/* Affichage du message d'erreur */}
                {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    {/* Champs du formulaire */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="firstName">Prénom</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="lastName">Nom</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">Date de Naissance</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                            required
                            className="mr-2"
                        />
                        <label htmlFor="terms" className="text-gray-700">
                            J'accepte les <Link to="/terms" className="text-blue-600 hover:underline">termes et conditions</Link>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
                    >
                        S'inscrire
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Déjà un compte ?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">Se connecter</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;

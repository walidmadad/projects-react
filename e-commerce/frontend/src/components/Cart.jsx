import React, { useContext } from 'react';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext';  // Importez useAuth au lieu de AuthContext

const Cart = () => {
    const { cartItems } = useCart();
    const { isAuthenticated } = useAuth();  // Utilisez useAuth pour accéder à l'état d'authentification

    if (!isAuthenticated) {
        return (
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Votre Panier</h1>
                <p className="text-center">Veuillez vous connecter pour accéder à votre panier.</p>
            </div>
        );
    }

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Votre Panier</h1>
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
                        <span className="font-semibold">{item.name}</span>
                        <span>${item.price} x {item.quantity}</span>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Passer la commande
                </button>
            </div>
        </div>
    );
};

export default Cart;

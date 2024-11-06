import React from 'react';
import { useCart } from '../Context/CartContext'; // Assurez-vous que le chemin est correct

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-xl font-bold mt-2">${product.price}</p>
            <button onClick={handleAddToCart} className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;

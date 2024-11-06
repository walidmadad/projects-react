// src/components/Shop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')  // Pas besoin de spécifier localhost:5000
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des produits', error);
            });
    }, []);

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Shop</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;

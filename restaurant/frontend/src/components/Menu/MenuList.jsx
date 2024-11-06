import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/menu')
            .then((response) => setMenuItems(response.data))
            .catch((error) => console.error('Erreur lors de la récupération du menu:', error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                    <div key={item._id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
                        <h2 className="text-xl font-semibold text-blue-600">{item.name}</h2>
                        <p className="text-gray-700 mt-2">{item.description}</p>
                        <p className="text-lg font-semibold text-green-600 mt-4">{item.price} €</p>
                        <p className="text-sm text-gray-500 mt-1">Catégorie : {item.category}</p>
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover mt-4 rounded-md"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;

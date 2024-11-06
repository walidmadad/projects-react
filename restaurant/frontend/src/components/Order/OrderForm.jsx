import React, { useState, useEffect } from 'react';
import menuService from '../../services/menuService';
import orderService from '../../services/orderService';

const OrderForm = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const items = await menuService.getMenuItems();
            setMenuItems(items);
        };
        fetchMenuItems();
    }, []);

    const handleSelectItem = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        try {
            await orderService.createOrder(selectedItems);
            alert("Commande réussie !");
            setSelectedItems([]);
        } catch (error) {
            alert("Erreur lors de la commande");
        }
    };

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Passer une commande</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {menuItems.map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow hover:shadow-md">
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <button
                            onClick={() => handleSelectItem(item)}
                            className="mt-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Ajouter
                        </button>
                    </div>
                ))}
            </div>
            <button
                onClick={handleOrderSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Valider la commande
            </button>
        </div>
    );
};

export default OrderForm;

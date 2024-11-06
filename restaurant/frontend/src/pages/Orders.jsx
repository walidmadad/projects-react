import React, { useEffect, useState } from 'react';
import orderService from '../services/orderService';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const userOrders = await orderService.getUserOrders();
                setOrders(userOrders);
            } catch (error) {
                console.error("Erreur lors du chargement des commandes", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Mes Commandes</h2>
            {loading ? (
                <p>Chargement des commandes...</p>
            ) : (
                <div className="space-y-4">
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <div key={order._id} className="p-4 border rounded shadow hover:shadow-md">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">Commande #{order._id}</h3>
                                    <p className="text-gray-600">Total: ${order.total.toFixed(2)}</p>
                                </div>
                                <p className="text-gray-500">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                <ul className="mt-2 list-disc list-inside">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="text-gray-700">
                                            {item.name} - ${item.price.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">Vous n'avez aucune commande.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Orders;

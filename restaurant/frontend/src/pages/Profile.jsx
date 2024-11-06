import React, { useEffect, useState } from 'react';
import userService from '../services/userService';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await userService.getUserProfile();
            setUserData(data);
        };
        fetchProfile();
    }, []);

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
            {userData ? (
                <>
                    <h2 className="text-2xl font-semibold mb-4">Profil</h2>
                    <p><strong>Nom :</strong> {userData.name}</p>
                    <p><strong>Email :</strong> {userData.email}</p>
                    <p><strong>Commandes passées :</strong></p>
                    <ul className="list-disc list-inside">
                        {userData.orders.map((order) => (
                            <li key={order._id} className="text-gray-700">
                                Commande #{order._id} - Total : ${order.total}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    );
};

export default Profile;

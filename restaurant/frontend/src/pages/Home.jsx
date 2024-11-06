import React from 'react';

const Home = () => (
    <div className="bg-gray-100 min-h-screen">
        {/* Section d'Introduction */}
        <div className="text-center py-16 bg-cyan-950 text-white">
            <h1 className="text-5xl font-bold mb-4">Bienvenue chez Le Gourmet Voyageur</h1>
            <p className="text-lg mb-6">Venez savourer des plats exquis, inspirés des saveurs du monde entier, dans un cadre chaleureux et convivial.</p>
            <a href="/menu" className="bg-yellow-500 text-gray-800 text-lg py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300">
                Découvrez notre Menu
            </a>
        </div>

        {/* Section À Propos */}
        <div className="container mx-auto py-16 px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">À Propos de Nous</h2>
            <p className="text-lg text-gray-700">
                Le Gourmet Voyageur est un restaurant où chaque plat raconte une histoire. Nous combinons des ingrédients frais et locaux
                avec des recettes du monde entier pour vous offrir une expérience culinaire inoubliable.
            </p>
        </div>

        {/* Section Images */}
        <div className="container mx-auto py-16 px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Nos Plats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <img src="../../src/assets/spaghettisbolognaises.jpg" alt="Plat 1" className="w-full h-72 object-cover rounded-lg shadow-lg" />
                <img src="../../src/assets/fruitdemer.webp" alt="Plat 2" className="w-full h-72 object-cover rounded-lg shadow-lg" />
                <img src="../../src/assets/pizza.webp" alt="Plat 3" className="w-full h-72 object-cover rounded-lg shadow-lg" />
            </div>
        </div>

        {/* Section Témoignages */}
        <div className="bg-gray-200 py-16 text-center">
            <h2 className="text-3xl font-semibold mb-6">Ce Que Nos Clients Disent</h2>
            <div className="container mx-auto flex flex-wrap justify-center gap-10">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <p className="text-lg text-gray-600 mb-4">"Une expérience culinaire incroyable ! Chaque plat était délicieux et bien présenté."</p>
                    <p className="font-semibold text-gray-800">Marie L.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <p className="text-lg text-gray-600 mb-4">"Le service était exceptionnel et l'ambiance parfaite pour une soirée entre amis. Je reviendrai sans hésiter !"</p>
                    <p className="font-semibold text-gray-800">Paul D.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <p className="text-lg text-gray-600 mb-4">"Une découverte magnifique ! Des plats raffinés et une présentation soignée. Je recommande vivement."</p>
                    <p className="font-semibold text-gray-800">Julie T.</p>
                </div>
            </div>
        </div>

        {/* Section Contact */}
        <div className="container mx-auto py-16 px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Nous Contacter</h2>
            <p className="text-lg text-gray-700 mb-4">Vous avez des questions ou vous souhaitez réserver une table ? Contactez-nous !</p>
            <a href="mailto:contact@legourmetvoyageur.com" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition duration-300">
                Envoyer un Email
            </a>
        </div>
    </div>
);

export default Home;

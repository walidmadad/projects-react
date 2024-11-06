// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            {/* Titre de la section */}
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

            {/* Section introductive */}
            <div className="text-lg text-gray-700 mb-8">
                <p>
                    We are a leading e-commerce platform offering a wide variety of products. Our mission is to provide high-quality products at affordable prices.
                </p>
                <p className="mt-4">
                    We are committed to delivering exceptional customer service and continuously improving our offerings to meet the needs of our diverse customer base.
                </p>
            </div>

            {/* Image d'équipe */}
            <div className="mb-8">
                <img
                    src=""
                    alt="Our Team"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Section valeurs de l'entreprise */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Our Core Values</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li><strong>Customer Satisfaction:</strong> We prioritize the needs and satisfaction of our customers above all else.</li>
                    <li><strong>Quality Assurance:</strong> We only offer products that meet the highest quality standards.</li>
                    <li><strong>Integrity:</strong> We believe in transparency and honesty in all our business dealings.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;

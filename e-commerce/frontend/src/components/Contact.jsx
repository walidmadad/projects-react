// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-lg text-gray-700">Name</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-lg text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Email" />
                </div>
                <div>
                    <label className="block text-lg text-gray-700">Message</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;

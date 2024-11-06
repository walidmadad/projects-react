import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CartProvider } from './Context/CartContext';
import {AuthContext, AuthProvider} from "./Context/AuthContext"; // Assurez-vous que le chemin est correct

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

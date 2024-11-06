// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Point de base pour les routes API
    withCredentials: true, // Pour envoyer des cookies avec les requêtes, si nécessaire
});

export default instance;

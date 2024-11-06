import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const register = async (userData) => {
    return await axios.post(`${API_URL}/auth/register`, userData);
};

const login = async (userData) => {
    return await axios.post(`${API_URL}/auth/login`, userData);
};

export default {
    register,
    login
};

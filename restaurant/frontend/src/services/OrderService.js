import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

const getUserOrders = async () => {
    const response = await axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

const orderService = { getUserOrders };
export default orderService;

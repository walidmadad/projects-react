import axios from 'axios';

const API_URL = 'http://localhost:5000/api/menu';

const getMenuItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const menuService = { getMenuItems };
export default menuService;

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const getUserProfile = async () => {
    const response = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

const userService = { getUserProfile };
export default userService;

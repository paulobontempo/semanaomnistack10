import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omni-stack-10-backend.herokuapp.com',
});

export default api;
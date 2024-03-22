import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: ''
});

axiosInstance.interceptors.request.use(config => {
    config.withCredentials = true; // Set withCredentials for all requests
    return config;
});

export default axiosInstance;

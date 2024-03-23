import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://https://drab-red-codfish-cape.cyclic.app/'
});

axiosInstance.interceptors.request.use(config => {
    config.withCredentials = true; // Set withCredentials for all requests
    return config;
});

export default axiosInstance;

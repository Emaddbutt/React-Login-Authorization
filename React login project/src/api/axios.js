import axios from 'axios';

const axiosInstance = axios.create();
const API_URL = '';
axiosInstance.interceptors.request.use(config => {
    config.withCredentials = true; // Set withCredentials for all requests
    return config;
});

const sendRequest = async (urlObject, payload, type) => {
    try {
        const response = await axiosInstance({
            method: urlObject.method,
            url: `${API_URL}/${urlObject.endpoint}/${type}`,
            data: payload
        });
        return response.data;
    } catch (error) {
        // Handle errors here
        throw error;
    }
};

export default sendRequest;

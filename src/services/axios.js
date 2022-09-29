import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'));

const axiosInterceptorHeaders = () => {
    axios.interceptors.request.use((config) => {
        config.headers['Authorization'] = token ? `Bearer ${token}` : 'Basic';
        return config;
    });
};

export default axiosInterceptorHeaders;

import axios from 'axios';

let store;

export const injectStore = (_store) => {
    store = _store;
};

/**
 * Interceptors for set headers authorization if token exist
 */
axios.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    config.headers.authorization = token ? `Bearer ${token}` : 'Bazic';
    return config;
});

import axios from 'axios';

let store;

export const injectStore = (_store) => {
    console.log('store', store);
    store = _store;
};

axios.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    config.headers.authorization = token ? `Bearer ${token}` : 'Bazic';
    return config;
});

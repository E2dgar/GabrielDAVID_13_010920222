import axios from 'axios';

let store;

export const injectStore = (_store) => {
    store = _store;
};

axios.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${store.getState().auth.token}`;
    return config;
});

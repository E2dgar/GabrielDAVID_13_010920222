import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/auth/loginSlice';

export default configureStore({
    reducer: {
        auth: loginSlice
    }
});

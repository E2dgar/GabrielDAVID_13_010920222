import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import rememberMeSlice from '../features/rememberMe/rememberMeSlice';
import userSlice from '../features/user/userSlice';

export default configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        remember: rememberMeSlice
    }
});

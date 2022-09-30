import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/auth/loginSlice';
import userSlice from '../features/user/userSlice';

export default configureStore({
    reducer: {
        auth: loginSlice,
        user: userSlice
    }
});

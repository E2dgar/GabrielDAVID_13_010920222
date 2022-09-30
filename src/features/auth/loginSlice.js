import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import axios from 'axios';

const initialState = {
    status: 'idle',
    error: null,
    token: null
};
export const login = createAsyncThunk('auth/login', async (payload) => {
    console.log('payload', payload);
    const response = await axios.post(ROUTES.LOGIN, payload, { timeout: 5000 });
    return response.data;
});

const loginSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        rememberMe: (state) => {
            if (localStorage.getItem('token'))
                state.token = JSON.parse(localStorage.getItem('token'));
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.token = null;
            state.status = 'idle';
            // state.user.profil.firstName = 'delete';
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem(
                    'token',
                    JSON.stringify(action.payload.body.token)
                );

                state.token = action.payload.body.token;
                state.status = 'succeeded';

                console.log('state siccess', action.payload);
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                console.log('error', action.error.message);
            });
    }
});

export const { rememberMe, logout } = loginSlice.actions;

export default loginSlice.reducer;

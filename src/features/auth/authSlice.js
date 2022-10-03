import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import axios from 'axios';

const initialState = {
    authStatus: 'idle',
    authError: null,
    token: null,
    userStatus: 'idle',
    userError: null,
    profil: {
        firstName: '',
        lastName: ''
    }
};

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await axios.post(ROUTES.LOGIN, payload, { timeout: 5000 });
    return response.data;
});

export const getProfil = createAsyncThunk('user/getProfil', async () => {
    const response = await axios.post(ROUTES.PROFIL);
    return response.data;
});

export const updateProfil = createAsyncThunk(
    'user/updateProfil',
    async (payload) => {
        const response = await axios.put(ROUTES.PROFIL, payload);
        return response.data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            if (localStorage.getItem('isRemember')) {
                localStorage.removeItem('isRemember');
            }
            localStorage.removeItem('token');
            state.token = null;
            state = initialState;
        },
        rememberMe: (state) => {
            state.authStatus = 'succeeded';
            state.token = JSON.parse(localStorage.getItem('token'));
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.authStatus = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem(
                    'token',
                    JSON.stringify(action.payload.body.token)
                );

                state.token = action.payload.body.token;
                state.authStatus = 'succeeded';
            })
            .addCase(login.rejected, (state) => {
                state.authStatus = 'failed';
            })
            .addCase(getProfil.pending, (state) => {
                state.userStatus = 'loading';
            })
            .addCase(getProfil.fulfilled, (state, action) => {
                state.userStatus = 'succeeded';
                state.profil.firstName = action.payload.body.firstName;
                state.profil.lastName = action.payload.body.lastName;
            })
            .addCase(getProfil.rejected, (state) => {
                state.userStatus = 'failed';
            })
            /* Refaire un getProfil ou recup depuis le PUT ??*/
            .addCase(updateProfil.pending, (state) => {
                state.profil.updateStatus = 'loading';
            })
            .addCase(updateProfil.fulfilled, (state, action) => {
                state.profil = {
                    firstName: action.payload.body.firstName,
                    lastName: action.payload.body.lastName
                };
            })
            .addCase(updateProfil.rejected, (state) => {
                state.profil.updateStatus = 'failed';
            });
    }
});

export const { rememberMe, logout } = authSlice.actions;

export default authSlice.reducer;

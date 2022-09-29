import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const login = createAsyncThunk('auth/login', async (payload) => {
    console.log('payload', payload);
    const response = await axios.post(ROUTES.LOGIN, payload);
    return response.data;
});

export const getProfil = createAsyncThunk('auth/getProfil', async () => {
    const response = await axios.post(ROUTES.PROFIL);
    return response.data;
});

const loginSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'idle',
        error: null,
        token: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.body.token;
                localStorage.setItem(
                    'token',
                    JSON.stringify(action.payload.body.token)
                );
                /**
                 * logic pour loaclStorag
                 * logic pour Header authorization
                 */

                console.log('state siccess', action.payload);
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                console.log('error', action.error.message);
            })
            .addCase(getProfil.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfil.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('prfil', action.payload);
            })
            .addCase(getProfil.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { logTest } = loginSlice.actions;

export default loginSlice.reducer;

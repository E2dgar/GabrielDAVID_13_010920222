import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import axios from 'axios';

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

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'idle',
        error: null,
        profil: {
            firstName: '',
            lastName: ''
        }
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProfil.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfil.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.profil.firstName = action.payload.body.firstName;
                state.profil.lastName = action.payload.body.lastName;
            })
            .addCase(getProfil.rejected, (state) => {
                state.status = 'failed';
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

export default userSlice.reducer;

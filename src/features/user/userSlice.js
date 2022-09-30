import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import axios from 'axios';

export const getProfil = createAsyncThunk('user/getProfil', async () => {
    const response = await axios.post(ROUTES.PROFIL);
    return response.data;
});

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

                console.log('prfil', action.payload);
            })
            .addCase(getProfil.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default userSlice.reducer;

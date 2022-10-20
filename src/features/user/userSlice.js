import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import { post, put } from '../../api/http';

const initialState = {
    status: 'idle',
    error: null,
    profile: {
        firstName: '',
        lastName: ''
    }
};

/*Async thunk for get profil*/
export const getProfil = createAsyncThunk('user/getProfil', async () => {
    return await post(ROUTES.PROFIL);
});

/*Async thunk for update profil*/
export const updateProfil = createAsyncThunk(
    'user/updateProfil',
    async (payload) => {
        return put(ROUTES.PROFIL, payload);
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        /*Clear state*/
        userLogout: (state) => {
            state.status = 'idle';
            state.error = null;
            state.profile = {
                firstName: '',
                lastName: ''
            };
        }
    },
    extraReducers(builder) {
        builder
            /* Profil get */
            .addCase(getProfil.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfil.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.profile.firstName = action.payload.body.firstName;
                state.profile.lastName = action.payload.body.lastName;
            })
            .addCase(getProfil.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            /* Profil update */
            .addCase(updateProfil.pending, (state) => {
                state.profile.status = 'loading';
            })
            .addCase(updateProfil.fulfilled, (state, action) => {
                state.profile = {
                    firstName: action.payload.body.firstName,
                    lastName: action.payload.body.lastName
                };
                state.profile.updateError = null;
            })
            .addCase(updateProfil.rejected, (state, action) => {
                state.profile.status = 'failed';
                state.profile.UpdateError = action.error;
            });
    }
});

export const { userLogout } = userSlice.actions;

export default userSlice.reducer;

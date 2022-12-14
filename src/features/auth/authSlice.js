import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import { post } from '../../api/http';

const initialState = {
    status: 'idle',
    error: null,
    token: null
};

/*Async Thunk for login*/
export const login = createAsyncThunk('auth/login', async (payload) => {
    return await post(ROUTES.LOGIN, payload);
});

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        /* Reset the state*/
        logout: (state) => {
            state.status = 'idle';
            state.error = null;
            state.token = null;
        },
        /*Set auth ok when remember */
        rememberMe: (state) => {
            state.status = 'succeeded';
            state.error = null;
            state.token = localStorage.getItem('token');
        }
    },
    extraReducers(builder) {
        builder
            /*Login post */
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem(
                    'token',
                    JSON.stringify(action.payload.body.token)
                );
                state.token = JSON.stringify(action.payload.body.token);
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
    }
});

export const { logout, rememberMe } = authSlice.actions;

export default authSlice.reducer;

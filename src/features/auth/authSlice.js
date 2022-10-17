import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../../constants/api';
import { post, put } from '../../api/http';
// import { rememberMe } from '../rememberMe/rememberMeSlice';

const initialState = {
    authStatus: 'idle',
    authError: null,
    // token: null,
    userStatus: 'idle',
    userError: null,
    profil: {
        firstName: '',
        lastName: ''
    }
};

// export const login = createAsyncThunk('auth/login', async (payload) => {
//     const response = await axios.post(ROUTES.LOGIN, payload, { timeout: 5000 });
//     return response.data;
// });

export const login = createAsyncThunk('auth/login', async (payload) => {
    return await post(ROUTES.LOGIN, payload);
});

// export const getProfil = createAsyncThunk('user/getProfil', async () => {
//     const response = await axios.post(ROUTES.PROFIL);
//     return response.data;
// });
export const getProfil = createAsyncThunk('user/getProfil', async () => {
    return await post(ROUTES.PROFIL);
});

// export const updateProfil = createAsyncThunk(
//     'user/updateProfil',
//     async (payload) => {
//         const response = await axios.put(ROUTES.PROFIL, payload);
//         return response.data;
//     }
// );
export const updateProfil = createAsyncThunk(
    'user/updateProfil',
    async (payload) => {
        return put(ROUTES.PROFIL, payload);
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
            // state.token = null;
            state.authStatus = 'idle';
            state.profil = {
                firstName: '',
                lastName: ''
            };
            state.userStatus = 'idle';
        },
        rememberMe: (state) => {
            state.authStatus = 'succeeded';
            // state.token = JSON.parse(localStorage.getItem('token'));
        }
    },
    extraReducers(builder) {
        builder
            /*Login post */
            .addCase(login.pending, (state) => {
                state.authStatus = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem(
                    'token',
                    JSON.stringify(action.payload.body.token)
                );

                // state.token = action.payload.body.token;
                state.authStatus = 'succeeded';
            })
            .addCase(login.rejected, (state, action) => {
                console.log('error', action.error);
                state.authStatus = 'failed';
            })
            /* Profil get */
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
            /* Profil update */
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

export const { logout, rememberMe } = authSlice.actions;

export default authSlice.reducer;

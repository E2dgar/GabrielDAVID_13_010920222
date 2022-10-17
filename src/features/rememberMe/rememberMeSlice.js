import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rememberMe: false
};

const rememberSlice = createSlice({
    name: 'remember',
    initialState: initialState,
    reducers: {
        rememberState: (state) => {
            state.rememberMe = true;
        },
        storageLogout: (state) => {
            localStorage.removeItem('token');
            state.rememberMe = true;
        }
    }
});

export const { rememberState, storageLogout } = rememberSlice.actions;

export default rememberSlice.reducer;

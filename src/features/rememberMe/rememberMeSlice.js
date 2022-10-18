import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rememberMe: false
};

const rememberSlice = createSlice({
    name: 'remember',
    initialState: initialState,
    reducers: {
        /*Set remember */
        rememberState: (state) => {
            state.rememberMe = true;
        },
        /*Clear remember*/
        storageLogout: (state) => {
            localStorage.removeItem('token');
            state.rememberMe = false;
        }
    }
});

export const { rememberState, storageLogout } = rememberSlice.actions;

export default rememberSlice.reducer;

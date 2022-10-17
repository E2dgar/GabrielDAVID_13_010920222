import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rememberMe: false
};

const rememberSlice = createSlice({
    name: 'remember',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            if (localStorage.getItem('isRemember')) {
                localStorage.removeItem('isRemember');
            }
            localStorage.removeItem('token');
            // state.token = null;
        }
    }
});

export const { logout, findToken } = rememberSlice.actions;

export default rememberSlice.reducer;

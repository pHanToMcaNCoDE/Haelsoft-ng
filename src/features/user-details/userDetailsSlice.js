import { createSlice } from '@reduxjs/toolkit';
import secureLocalStorage from 'react-secure-storage';

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        user: secureLocalStorage.getItem('user') ? JSON.parse(secureLocalStorage.getItem('user')) : null,
        token: secureLocalStorage.getItem('token') || null,
        isAuthenticated: !!secureLocalStorage.getItem('token')
    },
    
    reducers: {
        setAuth: (state, action) => {
            const { token, user } = action.payload;
            state.token = token;
            state.user = user;
            state.isAuthenticated = !!token;

            if (token) {
                secureLocalStorage.setItem('token', token);
                secureLocalStorage.setItem('user', JSON.stringify(user));
            }
        },

        
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.tokenExpiration = null;
            secureLocalStorage.removeItem('token');
            secureLocalStorage.removeItem('user');
        }
    }
});

export const { setAuth, logoutUser } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
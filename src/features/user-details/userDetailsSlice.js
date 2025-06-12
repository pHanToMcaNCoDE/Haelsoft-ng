import { clearCookieAuth, saveAuthToCookie } from "@/app/utils/authUtils";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  token: null,
  user: {},
  isAuthenticated: false,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = Boolean(token);


      if (typeof window !== 'undefined') {
        saveAuthToCookie({ token, user });
      }

    },

    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;


      if (typeof window !== 'undefined') {
        clearCookieAuth();
      }
    },


    restoreAuthFromSession: (state, action) => {
      const { token, user } = action.payload;
      if (token) {
        state.token = token;
        state.user = user;
        state.isAuthenticated = true;
      }
    }
  },
});

export const { setAuth, logout, restoreAuthFromSession } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
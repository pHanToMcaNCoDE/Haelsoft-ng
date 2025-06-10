import { configureStore } from '@reduxjs/toolkit';
import authReducer from './LoggedInSlice';
import cartReducer from '../features/cart/cartSlice';
import coursesReducer from "../features/courses/courseSlice"
import userDetailsReducer from "../features/user-details/userDetailsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    courses: coursesReducer,
    userDetails: userDetailsReducer
  },
  // devTools: process.env.NODE_ENV !== "production",
});

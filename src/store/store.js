import { configureStore } from '@reduxjs/toolkit';
import authReducer from './LoggedInSlice';
import cartReducer from '../features/cart/cartSlice';
import coursesReducer from "../features/courses/courseSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    courses:coursesReducer
  },
  // devTools: process.env.NODE_ENV !== "production",
});

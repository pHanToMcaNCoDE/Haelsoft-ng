import { Bounce, toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import secureLocalStorage from 'react-secure-storage';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: { 
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;


import { Bounce, toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import secureLocalStorage from 'react-secure-storage';

const saveCartToLocalStorage = (cartItems) => {
  secureLocalStorage.setItem('CartItems', cartItems);
};

const initialState = {
  cartItems: secureLocalStorage.getItem('CartItems') || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.course_id === action.payload.course_id);
      console.log("existingItem",state.cartItems);
      if (!existingItem) {
        // toast.success('Course Added to cart!', {
        //   transition: Bounce
        // })
        state.cartItems.push(action.payload);
        let newArray = [...state.cartItems]
        // newArray.push(action.payload)
        console.log('New', newArray);
        console.log('Slice', state.cartItems);
        saveCartToLocalStorage(newArray);
      } else {
        toast.error('Course already in cart!', {
          transition: Bounce
        })
        console.log('Item already in cart');
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.course_id !== action.payload);
      console.log("removeFromCart",action.payload);
      saveCartToLocalStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

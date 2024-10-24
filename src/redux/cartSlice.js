import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartCount: localStorage.getItem('cartCount')
    ? JSON.parse(localStorage.getItem('cartCount'))
    : 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.cartCount += 1;
      localStorage.setItem('cartCount', JSON.stringify(state.cartCount));
    },
    decrement: (state) => {
      if (state.cartCount > 0) {
        state.cartCount -= 1;
        localStorage.setItem('cartCount', JSON.stringify(state.cartCount));
      }
    },
    reset: (state) => {
      state.cartCount = 0;
      localStorage.setItem('cartCount', JSON.stringify(state.cartCount));
    },
  },
});

export const { increment, decrement, reset } = cartSlice.actions;

export default cartSlice.reducer;

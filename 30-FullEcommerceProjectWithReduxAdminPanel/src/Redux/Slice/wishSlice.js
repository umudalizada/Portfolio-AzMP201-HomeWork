import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishArray:JSON.parse(localStorage.getItem("wishArray")) || [],
};

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishlist: (state, action) => {
        const index = state.wishArray.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index === -1) {
          state.wishArray.push(action.payload);
        } else {
          state.wishArray = state.wishArray.filter(
            (product) => product.id !== action.payload.id
          );
        }
        localStorage.setItem('wishArray', JSON.stringify(state.wishArray));
      },
      
      
      removeWish: (state, action) => {
        state.wishArray = state.wishArray.filter((product) => product.id !== action.payload);
        localStorage.setItem('wishArray', JSON.stringify(state.wishArray));
      },
      
  },
});

export const { addWishlist,removeWish } = wishSlice.actions;

export default wishSlice.reducer;
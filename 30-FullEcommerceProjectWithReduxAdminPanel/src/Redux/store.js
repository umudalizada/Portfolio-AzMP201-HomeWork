import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './Slice/basketSlice'
import wishSlice from './Slice/wishSlice'


export const store = configureStore({
  reducer: {
    basket:basketSlice,
    wishlist:wishSlice
  },
})
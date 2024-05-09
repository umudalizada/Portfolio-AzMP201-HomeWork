import { configureStore } from '@reduxjs/toolkit'
import BasketFavoriteSlice from './Slice/BasketFavoriteSlice'

export const store = configureStore({
  reducer: {
    cards:BasketFavoriteSlice
  },
})
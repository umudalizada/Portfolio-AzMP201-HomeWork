import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
  favorite: []
}

export const BasketFavoriteSlice = createSlice({
  name: 'basketFavorite',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    }
  },
})

export const { addBasket, addFavorite } = BasketFavoriteSlice.actions

export default BasketFavoriteSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../services/pokeman'
import { UsersPanel } from '../services/UsersPanel'
import { setupListeners } from '@reduxjs/toolkit/query';
import searchReducer from "../Redux/Slice/searchSlice"
import deleteReducer from "../Redux/Slice/searchSlice"


export const store = configureStore({
  reducer: {

    search : searchReducer,
    delete : deleteReducer,

    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [UsersPanel.reducerPath]: UsersPanel.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, UsersPanel.middleware)
})

setupListeners(store.dispatch);
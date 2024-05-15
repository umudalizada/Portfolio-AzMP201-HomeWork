import { configureStore } from '@reduxjs/toolkit'
import { UsersPanel } from '../services/UsersPanel'
import { setupListeners } from '@reduxjs/toolkit/query';
import deleteReducer from "./Slice/deleteSlice"


export const store = configureStore({
  reducer: {

    [UsersPanel.reducerPath]: UsersPanel.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( UsersPanel.middleware)
})

setupListeners(store.dispatch);
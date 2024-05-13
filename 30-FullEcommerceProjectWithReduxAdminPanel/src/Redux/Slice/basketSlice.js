import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bskt:JSON.parse(localStorage.getItem("basketarray")) || [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const elem = state.bskt.findIndex(
        (product) => product.id === action.payload.id
      );
      if (elem !== -1) {
        state.bskt[elem].count += 1;
      } else {
        state.bskt.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem('basketarray', JSON.stringify(state.bskt));
    },
    removeBasket: (state, action) => {
      state.bskt = state.bskt.filter((product) => product.id !== action.payload);
      localStorage.setItem('basketarray', JSON.stringify(state.bskt));
    },
    decrementBasket: (state, action) => {
      const product = state.bskt.find((item) => item.id === action.payload);
      if (product) {
        if (product.count > 1) {
          product.count -= 1;
          localStorage.setItem('basketarray', JSON.stringify(state.bskt));
        } else {
          state.bskt = state.bskt.filter((item) => item.id !== action.payload);
          localStorage.setItem('basketarray', JSON.stringify(state.bskt));
        }
      }
    },
    incrementBasket: (state, action) => {
      const product = state.bskt.find((item) => item.id === action.payload);
      if (product) {
        product.count += 1;
        localStorage.setItem('basketarray', JSON.stringify(state.bskt));
      }
    },
    DeleteAll: (state) => {
      state.bskt = [];
      localStorage.setItem('basketarray', JSON.stringify([]));
    },
  },
});

export const { addBasket, removeBasket, decrementBasket, incrementBasket, DeleteAll } = basketSlice.actions;

export default basketSlice.reducer;
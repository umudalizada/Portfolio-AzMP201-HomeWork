import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: "",
  allUsers: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    inpVal: (state, action) => {
      state.input = action.payload;
    },
    search: (state,action) => {
      state.allUsers = action.payload.filter(user =>
        user.name.toUpperCase().includes(state.input.toUpperCase())
      );
    },
    usersArr: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { inpVal, search, usersArr } = searchSlice.actions;

export default searchSlice.reducer;
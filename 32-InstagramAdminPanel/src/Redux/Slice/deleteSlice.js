import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  delUser: [],
};



export const searchSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
        let delFunc=
      state.allUsers = action.payload;
    },

  },
});

export const { deleteUser } = searchSlice.actions;

export default searchSlice.reducer;
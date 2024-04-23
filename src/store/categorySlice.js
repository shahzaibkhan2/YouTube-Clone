import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "setCategory",
  initialState: { category: 0 },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;

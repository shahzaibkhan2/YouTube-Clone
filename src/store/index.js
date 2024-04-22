import { configureStore, createSlice } from "@reduxjs/toolkit";
import feedAreaSlice from "./feedAreaSlice";

const categorySlice = createSlice({
  name: "setCategory",
  initialState: { category: 0 },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

const mainStore = configureStore({
  reducer: {
    feedArea: feedAreaSlice.reducer,
    setCategory: categorySlice.reducer,
  },
});

export const categoryActions = categorySlice.actions;

export default mainStore;

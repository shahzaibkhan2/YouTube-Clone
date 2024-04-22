import { createSlice } from "@reduxjs/toolkit";

const feedAreaSlice = createSlice({
  name: "feedArea",
  initialState: { feedData: [] },
  reducers: {
    updateData: (state, action) => {
      state.feedData = action.payload;
    },
  },
});

export const feedAreaAction = feedAreaSlice.actions;

export default feedAreaSlice;

import { createSlice } from "@reduxjs/toolkit";

const recommendDataSlice = createSlice({
  name: "setRecommendData",
  initialState: { recommendData: [] },
  reducers: {
    updateRecommendData: (state, action) => {
      state.recommendData = action.payload;
    },
  },
});

export const recommendDataActions = recommendDataSlice.actions;

export default recommendDataSlice;

import { createSlice } from "@reduxjs/toolkit";

const commentDataSlice = createSlice({
  name: "setCommentData",
  initialState: { commentData: [] },
  reducers: {
    updateCommentData: (state, action) => {
      state.commentData = action.payload;
    },
  },
});

export const commentDataActions = commentDataSlice.actions;

export default commentDataSlice;

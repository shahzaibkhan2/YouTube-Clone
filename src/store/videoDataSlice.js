import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
  name: "setVideoData",
  initialState: { videoData: null },
  reducers: {
    updateVideoData: (state, action) => {
      state.videoData = action.payload;
    },
  },
});

export const videoDataActions = videoDataSlice.actions;
export default videoDataSlice;

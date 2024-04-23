import { configureStore, createSlice } from "@reduxjs/toolkit";
import feedAreaSlice from "./feedAreaSlice";
import categorySlice from "./categorySlice";
import videoDataSlice from "./videoDataSlice";
import channelDataSlice from "./channelDataSlice";
import commentDataSlice from "./commentDataSlice";
import recommendDataSlice from "./recommendDataSlice";

const mainStore = configureStore({
  reducer: {
    feedArea: feedAreaSlice.reducer,
    setCategory: categorySlice.reducer,
    setVideoData: videoDataSlice.reducer,
    setChannelData: channelDataSlice.reducer,
    setCommentData: commentDataSlice.reducer,
    setRecommendData: recommendDataSlice.reducer,
  },
});

export const recommendDataActions = recommendDataSlice.actions;

export default mainStore;

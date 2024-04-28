import { configureStore } from "@reduxjs/toolkit";
import feedAreaSlice from "./feedAreaSlice";
import categorySlice from "./categorySlice";
import videoDataSlice from "./videoDataSlice";
import channelDataSlice from "./channelDataSlice";
import commentDataSlice from "./commentDataSlice";
import recommendDataSlice from "./recommendDataSlice";
import sidebarSlice from "./sidebarSlice";

const mainStore = configureStore({
  reducer: {
    feedArea: feedAreaSlice.reducer,
    setCategory: categorySlice.reducer,
    setVideoData: videoDataSlice.reducer,
    setChannelData: channelDataSlice.reducer,
    setCommentData: commentDataSlice.reducer,
    setRecommendData: recommendDataSlice.reducer,
    setSidebarSlice: sidebarSlice.reducer,
  },
});

export const recommendDataActions = recommendDataSlice.actions;

export default mainStore;

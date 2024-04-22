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

const videoDataSlice = createSlice({
  name: "setVideoData",
  initialState: { videoData: null },
  reducers: {
    updateVideoData: (state, action) => {
      state.videoData = action.payload;
    },
  },
});

const channelDataSlice = createSlice({
  name: "setChannelData",
  initialState: { channelData: null },
  reducers: {
    updateChannelData: (state, action) => {
      state.channelData = action.payload;
    },
  },
});

const commentDataSlice = createSlice({
  name: "setCommentData",
  initialState: { commentData: [] },
  reducers: {
    updateCommentData: (state, action) => {
      state.commentData = action.payload;
    },
  },
});

const recommendDataSlice = createSlice({
  name: "setRecommendData",
  initialState: { recommendData: [] },
  reducers: {
    updateRecommendData: (state, action) => {
      state.recommendData = action.payload;
    },
  },
});

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

export const categoryActions = categorySlice.actions;
export const videoDataActions = videoDataSlice.actions;
export const channelDataActions = channelDataSlice.actions;
export const commentDataActions = commentDataSlice.actions;
export const recommendDataActions = recommendDataSlice.actions;

export default mainStore;

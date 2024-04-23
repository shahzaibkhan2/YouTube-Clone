import { createSlice } from "@reduxjs/toolkit";

const channelDataSlice = createSlice({
  name: "setChannelData",
  initialState: { channelData: null },
  reducers: {
    updateChannelData: (state, action) => {
      state.channelData = action.payload;
    },
  },
});

export const channelDataActions = channelDataSlice.actions;

export default channelDataSlice;

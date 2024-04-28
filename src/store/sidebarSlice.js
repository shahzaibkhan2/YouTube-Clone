import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "setSidebarSlice",
  initialState: { sidebar: true },
  reducers: {
    setSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;
export default sidebarSlice;

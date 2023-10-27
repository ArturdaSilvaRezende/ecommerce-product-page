import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface toggleState {
  isToggleHeader: boolean;
  isToggleModal: boolean;
}

const initialState = {
  isToggleHeader: false,
  isToggleModal: false,
} as toggleState;

export const isToggleHeaderSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    isToggleHeader: (state) => {
      state.isToggleHeader = !state.isToggleHeader;
    },
    isToggleModal: (state, action: PayloadAction<boolean>) => {
      state.isToggleModal = !action.payload;
    },
    isResizeMenuHeader: (state, action: PayloadAction<boolean>) => {
      state.isToggleHeader = action.payload;
    },
  },
});

export const { isToggleHeader, isResizeMenuHeader, isToggleModal } =
  isToggleHeaderSlice.actions;
export default isToggleHeaderSlice.reducer;

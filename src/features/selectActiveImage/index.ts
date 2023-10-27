import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ActiveImage {
  activeImage: number;
}

const initialState = {
  activeImage: 1,
} as ActiveImage;

export const selectActiveImageSlice = createSlice({
  name: "activeImage",
  initialState,
  reducers: {
    activeImage: (state, action: PayloadAction<number>) => {
      state.activeImage = action.payload;
    },
    handlePrevImage: (state) => {
      if (state.activeImage > 0) {
        state.activeImage -= 1;
      }
    },
    handleNextImage: (state, action: PayloadAction<number>) => {
      if (state.activeImage < action.payload) {
        state.activeImage += 1;
      }
    },
  },
});

export const { activeImage, handlePrevImage, handleNextImage } =
  selectActiveImageSlice.actions;
export default selectActiveImageSlice.reducer;

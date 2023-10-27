import { configureStore } from "@reduxjs/toolkit";
import isToggleHeaderSlice from "../features/toggles";
import selectActiveImageSlice from "../features/selectActiveImage";
import handleCartSlice from "../features/handleCart";

export const store = configureStore({
  reducer: {
    toggle: isToggleHeaderSlice,
    activeImage: selectActiveImageSlice,
    handleCart: handleCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

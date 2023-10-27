import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productList {
  id: number;
  productImage: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
}

interface productState {
  product: productList[];
}

const initialState: productState = {
  product: [],
};

export const handleCartSlice = createSlice({
  name: "handleCart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<productList[]>) => {
      state.product.length >= 1 ? null : state.product.push(...action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIdToRemove = action.payload;
      state.product = state.product.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
    increaseQuantity: (state) => {
      state.product.map((state) =>
        state.productQuantity === 5 ? null : (state.productQuantity += 1)
      );
    },
    decreaseQuantity: (state) => {
      state.product.map((state) =>
        state.productQuantity <= 1 ? null : (state.productQuantity -= 1)
      );
    },
  },
});

export const { addCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  handleCartSlice.actions;
export default handleCartSlice.reducer;

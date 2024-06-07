import { ICartState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsWithItems from "./act/actGetProductsWithItems";

const initialState: ICartState = {
  items: {},
  productsInfo: [],
  loading: "idle",
  error: null
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items[action.payload] = (state.items[action.payload] || 0) + 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsWithItems.pending, (state) => {
      state.loading = "pending";
      state.error = null
    }),

    builder.addCase(actGetProductsWithItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsInfo = action.payload
    }),

    builder.addCase(actGetProductsWithItems.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload
      }
    })
  }
})

export { actGetProductsWithItems }

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
import { ICartState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICartState = {
  items: {},
  productsInfo: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items[action.payload] = (state.items[action.payload] || 0) + 1;
    }
  }
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
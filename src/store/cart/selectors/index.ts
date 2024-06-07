import { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const getTotalQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((total, val) => {
      return (total += val);
    }, 0);

    return totalQuantity;
  }
);

export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.productsInfo,
  (productsInfo) => {
    const totalPrice = productsInfo.reduce((total, product) => {
      return (total += product.price);
    }, 0);

    return totalPrice;
  }
);

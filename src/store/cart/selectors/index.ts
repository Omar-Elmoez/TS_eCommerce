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
  (state: RootState) => state.cart,
  ({productsInfo, items}) => {
    const productsWithQuantity = productsInfo.map((product) => {
      return {...product, quantity: items[product.id]}
    })
    const totalPrice = productsWithQuantity.reduce((total, product) => {
      return (total += (product.price * product.quantity));
    }, 0);

    return totalPrice;
  }
);

import { CartItemList, CartSubtotalPrice } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { actGetProductsWithItems, updateQuantity } from "@/store/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsInfo, items } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsWithItems());
  }, [dispatch]);

  const productsWithQuantity = productsInfo.map((product) => {
    return { ...product, quantity: items[product.id] };
  });

  const changeQuantityHandler = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <Loading status={loading} error={error}>
      <CartItemList products={productsWithQuantity} onChangeQuantity={changeQuantityHandler} />
      <CartSubtotalPrice />
    </Loading>
  );
};

export default Cart;

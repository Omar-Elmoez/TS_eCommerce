import { CartItem, CartSubtotalPrice } from "@/components/eCommerce"
import { actGetProductsWithItems } from "@/store/cart/CartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useEffect } from "react"

const Cart = () => {
  const dispatch = useAppDispatch()
  const productsInfo = useAppSelector((state) => state.cart.productsInfo);
  
  useEffect(() => {
    dispatch(actGetProductsWithItems())
  }, [dispatch])

  return <>
    {productsInfo.map((product) => <CartItem key={product.id} {...product} />)}
    <CartSubtotalPrice />
  </>
}

export default Cart
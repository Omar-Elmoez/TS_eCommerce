import { useAppSelector } from "@/store/hooks";
import styles from "./styles.module.css";
import { getTotalPrice } from "@/store/cart/selectors";

const CartSubtotalPrice = () => {

  const totalPrice = useAppSelector(getTotalPrice);

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{totalPrice.toFixed(2)} EGP</span>
    </div>
  )
}

export default CartSubtotalPrice
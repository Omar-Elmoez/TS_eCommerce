import Logo from "@/assets/svg/cart.svg?react"

import styles from "./styles.module.css";
import { useAppSelector } from "@/store/hooks";
import { getTotalQuantity } from "@/store/cart/selectors";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {

  const total = useAppSelector(getTotalQuantity)
  
  return (
    <div className={basketContainer}>
      <Logo title="Cart icon" />
      <div className={basketQuantity}>{total}</div>
    </div>
  );
}

export default HeaderBasket;
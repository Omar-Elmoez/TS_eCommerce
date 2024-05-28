import Logo from "@/assets/svg/cart.svg?react";

import styles from "./styles.module.css";
import { useAppSelector } from "@/store/hooks";
import { getTotalQuantity } from "@/store/cart/selectors";
import { useEffect, useState } from "react";

const { basketContainer, basketQuantity, basketpumping } = styles;

const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);

  const total = useAppSelector(getTotalQuantity);

  useEffect(() => {

    if (!total) return;
    setIsAnimate(true);

    const bounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(bounce);
  }, [total]);

  return (
    <div className={basketContainer}>
      <Logo title="Cart icon" />
      <div className={`${basketQuantity} ${isAnimate ? basketpumping : ""}`}>{total}</div>
    </div>
  );
};

export default HeaderBasket;

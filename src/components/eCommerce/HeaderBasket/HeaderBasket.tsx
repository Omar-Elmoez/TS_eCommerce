import Logo from "@/assets/svg/cart.svg?react";

import styles from "./styles.module.css";
import { useAppSelector } from "@/store/hooks";
import { getTotalQuantity } from "@/store/cart/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { basketContainer, basketQuantity, basketpumping } = styles;

const HeaderBasket = () => {
  const navigate = useNavigate();
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
    <div className={basketContainer} onClick={() => navigate("/cart")}>
      <Logo title="Cart icon" />
      <div className={`${basketQuantity} ${isAnimate ? basketpumping : ""}`}>{total}</div>
    </div>
  );
};

export default HeaderBasket;

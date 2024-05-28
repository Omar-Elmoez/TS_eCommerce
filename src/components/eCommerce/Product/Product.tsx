import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { IProduct } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/CartSlice";
import { useEffect, useState } from "react";
const { product, productImg } = styles;

const Product = ({ id, title, price, img }: IProduct) => {
  const dispatch = useAppDispatch();

  const [btnClickedNum, setBtnClickedNum] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(true);

    const debounce = setTimeout(() => {
      setIsDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [btnClickedNum]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setBtnClickedNum((prev) => prev + 1);
  };

  return (
    <article className={product}>
      <header className={productImg}>
        <img src={img} alt={title} />
      </header>
      <section>
        <h2>{title}</h2>
        <h3>{price} EGP</h3>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={addToCartHandler}
          disabled={isDisabled}
        >
          {isDisabled ? <><Spinner animation="border" size="sm" /> Loading....</> : "Add to cart"}
        </Button>
      </section>
    </article>
  );
};

export default Product;

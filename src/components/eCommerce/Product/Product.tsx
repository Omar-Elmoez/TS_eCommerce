import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { IProduct } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/CartSlice";
import { memo, useEffect, useState } from "react";
const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, title, price, img, max, quantity }: IProduct) => {
  const dispatch = useAppDispatch();

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setIsDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isDisabled]);

  const remainingitems = max - (quantity ?? 0);

  const availablityMsg =
    remainingitems <= 0
      ? "You reach your limit"
      : `You can buy ${max - (quantity ?? 0)}`;

  const reachToMax = remainingitems === 0 ? true : false;

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsDisabled(true);
  };

  return (
    <article className={product}>
      <header className={productImg}>
        <img src={img} alt={title} />
      </header>
      <section>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={maximumNotice}>{availablityMsg}</p>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={addToCartHandler}
          disabled={isDisabled || reachToMax}
        >
          {isDisabled ? (
            <>
              <Spinner animation="border" size="sm" /> Loading....
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
      </section>
    </article>
  );
});

export default Product;

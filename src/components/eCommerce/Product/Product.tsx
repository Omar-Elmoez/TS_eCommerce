import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { IProduct } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/CartSlice";
const { product, productImg } = styles;

const Product = ({ id, title, price, img }: IProduct) => {

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id))
  }

  return (
    <article className={product}>
      <header className={productImg}>
        <img src={img} alt={title} />
      </header>
      <section>
        <h2>{title}</h2>
        <h3>{price} EGP</h3>
        <Button variant="info" style={{ color: "white" }} onClick={addToCartHandler}>
          Add to cart
        </Button>
      </section>
    </article>
  );
};

export default Product;

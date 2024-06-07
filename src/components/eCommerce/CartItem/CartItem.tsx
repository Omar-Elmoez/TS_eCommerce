import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { IProduct } from "@/types";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

const CartItem = ({img, title, price}: IProduct) => {
  return (
    <article className={cartItem}>
      <div className={product}>
        <header className={productImg}>
          <img
            src={img}
            alt={title}
          />
        </header>
        <section className={productInfo}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)} EGP</h3>
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
          >
            Remove
          </Button>
        </section>
      </div>

      <section className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
      </section>
    </article>
  );
};

export default CartItem;
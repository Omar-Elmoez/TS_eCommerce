import { TCartItemListProps } from "@/types";
import CartItem from "../CartItem/CartItem";

const CartItemList = ({ products, onChangeQuantity }: TCartItemListProps) => {
  const renderList = products.map((product) => (
    <CartItem
      key={product.id}
      {...product}
      onChangeQuantity={onChangeQuantity}
    />
  ));

  return <>{renderList}</>;
};

export default CartItemList;

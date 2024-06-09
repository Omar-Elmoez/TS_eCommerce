import { IProduct } from "@/types";

interface ICartItemProps extends IProduct {
  onChangeQuantity: (id: number, quantity: number) => void;
}

export default ICartItemProps;

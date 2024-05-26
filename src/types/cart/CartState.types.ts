import IProduct from "../products/product.types";

interface ICartState {
  items: {[key: number]: number};
  productsInfo: IProduct[],
}

export default ICartState
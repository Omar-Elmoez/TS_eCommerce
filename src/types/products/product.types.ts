interface IProduct {
  id: number,
  title: string,
  price: string,
  cat_prefix: string,
  img: string,
  quantity?: number
}

export default IProduct
export type Product = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity?: number;
  category: string;
};

export type CartData = {
  items: Product[];
  totalPrice: number;
};

export type Props = {
  cartData: CartData;
  setCartData: React.Dispatch<React.SetStateAction<CartData>>;
};

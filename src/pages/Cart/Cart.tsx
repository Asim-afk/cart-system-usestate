import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { Product, Props } from "../../types";
import "./cart.css";

function Cart({ cartData, setCartData }: Props) {
  function handleAddQuantity(item?: Product) {
    if (item) {
      console.log(item);
      setCartData((prev) => ({
        items: prev.items?.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
            : cartItem
        ),
        totalPrice: cartData.totalPrice + item.price,
      }));
    }
  }
  function handleDecreaseQuantity(item?: Product) {
    if (item) {
      if (item.quantity === 1) {
        removeFromCart(item);
        return;
      }
      setCartData((prev) => ({
        items: prev.items?.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 0) - 1 }
            : cartItem
        ),
        totalPrice: cartData.totalPrice - item.price,
      }));
    }
  }
  function removeFromCart(item: Product) {
    setCartData((prev) => ({
      items: prev.items?.filter((cartItem) => cartItem.id !== item.id),
      totalPrice: cartData.totalPrice - item.price * (item.quantity || 0),
    }));
  }

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartData.items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img src={item.img} alt={item.name} width="50" />
              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td>
                <div className="food-item-counter">
                  <button
                    onClick={() => {
                      handleDecreaseQuantity(item);
                    }}
                  >
                    <IoIosRemoveCircleOutline size={20} />
                  </button>
                  <button
                    onClick={() => {
                      handleAddQuantity(item);
                    }}
                  >
                    <IoIosAddCircleOutline size={20} />
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    Remove item
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cartData.items.length === 0 && (
        <div className="empty-cart">
          Cart empty. Please Select some items...
        </div>
      )}
      <br />
      <div>Total Price: ${cartData.totalPrice}</div>
    </div>
  );
}

export default Cart;

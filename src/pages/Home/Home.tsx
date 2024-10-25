import { Product, Props } from "../../types";
import { categoryData, productData } from "../../data/ecommerceData";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { useState } from "react";
import "./home.css";
function Home({ cartData, setCartData }: Props) {
  const [filterText, setFilterText] = useState("");
  function cartHasData(item: Product) {
    return cartData.items?.find((cartItem) => cartItem.id === item.id);
  }
  function dataInCart(item: Product) {
    return cartData.items?.find((cartItem) => cartItem.id === item.id);
  }
  function handleAddToCart(item: Product) {
    setCartData((prev) => ({
      items: [...(prev.items || []), { ...item, quantity: 1 }],
      totalPrice: cartData.totalPrice + item.price,
    }));
  }
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
      totalPrice:
        cartData.totalPrice - item.price * (dataInCart(item)?.quantity || 0),
    }));
  }

  return (
    <div>
      <select
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
        className="category-select"
      >
        <option value="">All</option>
        {categoryData.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="product-container">
        {productData
          .filter((item) =>
            filterText === "" ? true : item.category === filterText
          )
          .map((item) => {
            return (
              <div className="product" key={item.id}>
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <h4>Price: ${item.price}</h4>
                <h4>Category: {item.category}</h4>
                {!cartHasData(item) ? (
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                  >
                    Add to cart
                  </button>
                ) : (
                  <div className="food-item-counter">
                    <button
                      onClick={() => {
                        handleDecreaseQuantity(dataInCart(item));
                      }}
                    >
                      <IoIosRemoveCircleOutline size={20} />
                    </button>
                    <p>{dataInCart(item)?.quantity}</p>
                    <button
                      onClick={() => {
                        handleAddQuantity(dataInCart(item));
                      }}
                    >
                      <IoIosAddCircleOutline size={20} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;

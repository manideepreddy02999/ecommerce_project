import React from "react";

import { useSelector } from "react-redux";

import { removeFromCart } from "../redux/cartSlice";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const dispatch = useDispatch();
  console.log("Cart items:", cartItems);


  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      Cart
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.productName}</h3>
          <img src={item.productImageUrl} alt={item.productName} />
          <p>Price: {item.productPrice}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove from Cart
          </button>
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

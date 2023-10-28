import React from "react";
import CartContext from "./cartContext";
const CartProvider = (props) => {
  const increment = (item) => {};

  const decrement = (id) => {};

  const cartContext = {
    data: [],
    increment: increment,
    decrement: decrement
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

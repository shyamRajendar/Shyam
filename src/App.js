import React from "react";
import { Dashboard } from "./Dashboard";
//import { CartContext } from "./cartContext";
import CartProvider from "./cartContextProvider";
export default function App() {
  //console.log("cartContext", CartContext);
  return (
    <CartProvider>
      <Dashboard />
    </CartProvider>
  );
}

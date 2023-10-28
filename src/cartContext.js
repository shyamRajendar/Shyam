import { createContext } from "react";

const CartContext = createContext({
  data: [
    {
      id: "1",
      pName: "Headphone",
      price: "100$",
      count: 0
    },
    {
      id: "2",
      pName: "Laptop",
      price: "100$",
      count: 0
    },
    {
      id: "3",
      pName: "Computer",
      price: "100$",
      count: 0
    }
  ],
  increment: (val) => {},
  decrement: (val) => {}
});

export default CartContext;

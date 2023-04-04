import React from "react";
import CartHeader from "../../layouts/CartHeader";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";
const Basket = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <CartHeader />
      <ShoppingCart items={items} />
    </div>
  );
};

export default Basket;

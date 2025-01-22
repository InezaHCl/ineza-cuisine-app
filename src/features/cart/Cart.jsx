import React from "react";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const cart = useSelector(getCart);
  console.log(cart);

  if (!cart) return <EmptyCart />;

  return <div>Cart</div>;
}

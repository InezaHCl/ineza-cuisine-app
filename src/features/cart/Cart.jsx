import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  console.log(cart);

  if (cart.length <= 0) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/app/menu">&larr; Back to menu</LinkButton>

      <h2 className="mb-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/app/order/new" type="primary">
          Order pizzas
        </Button>
        {/* Clear cart */}
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          clear cart
        </Button>
      </div>
    </div>
  );
}

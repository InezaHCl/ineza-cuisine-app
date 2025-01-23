import React from "react";
import LinkButton from "../../ui/LinkButton";

export default function EmptyCart() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <h2 className="mb-2 text-2xl font-semibold">Your Cart is Empty</h2>
      <p className="mb-4 text-gray-500">
        Looks like you haven't added anything to your cart yet.
      </p>

      <LinkButton to="/app/menu">Browser Your Pizza</LinkButton>
    </div>
  );
}

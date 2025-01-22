import React from "react";
import Button from "../../ui/Button";

export default function EmptyCart() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-2 text-2xl font-semibold">Your Cart is Empty</h2>
      <p className="mb-4 text-gray-500">
        Looks like you haven't added anything to your cart yet.
      </p>

      <Button to="/app/menu" type="primary">
        Browser Your Pizza
      </Button>
    </div>
  );
}

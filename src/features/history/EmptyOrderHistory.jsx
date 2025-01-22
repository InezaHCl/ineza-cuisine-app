import React from "react";

export default function EmptyOrderHistory() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-2 text-2xl font-semibold">
        Your Order History is Empty
      </h2>
      <p className="mb-4 text-gray-500">
        Looks like you haven't placed any orders yet.
      </p>

      <Button to="/app/menu" type="primary">
        Browser Your Pizza
      </Button>
    </div>
  );
}

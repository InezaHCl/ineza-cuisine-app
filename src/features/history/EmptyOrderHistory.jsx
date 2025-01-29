import React from "react";
import LinkButton from "../../ui/LinkButton";

export default function EmptyOrderHistory() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <h2 className="mb-2 text-2xl font-semibold">
        Your Order History is Empty
      </h2>
      <p className="mb-4 text-gray-500">
        Looks like you haven't placed any orders yet.
      </p>

      <LinkButton to="/menu">Browser Your Pizza</LinkButton>
    </div>
  );
}

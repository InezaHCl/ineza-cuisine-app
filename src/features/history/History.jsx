import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import EmptyOrderHistory from "./EmptyOrderHistory";

export default function History() {
  // const cart = useSelector(getCart);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orderHistory") || "[]",
    );
    // console.log("OrderStorage:", savedOrders);
    setOrders(savedOrders);
  }, []);

  // Clear History
  const handleClearHistory = () => {
    if (
      window.confirm(
        "Are you sure you want to delete all order history? This action cannot be undone.",
      )
    ) {
      localStorage.removeItem("orderHistory");
      setOrders([]);
    }
  };

  // TODO
  if (orders.length === 0) return <EmptyOrderHistory />;

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-8 text-xl font-semibold">Order History</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Order #{order.id}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    // hour: "2-digit",
                    // minute: "2-digit",
                  })}
                </p>
              </div>
              <span className="rounded-full bg-orange-600 px-3 py-1 text-sm font-medium text-stone-50">
                Total: ${order.total.toFixed(2)}
              </span>
            </div>

            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ${item.unitPrice.toFixed(2)}
                      </p>
                    </div>
                    <span className="font-medium text-gray-700">
                      ${item.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleClearHistory}
          className="rounded-full bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          Clear History
        </button>
      </div>
    </div>
  );
}

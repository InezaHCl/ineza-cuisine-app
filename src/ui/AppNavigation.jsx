import React from "react";
import { Link } from "react-router";
import { House, List, ShoppingCart, NotepadText } from "lucide-react";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

export default function AppNavigation() {
  const currentItemsCart = useSelector(getTotalCartQuantity);

  return (
    <div className="border-t border-stone-300 px-4 py-3">
      <ul className="flex items-center justify-between lg:justify-evenly">
        <li>
          <Link
            to="/app"
            className="flex flex-col items-center text-sm hover:cursor-pointer hover:transition-all hover:duration-300"
          >
            <House
              className="rounded-full bg-orange-600 p-3 text-white hover:bg-orange-700"
              width={50}
              height={50}
            />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/app/menu"
            className="flex flex-col items-center text-sm hover:cursor-pointer hover:transition-all hover:duration-300"
          >
            <List
              className="rounded-full bg-orange-600 p-3 text-white hover:bg-orange-700"
              width={50}
              height={50}
            />
            Menu
          </Link>
        </li>

        <li>
          <Link
            to="/app/cart"
            className="flex flex-col items-center text-sm hover:cursor-pointer hover:transition-all hover:duration-300"
          >
            {/* <ShoppingCart
              className="rounded-full bg-orange-600 p-3 text-white hover:bg-orange-700"
              width={50}
              height={50}
            />
            Cart */}
            <div className="relative">
              <ShoppingCart
                className="rounded-full bg-orange-600 p-3 text-white hover:bg-orange-700"
                width={50}
                height={50}
              />
              {currentItemsCart > 0 && (
                <span className="absolute -top-3 right-0 flex h-6 w-6 items-center justify-center rounded-full border border-orange-600 bg-white text-xs font-bold text-orange-500 shadow-inner">
                  {currentItemsCart}
                </span>
              )}
            </div>
            Cart
          </Link>
        </li>

        <li>
          <Link
            to="/app/history"
            className="flex flex-col items-center text-sm hover:cursor-pointer hover:transition-all hover:duration-300"
          >
            <NotepadText
              className="rounded-full bg-orange-600 p-3 text-white hover:bg-orange-700"
              width={50}
              height={50}
            />
            History
          </Link>
        </li>
      </ul>
    </div>
  );
}

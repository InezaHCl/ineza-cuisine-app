import React from "react";
import { Link } from "react-router";
import { House, List, ShoppingCart, NotepadText } from "lucide-react";

export default function AppNavigation() {
  return (
    <div className="border-t border-stone-300 px-4 py-3">
      <ul className="flex items-center justify-between lg:justify-evenly">
        <li>
          <Link
            to="/"
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
            to="/menu"
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
            to="/cart"
            className="flex flex-col items-center text-sm hover:cursor-pointer hover:transition-all hover:duration-300"
          >
            <ShoppingCart
              className="rounded-full bg-orange-600 p-3 text-white hover:bg-orange-700"
              width={50}
              height={50}
            />
            Cart
          </Link>
        </li>

        <li>
          <Link
            to="/history"
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

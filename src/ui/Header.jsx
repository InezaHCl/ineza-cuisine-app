import React from "react";
import { Link } from "react-router-dom";
import USername from "../features/user/USername";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-orange-600 px-4 py-3 text-orange-50">
      <Link to="/" className="font-bold tracking-wide">
        InezaPizza
      </Link>

      <div className="uppercase">
        <USername />
      </div>
    </header>
  );
}

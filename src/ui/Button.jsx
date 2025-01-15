import React from "react";
import { Link } from "react-router";

export default function Button({ to, label }) {
  return (
    <Link
      to={to}
      className="rounded-full bg-white px-4 py-3 text-sm font-semibold uppercase text-orange-400 transition-all duration-300 hover:bg-orange-400 hover:text-orange-50 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
    >
      {label}
    </Link>
  );
}

import React from "react";
import { Link } from "react-router";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "rounded-full bg-orange-400  text-sm font-semibold uppercase text-slate-800 transition-all duration-300 hover:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      base +
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-slate-800 transition-colors duration-300 hover:bg-stone-400 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed text-stone-400 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

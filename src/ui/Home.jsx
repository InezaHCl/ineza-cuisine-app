import React from "react";
import CreateUser from "../features/user/CreateUser";

export default function Home() {
  return (
    <div className="my-10 px-4 text-center">
      <h1 className="mb-8 text-xl font-semibold text-slate-800 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-orange-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

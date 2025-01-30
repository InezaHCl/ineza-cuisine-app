import React from "react";
import Button from "./Button";

export default function Welcome() {
  return (
    <div className="flex h-dvh items-center justify-center bg-orange-600 text-white">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold tracking-wide">
          Ineza
          <span>Pizza</span>
        </h1>

        <h2 className="text-2xl">Fast Delivery Pizza App 📱</h2>

        <p className="text-center text-xl font-semibold capitalize">
          Order Delicious Pizza{" "}
        </p>

        <div>
          <img src="./../../assets/takeAway.png" width="250" />
        </div>

        <div className="">
          <Button to="/home" type="primary">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}

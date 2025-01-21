import React from "react";
import { useSelector } from "react-redux";

export default function USername() {
  const username = useSelector((state) => state.user.username);

  return <div className="text-sm font-semibold md:text-lg">{username}</div>;
}

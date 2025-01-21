import React from "react";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      <Trash2 width={25} height={23} className="text-orange-50" />
    </Button>
  );
}

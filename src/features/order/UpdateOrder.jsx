import React from "react";
import { useFetcher } from "react-router";
import Button from "../../ui/Button";
import { updateOrder } from "../services/apiRestaurant";

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Fast Delivery (2% extra)</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}

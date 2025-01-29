import React from "react";
import { useRouteError } from "react-router";
import LinkButton from "./LinkButton";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Something went wrong 😢</h1>
      <p className="mb-4">{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

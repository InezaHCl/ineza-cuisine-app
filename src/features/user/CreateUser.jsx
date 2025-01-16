import React, { useState } from "react";
import Button from "../../ui/Button";

export default function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    // Logic for form submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-slate-800">
        Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your Full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary" to="/app/menu">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

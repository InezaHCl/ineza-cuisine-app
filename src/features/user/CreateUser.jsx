import React, { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Logic for form submission
    if (!username) return;

    dispatch(updateName(username));
    navigate("/app/menu");
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
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

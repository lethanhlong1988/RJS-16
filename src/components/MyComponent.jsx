import React from "react";
import { useInput } from "../hooks/useInput.js";

export default function MyComponent() {
  const nameInput = useInput("");
  console.log(nameInput.value);

  return (
    <input
      type="text"
      value={nameInput.value}
      onChange={nameInput.onChange}
      placeholder="Enter your name"
    />
  );
}

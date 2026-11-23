"use client";
import { useCreateUser } from "@/mutation/useCreateUser";
import { useState } from "react";
export default function CreateUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const mutation = useCreateUser();
  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(
      { name, email },
      {
        onSuccess: () => {
          setName("");
          setEmail("");
        },
      },
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Creating..." : "Create User"}
      </button>

      {mutation.isError && <p>{mutation.error.message}</p>}

      {mutation.isSuccess && <p>User created successfully</p>}
    </form>
  );
}

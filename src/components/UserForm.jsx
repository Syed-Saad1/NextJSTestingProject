"use client";
import { createUserAction } from "@/app/action/userServerAction";
import { useActionState } from "react";
const initialState = {
  success: false,
  message: "",
};
export default function UserForm() {
  const [state, formAction, isPending] = useActionState(
    createUserAction,
    initialState,
  );
  return (
    <form action={formAction}>
      <h2>Create User</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-border outline-none "
          id="name"
          type="text"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="border-2 mt-2 border-border outline-none "
          id="email"
          type="email"
          name="email"
          required
        />
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Create User"}
      </button>
      {state.message && <p role="status">{state.message}</p>}
    </form>
  );
}

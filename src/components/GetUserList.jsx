"use client";
import { useUsers } from "@/hook/useGetUsers";
export default function GetUserList() {
  const {
    data: users = [],
    isPending,
    isError,
    error,
    isFetching,
  } = useUsers();
  if (isPending) {
    return <p>Loading users...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h2>Users</h2>
      {isFetching && <p>Refreshing...</p>}
      {users.length === 0 && <p>No users found.</p>}
      {users.data.map((user) => (
        <div className="flex" key={user._id}>
          <h3>{user.name} ---- </h3>
          <p className="ml-2"> {user.email}</p>
        </div>
      ))}
    </div>
  );
}

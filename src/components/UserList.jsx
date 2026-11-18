import UserFetch from "@/app/action/userServerAction";

export default async function UsersList() {
  const users = await UserFetch();
  console.log("Useers", users);
  return (
    <section>
      <h2>All Users ({users.length})</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id.toString()}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

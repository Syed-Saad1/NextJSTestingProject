export default function UsersList({ users }) {
  return (
    <div>
      <h2>Users List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {" "}
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

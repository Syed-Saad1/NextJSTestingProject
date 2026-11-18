// import { Suspense } from "react";
// import Users from "@/components/Users";
// import { connectDB } from "@/lib/mongodb";

// async function UsersContent() {
//   await connectDB();

//   return <Users />;
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading users...</p>}>
//       <UsersContent />
//     </Suspense>
//   );
// }

import UserForm from "@/components/UserForm";
import UsersList from "@/components/UserList";
import { Suspense } from "react";

export default function UsersPage() {
  return (
    <main>
      <h1>User Management</h1>

      <UserForm />

      <Suspense fallback={<p>Loading users...</p>}>
        <UsersList />
      </Suspense>
    </main>
  );
}

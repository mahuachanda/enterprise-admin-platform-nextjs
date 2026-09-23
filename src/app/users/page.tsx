import { users } from "@/data/users";
import Link from "next/link";
export default function Users() {
  return(
     <div>
    <h1>Users</h1>
    <p>Manage enterprise users here.</p>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

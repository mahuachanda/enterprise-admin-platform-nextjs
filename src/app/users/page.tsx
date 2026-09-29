import { users } from "@/data/users";
import Link from "next/link";
export default function Users() {
  return(
     <div>
    <h1 className="text-2xl font-bold mb-4">Users Name Lists</h1>
    <p className="text-blue-600 mb-4">Manage enterprise users here.</p>
    <ul>
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

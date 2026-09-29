import { User } from "@/data/users";
import EditUser from "@/components/EditUser";

export default function UserDetails({user}: {user: User}) {
    return (
    <>
     <h1>User Details</h1>
      
      <p>User ID : {user.id}</p>
      <p>User Name : {user.name}</p>
      <p>User Email : {user.email}</p>
      <p>User Role : {user.role}</p>
      <p>User Status : {user.status}</p>

      <EditUser/>
      </>
    )
}
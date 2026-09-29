import { users } from "@/data/users";
import {notFound} from "next/navigation";
import UserDetails from "@/components/UserDetails";

export type UserPageProps = {
    params: Promise<{
        id: string,
    }>
}

export default async function UserPage({params}: UserPageProps) {
    const {id} = await params;
    const user = users.find((user)=>user.id === Number(id));
    if(!user){
        notFound();
    }
  return (
    <div>
        <UserDetails user={user}/>
    </div>
  );
}
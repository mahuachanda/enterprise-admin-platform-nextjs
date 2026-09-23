
type UserPageProps = {
    params:{
        id:string
    }
}

export default function UserPage({params}: UserPageProps) {
    const {id} = params;
  return (
    <div>
      <h1>User Details</h1>
      <p>User ID : {id}</p>
    </div>
  );
}